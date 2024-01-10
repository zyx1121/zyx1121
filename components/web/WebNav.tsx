"use client"

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export function WebNav() {
  const router = useRouter()

  return (
    <div className="absolute flex w-full justify-center">
      <nav className="absolute flex m-4 p-2 z-10 rounded-lg backdrop-blur">
        <Button variant="ghost" onClick={() => router.push("/")}>
          關於
        </Button>
        <Button variant="ghost" onClick={() => router.push("/note")}>
          筆記
        </Button>
        <Button variant="ghost" onClick={() => router.push("/project")}>
          專案
        </Button>
      </nav>
    </div>
  )
}
