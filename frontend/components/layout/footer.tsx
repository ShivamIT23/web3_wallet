'use client';
import Link from "next/link";
import { Shield, Github, FileText, Code, Lock, AlertTriangle, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const footerSections = [
        {
            title: "Product",
            links: [
                { name: "Create Wallet", href: "/create" },
                { name: "Import Wallet", href: "/import" },
                { name: "Supported Networks", href: "/networks" },
                { name: "Security Features", href: "/security" },
            ]
        },
        {
            title: "Developers",
            links: [
                { name: "Documentation", href: "/docs", icon: FileText },
                { name: "GitHub", href: "https://github.com", icon: Github, external: true },
                { name: "API / SDK", href: "/api", icon: Code },
                { name: "Changelog", href: "/changelog" },
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Help Center", href: "/help" },
                { name: "Security Audits", href: "/audits" },
                { name: "Bug Bounty", href: "/bounty" },
                { name: "FAQs", href: "/faq" },
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
            ]
        },
        {
            title: "Community",
            links: [
                { name: "X (Twitter)", href: "https://twitter.com", external: true },
                { name: "Discord", href: "https://discord.com", external: true },
                { name: "Telegram", href: "https://telegram.org", external: true },
            ]
        }
    ];

    return (
        <footer className="w-full mt-auto border-t border-primary/10">
            {/* Main Footer Content */}
            <section className="glass-frosted">
                <div className="max-w-7xl mx-auto px-[3vw] py-12 lg:py-16">
                    {/* Top Section - Brand & Tagline */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Image
                                    alt="Logo"
                                    src={"/logo_main.png"}
                                    width={50}
                                    height={50}
                                    className="bg-transparent"
                                />
                                <h2 className="text-2xl font-bold">Wallet Guardian</h2>
                            </div>
                            <p className="text-lg font-semibold text-foreground">
                                Secure. Simple. Self-Custody.
                            </p>
                            <p className="text-muted-foreground max-w-md leading-relaxed">
                                Wallet Guardian is a non-custodial crypto wallet built to protect your assets
                                while giving you full control across chains. The ultimate shield for your digital sovereignty.
                            </p>

                            {/* Quick Actions */}
                            <div className="flex flex-wrap gap-3 pt-4 font-code">
                                <Link
                                    href="/docs"
                                    className="footer-cta-link glow-border-accent"
                                >
                                    <FileText className="w-4 h-4" />
                                    <span>Documentation</span>
                                </Link>
                                <Link
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-cta-link glow-border-accent hover"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>GitHub</span>
                                </Link>
                                <Link
                                    href="/api"
                                    className="footer-cta-link glow-border-accent hover"
                                >
                                    <Code className="w-4 h-4" />
                                    <span>SDK</span>
                                </Link>
                            </div>
                        </div>

                        {/* Security Highlights */}
                        <div className="space-y-4 flex flex-col items-end text-right lg:items-end lg:text-right">
                            <div className="flex items-center gap-2">
                                <Lock className="w-5 h-5 text-accent" />
                                <h3 className="text-lg font-semibold">Security & Trust</h3>
                            </div>
                            <div className="flex flex-col items-end space-y-3 w-full">
                                <Link href="/security" className="footer-security-link flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    <span>How we keep you safe</span>
                                </Link>
                                <Link href="/audits" className="footer-security-link flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    <span>Third-party verification</span>
                                </Link>
                                <Link href="/bounty" className="footer-security-link flex items-center gap-2">
                                    <Code className="w-4 h-4" />
                                    <span>Help us find bugs</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
                        {footerSections.map((section) => (
                            <div key={section.title} className={`space-y-4  ${section.title == "Community" && "text-end"}`}>
                                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => {
                                        const hasIcon = 'icon' in link && link.icon;
                                        const Icon = hasIcon ? link.icon : undefined;
                                        const isExternal = 'external' in link && link.external;
                                        return (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    target={isExternal ? "_blank" : undefined}
                                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                                    className="footer-link group"
                                                >
                                                    {Icon && <Icon className="w-3.5 h-3.5" />}
                                                    <span>{link.name}</span>
                                                    {isExternal && (
                                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    )}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Security Reminder */}
                    <div className="glass-light p-6 rounded-xl mb-8 border border-yellow-500/20 dark:border-yellow-400/20">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-yellow-600 dark:text-yellow-400" />
                            <div className="space-y-2">
                                <p className="font-semibold text-foreground">
                                    Security Reminder
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <strong>If you lose your recovery phrase, you lose your assets.</strong> Wallet Guardian
                                    cannot recover it for you. Wallet Guardian is a non-custodial wallet. We do not store
                                    private keys, seed phrases, or user funds. You are solely responsible for safeguarding
                                    your recovery phrase. Crypto assets involve risk. <strong>Be your own bank, responsibly.</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-primary/10">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span>© {currentYear} Wallet Guardian. All rights reserved.</span>
                            <span className="hidden md:inline">•</span>
                            <span>Built for the decentralized future.</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                            <Link href="/privacy" className="footer-legal-link">
                                Privacy
                            </Link>
                            <span className="text-muted-foreground">•</span>
                            <Link href="/terms" className="footer-legal-link">
                                Terms
                            </Link>
                            <span className="text-muted-foreground">•</span>
                            <Link href="/cookies" className="footer-legal-link">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Bottom Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
            </section>
        </footer>
    );
}

export default Footer;
