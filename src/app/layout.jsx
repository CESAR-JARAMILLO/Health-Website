'use client'

import { useState, useEffect } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Providers } from "./providers";
import { useRouter } from 'next/navigation'
import Header from './components/Header';

export default function RootLayout({ children }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleAuthStateChange = (event, session) => {
    if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
      console.log('User signed out');
      setUser(null);
      router.refresh();
    } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
      console.log('User signed in');
      setUser(true);
      router.refresh();
    }
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthStateChange(event, session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  return (
    <html lang="en">
      <body>
        <Providers>
          <Header user={user} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
