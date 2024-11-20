import { useState } from 'react';

const CurrencyConverter = ({ amount }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  const conversionRates = {
    EUR: 0.85,  // Example conversion rate
    GBP: 0.75,
    JPY: 110.5,
    INR: 75.0,
  };

  const convertCurrency = (amount, currency) => {
    return (amount * conversionRates[currency]).toFixed(2);
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Currency Converter</h2>
      <div>
        <select
          onChange={(e) => setSelectedCurrency(e.target.value)}
          value={selectedCurrency}
          className="p-2 border rounded"
        >
          <option value="EUR">Euro (EUR)</option>
          <option value="GBP">British Pound (GBP)</option>
          <option value="JPY">Japanese Yen (JPY)</option>
          <option value="INR">Indian Rupee (INR)</option>
        </select>
      </div>
      <div className="mt-4">
        <p className="font-bold">Your savings in {selectedCurrency}:</p>
        <p>{convertCurrency(amount, selectedCurrency)} {selectedCurrency}</p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
