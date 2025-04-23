
import { Element } from "@/types/element";
import { cn } from "@/lib/utils";

interface ElementCellProps {
  element: Element;
  onClick: () => void;
  colorClass: string;
}

const ElementCell = ({ element, onClick, colorClass }: ElementCellProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full aspect-square p-1 flex flex-col justify-between items-center text-center",
        "transition-all duration-200 hover:scale-105 hover:z-10 hover:shadow-lg hover:shadow-indigo-500/20",
        "border border-slate-700/50 overflow-hidden",
        colorClass,
        "hover:brightness-110"
      )}
    >
      <div className="text-xs font-semibold opacity-90">{element.number}</div>
      <div className="text-lg font-bold">{element.symbol}</div>
      <div className="text-[10px] truncate w-full opacity-90">{element.name}</div>
    </button>
  );
};

export default ElementCell;
