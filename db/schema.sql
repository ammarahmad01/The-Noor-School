-- The Noor School - PostgreSQL schema
-- Requires PostgreSQL 13+ and pgcrypto for UUID generation

CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'application_status') THEN
    CREATE TYPE application_status AS ENUM ('submitted','in_review','accepted','rejected','waitlisted','withdrawn');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'contact_status') THEN
    CREATE TYPE contact_status AS ENUM ('new','in_progress','closed','spam');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'gender') THEN
    CREATE TYPE gender AS ENUM ('male','female','other','prefer_not_to_say');
  END IF;
END$$;

-- Optional admin users (for moderation/ownership)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'admin',
  password_hash TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Facilities displayed on the site
CREATE TABLE IF NOT EXISTS facilities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  icon_name TEXT,
  image_url TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- News
CREATE TABLE IF NOT EXISTS news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image_url TEXT,
  author_id UUID REFERENCES users(id) ON DELETE SET NULL,
  is_published BOOLEAN NOT NULL DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_news_published_at ON news(published_at DESC);

-- Events
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  start_at TIMESTAMPTZ NOT NULL,
  end_at TIMESTAMPTZ,
  location TEXT,
  banner_image_url TEXT,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_events_start_at ON events(start_at DESC);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT,
  rating SMALLINT CHECK (rating BETWEEN 1 AND 5),
  content TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Gallery: albums + images
CREATE TABLE IF NOT EXISTS gallery_albums (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  cover_image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  album_id UUID REFERENCES gallery_albums(id) ON DELETE SET NULL,
  title TEXT,
  caption TEXT,
  image_url TEXT NOT NULL,
  taken_at TIMESTAMPTZ,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_gallery_images_album_order ON gallery_images(album_id, display_order);

-- Academics: grades, subjects, mapping
CREATE TABLE IF NOT EXISTS grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  order_index INT DEFAULT 0,
  description TEXT
);

CREATE TABLE IF NOT EXISTS subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS grade_subjects (
  grade_id UUID NOT NULL REFERENCES grades(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  PRIMARY KEY (grade_id, subject_id)
);

-- Admissions applications
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

-- Contact messages
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

-- Site settings
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
