'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Eye } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: 'money' | 'flower' | 'snack';
  isPromo: boolean;
  isRecommended: boolean;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Buket Mawar Romantis',
    image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    price: 450000,
    originalPrice: 500000,
    category: 'flower',
    isPromo: true,
    isRecommended: true,
  },
  {
    id: '2',
    name: 'Money Bouquet Premium',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    price: 850000,
    category: 'money',
    isPromo: false,
    isRecommended: true,
  },
  {
    id: '3',
    name: 'Snack Bouquet Kids',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    price: 320000,
    category: 'snack',
    isPromo: false,
    isRecommended: false,
  },
  {
    id: '4',
    name: 'Buket Bunga Wisuda',
    image: 'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    price: 380000,
    originalPrice: 420000,
    category: 'flower',
    isPromo: true,
    isRecommended: false,
  },
  {
    id: '5',
    name: 'Money Bouquet Graduation',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    price: 650000,
    category: 'money',
    isPromo: false,
    isRecommended: true,
  },
  {
    id: '6',
    name: 'Snack Bouquet Premium',
    image: 'https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    price: 485000,
    category: 'snack',
    isPromo: false,
    isRecommended: false,
  },
];

interface ProductsTableProps {
  selectedCategory: string;
}

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'money':
      return 'Money Bouquet';
    case 'flower':
      return 'Bunga';
    case 'snack':
      return 'Snack';
    default:
      return category;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'money':
      return 'bg-green-100 text-green-800';
    case 'flower':
      return 'bg-pink-100 text-pink-800';
    case 'snack':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

export default function ProductsTable({ selectedCategory }: ProductsTableProps) {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const router = useRouter();

  const filteredProducts = products.filter(product =>
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const togglePromo = (id: string) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, isPromo: !product.isPromo } : product
    ));
  };

  const toggleRecommended = (id: string) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, isRecommended: !product.isRecommended } : product
    ));
  };

  const handleView = (id: string) => {
    router.push(`/admin/dashboard/products/${id}`);
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/dashboard/products/${id}/edit`);
  };

  const handleDelete = (id: string) => {
    const confirmed = window.confirm('Yakin ingin menghapus produk ini?');
    if (confirmed) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-0">
        {/* Desktop Table */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 font-medium text-slate-600">Produk</th>
                  <th className="text-left p-4 font-medium text-slate-600">Harga</th>
                  <th className="text-left p-4 font-medium text-slate-600">Kategori</th>
                  <th className="text-center p-4 font-medium text-slate-600">Promo</th>
                  <th className="text-center p-4 font-medium text-slate-600">Rekomendasi</th>
                  <th className="text-center p-4 font-medium text-slate-600">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{product.name}</p>
                          <p className="text-sm text-slate-500">#{product.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <p className="font-semibold text-slate-800">
                          {formatPrice(product.price)}
                        </p>
                        {product.originalPrice && (
                          <p className="text-sm text-slate-500 line-through">
                            {formatPrice(product.originalPrice)}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={getCategoryColor(product.category)}>
                        {getCategoryLabel(product.category)}
                      </Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Switch
                        checked={product.isPromo}
                        onCheckedChange={() => togglePromo(product.id)}
                      />
                    </td>
                    <td className="p-4 text-center">
                      <Switch
                        checked={product.isRecommended}
                        onCheckedChange={() => toggleRecommended(product.id)}
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleView(product.id)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleEdit(product.id)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700"
                          onClick={() => handleDelete(product.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden p-4 space-y-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-slate-800 truncate">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-2">#{product.id}</p>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-slate-800">
                        {formatPrice(product.price)}
                      </p>
                      {product.originalPrice && (
                        <p className="text-sm text-slate-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </p>
                      )}
                    </div>
                    <Badge className={getCategoryColor(product.category)}>
                      {getCategoryLabel(product.category)}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-slate-600">Promo</span>
                        <Switch
                          checked={product.isPromo}
                          onCheckedChange={() => togglePromo(product.id)}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-slate-600">Rekomendasi</span>
                        <Switch
                          checked={product.isRecommended}
                          onCheckedChange={() => toggleRecommended(product.id)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => handleView(product.id)}>
                      <Eye className="w-4 h-4 mr-2" />
                      Lihat
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => handleEdit(product.id)}>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
