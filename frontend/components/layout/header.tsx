'use client';
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "../common/theme-changer"
import { useState } from "react"
import { Button } from "../ui/button";

function Header() {
    const [activeNav, setActiveNav] = useState('Home')

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Blogs', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="w-full fixed top-0 left-0 right-0 h-20 z-50">
            {/* Glassmorphism Header Background */}
            <section className="w-full h-full px-[3vw] glass-frosted flex justify-between items-center">
                {/* Logo */}
                <div id="logo" className="logo-container shrink-0">
                    <Link href="/" className="flex items-center">
                        <Image
                            alt="Logo"
                            src={"/logo_main.png"}
                            width={70}
                            height={70}
                            className="bg-transparent"
                        />
                    </Link>
                </div>

                {/* Navigation */}
                <nav id="nav-items" className="flex-1 flex justify-center items-center max-md:hidden">
                    <ul className="flex justify-center items-center gap-2 lg:gap-3 xl:gap-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setActiveNav(item.name)}
                                    className={`
                                        nav-link relative px-4 py-2 rounded-lg
                                        text-sm font-medium transition-all duration-300
                                        ${activeNav === item.name
                                            ? 'active text-primary dark:text-accent glow-border-accent'
                                            : 'text-muted-foreground hover:text-foreground'
                                        }
                                    `}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Theme Toggle */}
                <div id="theme-toggle" className="shrink-0">
                    <Button variant={"link"} ><Link href="/login">Login</Link></Button>
                    <ModeToggle />
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
            </section>
        </header>
    )
}

export default Header