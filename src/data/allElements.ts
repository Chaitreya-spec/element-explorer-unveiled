
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

export const allElements: Element[] = [
  ...period1Elements,
  ...period2Elements,
  ...period3Elements,
  ...period4Elements,
  ...period5Elements,
  ...period6Elements,
  ...period7Elements
];

export const getLanthanides = (): Element[] => {
  return lanthanideElements;
};

export const getActinides = (): Element[] => {
  return actinideElements;
};

export const getElementById = (id: number): Element | undefined => {
  return allElements.find(element => element.number === id);
};

export const getElementsByPeriod = (period: number): Element[] => {
  return allElements.filter(element => element.period === period);
};

export const getElementsByCategory = (category: string): Element[] => {
  return allElements.filter(element => element.category === category);
};

export const getElementsByBlock = (block: string): Element[] => {
  return allElements.filter(element => element.block === block);
};

export const getElementsByPhase = (phase: string): Element[] => {
  return allElements.filter(element => element.phase === phase);
};
