import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">현걸증권</h3>
            <p className="text-sm text-gray-600">
              서울특별시 강남구 테헤란로 131
              <br />
              현걸증권 주식회사
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">고객센터</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>전화: 1544-1234</li>
              <li>평일 09:00 - 18:00</li>
              <li>점심 12:00 - 13:00</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/invest/info" className="text-gray-600 hover:text-blue-600">공지사항</Link></li>
              <li><Link to="/invest/info" className="text-gray-600 hover:text-blue-600">이용약관</Link></li>
              <li><Link to="/invest/info" className="text-gray-600 hover:text-blue-600">개인정보처리방침</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">소셜 미디어</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">Blog</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            © 2024 현걸증권. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}