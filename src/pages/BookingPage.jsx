// src/pages/BookingPage.jsx
import { useState } from 'react';
import BookingSteps from '../components/BookingSteps';
import Calendar from '../components/Calendar';
import TimeSlots from '../components/TimeSlots';
import PropTypes from 'prop-types';

const BookingPage = ({ currentStep }) => {
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
        <TimeSlots onBack={() => setSelectedDate(null)} />
      )}
    </div>
  );
};
BookingPage.propTypes = {
  currentStep: PropTypes.number.isRequired
};
export default BookingPage;