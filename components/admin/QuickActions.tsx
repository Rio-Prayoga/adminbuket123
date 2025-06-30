import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FileText, Users, Settings } from 'lucide-react';

const quickActions = [
  {
    title: 'Tambah Produk',
    description: 'Tambah produk buket baru',
    icon: Plus,
    color: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    title: 'Lihat Laporan',
    description: 'Analisis penjualan',
    icon: FileText,
    color: 'bg-green-500 hover:bg-green-600',
  },
  {
    title: 'Kelola Pelanggan',
    description: 'Database pelanggan',
    icon: Users,
    color: 'bg-purple-500 hover:bg-purple-600',
  },
  {
    title: 'Pengaturan',
    description: 'Konfigurasi toko',
    icon: Settings,
    color: 'bg-slate-500 hover:bg-slate-600',
  },
];

export default function QuickActions() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">
          Aksi Cepat
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.title}
                variant="ghost"
                className="w-full justify-start h-auto p-4 hover:bg-slate-50"
              >
                <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mr-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-slate-800">{action.title}</p>
                  <p className="text-sm text-slate-500">{action.description}</p>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}