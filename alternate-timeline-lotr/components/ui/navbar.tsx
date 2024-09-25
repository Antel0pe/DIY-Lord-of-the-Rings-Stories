import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from "@/components/ui/input"; // Added Input import
import { Search } from "lucide-react"; // Added Search import

const Navbar: React.FC = () => {
    return (
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link className="mr-6 flex items-center space-x-2" href="/">
                        <span className="hidden font-bold sm:inline-block ml-8">LOTR Wiki</span>
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
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/map">
                            Map
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
    );
};

export default Navbar;
