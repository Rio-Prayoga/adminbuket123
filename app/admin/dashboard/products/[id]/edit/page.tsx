'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function EditProdukPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [productName, setProductName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    // Simulasi ambil data produk dari localStorage
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const product = products.find((p: any) => p.id === id);

    if (product) {
      setProductName(product.name);
      setImagePreview(product.image);
    }
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const updated = products.map((p: any) =>
      p.id === id
        ? {
            ...p,
            name: productName,
            image: imagePreview || p.image,
          }
        : p
    );
    localStorage.setItem('products', JSON.stringify(updated));
    alert('Produk berhasil diperbarui');
    router.push('/admin/dashboard/products');
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-800">Edit Produk</h1>
          <Button variant="ghost" onClick={() => router.push('/admin/dashboard/products')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nama Produk</Label>
            <Input
              id="name"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="image">Ganti Gambar (Opsional)</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
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

          <Button type="submit" className="bg-slate-800 text-white hover:bg-slate-700">
            Simpan Perubahan
          </Button>
        </form>
      </div>
    </AdminLayout>
  );
}
