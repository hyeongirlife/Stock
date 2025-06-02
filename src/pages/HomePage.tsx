import React from 'react';
import MarketIndices from '../components/MarketIndices';
import PopularStocks from '../components/PopularStocks';
import NewsSection from '../components/NewsSection';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <MarketIndices />
      <PopularStocks />
      <NewsSection />
    </div>
  );
}