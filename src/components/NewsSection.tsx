import React from 'react';

const news = [
  {
    title: '글로벌 증시 동향: 실적 시즌 본격화',
    category: '시장동향',
    time: '1시간 전'
  },
  {
    title: '2024년 글로벌 반도체 시장 전망',
    category: '산업분석',
    time: '2시간 전'
  },
  {
    title: '미 연준 금리 동결 전망: 시장 영향은?',
    category: '특징주',
    time: '3시간 전'
  }
];

export default function NewsSection() {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-4">투자 정보</h2>
      <div className="space-y-4">
        {news.map((item, index) => (
          <div
            key={index}
            className="p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
              <span className="bg-gray-100 px-2 py-1 rounded">
                {item.category}
              </span>
              <span>{item.time}</span>
            </div>
            <h3 className="text-lg text-gray-900">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}