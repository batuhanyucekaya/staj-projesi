"use client"

import { useEffect, useState } from "react"
import { FiEdit, FiTrash2 } from "react-icons/fi"

interface Musteri {
    id: number
    ad: string
    soyad: string
    email: string
    telefon: string
}

export default function MusteriBilgileriPage() {
    const [musteriler, setMusteriler] = useState<Musteri[]>([])

    useEffect(() => {
        const fetchMusteriler = async () => {
            try {
                const res = await fetch("/api/musteriler", { cache: "no-store" })
                const data = await res.json()
                setMusteriler(data)
            } catch (error) {
                console.error("Müşteri verileri alınamadı:", error)
            }
        }

        fetchMusteriler()
    }, [])

    return (
        <div className="p-6 bg-[#e6f2ff] min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">Müşteri Bilgileri</h1>
            <div className="space-y-4">
                {musteriler.map((musteri) => (
                    <div
                        key={musteri.id}
                        className="relative bg-white text-black p-4 rounded-md shadow hover:bg-gray-100 transition group"
                    >

                        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                            <button
                                className="text-blue-500 hover:text-blue-700"
                                title="Düzenle"
                            >
                                <FiEdit size={20} />
                            </button>
                            <button
                                className="text-red-500 hover:text-red-700"
                                title="Sil"
                            >
                                <FiTrash2 size={20} />
                            </button>
                        </div>

                        {/* Müşteri Bilgileri */}
                        <p><strong>Ad:</strong> {musteri.ad}</p>
                        <p><strong>Soyad:</strong> {musteri.soyad}</p>
                        <p><strong>Email:</strong> {musteri.email}</p>
                        <p><strong>Telefon:</strong> {musteri.telefon}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
