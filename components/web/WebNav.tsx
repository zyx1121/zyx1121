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
    // <>
    //   <nav className="absolute flex flex-col gap-4 p-4 h-[100dvh] justify-center">
    //     <Button variant="ghost" disabled={pathname === "/" ? true : false} onClick={() => routeTransitionLeave(() => router.push("/"))}>
    //       Home
    //     </Button>
    //     <Button variant="ghost" disabled={pathname === "/note" ? true : false} onClick={() => routeTransitionLeave(() => router.push("/note"))}>
    //       Note
    //     </Button>
    //     <Button variant="ghost" disabled={pathname === "/project" ? true : false} onClick={() => routeTransitionLeave(() => router.push("/project"))}>
    //       Project
    //     </Button>
    //   </nav>
    //   <animated.div
    //     style={{
    //       position: "absolute",
    //       width: "100%",
    //       background: "#ff6d6d",
    //       ...springs,
    //     }}
    //   />
    // </>
    <>
      <nav className="absolute flex gap-2 p-6 h-[100dvh] justify-center mx-auto w-full">
        <Button variant={pathname === "/" ? "default" : "ghost"} onClick={() => pathname !== "/" && routeTransitionLeave(() => router.push("/"))}>
          Home
        </Button>
        <Button variant={pathname === "/note" ? "default" : "ghost"} onClick={() => pathname !== "/note" && routeTransitionLeave(() => router.push("/note"))}>
          有的沒的
        </Button>
        <Button variant={pathname === "/project" ? "default" : "ghost"} onClick={() => pathname !== "/project" && routeTransitionLeave(() => router.push("/project"))}>
          作品
        </Button>
        <Button variant={pathname === "/store" ? "default" : "ghost"} onClick={() => pathname !== "/store" && routeTransitionLeave(() => router.push("/store"))}>
          雜貨店
        </Button>
      </nav>
      <animated.div
        style={{
          position: "fixed",
          zIndex: 99,
          width: "100%",
          background: "#ff6d6d",
          ...springs,
        }}
      />
    </>
  )
}
