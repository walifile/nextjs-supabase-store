import { redirect } from "next/navigation";
import supabase from "@/lib/supabase-server";
export default async function Unauthenticated() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return <p>Please sign in to vist page</p>;
}
