import { readFileSync, readdirSync } from "fs"
import matter from "gray-matter"
import { join } from "path"
import { remark } from "remark"
import html from "remark-html"

const contentDirectory = join(process.cwd(), "content")

export function getSortedContent() {
  const fileNames = readdirSync(contentDirectory)

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")
    const fullPath = join(contentDirectory, fileName)
    const fileContents = readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)
    const tags: string[] = []

    matterResult.data.tags.forEach((tag: string) => { tags.push(tag) })

    return {
      id,
      type: matterResult.data.type,
      date: matterResult.data.date,
      title: matterResult.data.title,
      draft: matterResult.data.draft,
      tags: tags,
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getContent(content: string) {
  const fullPath = join(contentDirectory, `${content}.md`)
  const fileContents = readFileSync(fullPath, "utf8")
  const matterResult = matter(fileContents)
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()
  const matterData = matterResult.data

  return { contentHtml, matterData }
}
