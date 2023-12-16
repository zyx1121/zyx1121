"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { signIn, signOut, useSession } from "next-auth/react"


export function Account() {
  const { data: session, status } = useSession()

  if (status === "unauthenticated") return (
    <div className="absolute right-0 p-6">
      <Button variant="outline" onClick={() => signIn("github")}>登入</Button>
    </div>
  )

  if (status === "authenticated") return (
    <DropdownMenu>
      <DropdownMenuTrigger className="absolute right-0 m-6 rounded-full">
        <Avatar>
          <AvatarImage src={session.user?.image!} alt={session.user?.name!} />
          <AvatarFallback />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-6 mt-2 rounded-lg">
        <div className="px-2 py-1 grid text-sm text-muted-foreground">
          <span>{session.user?.name!}</span>
          <span>{session.user?.email!}</span>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          登出
          <DropdownMenuShortcut>⇧⌘Ｑ</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
