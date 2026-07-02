const response = await fetch('../env.json');
const config = await response.json();

const supabaseUrl = config.ENDPOINT//process.env.ENDPOINT;
const supabaseKey = config.API_KEY_SP//process.env.API_KEY_SP;

export const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);