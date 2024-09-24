'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Quick Links</h3>
            <Link className="text-muted-foreground hover:text-foreground" href="#shire">
              The Shire
            </Link>
            <Link className="text-muted-foreground hover:text-foreground" href="#rivendell">
              Rivendell
            </Link>
            <Link className="text-muted-foreground hover:text-foreground" href="#mordor">
              Mordor
            </Link>
            <Link className="text-muted-foreground hover:text-foreground" href="#gondor">
              Gondor
            </Link>
            <Link className="text-muted-foreground hover:text-foreground" href="#rohan">
              Rohan
            </Link>
          </div>
        </ScrollArea>
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">
          <div className="space-y-6">
            <div>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Locations of Middle-earth
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Discover the breathtaking and diverse landscapes of Middle-earth, from the peaceful Shire to the fiery depths of Mordor.
              </p>
            </div>
            <div id="shire">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                The Shire
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The Shire is a peaceful region inhabited by hobbits, known for its rolling hills, green fields, and cozy hobbit-holes.
              </p>
            </div>
            <div id="rivendell">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Rivendell
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Also known as Imladris, Rivendell is an elven outpost in the foothills of the Misty Mountains, founded by Elrond.
              </p>
            </div>
            <div id="mordor">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Mordor
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                A dark and barren land in the southeast of Middle-earth, Mordor is the realm of the Dark Lord Sauron.
              </p>
            </div>
            <div id="gondor">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Gondor
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The greatest kingdom of Men in the Third Age, Gondor is known for its white city, Minas Tirith.
              </p>
            </div>
            <div id="rohan">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Rohan
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The land of the horse-lords, Rohan is known for its vast grasslands and skilled riders.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}