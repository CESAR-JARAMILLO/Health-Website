import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nfzwjdcehfbomfbaohan.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mendqZGNlaGZib21mYmFvaGFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4OTU2ODQsImV4cCI6MjAwMDQ3MTY4NH0.UQ6JU8Qyy5dN5Fijsp72JEvRGs-p7Mm6NWJXJqCeiog';

export const supabase = createClient(supabaseUrl, supabaseKey);
