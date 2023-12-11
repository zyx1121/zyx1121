import { format, parseISO } from "date-fns"

export function Block({ title, date }: { title: string, date: string }) {
  return (
    <div className="border p-4 rounded-lg hover:border-border border-transparent cursor-pointer">
      <h3>
        {title}
      </h3>
      <time className="block text-muted-foreground text-sm" dateTime={date}>
        {format(parseISO(date), 'yyyy年 L月 d日')}
      </time>
    </div>
  )
}
