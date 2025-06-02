import React from 'react';

export default function InvestInfo() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
      <h1 className="text-2xl font-bold mb-6">투자정보</h1>
      <div className="grid gap-6">
        {/* Market Analysis */}
        <section className="bg-white rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">시장분석</h2>
          <div className="space-y-4">
            {['글로벌 증시 동향', '2024년 투자 전망', '산업별 분석'].map((article) => (
              <div key={article} className="p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                <h3 className="text-lg text-gray-900">{article}</h3>
                <p className="text-gray-500 mt-1">1시간 전</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Education */}
        <section className="bg-white rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">투자 교육</h2>
          <div className="space-y-4">
            {['주식투자 기초', '차트 분석 방법', '투자 위험 관리'].map((topic) => (
              <div key={topic} className="p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                <h3 className="text-lg text-gray-900">{topic}</h3>
                <p className="text-gray-500 mt-1">초급</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}