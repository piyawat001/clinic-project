// pages/BookingPage.jsx
import { useState } from 'react';
import { BookingSteps } from '../components/BookingSteps';
import { Calendar } from '../components/Calendar';
import { TimeSlots } from '../components/TimeSlots';

export const BookingPage = ({ currentStep }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // เพิ่ม handler function
  const handleDateSelect = (day) => {
    console.log("Selected date:", day); // เพื่อ debug
    setSelectedDate(day);
  };

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
          {/* ส่ง prop onDateSelect ไปให้ Calendar */}
          <Calendar onDateSelect={handleDateSelect} />
        </>
      )}
      
      {currentStep === 2 && selectedDate && (
        <TimeSlots selectedDate={selectedDate} onBack={() => setSelectedDate(null)} />
      )}
    </div>
  );
};