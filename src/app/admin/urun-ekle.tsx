"use client"

import React, { useState } from "react"

const kategoriler = [
    "PC Hardware",
    "Headphones",
    "Phones & Accessories",
    "Computers & Accessories",
    "TV, Sound & Monitor",
]

const altKategoriler: Record<string, string[]> = {
    "PC Hardware": ["Storage", "Accessories", "Network", "Office Products", "Monitors", "Gaming Monitors"],
    "Headphones": ["Bluetooth Headphones", "Gaming Headset", "Wired Headphones", "In-Ear Headphones", "Over-Ear Headphones"],
    "Phones & Accessories": ["Android Phones", "iOS Phones", "AI Phones", "Cases", "Chargers", "Screen Protectors", "Charging Cables", "Phone Holders"],
    "Computers & Accessories": ["Desktop PCs", "Laptops", "Mac", "Gaming Laptops", "Gaming Desktops", "Gaming Mouse", "Gaming Keyboard", "Gaming Headset", "Gaming Accessories"],
    "TV, Sound & Monitor": ["TVs", "Monitors", "Speakers"],
}

export default function UrunEkleFormu() {
    const [form, setForm] = useState({
        category: "",
        subcategory: "",
        price: "",
        stock: "",
        imageFile: null as File | null,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))

        if (name === "category") {
            setForm((prev) => ({ ...prev, subcategory: "" }))
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setForm((prev) => ({ ...prev, imageFile: file }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Ürün gönderildi:", form)
    }

    return (
        <div className="text-white max-w-xl mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-4">Yeni Ürün Ekle</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Kategori */}
                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded text-black"
                    required
                >
                    <option value="">Kategori Seç</option>
                    {kategoriler.map((kat, i) => (
                        <option key={i} value={kat}>{kat}</option>
                    ))}
                </select>

                {/* Alt Kategori */}
                {form.category && (
                    <select
                        name="subcategory"
                        value={form.subcategory}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded text-black"
                        required
                    >
                        <option value="">Alt Kategori Seç</option>
                        {altKategoriler[form.category]?.map((sub, i) => (
                            <option key={i} value={sub}>{sub}</option>
                        ))}
                    </select>
                )}

                {/* Fiyat */}
                <input
                    type="number"
                    name="price"
                    placeholder="Fiyat"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded text-black"
                    required
                />

                {/* Stok */}
                <input
                    type="number"
                    name="stock"
                    placeholder="Stok"
                    value={form.stock}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded text-black"
                    required
                />

                {/* Fotoğraf Yükleme */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full"
                    required
                />
                {form.imageFile && <p className="text-sm text-gray-300">Seçilen dosya: {form.imageFile.name}</p>}

                {/* Gönder Butonu */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Gönder
                </button>
            </form>
        </div>
    )
}
