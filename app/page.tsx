"use client"

import Image from "next/image"

export default function Home() {
  return (
    <main className="w-[100dvw] h-[100dvh] grid items-center justify-center">
      <div className="flex gap-16 w-full">
        <Image src="https://avatars.githubusercontent.com/u/98001197?v=4" alt="avatar" width="256" height="256" className="rounded-full" />
        <div className="gap-4 items-center my-8 hidden lg:grid">
          <h1>Loki</h1>
          <p>詹詠翔</p>
          <p>彰化人, 台科大電子系三年級, 在這分享一些有的沒的</p>
        </div>
      </div>
    </main>
  )
}
