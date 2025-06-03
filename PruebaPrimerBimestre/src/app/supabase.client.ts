import {createClient} from '@supabase/supabase-js';

const supabaseUrl = "https://yrmwixiqqroweurpkeyc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlybXdpeGlxcXJvd2V1cnBrZXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNzQ4MTYsImV4cCI6MjA2Mzk1MDgxNn0.veJOqJPNqMDKIJplD18Pcptbzljd0hdFjqINSxF_78E"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);