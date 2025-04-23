
import { useState } from "react";
import PeriodicTable from "@/components/PeriodicTable";
import ElementDetails from "@/components/ElementDetails";
import { Element } from "@/types/element";
import { elements } from "@/data/periodicElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredElements = searchQuery 
    ? elements.filter(element => 
        element.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        element.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        element.number.toString().includes(searchQuery)
      )
    : elements;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-indigo-950 text-white">
      <header className="py-6 px-4 md:px-8 bg-slate-900/50 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Periodic Table Explorer
          </h1>
          <p className="text-center mt-2 text-slate-300 max-w-2xl mx-auto">
            Explore all 118 elements with detailed information about their properties, electron configurations, and uses
          </p>
          <div className="mt-6 max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search elements by name, symbol or atomic number..."
                className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 text-slate-400 hover:text-slate-100"
                  onClick={() => setSearchQuery("")}
                >
                  ×
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {selectedElement ? (
          <div className="mb-6">
            <Button 
              variant="outline"
              className="mb-4 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => setSelectedElement(null)}
            >
              ← Back to Periodic Table
            </Button>
            <ElementDetails element={selectedElement} />
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-slate-200">Periodic Table of Elements</h2>
              <div className="overflow-x-auto">
                <PeriodicTable 
                  elements={filteredElements} 
                  onElementClick={setSelectedElement}
                />
              </div>
              {searchQuery && filteredElements.length === 0 && (
                <p className="text-center mt-8 text-slate-400">No elements match your search.</p>
              )}
            </div>
          </>
        )}
      </main>
      
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-6 text-center text-slate-400 text-sm">
        <div className="container mx-auto px-4">
          <p>Periodic Table Explorer - A comprehensive chemistry resource</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
