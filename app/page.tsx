"use client";

import { useRouter } from "next/navigation";
import supabase from "@/lib/supabase-browser";
import Link from "next/link";
import { useState } from "react";
export default function Login() {
  const router = useRouter();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "waliahmadfiles@gmail.com",
      password: "Waliahmad1#",
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: "waliahmadfiles@gmail.com",
      password: "Waliahmad1#",
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
      <Link href="/products">Home</Link>
    </div>
  );
}
