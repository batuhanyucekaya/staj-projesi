"use client"

import { useState } from "react"
import AdminNavbar from "../components/admin-navbar"
import UrunEkleFormu from "../admin/urun-ekle"

export default function AdminPage() {
    const [section, setSection] = useState("")

    return (
        <div className="flex min-h-screen">
            <AdminNavbar onSelect={(menu) => setSection(menu)} />

            <div className="p-6 text-white flex-1">
                <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

                {/* Seçilen menüye göre gösterim */}
                {section === "Ürün Ekle" && <UrunEkleFormu />}
                {section === "Ürün Güncelle" && <p>Güncelleme Formu gelecek</p>}
                {section === "Müşteri Bilgileri" && <p>Müşteri bilgileri tablosu gelecek</p>}
            </div>
        </div>
    )
}
