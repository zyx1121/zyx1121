import { Block } from "@/components/web/Block"
import { getSortedContents } from "@/lib/contents"

export default async function Project() {
  const sortedContents = getSortedContents()

  return (
    <main className="w-[100dvw] h-[100dvh] grid items-center justify-center">
      <section>
        <ul>
          {sortedContents.map(({ id, type, date, title, draft }) =>
            (draft === false && type === "project") &&
            <li key={id}>
              <Block title={title} date={date} />
            </li>
          )}
        </ul>
      </section>
    </main>
  )
}
