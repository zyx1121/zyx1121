"use client"

import { Button } from "@/components/ui/button"
import { animated, useSpring } from "@react-spring/web"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Note() {

  const router = useRouter()

  const [springs, api] = useSpring(() => ({
    from: { height: "100dvh", y: "0" },
  }))

  useEffect(() => {
    api.start({
      from: { height: "100dvh" },
      to: { height: "0" },
    })
  })

  return (
    <>
      <animated.div
        style={{
          position: "absolute",
          width: "100dvw",
          background: "#ff6d6d",
          ...springs,
        }} />
      <main className="p-6">
        <Button onClick={() => {
          api.start({
            from: { height: "100dvh", y: "100dvh" },
            to: { height: "100dvh", y: "0dvh" },
            onResolve: () => {
              router.push("/")
            }
          })
        }}>
          Back
        </Button>
      </main>
    </>
  )

}
