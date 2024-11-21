import React from 'react';

// Sample data for the table
const data = [
  { Category: 10, Budget: 25, Actual: 40, Difference: 55, Visual: 30 },
  { Category: 20, Budget: 35, Actual: 50, Difference: 60, Visual: 40 },
  { Category: 30, Budget: 45, Actual: 60, Difference: 70, Visual: 50 },
  { Category: 40, Budget: 55, Actual: 70, Difference: 80, Visual: 60 },
];

const HorizontalDataChart = () => {
  // Get the titles from the keys of the first data object
  const titles = Object.keys(data[0]);

  return (
    <div className="p-6 font-sans">
      <h2 className="text-2xl font-semibold mb-4">Expense Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {titles.map((title, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-sm font-medium text-gray-700"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {titles.map((title, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 border border-gray-300 text-sm text-gray-800"
                  >
                    {row[title]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HorizontalDataChart;
