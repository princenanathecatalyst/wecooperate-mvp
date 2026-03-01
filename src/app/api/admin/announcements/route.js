import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { requireRole } from '@/lib/middleware'
import { validateRequest, announcementSchema } from '@/lib/validation'

async function handlePOST(req) {
  try {
    const body = await req.json()
    
    const validation = await validateRequest(announcementSchema, body)
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      )
    }

    const { title, content, targetRole } = validation.data

    const announcement = await prisma.announcement.create({
      data: {
        title,
        content,
        targetRole: targetRole || null,
        authorId: req.user.id,
        isActive: true,
      },
    })

    return NextResponse.json(
      {
        message: 'Announcement created successfully',
        announcement,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Create announcement error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function handleGET(req) {
  try {
    const announcements = await prisma.announcement.findMany({
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
    })

    return NextResponse.json({ announcements })
  } catch (error) {
    console.error('Fetch announcements error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const POST = requireRole(['PLATINUM', 'GOLD', 'SILVER'])(handlePOST)
export const GET = requireRole(['PLATINUM', 'GOLD', 'SILVER'])(handleGET)
