import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { requireRole } from '@/lib/middleware'

async function handleGET(req) {
  try {
    const [
      totalMembers,
      activeSubscriptions,
      totalRevenue,
      recentPayments,
      membersByRole,
      monthlyRevenue,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.payment.count({
        where: {
          status: 'COMPLETED',
          expiryDate: {
            gt: new Date(),
          },
        },
      }),
      prisma.payment.aggregate({
        where: { status: 'COMPLETED' },
        _sum: { amount: true },
      }),
      prisma.payment.findMany({
        where: { status: 'COMPLETED' },
        orderBy: { paymentDate: 'desc' },
        take: 10,
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
      }),
      prisma.user.groupBy({
        by: ['role'],
        _count: true,
      }),
      prisma.$queryRaw`
        SELECT 
          DATE_TRUNC('month', "paymentDate") as month,
          SUM(amount) as revenue,
          COUNT(*) as count
        FROM "Payment"
        WHERE status = 'COMPLETED'
          AND "paymentDate" >= NOW() - INTERVAL '12 months'
        GROUP BY DATE_TRUNC('month', "paymentDate")
        ORDER BY month DESC
      `,
    ])

    const stats = {
      totalMembers,
      activeSubscriptions,
      totalRevenue: totalRevenue._sum.amount || 0,
      recentPayments,
      membersByRole: membersByRole.reduce((acc, item) => {
        acc[item.role] = item._count
        return acc
      }, {}),
      monthlyRevenue,
    }

    return NextResponse.json({ stats })
  } catch (error) {
    console.error('Admin stats error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const GET = requireRole(['PLATINUM'])(handleGET)
