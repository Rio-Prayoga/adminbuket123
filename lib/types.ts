// lib/types.ts
export interface Product {
  id: string; // ✅ PERBAIKAN: Ganti ke string karena Date.now().toString() menghasilkan string
  name: string;
  description?: string; // Opsional jika kadang tidak ada
  price: number;
  stock: number; // ✅ PERBAIKAN: Pastikan ini ada
  category: string; // ✅ PERBAIKAN: Pastikan ini ada
  image?: string; // Opsional jika kadang tidak ada
  createdAt?: string; // Opsional: Untuk timestamp pembuatan
  updatedAt?: string; // Opsional: Untuk timestamp update
}