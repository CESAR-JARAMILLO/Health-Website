import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'

async function PostsPage() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies
  })

  const {data: posts} = await supabase.from('posts').select()

  return (
    <div>
      {JSON.stringify(posts)}
    </div>
  )
}

export default PostsPage