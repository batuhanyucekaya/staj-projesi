import { pool } from "../../lib/db"

export default async function ProductDetail({ params }: { params: { id: string } }) {
    const query = `SELECT * FROM urunler WHERE id = $1`
    const { rows } = await pool.query(query, [params.id])
    const product = rows[0]

    if (!product) return <p>Product not found.</p>

    return (
        <div className="p-6 text-white">
            <h1 className="text-2xl font-bold mb-4">{product.isim}</h1>
            <img src={product.resim_url} alt={product.isim} className="w-64 rounded" />
            <p className="text-gray-400 mt-2">{product.aciklama}</p>
            <p className="text-green-400 font-bold text-lg mt-2">{product.fiyat} ₺</p>
        </div>
    )
}
