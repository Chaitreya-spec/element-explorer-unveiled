
import { ELEMENT_CATEGORIES, ElementCategory } from "@/types/element";

const ElementLegend = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-4">
      {ELEMENT_CATEGORIES.map((category: ElementCategory) => (
        <div key={category.id} className="flex items-center gap-1.5">
          <div className={`w-3 h-3 ${category.color} rounded-sm`}></div>
          <span className="text-xs text-slate-300">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ElementLegend;
