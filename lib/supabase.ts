import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import secrets from '../lib/secrets.json';

const supabaseUrl = 'https://dowbairurxbifcjlgkbs.supabase.co';
const supabaseAnonKey = secrets.supabaseAnonKey;


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
});

