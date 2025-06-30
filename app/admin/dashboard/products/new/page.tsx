'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

export default function CreateProductPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [promo, setPromo] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (!name || !price || !category || !imageFile) {
      alert('Nama produk, harga, kategori, dan gambar wajib diisi.');
      return;
    }

    const parsedPrice = parseInt(price);
    const promoPercentage = parseInt(promo);
    const hasPromo = !isNaN(promoPercentage) && promoPercentage > 0;
    const discountedPrice = hasPromo ? Math.round(parsedPrice * (1 - promoPercentage / 100)) : parsedPrice;

    const newProduct = {
      id: uuidv4(),
      name,
      category,
      image: imagePreview || '',
      originalPrice: parsedPrice,
      price: discountedPrice,
      isPromo: hasPromo,
      isRecommended: false,
    };

    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    storedProducts.push(newProduct);
    localStorage.setItem('products', JSON.stringify(storedProducts));

    alert('Produk berhasil disimpan');
    router.push('/admin/dashboard/products');
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-800">Tambah Produk</h1>
          <Button variant="ghost" onClick={() => router.push('/admin/dashboard/products')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nama Produk</Label>
            <Input
              id="name"
              type="text"
              placeholder="Input nama produk"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="price">Harga Produk</Label>
            <Input
              id="price"
              type="number"
              placeholder="Rp."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-medium text-slate-800">
                Kategori Produk
            </Label>
            <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 w-full border rounded px-3 py-2 text-sm text-slate-800 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-slate-300"
            >
                <option value="">Pilih Kategori</option>
                <option value="flower">Buket Uang</option>
                <option value="money">Buket Bunga</option>
                <option value="snack">Buket Snack</option>
            </select>
        </div>

          <div>
            <Label htmlFor="promo">Promo (%)</Label>
            <Input
              id="promo"
              type="number"
              placeholder="Contoh: 10 untuk 10% (kosongkan jika tidak ada)"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="image">Gambar Produk</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1"
            />
          </div>

          {imagePreview && (
            <div className="mt-4">
              <Image
                src={imagePreview}
                alt="Preview"
                width={200}
                height={200}
                className="rounded-md border border-slate-200"
              />
            </div>
          )}

          <Button onClick={handleSave} className="bg-slate-800 text-white hover:bg-slate-700">
            Simpan Produk
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}
