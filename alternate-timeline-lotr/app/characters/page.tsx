'use client'

import Navbar from "@/components/ui/navbar" // Added Navbar import
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground"> {/* Added layout classes */}
      <Navbar /> {/* Added Navbar component */}
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Quick Links</h3>
              <Link className="text-muted-foreground hover:text-foreground" href="#hobbits">
                Hobbits
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="#humans">
                Humans
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="#elves">
                Elves
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="#dwarves">
                Dwarves
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="#wizards">
                Wizards
              </Link>
            </div>
          </ScrollArea>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="space-y-6">
              <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Characters of Middle-earth
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Explore the diverse and rich cast of characters that inhabit the world of Middle-earth in J.R.R. Tolkien's legendary works.
                </p>
              </div>
              <div id="hobbits">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Hobbits
                </h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>Frodo Baggins</li>
                  <li>Samwise Gamgee</li>
                  <li>Peregrin Took</li>
                  <li>Meriadoc Brandybuck</li>
                  <li>Bilbo Baggins</li>
                </ul>
              </div>
              <div id="humans">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Humans
                </h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>Aragorn</li>
                  <li>Boromir</li>
                  <li>Faramir</li>
                  <li>Éowyn</li>
                  <li>Théoden</li>
                </ul>
              </div>
              <div id="elves">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Elves
                </h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>Legolas</li>
                  <li>Galadriel</li>
                  <li>Elrond</li>
                  <li>Arwen</li>
                  <li>Thranduil</li>
                </ul>
              </div>
              <div id="dwarves">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Dwarves
                </h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>Gimli</li>
                  <li>Thorin Oakenshield</li>
                  <li>Balin</li>
                  <li>Dwalin</li>
                  <li>Glóin</li>
                </ul>
              </div>
              <div id="wizards">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Wizards
                </h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>Gandalf</li>
                  <li>Saruman</li>
                  <li>Radagast</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}