import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyCounter = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  
  // Fetch the exchange rates when the component mounts
  useEffect(() => {
    const fetchRates = async () => {
      try {
        
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/535f5023df51005221987344/latest/USD`
        );
        setRates(response.data.conversion_rates);
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchRates();
  }, [baseCurrency]); 

  useEffect(() => {
    if (rates[targetCurrency] && amount) {
      const converted = (rates[targetCurrency] * amount).toFixed(2);
      setConvertedAmount(converted);
    }
  }, [rates, targetCurrency, amount]);

  const handleCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div >
      <h1>Currency Converter</h1>
      
      <div>
        <label htmlFor="amount">Amount:</label>
        <input 
          id="amount" 
          type="number" 
          value={amount} 
          onChange={handleAmountChange} 
        />
      </div>

      <div>
        <label htmlFor="currency">From:</label>
        <select 
          id="currency" 
          value={baseCurrency} 
          onChange={(e) => setBaseCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add more currencies as needed */}
        </select>
      </div>

      <div>
        <label htmlFor="targetCurrency">To:</label>
        <select 
          id="targetCurrency" 
          value={targetCurrency} 
          onChange={handleCurrencyChange}
        >
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          {/* Add more currencies as needed */}
        </select>
      </div>

      <div>
        <h2>
          {amount} {baseCurrency} is equal to {convertedAmount} {targetCurrency}
        </h2>
      </div>
    </div>
  );
};

export default CurrencyCounter;
