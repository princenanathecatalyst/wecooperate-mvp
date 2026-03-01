import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { requireRole } from '@/lib/middleware'

async function handlePATCH(req, { params }) {
  try {
    const { userId } = params
    const body = await req.json()
    const { role } = body

    if (!['MEMBER', 'SILVER', 'GOLD', 'PLATINUM'].includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role' },
        { status: 400 }
      )
    }

    // Prevent self-demotion from PLATINUM
    if (req.user.id === userId && req.user.role === 'PLATINUM' && role !== 'PLATINUM') {
      return NextResponse.json(
        { error: 'Cannot demote yourself from Platinum role' },
        { status: 403 }
      )
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: { role },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
      },
    })

    return NextResponse.json({
      message: 'User role updated successfully',
      user,
    })
  } catch (error) {
    console.error('Role update error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const PATCH = requireRole(['PLATINUM'])(handlePATCH)
