'use client'

import Navbar from "@/components/ui/navbar"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Quick Links</h3>
              <Link className="text-muted-foreground hover:text-foreground" href="#first-age">
                First Age
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="#second-age">
                Second Age
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="#third-age">
                Third Age
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="#fourth-age">
                Fourth Age
              </Link>
            </div>
          </ScrollArea>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="space-y-6">
              <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Timeline of Middle-earth
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Explore the rich history of Middle-earth, spanning across four ages filled with epic events and legendary heroes.
                </p>
              </div>
              <div id="first-age">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  First Age
                </h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>Creation of Arda</li>
                  <li>Awakening of the Elves</li>
                  <li>War of the Jewels</li>
                  <li>Fall of Gondolin</li>
                </ul>
              </div>
              <div id="second-age">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Second Age
                </h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>Forging of the Rings of Power</li>
                  <li>Rise of Númenor</li>
                  <li>Last Alliance of Elves and Men</li>
                  <li>Defeat of Sauron</li>
                </ul>
              </div>
              <div id="third-age">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Third Age
                </h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>Finding of the One Ring</li>
                  <li>Formation of the Fellowship</li>
                  <li>War of the Ring</li>
                  <li>Destruction of the One Ring</li>
                </ul>
              </div>
              <div id="fourth-age">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Fourth Age
                </h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>Reign of King Elessar</li>
                  <li>Rebuilding of the Reunited Kingdom</li>
                  <li>Departure of the Elves</li>
                  <li>Passing of the Ringbearers</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}