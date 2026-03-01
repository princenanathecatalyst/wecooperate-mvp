# WeCooperate MVP - Deployment Guide

## 📋 Pre-Deployment Checklist

### 1. Environment Variables
Ensure all production environment variables are set:

```env
# Database (Use production PostgreSQL)
DATABASE_URL="postgresql://user:password@host:5432/wecooperate_prod"

# Security (Generate strong secrets)
JWT_SECRET="[GENERATE-32-CHAR-RANDOM-STRING]"
NEXTAUTH_SECRET="[GENERATE-32-CHAR-RANDOM-STRING]"

# Application
NEXTAUTH_URL="https://yourdomain.com"
NODE_ENV="production"

# Paystack (Use LIVE keys)
PAYSTACK_SECRET_KEY="sk_live_..."
PAYSTACK_PUBLIC_KEY="pk_live_..."

# Email (Production SMTP)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="noreply@wecooperate.ng"
SMTP_PASSWORD="[APP-PASSWORD]"
EMAIL_FROM="noreply@wecooperate.ng"

# App Settings
MONTHLY_SUBSCRIPTION_FEE="1000"
SILVER_CAPACITY="200"
GOLD_CAPACITY="100"
```

### 2. Generate Secure Secrets

```bash
# Generate JWT_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate NEXTAUTH_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3. Database Preparation

```bash
# Run migrations
npx prisma migrate deploy

# Generate Prisma Client
npx prisma generate

# Seed database
npm run prisma:seed
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel provides the easiest deployment for Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/wecooperate.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Configure Database**
   - Use Vercel Postgres or external PostgreSQL
   - Add DATABASE_URL to environment variables
   - Run migrations via Vercel CLI or manually

4. **Setup Paystack Webhook**
   - Go to Paystack Dashboard > Settings > Webhooks
   - Add webhook URL: `https://yourdomain.vercel.app/api/webhooks/paystack`
   - Copy webhook secret

#### Vercel CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Docker + VPS

Deploy using Docker on your own VPS (DigitalOcean, AWS, etc.)

#### Steps:

1. **Build Docker Image**
   ```bash
   docker build -t wecooperate:latest .
   ```

2. **Run Container**
   ```bash
   docker run -d \
     -p 3000:3000 \
     --name wecooperate \
     --env-file .env.production \
     wecooperate:latest
   ```

3. **With Docker Compose**
   
   Create `docker-compose.yml`:
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       env_file:
         - .env.production
       depends_on:
         - db
     
     db:
       image: postgres:14-alpine
       environment:
         POSTGRES_USER: wecooperate
         POSTGRES_PASSWORD: ${DB_PASSWORD}
         POSTGRES_DB: wecooperate_prod
       volumes:
         - postgres_data:/var/lib/postgresql/data
   
   volumes:
     postgres_data:
   ```

   Run:
   ```bash
   docker-compose up -d
   ```

### Option 3: Traditional VPS

Deploy directly on Ubuntu VPS.

#### Steps:

1. **Server Setup**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs

   # Install PostgreSQL
   sudo apt install -y postgresql postgresql-contrib

   # Install Nginx
   sudo apt install -y nginx

   # Install PM2
   sudo npm install -g pm2
   ```

2. **Clone Repository**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/wecooperate.git
   cd wecooperate
   npm install
   ```

3. **Configure Environment**
   ```bash
   cp .env.example .env
   nano .env  # Edit with production values
   ```

4. **Setup Database**
   ```bash
   sudo -u postgres createdb wecooperate_prod
   sudo -u postgres psql -c "CREATE USER wecooperate WITH PASSWORD 'your_password';"
   sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE wecooperate_prod TO wecooperate;"
   ```

5. **Run Migrations**
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   npm run prisma:seed
   ```

6. **Build Application**
   ```bash
   npm run build
   ```

7. **Start with PM2**
   ```bash
   pm2 start npm --name "wecooperate" -- start
   pm2 save
   pm2 startup  # Follow instructions
   ```

8. **Configure Nginx**
   
   Create `/etc/nginx/sites-available/wecooperate`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/wecooperate /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

## 🔐 Post-Deployment Security

### 1. Firewall Setup
```bash
sudo ufw allow 22  # SSH
sudo ufw allow 80  # HTTP
sudo ufw allow 443 # HTTPS
sudo ufw enable
```

