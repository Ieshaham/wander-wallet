import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function chart() {
  const [chartData, setChartData] = useState({});
  const [recentExpenses, setRecentExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching recent expenses or data for the chart from the backend
  useEffect(() => {
    axios
      .get('/api/expenses')
      .then(response => {
        const expenses = response.data;

        // Prepare data for the chart
        const categories = expenses.map(exp => exp.category);
        const amounts = expenses.map(exp => exp.amount);

        setChartData({
          labels: categories,
          datasets: [
            {
              label: 'Expenses',
              data: amounts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)', // Light blue color
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });

        // Store the expenses for use in the list
        setRecentExpenses(expenses);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching expenses:', error);
        setError('Failed to load expenses.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Expense Overview</h2>

      {/* Loading state */}
      {loading && <div>Loading chart data...</div>}

      {/* Error handling */}
      {error && <div className="text-red-500">{error}</div>}

      {/* Chart Container */}
      {!loading && !error && chartData.labels && (
        <div className="chart-container mb-6">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Monthly Expenses by Category',
                },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Categories',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Amount ($)',
                  },
                },
              },
            }}
          />
        </div>
      )}

      {/* Optional: Display Recent Expenses List */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Expenses</h3>
        {recentExpenses.length > 0 ? (
          <ul>
            {recentExpenses.map((expense, index) => (
              <li key={index} className="mb-2">
                <span className="font-medium">{expense.category}:</span> ${expense.amount}
              </li>
            ))}
          </ul>
        ) : (
          <div>No recent expenses available.</div>
        )}
      </div>
    </div>
  );
}

export default chart;
