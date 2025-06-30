import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const recentOrders = [
  {
    id: '#ORD-001',
    customer: 'Sari Wulandari',
    product: 'Buket Mawar Romantis',
    amount: 'Rp 450.000',
    status: 'completed',
    date: '2 jam lalu',
  },
  {
    id: '#ORD-002',
    customer: 'Budi Santoso',
    product: 'Money Bouquet Premium',
    amount: 'Rp 850.000',
    status: 'processing',
    date: '4 jam lalu',
  },
  {
    id: '#ORD-003',
    customer: 'Maya Sari',
    product: 'Snack Bouquet Kids',
    amount: 'Rp 320.000',
    status: 'completed',
    date: '6 jam lalu',
  },
  {
    id: '#ORD-004',
    customer: 'Andi Wijaya',
    product: 'Buket Bunga Wisuda',
    amount: 'Rp 380.000',
    status: 'pending',
    date: '8 jam lalu',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'processing':
      return 'bg-blue-100 text-blue-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'completed':
      return 'Selesai';
    case 'processing':
      return 'Diproses';
    case 'pending':
      return 'Menunggu';
    default:
      return status;
  }
};

export default function RecentOrders() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">
          Pesanan Terbaru
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-slate-800">{order.id}</span>
                  <Badge className={getStatusColor(order.status)}>
                    {getStatusText(order.status)}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600">{order.customer}</p>
                <p className="text-sm text-slate-500">{order.product}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-slate-800">{order.amount}</p>
                <p className="text-xs text-slate-500">{order.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}