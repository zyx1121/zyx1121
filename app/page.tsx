"use client"

import Image from "next/image"

export default function Home() {
  return (
    <main className="w-[100dvw] h-[100dvh] grid items-center justify-center">
      <div className="flex gap-16">
        <Image src="https://avatars.githubusercontent.com/u/98001197?v=4" alt="avatar" width="256" height="256" className="rounded-full" />
        <div className="grid gap-4 items-center w-80 my-8">
          <h1>Loki</h1>
          <h6>詹詠翔</h6>
          <p>大三的小廢物, 電子系, 在這分享一些自身所學與經驗.</p>
        </div>
      </div>
      {/* <Separator orientation="vertical" className="m-auto" /> */}
    </main>
  )
}
