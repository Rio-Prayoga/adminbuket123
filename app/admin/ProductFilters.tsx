// components/admin/ProductFilters.tsx
import React, { Dispatch, SetStateAction } from 'react'; // Impor Dispatch dan SetStateAction jika diperlukan

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: Dispatch<SetStateAction<string>>; // Ini tipenya harus Dispatch<SetStateAction<string>> karena kamu mengirim setSelectedCategory
  counts: { // Tambahkan ini
    all: number;
    money: number;
    flower: number;
    snack: number;
  };
}

export default function ProductFilters({
  selectedCategory,
  onCategoryChange,
  counts, // Destructure prop counts
}: ProductFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          selectedCategory === 'all'
            ? 'bg-slate-800 text-white'
            : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
        }`}
      >
        Semua ({counts.all})
      </button>
      <button
        onClick={() => onCategoryChange('money')}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          selectedCategory === 'money'
            ? 'bg-slate-800 text-white'
            : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
        }`}
      >
        Uang ({counts.money})
      </button>
      <button
        onClick={() => onCategoryChange('flower')}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          selectedCategory === 'flower'
            ? 'bg-slate-800 text-white'
            : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
        }`}
      >
        Bunga ({counts.flower})
      </button>
      <button
        onClick={() => onCategoryChange('snack')}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          selectedCategory === 'snack'
            ? 'bg-slate-800 text-white'
            : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
        }`}
      >
        Snack ({counts.snack})
      </button>
    </div>
  );
}