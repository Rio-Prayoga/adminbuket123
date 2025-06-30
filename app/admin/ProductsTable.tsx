// components/admin/ProductsTable.tsx
import React from 'react';
import { Product } from '@/lib/types'; // ✅ PASTIKAN IMPOR INI ADA DAN FILE 'types.ts' BENAR

interface ProductsTableProps {
  selectedCategory: string;
  products: Product[]; // Tambahkan ini
}

export default function ProductsTable({ selectedCategory, products }: ProductsTableProps) {
  // Filter produk berdasarkan kategori
  const filteredProducts = products.filter(product =>
    selectedCategory === 'all' ? true : product.category === selectedCategory
  );

  return (
    <div className="overflow-x-auto rounded-md border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Nama Produk</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Harga</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Stok</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Kategori</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Rp {product.price.toLocaleString('id-ID')}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {/* Tambahkan tombol edit/hapus di sini jika diperlukan */}
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Hapus</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center text-sm text-slate-500">Tidak ada produk ditemukan.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}