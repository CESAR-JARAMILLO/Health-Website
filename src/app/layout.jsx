'use client'

import { useState, useEffect } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Providers } from "./providers";
import { useRouter } from 'next/navigation'
import Header from './components/Header';

export default function RootLayout({ children }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase])

  const signOut = () => {
    supabase.auth.signOut()
  }


  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <button onClick={signOut}>Sign Out</button>
          {children}
        </Providers>
      </body>
    </html>
  );
}