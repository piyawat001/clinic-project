// components/TimeSlots.jsx
import { useState } from 'react';

export const TimeSlots = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  
  const timeSlots = [
    { start: '16:00', end: '16:30' },
    { start: '16:30', end: '17:00' },
    { start: '17:00', end: '17:30' },
    { start: '17:30', end: '18:00' },
    { start: '18:00', end: '18:30' },
    { start: '18:30', end: '19:00' },
    { start: '19:00', end: '19:30' },
    { start: '19:30', end: '20:00' },
    { start: '20:00', end: '20:30' },
    { start: '20:30', end: '21:00' },
  ];

  return (
    <div className="p-4">
      <div className="bg-emerald-400 text-white p-3 text-center rounded-md mb-4">
        ทำการจองออนไลน์
      </div>
      
      <div className="flex justify-between gap-2 mb-4">
        {['คลินิก', 'วันเวลา', 'เสร็จสิ้น'].map((step, index) => (
          <div
            key={step}
            className={`flex-1 py-2 px-3 text-center ${
              index + 1 === 2
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-700'
            } rounded-md text-sm`}
          >
            {index + 1}.{step}
          </div>
        ))}
      </div>

      <div className="bg-blue-900 text-white p-3 text-center rounded-md mb-4">
        เลือก
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {timeSlots.map((slot) => (
          <button
            key={slot.start}
            onClick={() => setSelectedTime(slot.start)}
            className={`p-3 text-center rounded-md ${
              selectedTime === slot.start
                ? 'bg-blue-900 text-white'
                : 'bg-blue-900 bg-opacity-90 text-white'
            }`}
          >
            {slot.start}
          </button>
        ))}
      </div>

      <button 
        className={`w-full p-3 rounded-md text-white text-center ${
          selectedTime 
            ? 'bg-blue-900 hover:bg-blue-800' 
            : 'bg-gray-400 cursor-not-allowed'
        }`}
        disabled={!selectedTime}
      >
        ยืนยันการจอง
      </button>
    </div>
  );
};

// pages/BookingPage.jsx
import { useState } from 'react';
import { BookingSteps } from '../components/BookingSteps';
import { Calendar } from '../components/Calendar';
import { TimeSlots } from '../components/TimeSlots';

export const BookingPage = ({ currentStep }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="p-4">
      {currentStep === 2 && !selectedDate && (
        <>
          <div className="bg-emerald-400 text-white p-3 text-center rounded-md mb-4">
            ทำการจองออนไลน์
          </div>
          <BookingSteps currentStep={currentStep} />
          <div className="bg-blue-900 text-white p-3 text-center rounded-md mb-4">
            2.วันเวลา
          </div>
          <Calendar onDateSelect={setSelectedDate} />
        </>
      )}
      
      {currentStep === 2 && selectedDate && (
        <TimeSlots />
      )}
    </div>
  );
};