import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'Semua', count: 48 },
  { id: 'money', label: 'Money Bouquet', count: 16 },
  { id: 'flower', label: 'Bunga', count: 20 },
  { id: 'snack', label: 'Snack', count: 12 },
];

export default function ProductFilters({ selectedCategory, onCategoryChange }: ProductFiltersProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-slate-200">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className={`h-10 ${
              selectedCategory === category.id
                ? 'bg-slate-800 hover:bg-slate-700 text-white'
                : 'text-slate-600 hover:text-slate-800 border-slate-200'
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
            <Badge
              variant="secondary"
              className={`ml-2 ${
                selectedCategory === category.id
                  ? 'bg-slate-700 text-slate-200'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  );
}