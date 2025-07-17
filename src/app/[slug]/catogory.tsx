import React from "react"
import { useSearchParams } from "next/navigation"

export default function CategoryPage({ params }: { params: { slug: string } }) {
    const categoryName = params.slug

    return (
        <div className="p-4 text-white">
            <h1 className="text-2xl font-bold mb-4">Category: {categoryName.replace(/-/g, " ")}</h1>


            <p>Products for {categoryName} will be listed here.</p>
        </div>
    )
}
