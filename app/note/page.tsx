import { Block } from "@/components/web/Block"
import { getBlogPosts } from "@/lib/posts"
import Link from "next/link"

export default async function Note() {
  let allBlogs = getBlogPosts()

  return (
    <main className="w-[100dvw] h-[100dvh] grid items-center justify-center">
      <section>
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.metadata.date) > new Date(b.metadata.date))
              return -1;
            else
              return 1;
          })
          .map((post) => (
            <Link key={post.slug} href={`/note/${post.slug}`}>
              <Block title={post.metadata.title} date={post.metadata.date} />
            </Link>
          ))}
      </section>
    </main>
  )
}
