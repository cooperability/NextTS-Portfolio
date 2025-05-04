export interface OpioidOption {
  value: string
  label: string
  factor: number
}

export interface CalculationResult {
  equivalent: number
  inputDrug: string
  outputDrug: string
}

export type MedicationItem = {
  display: string
  increment: number
  unit: string
  dailyDose: number
  toMorphine: number
}
