"use client"

import { Button } from "@/components/ui/button"
import { animated, useSpring } from "@react-spring/web"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export function WebNav() {
  const router = useRouter()
  const pathname = usePathname()

  const [springs, api] = useSpring(() => ({
    from: { height: "100dvh", y: "0" },
  }))

  const routeTransitionJoin = () => {
    api.start({
      from: { height: "100dvh" },
      to: { height: "0dvh" },
    })
  }

  const routeTransitionLeave = (route: any) => {
    api.start({
      from: { height: "100dvh", y: "100dvh" },
      to: { height: "100dvh", y: "0dvh" },
      onResolve: () => {
        route()
      }
    })
  }

  useEffect(() => {
    routeTransitionJoin()
  })

  return (
    <>
      <nav className="absolute flex flex-col gap-4 p-4 h-[100dvh] justify-center">
        <Button variant="ghost" disabled={pathname === "/" ? true : false} onClick={() => routeTransitionLeave(() => router.push("/"))}>
          Home
        </Button>
        <Button variant="ghost" disabled={pathname === "/note" ? true : false} onClick={() => routeTransitionLeave(() => router.push("/note"))}>
          Note
        </Button>
        <Button variant="ghost" disabled={pathname === "/project" ? true : false} onClick={() => routeTransitionLeave(() => router.push("/project"))}>
          Project
        </Button>
      </nav>
      <animated.div
        style={{
          position: "absolute",
          width: "100dvw",
          background: "#ff6d6d",
          ...springs,
        }}
      />
    </>
  )
}
