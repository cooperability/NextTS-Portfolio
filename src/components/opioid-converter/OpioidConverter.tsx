import { useState, useCallback } from 'react';
import styles from './OpioidConverter.module.css';
import { calculateEquivalent, OPIOID_OPTIONS } from './utils/calculations';
import type { OpioidOption } from './types';

interface Props {
  onError?: (error: Error) => void;
}

const OpioidConverter: React.FC<Props> = ({ onError }) => {
  const [inputDose, setInputDose] = useState<string>('');
  const [inputDrug, setInputDrug] = useState<string>('');
  const [outputDrug, setOutputDrug] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = useCallback(() => {
    try {
      setError('');
      setResult(null);

      if (!inputDose || !inputDrug || !outputDrug) {
        throw new Error('Please fill in all fields');
      }

      const numericDose = parseFloat(inputDose);
      if (isNaN(numericDose) || numericDose <= 0) {
        throw new Error('Please enter a valid dose');
      }

      const equivalent = calculateEquivalent(numericDose, inputDrug, outputDrug);
      setResult(equivalent);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Calculation error');
      setError(error.message);
      onError?.(error);
    }
  }, [inputDose, inputDrug, outputDrug, onError]);

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <label htmlFor="inputDose">Dose:</label>
        <input
          id="inputDose"
          type="number"
          value={inputDose}
          onChange={(e) => setInputDose(e.target.value)}
          min="0"
          step="0.1"
          placeholder="Enter dose"
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="inputDrug">From:</label>
        <select
          id="inputDrug"
          value={inputDrug}
          onChange={(e) => setInputDrug(e.target.value)}
        >
          <option value="">Select drug</option>
          {OPIOID_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="outputDrug">To:</label>
        <select
          id="outputDrug"
          value={outputDrug}
          onChange={(e) => setOutputDrug(e.target.value)}
        >
          <option value="">Select drug</option>
          {OPIOID_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button 
        onClick={handleCalculate}
        className={styles.calculateButton}
      >
        Calculate
      </button>

      {error && <div className={styles.error}>{error}</div>}
      {result !== null && (
        <div className={styles.result}>
          Equivalent dose: {result} mg
        </div>
      )}
    </div>
  );
};

export default OpioidConverter; 