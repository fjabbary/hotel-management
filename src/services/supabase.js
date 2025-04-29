
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jlgmsgclduntsmfzxsny.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZ21zZ2NsZHVudHNtZnp4c255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2Mzc2ODQsImV4cCI6MjA2MTIxMzY4NH0.m3OgjkkBnnBjM3nrS6LrOQZmU-fIKtHftZKdGYylGIk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;