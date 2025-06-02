import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const marketData = [
  { time: '09:00', value: 2640 },
  { time: '10:00', value: 2645 },
  { time: '11:00', value: 2642 },
  { time: '12:00', value: 2648 },
  { time: '13:00', value: 2650 },
  { time: '14:00', value: 2649 },
  { time: '15:00', value: 2652 },
];

const tabs = ['전체', '거래상위', '상승', '하락', '시가총액상위', '인기검색'];

export default function DomesticStocks() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">국내 주요 지수</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-100 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">KOSPI</h3>
              <span className="text-red-500">+1.28%</span>
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketData}>
                  <XAxis dataKey="time" hide />
                  <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Similar blocks for KOSDAQ and KOSPI200 */}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6">
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

        <div className="space-y-4">
          {/* Stock list items would go here */}
          <div className="p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">삼성전자</h3>
                <p className="text-sm text-gray-500">005930</p>
              </div>
              <div className="text-right">
                <p className="font-bold">74,800원</p>
                <p className="text-red-500">+1.2%</p>
              </div>
            </div>
          </div>
          {/* More stock items */}
        </div>
      </section>
    </div>
  );
}