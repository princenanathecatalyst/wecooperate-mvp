import { verifyToken } from './auth'
import prisma from './prisma'

export const authenticate = async (req) => {
  try {
    const authHeader = req.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { authenticated: false, user: null }
    }

    const token = authHeader.substring(7)
    const decoded = verifyToken(token)

    if (!decoded) {
      return { authenticated: false, user: null }
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isVerified: true,
        createdAt: true,
      },
    })

    if (!user) {
      return { authenticated: false, user: null }
    }

    return { authenticated: true, user }
  } catch (error) {
    console.error('Authentication error:', error)
    return { authenticated: false, user: null }
  }
}

export const requireAuth = (handler) => {
  return async (req, context) => {
    const { authenticated, user } = await authenticate(req)

    if (!authenticated) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    req.user = user
    return handler(req, context)
  }
}

export const requireRole = (roles) => {
  return (handler) => {
    return async (req, context) => {
      const { authenticated, user } = await authenticate(req)

      if (!authenticated) {
        return new Response(
          JSON.stringify({ error: 'Unauthorized' }),
          { status: 401, headers: { 'Content-Type': 'application/json' } }
        )
      }

      if (!roles.includes(user.role)) {
        return new Response(
          JSON.stringify({ error: 'Forbidden' }),
          { status: 403, headers: { 'Content-Type': 'application/json' } }
        )
      }

      req.user = user
      return handler(req, context)
    }
  }
}
