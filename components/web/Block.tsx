"use client"

import { animated, useSpring } from "@react-spring/web"
import { format, parseISO } from "date-fns"

export function Block({ title, date }: { title: string, date: string }) {
  const [springs, api] = useSpring(() => ({
    from: { paddingLeft: "1rem" },
  }))

  const mouseEnter = () => {
    api.start({
      from: { paddingLeft: springs.paddingLeft },
      to: { paddingLeft: "1.5rem" },
    })
  }

  const mouseLeave = () => {
    api.start({
      from: { paddingLeft: springs.paddingLeft },
      to: { paddingLeft: "1rem" },
    })
  }

  return (
    <div className="p-4 cursor-pointer">
      <div className="w-80 h-60 border border-border rounded-lg">

      </div>
      <animated.div
        style={{ padding: "1rem", ...springs }}
        onMouseEnter={() => mouseEnter()}
        onMouseLeave={() => mouseLeave()}
      >
        <h3>
          {title}
        </h3>
        <time className="block text-muted-foreground text-sm" dateTime={date}>
          {format(parseISO(date), 'yyyy年 L月 d日')}
        </time>
      </animated.div>
    </div>
  )
}
