import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
const supabase = createServerComponentClient({
  headers,
  cookies,
});

export default supabase;
