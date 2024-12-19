import type { OpioidOption } from '../types';

export const OPIOID_OPTIONS: OpioidOption[] = [
  { value: 'morphine', label: 'Morphine', factor: 1 },
  { value: 'fentanyl', label: 'Fentanyl', factor: 100 },
  { value: 'hydromorphone', label: 'Hydromorphone', factor: 5 },
  { value: 'oxycodone', label: 'Oxycodone', factor: 1.5 },
  { value: 'hydrocodone', label: 'Hydrocodone', factor: 1 },
  { value: 'codeine', label: 'Codeine', factor: 0.15 }
];

export const calculateEquivalent = (
  inputDose: number,
  inputDrug: string,
  outputDrug: string
): number => {
  const inputOption = OPIOID_OPTIONS.find(opt => opt.value === inputDrug);
  const outputOption = OPIOID_OPTIONS.find(opt => opt.value === outputDrug);
  
  if (!inputOption || !outputOption) {
    throw new Error('Invalid drug selection');
  }

  const morphineEquivalent = inputDose * inputOption.factor;
  return Number((morphineEquivalent / outputOption.factor).toFixed(2));
}; 