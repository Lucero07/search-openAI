import { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      onSearch(search.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10"
    >
      <input
        type="text"
        className="flex-grow px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700"
        placeholder="Ej: Necesito un portátil para edición de video"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-lg transition"
      >
        Buscar
      </button>
    </form>
  );
}
