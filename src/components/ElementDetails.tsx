
import { Element, getCategoryName, getCategoryColor } from "@/types/element";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AtomIcon, Beaker, FlaskConical, TestTube } from "lucide-react";

interface ElementDetailsProps {
  element: Element;
}

const ElementDetails = ({ element }: ElementDetailsProps) => {
  const categoryColor = getCategoryColor(element.category);
  const categoryName = getCategoryName(element.category);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card className="bg-slate-900/70 border-slate-800 overflow-hidden">
            <div className={cn("w-full aspect-square flex flex-col items-center justify-center p-6", categoryColor)}>
              <div className="text-2xl font-semibold">{element.number}</div>
              <div className="text-6xl font-bold mt-2">{element.symbol}</div>
              <div className="mt-2 text-lg font-medium">{element.name}</div>
              <div className="mt-2 text-sm opacity-90">{element.atomicMass} u</div>
              <div className="mt-1 text-xs opacity-90">{categoryName}</div>
            </div>
            
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="space-y-0.5">
                  <div className="text-slate-400 text-xs">Atomic Number</div>
                  <div className="font-medium">{element.number}</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-slate-400 text-xs">Group</div>
                  <div className="font-medium">{element.group || "N/A"}</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-slate-400 text-xs">Period</div>
                  <div className="font-medium">{element.period}</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-slate-400 text-xs">Block</div>
                  <div className="font-medium">{element.block}</div>
                </div>
                <div className="space-y-0.5 col-span-2">
                  <div className="text-slate-400 text-xs">Electronic Configuration</div>
                  <div className="font-medium break-words">{element.electronConfiguration}</div>
                </div>
                <div className="space-y-0.5 col-span-2">
                  <div className="text-slate-400 text-xs">Electrons per Shell</div>
                  <div className="font-medium">{element.electronsPerShell.join(", ")}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-3 w-full bg-slate-900/70 border border-slate-800">
              <TabsTrigger value="overview" className="data-[state=active]:bg-slate-800">
                <AtomIcon className="w-4 h-4 mr-2" /> Overview
              </TabsTrigger>
              <TabsTrigger value="properties" className="data-[state=active]:bg-slate-800">
                <Beaker className="w-4 h-4 mr-2" /> Properties
              </TabsTrigger>
              <TabsTrigger value="uses" className="data-[state=active]:bg-slate-800">
                <FlaskConical className="w-4 h-4 mr-2" /> Uses
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-4">
              <Card className="bg-slate-900/70 border-slate-800">
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-bold">About {element.name}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">{element.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-slate-200">Discovery</h4>
                    <p className="text-sm text-slate-300">
                      {element.discoveredBy ? (
                        <>Discovered by {element.discoveredBy} in {element.discoveryYear || 'unknown year'}.</>
                      ) : (
                        <>Discovery information not available.</>
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="properties" className="mt-4">
              <Card className="bg-slate-900/70 border-slate-800">
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-bold">Physical Properties</h3>
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <dt className="text-sm text-slate-400">Phase at STP</dt>
                      <dd className="font-medium">{element.phase || "Unknown"}</dd>
                      <Separator className="my-2 bg-slate-800" />
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm text-slate-400">Atomic Mass</dt>
                      <dd className="font-medium">{element.atomicMass} u</dd>
                      <Separator className="my-2 bg-slate-800" />
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm text-slate-400">Density</dt>
                      <dd className="font-medium">{element.density || "Unknown"}</dd>
                      <Separator className="my-2 bg-slate-800" />
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm text-slate-400">Melting Point</dt>
                      <dd className="font-medium">{element.meltingPoint || "Unknown"}</dd>
                      <Separator className="my-2 bg-slate-800" />
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm text-slate-400">Boiling Point</dt>
                      <dd className="font-medium">{element.boilingPoint || "Unknown"}</dd>
                      <Separator className="my-2 bg-slate-800" />
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm text-slate-400">Electronegativity</dt>
                      <dd className="font-medium">{element.electronegativity || "Unknown"}</dd>
                      <Separator className="my-2 bg-slate-800" />
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="uses" className="mt-4">
              <Card className="bg-slate-900/70 border-slate-800">
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-bold">Common Uses</h3>
                </CardHeader>
                <CardContent>
                  {element.uses && element.uses.length > 0 ? (
                    <ul className="space-y-2 pl-5 list-disc marker:text-blue-400">
                      {element.uses.map((use, index) => (
                        <li key={index} className="text-slate-300">{use}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400">No specific uses listed for this element.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <Card className="mt-4 bg-slate-900/70 border-slate-800">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold">Electron Configuration</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                {element.electronsPerShell.map((electrons, shellIndex) => (
                  <div key={shellIndex} className="relative">
                    <div className={cn(
                      "rounded-full border border-slate-600 flex items-center justify-center",
                      "w-16 h-16 md:w-20 md:h-20",
                      `animate-pulse ${shellIndex % 2 ? 'animate-pulse-slow' : 'animate-pulse-slower'}`
                    )}>
                      <div className="text-sm font-medium">{shellIndex + 1}</div>
                    </div>
                    {Array.from({ length: Math.min(electrons, 8) }).map((_, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "absolute w-2.5 h-2.5 bg-blue-500 rounded-full",
                          "animate-orbit",
                          `animate-duration-${(shellIndex + 2) * 4}`
                        )}
                        style={{
                          transformOrigin: 'center',
                          animation: `orbit${(i % 4) + 1} ${(shellIndex + 2) * 4}s linear infinite`,
                          top: '50%',
                          left: '50%',
                        }}
                      ></div>
                    ))}
                    <div className="text-center mt-1 text-xs">
                      {electrons} e<sup>-</sup>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 bg-slate-800/50 p-3 rounded-md">
                <p className="text-center text-sm text-slate-300">
                  <span className="font-medium">Full electron configuration:</span> {element.electronConfiguration}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ElementDetails;
