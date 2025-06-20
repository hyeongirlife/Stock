import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';
import AuthModal from './AuthModal';

export default function Header() {
  const [user, setUser] = useState<any>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-bold text-blue-600">현걸증권</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/stocks/domestic" className="text-gray-700 hover:text-blue-600">국내주식</Link>
            <Link to="/stocks/overseas" className="text-gray-700 hover:text-blue-600">해외주식</Link>
            <Link to="/invest/info" className="text-gray-700 hover:text-blue-600">투자정보</Link>
            <Link to="/my" className="text-gray-700 hover:text-blue-600">MY</Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">{user.email}</span>
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <LogOut className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <User className="w-4 h-4 mr-2" />
              로그인
            </button>
          )}
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
}