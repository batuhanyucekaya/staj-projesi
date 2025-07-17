"use client"

import React from "react"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"

const menuItems = [
    {
        label: "PC Hardware",
        items: [
            ["/storage", "Storage"],
            ["/software", "Software"],
            ["/accessories", "Accessories"],
            ["/network", "Network"],
            ["/office-products", "Office Products"],
            ["/monitors", "Monitors"],
            ["/gaming-monitors", "Gaming Monitors"],
        ],
    },
    {
        label: "Headphones",
        items: [
            ["/bluetooth-headphones", "Bluetooth Headphones"],
            ["/gaming-headset", "Gaming Headset"],
            ["/wired-headphones", "Wired Headphones"],
            ["/in-ear-headphones", "In-Ear Headphones"],
            ["/over-ear-headphones", "Over-Ear Headphones"],
        ],
    },
    {
        label: "Phones & Accessories",
        items: [
            ["/android-phones", "Android Phones"],
            ["/ios-phones", "iOS Phones"],
            ["/ai-phones", "AI Phones"],
            ["/cases", "Cases"],
            ["/chargers", "Chargers"],
            ["/screen-protectors", "Screen Protectors"],
            ["/charging-cables", "Charging Cables"],
            ["/phone-holders", "Phone Holders"],
        ],
    },
    {
        label: "Computers & Accessories",
        items: [
            ["/desktop-pcs", "Desktop PCs"],
            ["/laptops", "Laptops"],
            ["/mac", "Mac"],
            ["/gaming-laptops", "Gaming Laptops"],
            ["/gaming-desktops", "Gaming Desktops"],
            ["/gaming-mouse", "Gaming Mouse"],
            ["/gaming-keyboard", "Gaming Keyboard"],
            ["/gaming-headset", "Gaming Headset"],
            ["/gaming-accessories", "Gaming Accessories"],
        ],
    },
    {
        label: "TV, Sound & Monitor",
        items: [
            ["/tvs", "TVs"],
            ["/monitors", "Monitors"],
            ["/speakers", "Speakers"],
        ],
    },
]



const navButtonStyle = "px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"

export default function Navbar() {
    return (
        <nav className="p-4 border-b border-gray-700 bg-gray-900 text-white">
            <ul className="flex items-center gap-6 w-full flex-wrap">

                {/* Left Menu */}
                {menuItems.map((menu, i) => (
                    <li className="relative group" key={i}>
                        <button className={navButtonStyle}>{menu.label}</button>
                        {menu.items.length > 0 && (
                            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 mt-2 z-10 w-[300px] text-black rounded-md">
                                <ul className="space-y-2">
                                    {menu.items.map(([href, child], idx) => (
                                        <ListItem key={idx} href={href}>
                                            {child}
                                        </ListItem>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}

                {/* Right Menu Items */}
                <div className="flex items-center gap-4 ml-auto">

                    {/* Search Box */}
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="bg-white text-black px-3 py-1 rounded-md w-48"
                    />

                    {/* Favorites */}
                    <div className="hover:text-red-500 cursor-pointer flex items-center gap-1">
                        <Heart size={20} /> <span className="text-sm">Favorites</span>
                    </div>

                    {/* Cart */}
                    <div className="hover:text-green-400 cursor-pointer flex items-center gap-1">
                        <ShoppingCart size={20} /> <span className="text-sm">Cart</span>
                    </div>

                    {/* Sorting */}
                    <select className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
                        <option value="">Sort by</option>
                        <option value="price_asc">Price (Low to High)</option>
                        <option value="price_desc">Price (High to Low)</option>
                        <option value="newest">Newest</option>
                        <option value="popular">Most Popular</option>
                    </select>

                    {/* Profile Menu */}
                    <li className="relative group">
                        <button className={navButtonStyle}>My Profile</button>
                        <div className="absolute right-0 hidden group-hover:block bg-white text-black shadow-lg mt-2 z-20 w-56 rounded-md p-2">
                            <p className="text-sm font-medium px-2 py-1">Account</p>
                            <ul className="text-sm space-y-1">
                                <li className="hover:bg-gray-100 px-2 py-1 rounded">My Profile</li>
                                <li className="hover:bg-gray-100 px-2 py-1 rounded">Settings</li>
                                <li className="hover:bg-gray-100 px-2 py-1 rounded">Support</li>
                                <li className="hover:bg-gray-100 px-2 py-1 rounded text-red-600">Logout</li>
                            </ul>
                        </div>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

function ListItem({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <li>
            <Link href={href} className="block hover:bg-gray-100 p-2 rounded-md">
                <p className="text-sm font-medium">{children}</p>
            </Link>
        </li>
    )
}