import React from 'react';

export default function OverseasStocks() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
      <h1 className="text-2xl font-bold mb-6">해외주식</h1>
      <div className="grid gap-6">
        {/* Market Indices */}
        <section className="bg-white rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">주요 지수</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['나스닥', 'S&P500', '다우존스'].map((index) => (
              <div key={index} className="p-4 border border-gray-100 rounded-xl">
                <h3 className="font-medium text-gray-900">{index}</h3>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-lg font-bold">15,990.66</span>
                  <span className="text-red-500">+1.25%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Stocks */}
        <section className="bg-white rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">인기 해외주식</h2>
          <div className="space-y-4">
            {['애플', '테슬라', '엔비디아'].map((stock) => (
              <div key={stock} className="p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
                <h3 className="font-medium text-gray-900">{stock}</h3>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-lg font-bold">$180.75</span>
                  <span className="text-blue-500">-0.8%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}