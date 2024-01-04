import { CustomMDX } from "@/components/mdx"
import { getBlogPosts } from "@/lib/posts"

export default function Page({ params }: { params: { test: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.test)

  return (
    <main className="px-8 py-16 flex justify-center">
      <article className="prose max-w-xl">
        <CustomMDX source={post?.content || ""} />
      </article>
    </main>
  )
}
