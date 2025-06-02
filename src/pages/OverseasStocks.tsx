import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const marketData = {
  nasdaq: [
    { time: '09:00', value: 15980 },
    { time: '10:00', value: 15985 },
    { time: '11:00', value: 15992 },
    { time: '12:00', value: 15988 },
    { time: '13:00', value: 15995 },
    { time: '14:00', value: 15990 },
    { time: '15:00', value: 15991 },
  ],
  snp: [
    { time: '09:00', value: 4980 },
    { time: '10:00', value: 4985 },
    { time: '11:00', value: 4982 },
    { time: '12:00', value: 4988 },
    { time: '13:00', value: 4985 },
    { time: '14:00', value: 4990 },
    { time: '15:00', value: 4991 },
  ],
};

const investorDataNasdaq = [
  { type: '외국인', value: 1234.5, isPositive: true },
  { type: '개인', value: 567.8, isPositive: true },
  { type: '기관', value: -1802.3, isPositive: false },
];

const investorDataSnP = [
  { type: '외국인', value: 890.4, isPositive: true },
  { type: '개인', value: -456.7, isPositive: false },
  { type: '기관', value: -433.7, isPositive: false },
];

const tabs = ['전체', '거래상위', '상승', '하락', '시가총액상위', '인기검색'];

const stockLists = {
  전체: [
    { name: 'Apple', code: 'AAPL', price: '$180.75', change: '+1.2%', isPositive: true },
    { name: 'Microsoft', code: 'MSFT', price: '$420.50', change: '+0.8%', isPositive: true },
    { name: 'NVIDIA', code: 'NVDA', price: '$890.20', change: '+2.5%', isPositive: true },
    { name: 'Amazon', code: 'AMZN', price: '$175.35', change: '-0.5%', isPositive: false },
    { name: 'Alphabet', code: 'GOOGL', price: '$147.60', change: '+0.3%', isPositive: true },
    { name: 'Meta', code: 'META', price: '$485.90', change: '-1.2%', isPositive: false },
    { name: 'Tesla', code: 'TSLA', price: '$175.45', change: '+1.8%', isPositive: true },
    { name: 'AMD', code: 'AMD', price: '$178.90', change: '+3.2%', isPositive: true },
    { name: 'Intel', code: 'INTC', price: '$42.80', change: '-0.7%', isPositive: false },
    { name: 'Netflix', code: 'NFLX', price: '$605.30', change: '+0.9%', isPositive: true },
  ],
};

const InvestorTrends = ({ title, data }: { title: string; data: typeof investorDataNasdaq }) => (
  <div className="p-4 border border-gray-100 rounded-xl">
    <h3 className="font-medium mb-4">{title} 투자자 동향 (단위: 백만달러)</h3>
    <div className="space-y-3">
      {data.map((investor) => (
        <div key={investor.type} className="flex items-center justify-between">
          <span className="text-gray-600">{investor.type}</span>
          <span className={investor.isPositive ? 'text-red-500' : 'text-blue-500'}>
            {investor.value > 0 ? '+' : ''}{investor.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function OverseasStocks() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">해외 주요 지수</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 border border-gray-100 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">NASDAQ</h3>
              <span className="text-red-500">+1.25%</span>
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketData.nasdaq}>
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
              <h3 className="font-medium">S&P 500</h3>
              <span className="text-red-500">+0.85%</span>
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketData.snp}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InvestorTrends title="NASDAQ" data={investorDataNasdaq} />
          <InvestorTrends title="S&P 500" data={investorDataSnP} />
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
                  <p className="font-bold">{stock.price}</p>
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