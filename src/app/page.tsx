import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/random-urun", {
    cache: "no-store",
  })
  const products = await res.json()

  return (
    <div className="p-6 text-blue-700">
      <h1 className="text-3xl font-bold mb-6">İndirimli Ürünler</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700 transition relative"
          >
            <Link href={`/product/${product.id}`}>
              <img
                src={product.resim_url}
                alt={product.isim}
                className="w-full h-40 object-contain bg-white p-2 rounded"
              />

              <h2 className="text-lg font-bold mt-2">{product.isim}</h2>
              <p className="text-sm text-gray-400 line-clamp-2">{product.aciklama}</p>

              <div className="mt-2">
                <p className="text-red-400 line-through">{product.fiyat} ₺</p>
                <p className="text-green-400 font-bold text-xl">
                  {(product.fiyat * 0.25).toFixed(2)} ₺
                </p>
              </div>
            </Link>

            {/* Kalp ve Sepet ikonları */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-red-500"
                title="Favorilere Ekle"
              >
                ❤️
              </button>
              <button
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-yellow-400"
                title="Sepete Ekle"
              >
                🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
