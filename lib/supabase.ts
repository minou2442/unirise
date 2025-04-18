



import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)



export interface Registration {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  education_level: string;
  interests?: string;
  created_at?: string;
}