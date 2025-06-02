import React from 'react';

export default function MyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
      <h1 className="text-2xl font-bold mb-6">MY</h1>
      <div className="grid gap-6">
        {/* Asset Summary */}
        <section className="bg-white rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">자산 현황</h2>
          <div className="p-4 border border-gray-100 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">총 자산</span>
              <span className="text-2xl font-bold">15,678,900원</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-600">총 수익률</span>
              <span className="text-red-500 font-bold">+12.5%</span>
            </div>
          </div>
        </section>

        {/* Holdings */}
        <section className="bg-white rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">보유 종목</h2>
          <div className="space-y-4">
            {['삼성전자', 'LG에너지솔루션', 'NVIDIA'].map((stock) => (
              <div key={stock} className="p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
                <h3 className="font-medium text-gray-900">{stock}</h3>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-lg font-bold">2,500,000원</span>
                  <span className="text-red-500">+15.2%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}