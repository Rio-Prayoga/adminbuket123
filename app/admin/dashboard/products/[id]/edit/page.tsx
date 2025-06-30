'use client';

import { useState, useEffect } from 'react';

export default function EditProdukPage({ params }: { params: { id: string } }) {
  const [productName, setProductName] = useState('');
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    // Misalnya ambil data produk berdasarkan ID dari backend
    setProductName('Nama Produk Lama');
  }, [params.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Edit:', { id: params.id, productName, image });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Edit Produk ID: {params.id}</h1>

      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="border p-2 w-full"
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="w-full"
      />

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Preview"
          className="w-48 rounded mt-2"
        />
      )}

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Simpan Perubahan
      </button>
    </form>
  );
}
