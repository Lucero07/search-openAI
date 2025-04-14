type ProductCardProps = {
  name: string;
  description: string;
  razon: string;
};

export default function ProductCard({
  name,
  description,
  razon,
}: ProductCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-blue-600 font-medium">{razon}</p>
    </div>
  );
}
