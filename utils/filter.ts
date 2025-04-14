type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
};

type ProductMatch = Product & {
  matches: string[];
  reason: string;
};

export function filterProductsByKeywords(
  products: Product[],
  keywords: string[]
): ProductMatch[] {
  const results: ProductMatch[] = products
    .map((product) => {
      const description = product.description.toLowerCase();
      const matches = keywords.filter((keyword) =>
        description.includes(keyword.toLowerCase())
      );

      if (matches.length > 0) {
        return {
          ...product,
          matches,
          reason: `Coincidencias: ${matches.join(", ")}`,
        };
      }

      return null;
    })
    .filter(Boolean) as ProductMatch[];

  results.sort((a, b) => b.matches.length - a.matches.length);

  return results;
}
