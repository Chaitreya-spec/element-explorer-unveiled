import { ElementPeriod } from "./types";

export const period1Elements: ElementPeriod = [
  {
    name: "Hydrogen",
    symbol: "H",
    number: 1,
    category: "nonmetal",
    group: 1,
    period: 1,
    block: "s",
    atomicMass: "1.008",
    electronegativity: "2.20",
    density: "0.00008988 g/L",
    meltingPoint: "14.01 K",
    boilingPoint: "20.28 K",
    discoveredBy: "Henry Cavendish",
    discoveryYear: "1766",
    electronConfiguration: "1s¹",
    electronsPerShell: [1],
    phase: "Gas",
    description: "Hydrogen is the lightest element and the most abundant chemical substance in the universe. At standard temperature and pressure, hydrogen is a colorless, odorless, tasteless, non-toxic, nonmetallic, highly combustible gas.",
    uses: [
      "Production of ammonia for fertilizers",
      "Used in the production of methanol",
      "Hydrogenation of fats and oils",
      "Rocket fuel",
      "Potential clean energy source"
    ],
    xpos: 1,
    ypos: 1
  },
  {
    name: "Helium",
    symbol: "He",
    number: 2,
    category: "noble-gas",
    group: 18,
    period: 1,
    block: "s",
    atomicMass: "4.0026",
    electronegativity: "N/A",
    density: "0.0001785 g/cm³",
    meltingPoint: "0.95 K",
    boilingPoint: "4.22 K",
    discoveredBy: "Pierre Janssen, Norman Lockyer",
    discoveryYear: "1868",
    electronConfiguration: "1s²",
    electronsPerShell: [2],
    phase: "Gas",
    description: "Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas. It is the first in the noble gas group in the periodic table and its boiling point is the lowest among all the elements.",
    uses: [
      "Cooling medium for superconducting magnets in MRI scanners",
      "As a lifting gas in balloons and airships",
      "Used in gas for divers in place of nitrogen to prevent nitrogen narcosis",
      "Cryogenic applications",
      "Pressurizing liquid-fueled rockets"
    ],
    xpos: 18,
    ypos: 1
  }
];
