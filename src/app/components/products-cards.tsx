"use client"

import React from "react"
import Link from "next/link"
import { FiHeart, FiShoppingCart } from "react-icons/fi"

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
    <div className="bg-[#004466] text-white p-4 rounded-md shadow-md transition duration-300 hover:bg-[#006699] hover:text-yellow-200 relative">
      {/* Favori ve Sepet İkonları */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button className="text-white hover:text-red-500">
          <FiHeart size={20} />
        </button>
        <button className="text-white hover:text-green-400">
          <FiShoppingCart size={20} />
        </button>
      </div>

      {/* Ürün Bilgisi Link */}
      <Link href={`/product/${product.id}`}>
        <div className="cursor-pointer">
          <img
            src={product.resim_url}
            alt={product.isim}
            className="w-full h-40 object-contain rounded bg-white p-2"
          />
          <h2 className="text-lg font-semibold mt-2">{product.isim}</h2>
          <p className="text-sm text-gray-300 line-clamp-2">{product.aciklama}</p>
          <p className="text-green-400 font-bold mt-2">{product.fiyat} ₺</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
