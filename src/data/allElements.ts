
import { Element } from "@/types/element";
import { period1Elements } from "./elements/period1";
import { period2Elements } from "./elements/period2";
import { period3Elements } from "./elements/period3";
import { period4Elements } from "./elements/period4";
import { period5Elements } from "./elements/period5";
import { period6Elements } from "./elements/period6";
import { period7Elements } from "./elements/period7";
import { lanthanideElements } from "./elements/lanthanides";
import { actinideElements } from "./elements/actinides";

// Combine all elements into a single array
export const allElements: Element[] = [
  ...period1Elements,
  ...period2Elements,
  ...period3Elements,
  ...period4Elements,
  ...period5Elements,
  ...period6Elements,
  ...period7Elements,
  ...lanthanideElements,
  ...actinideElements
];

// Function to get lanthanides
export const getLanthanides = (): Element[] => {
  return lanthanideElements;
};

// Function to get actinides
export const getActinides = (): Element[] => {
  return actinideElements;
};

// Get element by ID (atomic number)
export const getElementById = (id: number): Element | undefined => {
  return allElements.find(element => element.number === id);
};

// Get elements by period number
export const getElementsByPeriod = (period: number): Element[] => {
  return allElements.filter(element => element.period === period);
};

// Get elements by category (e.g., "noble-gas", "alkali-metal")
export const getElementsByCategory = (category: string): Element[] => {
  return allElements.filter(element => element.category === category);
};

// Get elements by block (s, p, d, f)
export const getElementsByBlock = (block: string): Element[] => {
  return allElements.filter(element => element.block === block);
};

// Get elements by phase (Solid, Liquid, Gas)
export const getElementsByPhase = (phase: string): Element[] => {
  return allElements.filter(element => element.phase === phase);
};
