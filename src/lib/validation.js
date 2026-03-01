import { z } from 'zod'

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z.string().optional(),
})

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Token is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export const leadershipApplicationSchema = z.object({
  targetRole: z.enum(['SILVER', 'GOLD']),
  motivation: z.string().min(100, 'Motivation must be at least 100 characters'),
  experience: z.string().min(100, 'Experience must be at least 100 characters'),
})

export const blogPostSchema = z.object({
  title: z.string().min(10, 'Title must be at least 10 characters'),
  content: z.string().min(100, 'Content must be at least 100 characters'),
  excerpt: z.string().optional(),
  coverImage: z.string().url().optional(),
  isPublished: z.boolean().optional(),
})

export const announcementSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  content: z.string().min(20, 'Content must be at least 20 characters'),
  targetRole: z.enum(['MEMBER', 'SILVER', 'GOLD', 'PLATINUM']).optional(),
})

export const validateRequest = async (schema, data) => {
  try {
    return { success: true, data: await schema.parseAsync(data) }
  } catch (error) {
    return { success: false, errors: error.errors }
  }
}
