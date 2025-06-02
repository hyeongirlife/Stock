import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DomesticStocks from './pages/DomesticStocks';
import OverseasStocks from './pages/OverseasStocks';
import InvestInfo from './pages/InvestInfo';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 pt-24 pb-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stocks/domestic" element={<DomesticStocks />} />
            <Route path="/stocks/overseas" element={<OverseasStocks />} />
            <Route path="/invest/info" element={<InvestInfo />} />
            <Route path="/my" element={<MyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;