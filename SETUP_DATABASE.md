# Database Setup Instructions for Supabase

## ✅ Completed Steps

1. **Updated `.env` file** - Added `?schema=public` to DATABASE_URL
2. **Fixed Prisma configuration** - Client is now generated to correct location
3. **Dev server running** - Ready to test locally

## ⏭️ Next Steps: Create Tables in Supabase

### Option 1: Using Supabase Dashboard (Recommended)

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project: **"The Noor School"**
3. Navigate to **SQL Editor** (left sidebar)
4. Click **"New Query"**
5. Copy and paste the SQL from [db/create-tables.sql](./db/create-tables.sql)
6. Click **"Run"** button
7. Wait for success message (should see "Success. No rows returned")

### Option 2: Using Supabase CLI

```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Login to your Supabase account
supabase login

# Link your project (you'll be asked for your project reference)
supabase link --project-ref your-project-ref

# Execute the SQL file
supabase migration up db/create-tables.sql
```

### Option 3: Using psql (Direct PostgreSQL)

```powershell
# Install psql (PostgreSQL client) if needed, or use any PostgreSQL GUI like pgAdmin

# Extract connection details from your .env DATABASE_URL
# Connection string should be in format:
# postgresql://username:password@host:port/database?schema=public

# Connect and execute
psql "your-database-url" < db/create-tables.sql
```

## 🧪 Testing After Setup

### Local Testing (http://localhost:3000)

1. Fill out the **Contact Form** (bottom of page):

   - Name: "Test User"
   - Email: "test@example.com"
   - Message: "This is a test message"
   - Click "Send Message"

2. Expected result:
   - ✅ Green toast: "Message sent successfully!"
   - ✅ Form clears
   - ✅ Data appears in Supabase `contact_messages` table

### Check Data in Supabase

1. Go to Supabase Dashboard → **Table Editor**
2. Select **contact_messages** table
3. You should see your test record with:
   - `name`: "Test User"
   - `email`: "test@example.com"
   - `message`: "This is a test message"
   - `status`: "new"
   - `created_at`: current timestamp

## 📋 Table Structure

### contact_messages

- `id` (UUID) - Primary key
- `name` (TEXT) - Sender name
- `email` (TEXT) - Sender email
- `phone` (TEXT) - Optional phone number
- `subject` (TEXT) - Optional subject
- `message` (TEXT) - Message content
- `status` (contact_status enum) - "new", "in_progress", "closed", "spam"
- `created_at` (TIMESTAMPTZ) - Creation timestamp
- `handled_at` (TIMESTAMPTZ) - When admin handled it
- `handled_by` (UUID) - Admin user ID
- `notes` (TEXT) - Internal notes

### admissions_applications

- `id` (UUID) - Primary key
- `student_first_name` (TEXT) - Student's first name
- `student_last_name` (TEXT) - Student's last name
- `dob` (DATE) - Date of birth
- `gender` (gender enum) - "male", "female", "other", "prefer_not_to_say"
- `grade_applied_id` (UUID) - Reference to grades table
- `parent_name` (TEXT) - Parent/guardian name
- `parent_phone` (TEXT) - Parent contact number
- `parent_email` (TEXT) - Parent email
- `address_text` (TEXT) - Student's address
- `previous_school` (TEXT) - Previous school name
- `status` (application_status enum) - "submitted", "in_review", "accepted", etc.
- `submitted_at` (TIMESTAMPTZ) - Application submission time
- `reviewed_at` (TIMESTAMPTZ) - When admin reviewed
- `reviewed_by` (UUID) - Admin user ID
- `notes` (TEXT) - Internal notes

## 🚀 Deployment to Production

Once tables are created and locally tested:

1. **Add environment variable to Vercel**:

   - Go to [Vercel Dashboard](https://vercel.com)
   - Select project "The Noor School"
   - Settings → Environment Variables
   - Add new variable:
     - Name: `DATABASE_URL`
     - Value: `postgresql://postgres.savdaisoqjgrvhvvnbtk:12345@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?schema=public`
   - Click Save
   - Redeploy the project

2. **Test production**:
   - Visit your Vercel deployment URL
   - Fill contact form and submit
   - Check Supabase `contact_messages` table - data should appear

## ❓ Troubleshooting

### "Cannot connect to database" or "FATAL: remaining connection slots reserved"

- **Cause**: Connection string missing `?schema=public`
- **Fix**: Check `.env` file has: `postgresql://...postgres?schema=public`

### "relation 'public.contact_messages' does not exist"

- **Cause**: Tables not created in Supabase yet
- **Fix**: Run the SQL from [db/create-tables.sql](./db/create-tables.sql) in Supabase SQL Editor

### "permission denied for schema public"

- **Cause**: Database user doesn't have schema permissions
- **Fix**: This shouldn't happen with Supabase default setup; ensure using correct credentials

### Form submits but no toast notification appears

- **Cause**: API call succeeded but JavaScript error occurred
- **Fix**: Check browser console (F12 → Console tab) for errors

## 📚 Useful Supabase Links

- [Supabase Dashboard](https://app.supabase.com)
- [SQL Editor Documentation](https://supabase.com/docs/guides/database/query-editor)
- [Connection String Guide](https://supabase.com/docs/guides/database/connecting-to-postgres#connection-string)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
