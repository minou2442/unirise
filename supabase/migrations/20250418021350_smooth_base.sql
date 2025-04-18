/*
  # Create registrations table

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `education_level` (text)
      - `interests` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `registrations` table
    - Add policy for authenticated users to read their own data
    - Add policy for unauthenticated users to insert data
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  education_level text NOT NULL,
  interests text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert registrations"
  ON registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read own registrations"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE users.email = registrations.email
  ));