# WeCooperate Digital Membership Network MVP

**Promoted by:** Bizbridges Universal Limited

A production-ready full-stack web application for structured digital collaboration among Nigerian professionals, entrepreneurs, and communities.

## 🎯 Project Overview

WeCooperate is a premium digital membership network connecting Nigerian professionals for structured collaboration and shared growth through seven comprehensive pillars:

1. Cooperative Bulk Buying
2. Cooperative Social Blogging  
3. Cooperative Investment Education
4. Cooperative Agriculture
5. Cooperative Real Estate
6. Cooperative Fintech Literacy
7. Cooperative Training & Development

## 🏗️ Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** (Custom primary green #0E5A3C, accent gold #C9A227)
- Fully responsive design
- Server-side rendering
- SEO optimized

### Backend
- **Next.js API Routes**
- **PostgreSQL** database
- **Prisma ORM**
- JWT authentication
- Role-based access control (RBAC)

### Payments
- **Paystack** integration
- Recurring subscriptions (₦1,000/month)
- Webhook verification
- Payment history tracking

### Security
- bcrypt password hashing
- JWT token-based auth
- Webhook signature validation
- Input validation with Zod
- CSRF protection ready
- Rate limiting ready

## 📁 Project Structure

```
wecooperate-mvp/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.js                # Seed data
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Homepage
│   │   ├── globals.css        # Global styles
│   │   ├── about/             # About page
│   │   ├── membership/        # Membership page
│   │   ├── how-it-works/      # How it works
│   │   ├── leadership/        # Leadership structure
│   │   ├── blog/              # Blog pages
│   │   ├── faq/               # FAQ page
│   │   ├── register/          # Registration
│   │   ├── login/             # Login
│   │   ├── dashboard/         # Protected dashboard
│   │   │   ├── layout.js      # Dashboard layout
│   │   │   ├── page.js        # Member dashboard
│   │   │   ├── profile/       # User profile
│   │   │   ├── payments/      # Payment history
│   │   │   ├── silver/        # Silver leader dashboard
│   │   │   ├── gold/          # Gold leader dashboard
│   │   │   └── platinum/      # Platinum admin dashboard
│   │   └── api/
│   │       ├── auth/          # Authentication endpoints
│   │       ├── user/          # User management
│   │       ├── payments/      # Payment endpoints
│   │       ├── leadership/    # Leadership applications
│   │       ├── blog/          # Blog posts
│   │       ├── announcements/ # Announcements
│   │       ├── admin/         # Admin endpoints
│   │       └── webhooks/      # Paystack webhooks
│   ├── components/
│   │   ├── Header.js          # Site header
│   │   ├── Footer.js          # Site footer
│   │   ├── AuthProvider.js    # Auth context
│   │   ├── ProtectedRoute.js  # Route protection
│   │   ├── PaymentButton.js   # Paystack button
│   │   ├── DashboardNav.js    # Dashboard navigation
│   │   └── StatCard.js        # Stat display card
│   └── lib/
│       ├── prisma.js          # Prisma client
│       ├── auth.js            # Auth utilities
│       ├── paystack.js        # Paystack integration
│       ├── middleware.js      # API middleware
│       ├── validation.js      # Input validation
│       └── utils.js           # Helper functions
├── .env.example               # Environment variables template
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── Dockerfile                 # Docker configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL 14+
- Paystack account (test/live keys)
- npm or yarn

### Installation

1. **Clone and setup**
   ```bash
   cd wecooperate-mvp
   npm install
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your credentials:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/wecooperate"
   JWT_SECRET="your-secret-key-here"
   NEXTAUTH_SECRET="your-nextauth-secret"
   PAYSTACK_SECRET_KEY="sk_test_..."
   PAYSTACK_PUBLIC_KEY="pk_test_..."
   ```

3. **Setup database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   npx prisma db seed
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

### Core Models

- **User**: Member accounts with roles (MEMBER, SILVER, GOLD, PLATINUM)
- **Payment**: Subscription payments and history
- **Group**: Leadership groups (Silver/Gold levels)
- **GroupMember**: Group membership relationships
- **LeadershipApplication**: Applications for leadership roles
- **BlogPost**: Content management
- **Announcement**: System announcements
- **SystemSettings**: Configuration

### Roles

- **MEMBER**: General member with full platform access
- **SILVER**: Leader coordinating 200 members
- **GOLD**: Leader overseeing 100 Silver leaders
- **PLATINUM**: Platform director/administrator

## 💳 Payment Integration

### Paystack Setup

1. Register at [paystack.com](https://paystack.com)
2. Get API keys from Dashboard > Settings > API Keys
3. Add keys to `.env` file
4. Configure webhook URL: `https://yourdomain.com/api/webhooks/paystack`

### Subscription Flow

