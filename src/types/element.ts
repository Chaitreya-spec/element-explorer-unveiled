
export interface Element {
  name: string;
  symbol: string;
  number: number;
  group: number | null;
  period: number;
  category: string;
  block: string;
  electronConfiguration: string;
  electronsPerShell: number[];
  phase: string;
  atomicMass: string;
  density: string;
  meltingPoint: string;
  boilingPoint: string;
  electronegativity: string;
  discoveredBy: string;
  discoveryYear: string;
  description: string;
  uses: string[];
  color?: string;
  xpos: number;
  ypos: number;
}

export interface ElementCategory {
  id: string;
  name: string;
  color: string;
}

export const ELEMENT_CATEGORIES: ElementCategory[] = [
  { id: "alkali-metal", name: "Alkali Metal", color: "bg-red-500" },
  { id: "alkaline-earth-metal", name: "Alkaline Earth Metal", color: "bg-yellow-500" },
  { id: "transition-metal", name: "Transition Metal", color: "bg-orange-400" },
  { id: "post-transition-metal", name: "Post-Transition Metal", color: "bg-blue-300" },
  { id: "metalloid", name: "Metalloid", color: "bg-green-500" },
  { id: "nonmetal", name: "Nonmetal", color: "bg-emerald-500" },
  { id: "halogen", name: "Halogen", color: "bg-yellow-300" },
  { id: "noble-gas", name: "Noble Gas", color: "bg-purple-400" },
  { id: "lanthanide", name: "Lanthanide", color: "bg-blue-500" },
  { id: "actinide", name: "Actinide", color: "bg-pink-400" },
  { id: "unknown", name: "Unknown", color: "bg-gray-500" }
];

export function getCategoryColor(category: string): string {
  const categoryInfo = ELEMENT_CATEGORIES.find(c => 
    c.id === category.toLowerCase().replace(/\s+/g, '-')
  );
  
  return categoryInfo?.color || "bg-gray-500";
}

export function getCategoryName(category: string): string {
  const categoryInfo = ELEMENT_CATEGORIES.find(c => 
    c.id === category.toLowerCase().replace(/\s+/g, '-')
  );
  
  return categoryInfo?.name || category;
}