### 2. Fail2Ban (Prevent brute force)
```bash
sudo apt install -y fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### 3. Regular Updates
```bash
# Setup automatic security updates
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

## 📊 Monitoring

### Application Monitoring
```bash
# PM2 monitoring
pm2 monit

# Application logs
pm2 logs wecooperate

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Database Monitoring
```bash
# PostgreSQL logs
sudo tail -f /var/log/postgresql/postgresql-14-main.log

# Active connections
sudo -u postgres psql -c "SELECT * FROM pg_stat_activity;"
```

## 🔄 Database Backups

### Automated Backup Script

Create `/opt/scripts/backup-db.sh`:
```bash
#!/bin/bash

BACKUP_DIR="/var/backups/wecooperate"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="wecooperate_prod"
DB_USER="wecooperate"

mkdir -p $BACKUP_DIR

pg_dump -U $DB_USER $DB_NAME | gzip > $BACKUP_DIR/backup_$DATE.sql.gz

# Keep only last 30 days of backups
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +30 -delete

echo "Backup completed: backup_$DATE.sql.gz"
```

Setup cron job:
```bash
sudo chmod +x /opt/scripts/backup-db.sh
sudo crontab -e

# Add line for daily backup at 2 AM
0 2 * * * /opt/scripts/backup-db.sh >> /var/log/backup.log 2>&1
```

## 🔧 Maintenance

### Update Application
```bash
cd /var/www/wecooperate
git pull origin main
npm install
npx prisma migrate deploy
npm run build
pm2 restart wecooperate
```

### Database Maintenance
```bash
# Vacuum database
sudo -u postgres psql -d wecooperate_prod -c "VACUUM ANALYZE;"

# Check database size
sudo -u postgres psql -c "SELECT pg_size_pretty(pg_database_size('wecooperate_prod'));"
```

## 🚨 Troubleshooting

### Application Won't Start
```bash
# Check PM2 status
pm2 status

# Check logs
pm2 logs wecooperate --lines 100

# Restart application
pm2 restart wecooperate

# Check environment variables
pm2 env 0
```

### Database Connection Issues
```bash
# Check PostgreSQL status
sudo systemctl status postgresql

# Test connection
psql -U wecooperate -d wecooperate_prod -h localhost

# Check DATABASE_URL format
echo $DATABASE_URL
```

### Payment Issues
```bash
# Verify Paystack keys
curl -H "Authorization: Bearer sk_live_..." https://api.paystack.co/transaction

# Check webhook logs
pm2 logs wecooperate | grep webhook
```

## 📧 Email Configuration

### Gmail SMTP Setup
1. Enable 2-Factor Authentication
2. Generate App Password
3. Use in SMTP_PASSWORD

### SendGrid Setup
```env
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USER="apikey"
SMTP_PASSWORD="[SENDGRID-API-KEY]"
```

## 🎯 Performance Optimization

### 1. Enable Caching
```nginx
# Add to Nginx config
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 2. Database Optimization
```sql
-- Create indexes
CREATE INDEX idx_payment_user_id ON "Payment"("userId");
CREATE INDEX idx_payment_status ON "Payment"("status");
CREATE INDEX idx_user_email ON "User"("email");
```

### 3. Enable Gzip
```nginx
# Add to Nginx config
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml;
```

## 📱 Mobile Optimization

- Test on multiple devices
- Verify responsive design
- Check touch targets
- Test payment flow on mobile
- Verify SMS notifications work

## ✅ Launch Checklist

- [ ] All environment variables configured
- [ ] Database migrated and seeded
- [ ] SSL certificate installed
- [ ] Paystack webhook configured
- [ ] Email service working
- [ ] Backups automated
- [ ] Monitoring setup
- [ ] Error logging configured
- [ ] Domain DNS configured
- [ ] Test payments in live mode
- [ ] User registration tested
- [ ] Admin dashboard accessible
- [ ] All pages loading correctly
- [ ] Mobile responsiveness verified
- [ ] Security headers configured

## 🆘 Support

For deployment issues:
1. Check application logs
2. Review environment variables
3. Verify database connection
4. Test Paystack integration
5. Check Nginx configuration

## 📚 Additional Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Prisma Deployment](https://www.prisma.io/docs/guides/deployment)
- [Paystack Integration](https://paystack.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

**Last Updated:** February 2026  
**Version:** 1.0.0
