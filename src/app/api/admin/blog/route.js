import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { requireRole } from '@/lib/middleware'
import { validateRequest, blogPostSchema } from '@/lib/validation'
import { slugify } from '@/lib/utils'

async function handlePOST(req) {
  try {
    const body = await req.json()
    
    const validation = await validateRequest(blogPostSchema, body)
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      )
    }

    const { title, content, excerpt, coverImage, isPublished } = validation.data
    const slug = slugify(title)

    // Check for existing slug
    const existing = await prisma.blogPost.findUnique({
      where: { slug },
    })

    if (existing) {
      return NextResponse.json(
        { error: 'A post with this title already exists' },
        { status: 409 }
      )
    }

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || content.substring(0, 200),
        coverImage,
        authorId: req.user.id,
        isPublished: isPublished || false,
        publishedAt: isPublished ? new Date() : null,
      },
    })

    return NextResponse.json(
      {
        message: 'Blog post created successfully',
        post,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Create blog post error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function handleGET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const skip = (page - 1) * limit

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        include: {
          author: {
            select: {
              firstName: true,
              lastName: true,
              role: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.blogPost.count(),
    ])

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Fetch blog posts error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const POST = requireRole(['PLATINUM', 'GOLD'])(handlePOST)
export const GET = requireRole(['PLATINUM', 'GOLD', 'SILVER'])(handleGET)
