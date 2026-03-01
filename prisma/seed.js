const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create Platinum Admin
  const hashedPassword = await bcrypt.hash('Admin@2024', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@wecooperate.ng' },
    update: {},
    create: {
      email: 'admin@wecooperate.ng',
      password: hashedPassword,
      firstName: 'Platform',
      lastName: 'Administrator',
      role: 'PLATINUM',
      isVerified: true,
    },
  })

  console.log('✅ Created Platinum admin:', admin.email)

  // Create sample blog posts
  const blogPosts = [
    {
      title: 'Welcome to WeCooperate: Building Collective Prosperity',
      slug: 'welcome-to-wecooperate',
      excerpt: 'Learn about our mission to empower Nigerians through structured digital collaboration.',
      content: `
# Welcome to WeCooperate

WeCooperate is Nigeria's premier digital membership network designed for structured collaboration and collective prosperity.

## Our Vision

We believe that through organized collaboration, Nigerians can achieve economic advancement that would be impossible individually.

## Seven Pillars of Success

Our platform is built on seven comprehensive collaboration pillars, each designed to create real economic opportunities for members.

## Join Us Today

Membership is just ₦1,000 per month. Start your journey toward collective prosperity today.
      `,
      isPublished: true,
      publishedAt: new Date(),
      authorId: admin.id,
    },
    {
      title: 'Understanding Cooperative Bulk Buying: Save Together',
      slug: 'understanding-cooperative-bulk-buying',
      excerpt: 'How WeCooperate members access wholesale prices through collective purchasing power.',
      content: `
# Cooperative Bulk Buying

Learn how WeCooperate members save significantly through coordinated bulk purchases.

## How It Works

Members coordinate to purchase essential goods and services in bulk, accessing wholesale prices that wouldn't be available individually.

## Real Savings

From household items to business supplies, our bulk buying programs deliver real savings to members every month.
      `,
      isPublished: true,
      publishedAt: new Date(),
      authorId: admin.id,
    },
    {
      title: 'Leadership Opportunities: Grow With WeCooperate',
      slug: 'leadership-opportunities',
      excerpt: 'Discover how you can advance from member to Silver, Gold, or even Platinum leadership.',
      content: `
# Leadership at WeCooperate

WeCooperate offers structured leadership opportunities with real compensation.

## Silver Leaders

Coordinate 200 members and receive structured honorarium based on engagement.

## Gold Leaders

Oversee 100 Silver leaders with enhanced compensation and responsibilities.

## Apply Today

If you have leadership experience and a passion for community development, apply for a leadership role.
      `,
      isPublished: true,
      publishedAt: new Date(),
      authorId: admin.id,
    },
  ]

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    })
    console.log('✅ Created blog post:', post.title)
  }

  // Create sample announcement
  await prisma.announcement.create({
    data: {
      title: 'Welcome to WeCooperate!',
      content: 'Thank you for joining Nigeria\'s premier digital membership network. Complete your profile and make your first payment to unlock all features.',
      authorId: admin.id,
      isActive: true,
    },
  })

  console.log('✅ Created welcome announcement')

  // Create system settings
  const settings = [
    { key: 'MONTHLY_FEE', value: '1000', description: 'Monthly subscription fee in NGN' },
    { key: 'SILVER_CAPACITY', value: '200', description: 'Maximum members per Silver leader' },
    { key: 'GOLD_CAPACITY', value: '100', description: 'Maximum Silver leaders per Gold leader' },
  ]

  for (const setting of settings) {
    await prisma.systemSettings.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    })
  }

  console.log('✅ Created system settings')

  console.log('')
  console.log('🎉 Seed completed successfully!')
  console.log('')
  console.log('Login credentials:')
  console.log('Email: admin@wecooperate.ng')
  console.log('Password: Admin@2024')
  console.log('')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