1. User registers account
2. Initiates payment (₦1,000/month)
3. Redirected to Paystack payment page
4. Payment verified via webhook
5. Subscription activated for 30 days
6. Auto-renewal can be configured

## 🔐 Authentication

### JWT Implementation

- Tokens valid for 7 days
- Stored in httpOnly cookies (production)
- Role-based access control
- Protected API routes
- Client-side route protection

### User Flow

1. Register → Email verification (optional)
2. Login → Receive JWT token
3. Token sent with each authenticated request
4. Middleware validates token and role
5. Access granted/denied based on permissions

## 👥 Leadership Structure

### Hierarchy

1. **General Members**: 
   - ₦1,000/month subscription
   - Full platform access
   - Apply for leadership

2. **Silver Leaders** (200 member capacity):
   - Coordinate 200 members
   - Broadcast messages
   - Engagement reporting
   - Structured honorarium

3. **Gold Leaders** (100 Silver capacity):
   - Oversee 100 Silver leaders
   - Analytics dashboard
   - Revenue oversight
   - Enhanced compensation

4. **Platinum Director**:
   - Full platform administration
   - Member management
   - Content moderation
   - Financial oversight

## 📊 Admin Dashboard

### Platinum Features

- Total members count
- Active subscriptions tracking
- Revenue analytics
- Monthly revenue charts
- Member role management
- Payment verification
- Content moderation
- Blog post management
- Announcement creation
- CSV export

### Silver/Gold Features

- View assigned members
- Broadcast messaging
- Engagement metrics
- Group analytics
- Payment tracking

## 🎨 Design System

### Brand Colors

```css
Primary Green: #0E5A3C
Accent Gold: #C9A227
Background: #FFFFFF
Text: #1F2937
```

### Typography

- Font: Inter (sans-serif)
- Professional, clean, modern aesthetic
- No cartoon or playful elements

### Components

- Reusable button styles (btn-primary, btn-secondary, btn-outline)
- Form inputs with consistent styling
- Card components
- Dashboard widgets
- Responsive navigation

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interfaces
- Optimized images
- Fast load times

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Prisma Studio (database GUI)
npm run prisma:studio
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Docker

```bash
# Build image
docker build -t wecooperate .

# Run container
docker run -p 3000:3000 --env-file .env wecooperate
```

### Environment Setup

Required environment variables for production:
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Strong random secret
- `NEXTAUTH_SECRET` - NextAuth secret
- `PAYSTACK_SECRET_KEY` - Live Paystack secret key
- `PAYSTACK_PUBLIC_KEY` - Live Paystack public key
- `NEXTAUTH_URL` - Production URL

## 🔒 Security Considerations

1. **Never commit** `.env` file
2. Use strong JWT secrets (32+ characters)
3. Enable HTTPS in production
4. Configure CORS properly
5. Implement rate limiting
6. Regular security updates
7. Validate all user inputs
8. Sanitize database queries
9. Secure webhook endpoints
10. Monitor for suspicious activity

## 📄 Legal Compliance

### Important Disclaimers

WeCooperate is:
- A digital membership network
- A subscription-based online community
- Promoted by Bizbridges Universal Limited

WeCooperate is NOT:
- A registered cooperative society
- A bank or financial institution
- A microfinance institution
- An investment company
- A fund manager

All members must acknowledge:
- No guaranteed financial returns
- Voluntary participation
- Personal investment responsibility
- Educational content only

## 🤝 Support

### Documentation
- Comprehensive FAQ page
- How It Works guide
- Leadership structure details
- Blog with updates

### Contact
- Email: info@wecooperate.ng
- Phone: +234 800 000 0000
- Location: Lagos, Nigeria

## 📝 License

Proprietary software © 2024 Bizbridges Universal Limited

## 🛠️ Development

### Code Style

- Use ES6+ features
- Follow Next.js conventions
- Consistent naming (camelCase for variables, PascalCase for components)
- Comment complex logic
- Keep functions small and focused

### Git Workflow

```bash
# Feature branches
git checkout -b feature/new-feature
git commit -m "Add new feature"
git push origin feature/new-feature
```

### Database Migrations

```bash
# Create migration
npx prisma migrate dev --name migration_name

# Apply migrations
npx prisma migrate deploy

# Reset database (development only!)
npx prisma migrate reset
```

## 🎯 Next Steps

1. Complete email verification system
2. Add more payment methods
3. Implement real-time notifications
4. Enhanced analytics dashboard
5. Mobile app (React Native)
6. Advanced reporting features
7. Automated payment reminders
8. Member referral system

## 👨‍💻 Development Team

Built for Bizbridges Universal Limited

## 🙏 Acknowledgments

- Next.js team for excellent framework
- Vercel for hosting platform
- Paystack for payment infrastructure
- PostgreSQL community
- Open source contributors

---

**Version:** 1.0.0  
**Last Updated:** February 2026  
**Status:** Production Ready
