"use client"

import { useState } from "react"
import AdminNavbar from "../components/admin-navbar"
import UrunGuncelleFormu from "../../app/admin/urun-guncelle/page"
import UrunEkleFormu from "../../app/admin/urun-ekle/page"
import Musteriler from "./musteriler/page"

export default function AdminPage() {
    const [section, setSection] = useState("")

    return (
        <div className="flex min-h-screen">
            <AdminNavbar onSelect={(menu) => setSection(menu)} />

            <div className="p-6 text-white flex-1">
                <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
                {section === "urun-ekle" && <UrunEkleFormu />}
                {section === "urun-guncelle" && <UrunGuncelleFormu />}
                {section === "musteriler" && <Musteriler />}
            </div>
        </div>
    )
}
