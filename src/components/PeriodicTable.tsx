
import { Element, getCategoryColor } from "@/types/element";
import ElementCell from "./ElementCell";
import ElementLegend from "./ElementLegend";
import { getLanthanides, getActinides } from "@/data/allElements";

interface PeriodicTableProps {
  elements: Element[];
  onElementClick: (element: Element) => void;
  showLanthanideActinides?: boolean;
}

const PeriodicTable = ({ 
  elements, 
  onElementClick,
  showLanthanideActinides = true
}: PeriodicTableProps) => {
  // Create a 2D array representing the table
  const rows = 10; // Main table rows
  const cols = 18; // Main table columns
  
  const table: (Element | null)[][] = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(null));
  
  // Place elements in the table according to their positions
  elements.forEach(element => {
    if (element.ypos <= rows && element.xpos <= cols) {
      table[element.ypos - 1][element.xpos - 1] = element;
    }
  });
  
  // Get lanthanides and actinides
  const lanthanides = getLanthanides().filter(e => elements.some(el => el.number === e.number));
  const actinides = getActinides().filter(e => elements.some(el => el.number === e.number));

  return (
    <div className="pb-4">
      <div className="mb-4">
        <ElementLegend />
      </div>
      
      <div className="min-w-[1000px] overflow-auto">
        {/* Main table */}
        <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(60px, 1fr))` }}>
          {/* Render the periodic table cells */}
          {table.map((row, rowIndex) => 
            row.map((element, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="relative">
                {element ? (
                  <ElementCell 
                    element={element} 
                    onClick={() => onElementClick(element)}
                    colorClass={getCategoryColor(element.category)}
                  />
                ) : (
                  // Empty cell
                  <div className="w-full aspect-square"></div>
                )}
              </div>
            ))
          )}
        </div>
        
        {showLanthanideActinides && (
          <>
            {/* Spacer */}
            <div className="h-4"></div>
            
            {/* Lanthanides row */}
            {lanthanides.length > 0 && (
              <div className="grid mb-2" style={{ gridTemplateColumns: 'repeat(15, minmax(60px, 1fr))', gridColumnStart: '4' }}>
                {lanthanides.map((element) => (
                  <ElementCell 
                    key={element.number} 
                    element={element} 
                    onClick={() => onElementClick(element)}
                    colorClass={getCategoryColor(element.category)}
                  />
                ))}
              </div>
            )}
            
            {/* Actinides row */}
            {actinides.length > 0 && (
              <div className="grid" style={{ gridTemplateColumns: 'repeat(15, minmax(60px, 1fr))', gridColumnStart: '4' }}>
                {actinides.map((element) => (
                  <ElementCell 
                    key={element.number} 
                    element={element} 
                    onClick={() => onElementClick(element)}
                    colorClass={getCategoryColor(element.category)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PeriodicTable;
