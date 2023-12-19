import { Block } from "@/components/web/Block"
import { getSortedContents } from "@/lib/contents"

export default async function Note() {
  const sortedContents = getSortedContents()

  return (
    <main className="w-[100dvw] h-[100dvh] grid items-center justify-center">
      <section>
        <ul className="[&>li]:mt-2">
          {sortedContents.map(({ id, type, date, title, draft }) =>
            (draft === false && type === "note") &&
            <li key={id}>
              <Block title={title} date={date} />
            </li>
          )}
        </ul>
      </section>
    </main>
  )
}
