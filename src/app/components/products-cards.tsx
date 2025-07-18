"use client"

import React from "react"
import Link from "next/link"

interface ProductCardProps {
  product: {
    id: number
    isim: string
    aciklama: string
    fiyat: number
    resim_url: string
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-all cursor-pointer">
        <img
          src={product.resim_url}
          alt={product.isim}
          className="w-full h-40 object-cover rounded"
        />
        <h2 className="text-lg font-semibold mt-2 text-white">{product.isim}</h2>
        <p className="text-sm text-gray-400 line-clamp-2">{product.aciklama}</p>
        <p className="text-green-400 font-bold mt-2">{product.fiyat} ₺</p>
      </div>
    </Link>
  )
}

export default ProductCard
