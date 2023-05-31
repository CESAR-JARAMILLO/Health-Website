'use client'

import { useState, useEffect, createContext } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Providers } from "./providers";
import { useRouter } from 'next/navigation';
import Header from './components/Header';

// Create a context to hold the user state
export const UserContext = createContext(null);

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
          {/* Provide the user state value to the children components */}
          <UserContext.Provider value={user}>
            <Header />
            {children}
          </UserContext.Provider>
        </Providers>
      </body>
    </html>
  );
}
