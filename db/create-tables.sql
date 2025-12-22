-- Create necessary types
CREATE TYPE IF NOT EXISTS application_status AS ENUM ('submitted','in_review','accepted','rejected','waitlisted','withdrawn');
CREATE TYPE IF NOT EXISTS contact_status AS ENUM ('new','in_progress','closed','spam');
CREATE TYPE IF NOT EXISTS gender AS ENUM ('male','female','other','prefer_not_to_say');

-- Create users table (minimal for foreign key references)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'admin',
  password_hash TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create grades table (for admissions_applications reference)
CREATE TABLE IF NOT EXISTS grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  level INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status contact_status NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  handled_at TIMESTAMPTZ,
  handled_by UUID REFERENCES users(id) ON DELETE SET NULL,
  notes TEXT
);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_messages(status);

-- Create admissions_applications table
CREATE TABLE IF NOT EXISTS admissions_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_first_name TEXT NOT NULL,
  student_last_name TEXT NOT NULL,
  dob DATE,
  gender gender,
  grade_applied_id UUID REFERENCES grades(id) ON DELETE SET NULL,
  parent_name TEXT NOT NULL,
  parent_phone TEXT NOT NULL,
  parent_email TEXT NOT NULL,
  address_text TEXT,
  previous_school TEXT,
  status application_status NOT NULL DEFAULT 'submitted',
  notes TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  reviewed_at TIMESTAMPTZ,
  reviewed_by UUID REFERENCES users(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_admissions_status ON admissions_applications(status);
CREATE INDEX IF NOT EXISTS idx_admissions_submitted_at ON admissions_applications(submitted_at DESC);
