import { useState } from 'react';
import { Menu, Facebook, MessageCircle, X } from 'lucide-react';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'booking'
  const [currentStep, setCurrentStep] = useState(1);
  
  const menuItems = [
    { id: 1, text: 'หน้าแรก', primary: true },
    { id: 2, text: 'เกี่ยวกับคลินิก' },
    { id: 3, text: 'บริการของเรา' },
    { id: 4, text: 'บทความ' },
    { id: 5, text: 'ข้อมูลส่วนตัว/การจอง' },
  ];

  const Calendar = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    return (
      <div className="mt-4">
        <div className="bg-red-600 text-white p-2 flex justify-between">
          <div>January</div>
          <div>มกราคม</div>
        </div>
        <div className="bg-white">
          <div className="grid grid-cols-7 text-center border-b">
            {weekDays.map((day, index) => (
              <div 
                key={day} 
                className={`p-2 ${index === 0 || index === 6 ? 'text-red-500' : ''}`}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 text-center">
            {days.map((day) => (
              <div 
                key={day}
                className={`p-2 ${
                  day === 1 ? 'bg-blue-500 text-white rounded-full' : ''
                } ${[5, 12, 19, 26, 4, 11, 18, 25].includes(day) ? 'text-red-500' : ''}`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between p-2">
          <div>
            <p>วันหยุดเดือนมกราคม</p>
            <p>1 - วันขึ้นปีใหม่</p>
          </div>
          <img 
            src="/api/placeholder/100/100" 
            alt="Calendar illustration" 
            className="w-24 h-24"
          />
        </div>
      </div>
    );
  };

  const BookingSteps = () => (
    <div className="flex justify-between gap-2 mb-4">
      {['คลินิก', 'วันเวลา', 'เสร็จสิ้น'].map((step, index) => (
        <button
          key={step}
          className={`flex-1 py-2 px-3 ${
            currentStep === index + 1
              ? 'bg-blue-900 text-white'
              : 'bg-gray-200 text-gray-700'
          } rounded-md text-sm`}
        >
          {index + 1}.{step}
        </button>
      ))}
    </div>
  );

  const Header = () => (
    <div className="bg-white p-4 border-b">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Facebook className="w-6 h-6 text-blue-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MessageCircle className="w-6 h-6 text-green-500" />
          </button>
        </div>
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="flex items-center gap-2">
          <img 
            src="/api/placeholder/32/32" 
            alt="Clinic Logo" 
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );

  const BookingPage = () => (
    <div className="p-4">
      <div className="bg-emerald-400 text-white p-3 text-center rounded-md mb-4">
        ทำการจองออนไลน์
      </div>
      <BookingSteps />
      {currentStep === 2 && (
        <>
          <div className="bg-blue-900 text-white p-3 text-center rounded-md mb-4">
            2.วันเวลา
          </div>
          <Calendar />
        </>
      )}
    </div>
  );

  const HomePage = () => (
    <div className="p-4">
      <button 
        onClick={() => {
          setCurrentPage('booking');
          setCurrentStep(2);
        }}
        className="w-full py-3 px-4 rounded-md text-center bg-emerald-400 text-white hover:bg-emerald-500 mb-4"
      >
        ทำการจองออนไลน์
      </button>
      <div className="bg-blue-900 text-white p-4 rounded-md text-center">
        <p>นายแพทย์สุทธิลักษณ์ อุดมระพีพงษ์</p>
        <p>คลินิกเวชกรรมและการผดุงครรภ์</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      <Header />
      {showMenu ? (
        <div className="p-4 flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setShowMenu(false)}
              className={`w-full py-3 px-4 rounded-md text-center ${
                item.primary
                  ? 'bg-emerald-400 text-white hover:bg-emerald-500'
                  : 'bg-blue-900 text-white hover:bg-blue-800'
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>
      ) : (
        currentPage === 'home' ? <HomePage /> : <BookingPage />
      )}
    </div>
  );
}

export default App;