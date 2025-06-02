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

const kosdaqData = [
  { time: '09:00', value: 870 },
  { time: '10:00', value: 872 },
  { time: '11:00', value: 873 },
  { time: '12:00', value: 875 },
  { time: '13:00', value: 874 },
  { time: '14:00', value: 876 },
  { time: '15:00', value: 875 },
];

const investorData = [
  { type: '외국인', value: 2534.7, isPositive: true },
  { type: '개인', value: -1256.3, isPositive: false },
  { type: '기관', value: -1278.4, isPositive: false },
];

const tabs = ['전체', '거래상위', '상승', '하락', '시가총액상위', '인기검색'];

const stockLists = {
  전체: [
    { name: '삼성전자', code: '005930', price: '74,800', change: '+1.2%', isPositive: true },
    { name: 'SK하이닉스', code: '000660', price: '156,000', change: '+2.3%', isPositive: true },
    { name: 'LG에너지솔루션', code: '373220', price: '437,500', change: '-0.8%', isPositive: false },
    { name: '삼성바이오로직스', code: '207940', price: '846,000', change: '+0.5%', isPositive: true },
    { name: '삼성SDI', code: '006400', price: '456,500', change: '-1.2%', isPositive: false },
    { name: '현대차', code: '005380', price: '246,500', change: '+0.7%', isPositive: true },
    { name: 'LG화학', code: '051910', price: '567,000', change: '+1.5%', isPositive: true },
    { name: 'NAVER', code: '035420', price: '234,500', change: '-0.3%', isPositive: false },
    { name: '카카오', code: '035720', price: '78,900', change: '+0.9%', isPositive: true },
    { name: '기아', code: '000270', price: '112,000', change: '+1.1%', isPositive: true },
  ],
  거래상위: [
    { name: '삼성전자', code: '005930', price: '74,800', change: '+1.2%', isPositive: true, volume: '12,345,678' },
    { name: 'SK하이닉스', code: '000660', price: '156,000', change: '+2.3%', isPositive: true, volume: '8,765,432' },
    // ... (similar data for other categories)
  ],
};

export default function DomesticStocks() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">국내 주요 지수</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
          
          <div className="p-4 border border-gray-100 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">KOSDAQ</h3>
              <span className="text-red-500">+0.75%</span>
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={kosdaqData}>
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
        </div>

        <div className="border-t border-gray-100 pt-6">
          <h3 className="font-medium mb-4">투자자 동향 (단위: 십억원)</h3>
          <div className="space-y-3">
            {investorData.map((investor) => (
              <div key={investor.type} className="flex items-center justify-between">
                <span className="text-gray-600">{investor.type}</span>
                <span className={investor.isPositive ? 'text-red-500' : 'text-blue-500'}>
                  {investor.value > 0 ? '+' : ''}{investor.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
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
          {stockLists['전체'].map((stock) => (
            <div key={stock.code} className="p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{stock.name}</h3>
                  <p className="text-sm text-gray-500">{stock.code}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{stock.price}원</p>
                  <p className={stock.isPositive ? 'text-red-500' : 'text-blue-500'}>
                    {stock.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}