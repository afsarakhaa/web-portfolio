import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-red-500',
    'bg-blue-400',
    'bg-gray-800',
    'bg-green-500',
    'bg-blue-600',
    'bg-purple-500',
    'bg-pink-500',
    'hover:text-gray-800',
    'hover:bg-gray-100',
    'hover:text-blue-600',
    'hover:bg-blue-100',
    'hover:text-pink-600',
    'hover:bg-pink-100',
    'hover:text-blue-400',
    'hover:text-indigo-600',
    'hover:bg-indigo-100',
    'hover:text-green-600',
    'hover:bg-green-100',
    'hover:text-gray-900',
    'hover:bg-gray-200',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
