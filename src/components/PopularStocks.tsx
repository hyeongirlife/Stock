import React, { useState } from 'react';

const tabs = ['인기 순위', '상승률 높은 순', '하락률 높은 순', '거래량 많은 순'];

const stockData = [
  { name: '삼성전자', price: '74,800', change: '+1.2%', isPositive: true },
  { name: 'LG에너지솔루션', price: '437,500', change: '-0.8%', isPositive: false },
  { name: 'SK하이닉스', price: '156,000', change: '+2.3%', isPositive: true },
  { name: '현대차', price: '246,500', change: '+0.5%', isPositive: true },
];

export default function PopularStocks() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white rounded-2xl p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">오늘의 발견</h2>
      
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeTab === index
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stockData.map((stock) => (
          <div
            key={stock.name}
            className="p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors"
          >
            <h3 className="font-medium text-gray-900">{stock.name}</h3>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-lg font-bold">{stock.price}</span>
              <span
                className={`${
                  stock.isPositive ? 'text-red-500' : 'text-blue-500'
                }`}
              >
                {stock.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}