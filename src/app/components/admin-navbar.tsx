"use client"

import React, { useState } from "react"

type MenuItem = "urun-ekle" | "urun-guncelle" | "musteriler"

export default function AdminNavbar({
    onSelect,
}: {
    onSelect: (menu: MenuItem) => void
}) {
    const [active, setActive] = useState<MenuItem>("urun-ekle")

    const handleClick = (item: MenuItem) => {
        setActive(item)
        onSelect(item)
    }

    const baseStyle = "w-full text-left px-4 py-2 rounded hover:bg-gray-700"
    const activeStyle = "bg-gray-700 font-semibold"

    return (
        <div className="bg-gray-900 text-white w-60 min-h-screen p-4">
            <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
            <div className="flex flex-col gap-2">
                <button
                    className={`${baseStyle} ${active === "urun-ekle" ? activeStyle : ""}`}
                    onClick={() => handleClick("urun-ekle")}
                >
                    Ürün Ekle
                </button>
                <button
                    className={`${baseStyle} ${active === "urun-guncelle" ? activeStyle : ""}`}
                    onClick={() => handleClick("urun-guncelle")}
                >
                    Ürün Güncelle
                </button>
                <button
                    className={`${baseStyle} ${active === "musteriler" ? activeStyle : ""}`}
                    onClick={() => handleClick("musteriler")}
                >
                    Müşteri Bilgileri
                </button>
            </div>
        </div>
    )
}
