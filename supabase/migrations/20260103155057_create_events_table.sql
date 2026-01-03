/*
  # Create events table for ShowGo platform

  1. New Tables
    - `events`
      - `id` (uuid, primary key) - Unique identifier for each event
      - `name` (text) - Event name/title
      - `description` (text) - Event description
      - `location` (text) - City and state of the event
      - `venue` (text) - Venue name
      - `date` (date) - Event date
      - `time` (text) - Event time
      - `category` (text) - Event category (e.g., Indie Rock, Jazz, EDM)
      - `image_url` (text) - URL to event image
      - `created_at` (timestamptz) - Timestamp of record creation

  2. Security
    - Enable RLS on `events` table
    - Add policy for anyone to read events (public access for browsing)
    - Add policy for authenticated users to manage events
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  venue text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view events"
  ON events
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert events"
  ON events
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update events"
  ON events
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete events"
  ON events
  FOR DELETE
  TO authenticated
  USING (true);