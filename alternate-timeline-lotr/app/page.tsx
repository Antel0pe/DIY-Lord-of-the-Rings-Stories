import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Image src="/placeholder.svg?height=32&width=32" alt="LOTR Wiki Logo" width={32} height={32} />
              <span className="hidden font-bold sm:inline-block">LOTR Wiki</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/characters">
                Characters
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/locations">
                Locations
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/timeline">
                Timeline
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search LOTR Wiki" className="pl-8" type="search" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Quick Links</h3>
              <Link className="text-muted-foreground hover:text-foreground" href="/books/fellowship">
                The Fellowship
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="/books/two-towers">
                The Two Towers
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="/books/return-of-the-king">
                The Return of the King
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="/books/hobbit">
                The Hobbit
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="/books/silmarillion">
                The Silmarillion
              </Link>
            </div>
          </ScrollArea>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="space-y-6">
              <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  The Lord of the Rings
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien.
                  Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but
                  eventually developed into a much larger work.
                </p>
              </div>
              <div>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Plot Summary
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  The Lord of the Rings follows the saga of a group of sometimes reluctant heroes who set forth to save
                  their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive
                  knowledge of philology and folklore.
                </p>
              </div>
              <div>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Main Characters
                </h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>Frodo Baggins</li>
                  <li>Samwise Gamgee</li>
                  <li>Gandalf</li>
                  <li>Aragorn</li>
                  <li>Legolas</li>
                  <li>Gimli</li>
                </ul>
              </div>
              <div>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Books in the Series
                </h2>
                <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                  <li>The Fellowship of the Ring</li>
                  <li>The Two Towers</li>
                  <li>The Return of the King</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="hidden text-sm xl:block">
            <div className="sticky top-18 -mt-10 pt-4">
              <ScrollArea className="pb-10">
                <div className="sticky top-18 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                  <div className="space-y-2">
                    <p className="font-medium">On this page</p>
                    <ul className="m-0 list-none">
                      <li>
                        <Link className="inline-block py-1 text-muted-foreground hover:text-foreground" href="#plot-summary">
                          Plot Summary
                        </Link>
                      </li>
                      <li>
                        <Link className="inline-block py-1 text-muted-foreground hover:text-foreground" href="#main-characters">
                          Main Characters
                        </Link>
                      </li>
                      <li>
                        <Link className="inline-block py-1 text-muted-foreground hover:text-foreground" href="#books-in-the-series">
                          Books in the Series
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </main>
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 LOTR Wiki. All rights reserved.
          </p>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon">
              <Image src="/placeholder.svg?height=24&width=24" alt="Twitter" width={24} height={24} />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Image src="/placeholder.svg?height=24&width=24" alt="Facebook" width={24} height={24} />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Image src="/placeholder.svg?height=24&width=24" alt="Instagram" width={24} height={24} />
              <span className="sr-only">Instagram</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}