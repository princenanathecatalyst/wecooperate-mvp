import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { requireAuth } from '@/lib/middleware'
import { validateRequest, leadershipApplicationSchema } from '@/lib/validation'

async function handlePOST(req) {
  try {
    const body = await req.json()
    
    const validation = await validateRequest(leadershipApplicationSchema, body)
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      )
    }

    const { targetRole, motivation, experience } = validation.data

    // Check if user has active subscription
    const activePayment = await prisma.payment.findFirst({
      where: {
        userId: req.user.id,
        status: 'COMPLETED',
        expiryDate: {
          gt: new Date(),
        },
      },
    })

    if (!activePayment) {
      return NextResponse.json(
        { error: 'Active subscription required to apply for leadership' },
        { status: 403 }
      )
    }

    // Check for existing pending application
    const existingApplication = await prisma.leadershipApplication.findFirst({
      where: {
        userId: req.user.id,
        status: 'PENDING',
      },
    })

    if (existingApplication) {
      return NextResponse.json(
        { error: 'You already have a pending leadership application' },
        { status: 400 }
      )
    }

    // Create application
    const application = await prisma.leadershipApplication.create({
      data: {
        userId: req.user.id,
        targetRole,
        motivation,
        experience,
        status: 'PENDING',
      },
    })

    return NextResponse.json(
      {
        message: 'Leadership application submitted successfully',
        application,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Leadership application error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function handleGET(req) {
  try {
    const applications = await prisma.leadershipApplication.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ applications })
  } catch (error) {
    console.error('Fetch applications error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const POST = requireAuth(handlePOST)
export const GET = requireAuth(handleGET)
