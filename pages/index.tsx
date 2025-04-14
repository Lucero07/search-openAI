import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { useKeywords } from "@/hooks/useKeywords";
import { filterProductsByKeywords } from "@/utils/filter";
import { useEffect, useState } from "react";

//Move to types
type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
};

type Result= Product & {
  reason: string;
  matches: string[];
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [results, setResults] = useState<Result[]>([]);

  const {fetchKeywords, aiMessage, isLoading } = useKeywords();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSearch = async (query: string) => {
    const keywords = await fetchKeywords(query);
    const matches = filterProductsByKeywords(products, keywords);
    setResults(matches);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
          Buscador de Productos Inteligente 🛒
        </h1>
        <SearchBar onSearch={handleSearch} />
        {isLoading && (
          <div className="mb-6 text-gray-500 italic text-center">
            Analizando búsqueda:{" "}
          </div>
        )}

        {aiMessage && (
          <div className="mb-6 text-center text-gray-600">
            <span className="font-semibold text-blue-600">
              Palabras clave detectadas:
            </span>{" "}
            {aiMessage}
          </div>
        )}
        {results.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                razon={product.reason}
              />
            ))}
          </div>
        ) : !isLoading ? (
          <p className="text-center text-gray-500 mt-12">
            No hay resultados aún. Intenta una búsqueda 👀
          </p>
        ) : null}
      </div>
    </div>
  );
}
