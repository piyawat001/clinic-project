// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentStep, setCurrentStep] = useState(1);
  
  const menuItems = [
    { id: 1, text: 'หน้าแรก', primary: true },
    { id: 2, text: 'เกี่ยวกับคลินิก' },
    { id: 3, text: 'บริการของเรา' },
    { id: 4, text: 'บทความ' },
    { id: 5, text: 'ข้อมูลส่วนตัว/การจอง' },
  ];

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu ? (
        <Navigation menuItems={menuItems} setShowMenu={setShowMenu} />
      ) : (
        currentPage === 'home' ? (
          <HomePage 
            setCurrentPage={setCurrentPage} 
            setCurrentStep={setCurrentStep} 
          />
        ) : (
          <BookingPage currentStep={currentStep} />
        )
      )}
    </div>
  );
};

export default App;