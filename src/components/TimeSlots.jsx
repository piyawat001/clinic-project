import PropTypes from 'prop-types';
import { useState } from 'react';
import BookingSteps from './BookingSteps';

const TimeSlots = ({ onBack }) => {
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

      <BookingSteps currentStep={2} />

      <div className="bg-blue-900 text-white p-3 text-center rounded-md mb-4">
        เลือกเวลา
      </div>

      <button
        onClick={onBack}
        className="w-full mb-4 p-2 border border-blue-900 text-blue-900 rounded-md"
      >
        ย้อนกลับไปเลือกวัน
      </button>

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

TimeSlots.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default TimeSlots;
