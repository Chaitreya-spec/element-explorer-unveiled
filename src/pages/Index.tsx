
import { useState } from "react";
import PeriodicTable from "@/components/PeriodicTable";
import ElementDetails from "@/components/ElementDetails";
import { Element } from "@/types/element";
import { allElements, getLanthanides, getActinides } from "@/data/allElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("main");
  
  // Filter elements based on search query
  const filteredElements = searchQuery 
    ? allElements.filter(element => 
        element.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        element.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        element.number.toString().includes(searchQuery)
      )
    : allElements;

  // Get lanthanides and actinides for separate display
  const lanthanides = getLanthanides();
  const actinides = getActinides();

  // Calculate total elements count for display
  const totalElements = allElements.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-indigo-950 text-white">
      <header className="py-6 px-4 md:px-8 bg-slate-900/50 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Periodic Table Explorer
          </h1>
          <p className="text-center mt-2 text-slate-300 max-w-2xl mx-auto">
            Explore all {totalElements} elements with detailed information about their properties, electron configurations, and uses
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
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-slate-200">Periodic Table of Elements</h2>
                <Badge variant="outline" className="px-3 py-1">
                  <Info className="h-3.5 w-3.5 mr-1" /> {filteredElements.length} of {totalElements} elements shown
                </Badge>
              </div>
              
              <Tabs defaultValue="main" onValueChange={setActiveTab} className="mb-6">
                <TabsList className="bg-slate-800/50 border border-slate-700">
                  <TabsTrigger value="main">Main Table</TabsTrigger>
                  <TabsTrigger value="lanthanides">Lanthanides</TabsTrigger>
                  <TabsTrigger value="actinides">Actinides</TabsTrigger>
                </TabsList>
                
                <TabsContent value="main" className="mt-4">
                  <div className="overflow-x-auto">
                    <PeriodicTable 
                      elements={filteredElements} 
                      onElementClick={setSelectedElement}
                      showLanthanideActinides={false}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="lanthanides" className="mt-4">
                  <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-2">Lanthanides (Elements 57-71)</h3>
                    <p className="text-slate-300 mb-4">
                      Lanthanides are a series of metallic elements that form part of the rare-earth elements, characterized by the filling of the 4f electron shell.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {lanthanides.map(element => (
                        <div 
                          key={element.number} 
                          className="bg-blue-500/10 border border-blue-500/30 p-3 rounded-lg cursor-pointer hover:bg-blue-500/20 transition-colors"
                          onClick={() => setSelectedElement(element)}
                        >
                          <div className="text-xs text-blue-300 mb-1">#{element.number}</div>
                          <div className="text-xl font-bold">{element.symbol}</div>
                          <div className="text-sm mt-1">{element.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="actinides" className="mt-4">
                  <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-2">Actinides (Elements 89-103)</h3>
                    <p className="text-slate-300 mb-4">
                      Actinides are a series of radioactive metallic elements, characterized by the filling of the 5f electron shell.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {actinides.map(element => (
                        <div 
                          key={element.number} 
                          className="bg-pink-500/10 border border-pink-500/30 p-3 rounded-lg cursor-pointer hover:bg-pink-500/20 transition-colors"
                          onClick={() => setSelectedElement(element)}
                        >
                          <div className="text-xs text-pink-300 mb-1">#{element.number}</div>
                          <div className="text-xl font-bold">{element.symbol}</div>
                          <div className="text-sm mt-1">{element.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              {activeTab === "main" && (
                <div className="overflow-x-auto">
                  <PeriodicTable 
                    elements={filteredElements} 
                    onElementClick={setSelectedElement}
                  />
                </div>
              )}
              
              {searchQuery && filteredElements.length === 0 && (
                <p className="text-center mt-8 text-slate-400">No elements match your search.</p>
              )}
            </div>
          </>
        )}
      </main>
      
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-6 text-center text-slate-400 text-sm">
        <div className="container mx-auto px-4">
          <p>Periodic Table Explorer - A comprehensive chemistry resource with all {totalElements} elements</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
