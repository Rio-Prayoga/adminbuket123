export default function ProductDetail({ params }: { params: { id: string } }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Detail Produk</h1>
      <p>ID Produk: {params.id}</p>
      {/* Nanti bisa ambil data detail dari backend pakai params.id */}
    </div>
  );
}
