import Image from "next/image"
import Link from "next/link"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { getBlogPosts } from "@/lib/posts"
import { format, parseISO } from "date-fns"

export default async function Note() {
  let allBlogs = getBlogPosts()

  return (
    <main className="w-full h-auto grid items-center justify-center">
      <section className="mt-20">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.metadata.date) > new Date(b.metadata.date))
              return -1;
            else
              return 1;
          })
          .map((post) => (
            <Link key={post.slug} href={`/note/${post.slug}`}>
              {/* <Block title={post.metadata.title} date={post.metadata.date} /> */}
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border m-6">
                  <CardItem translateZ="100" className="w-full mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      height="500"
                      width="500"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {post.metadata.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {format(parseISO(post.metadata.date), 'yyyy 年 L 月 d 日')}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </Link>
          ))}
      </section>
    </main>
  )
}
