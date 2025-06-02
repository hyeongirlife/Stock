import React from 'react';

const indices = [
  { name: 'KOSPI', value: '2,648.76', change: '+1.28%', isPositive: true },
  { name: 'KOSDAQ', value: '875.53', change: '+0.75%', isPositive: true },
  { name: 'NASDAQ', value: '15,990.66', change: '-0.32%', isPositive: false },
];

export default function MarketIndices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {indices.map((index) => (
        <div
          key={index.name}
          className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-medium text-gray-600">{index.name}</h3>
          <div className="mt-2">
            <span className="text-2xl font-bold">{index.value}</span>
            <span
              className={`ml-2 ${
                index.isPositive ? 'text-red-500' : 'text-blue-500'
              }`}
            >
              {index.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}