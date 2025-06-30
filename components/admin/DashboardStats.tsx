import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Tag, Star, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Total Produk',
    value: '48',
    icon: Package,
    change: '+12%',
    changeType: 'increase' as const,
  },
  {
    title: 'Produk Promo',
    value: '12',
    icon: Tag,
    change: '+8%',
    changeType: 'increase' as const,
  },
  {
    title: 'Rekomendasi',
    value: '8',
    icon: Star,
    change: '+5%',
    changeType: 'increase' as const,
  },
  {
    title: 'Penjualan Bulan Ini',
    value: 'Rp 24.5jt',
    icon: TrendingUp,
    change: '+23%',
    changeType: 'increase' as const,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                {stat.title}
              </CardTitle>
              <div className="h-8 w-8 bg-slate-100 rounded-lg flex items-center justify-center">
                <Icon className="h-4 w-4 text-slate-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1">
                {stat.change} dari bulan lalu
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}