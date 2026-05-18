import React from 'react'
import Link from 'next/link'
import { Logo } from '../shared/logo'

const Footer = () => {
    return (
        <footer className="bg-black pt-20">
            <div className="container px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2">
                        <Logo variant="white" width={60} height={50} className="w-60! h-auto! mb-6" />
                        <p className="text-white max-w-sm mb-8">
                            Premium custom apparel, DTF, UV stickers, banners & embroidery. Fast turnaround, <br /> no minimums!
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Shop</h4>
                        <ul className="space-y-4 text-white">
                            <li><Link href="#" className="hover:text-primary transition-colors">All Products</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Best Sellers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-white">
                            <li><Link href="#" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Return Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-white">
                            <li><Link href="#" className="hover:text-primary transition-colors">Instagram</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Twitter</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Email Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden flex flex-col items-center justify-end h-[30vh] lg:h-[50vh] [clip-path:inset(0_0_0_0)]">
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(to right, transparent 50%, var(--primary) 50%)`,
                        backgroundSize: '4px 100%'
                    }}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10" />

                <h2 className="fixed left-1/2 -translate-x-1/2 bottom-[16%] md:bottom-[10%] z-20 font-heading text-[19.5vw] leading-none font-black text-white select-none">
                    MODFIRST
                </h2>
            </div>

            <div className="bg-black py-8 border-t border-zinc-900">
                <div className="container px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-white text-sm">
                    <p>© 2026 MODFIRST. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
