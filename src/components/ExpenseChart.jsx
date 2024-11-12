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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Expense Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {titles.map((title, index) => (
              <th key={index} style={{ padding: '8px', border: '1px solid #ccc', backgroundColor: '#f4f4f4' }}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {titles.map((title, colIndex) => (
                <td key={colIndex} style={{ padding: '8px', border: '1px solid #ccc' }}>
                  {row[title]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HorizontalDataChart;
