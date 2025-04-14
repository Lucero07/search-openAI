# 🔎 Buscador Inteligente de Productos con OpenAI

Este proyecto es una aplicación web construida con **Next.js** y **Tailwind CSS** que permite buscar productos (como celulares, laptops y equipos de cómputo) escribiendo en lenguaje natural. La app utiliza **GPT-3.5-Turbo de OpenAI** para extraer palabras clave y filtrar productos relevantes desde un archivo local JSON.

---

## 🚀 Funcionalidades

- 🔍 Búsqueda en lenguaje natural: "Quiero una laptop para edición de video"
- 🧠 Extracción de palabras clave usando IA (OpenAI)
- 🎯 Coincidencias relevantes con productos locales
- 📦 Muestra hasta 5 sugerencias en tarjetas (cards)
- 📄 Base de datos simulada en `products.json`
- 🌐 UI responsive con Tailwind CSS

---

## 🛠 Tecnologías Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI API (GPT-3.5)](https://platform.openai.com/docs/)
- TypeScript

---

## 📂 Estructura del Proyecto

-  /public/data/products.json        # Base de datos local de productos
-  /pages/index.tsx                  # Página principal
-  /pages/api/keywords.ts           # Endpoint para consultar OpenAI
-  /hooks/useKeywords.ts            # Hook para manejar extracción de palabras
-  /utils/openai.ts                 # Funciones para procesar respuestas de OpenAI
-  /utils/filter.ts                 # Lógica para filtrar productos por keywords
-  /components/ProductCard.tsx      # Componente visual de cada producto

---

## ⚙️ Instalación y Uso

1. **Clona el repositorio:**

```bash
git clone https://github.com/Lucero07/search-openAI.git
cd search-openAI
add OPENAI_API_KEY (.env.local.example)
npm run dev

```
## Demo 
[Demo](https://search-open-ai.vercel.app/)
