'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import ProductsTable from '@/components/admin/ProductsTable';
import ProductFilters from '@/components/admin/ProductFilters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function ProductsPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-800"></div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Kelola Produk</h1>
            <p className="text-slate-600 mt-1">
              Tambah, edit, dan kelola semua produk buket Anda
            </p>
          </div>
          <Button
            className="bg-slate-800 hover:bg-slate-700 text-white"
            onClick={() => router.push('/admin/dashboard/products/new')}
          >
            <Plus className="w-4 h-4 mr-2" />
            Tambah Produk
          </Button>
        </div>

        <ProductFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProductsTable selectedCategory={selectedCategory} />
      </div>
    </AdminLayout>
  );
}
