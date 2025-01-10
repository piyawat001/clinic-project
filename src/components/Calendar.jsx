// src/components/Calendar.jsx
import PropTypes from 'prop-types';

const Calendar = ({ onDateSelect }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const handleDateClick = (day) => {
    const isHoliday = [5, 12, 19, 26, 4, 11, 18, 25].includes(day);
    if (!isHoliday) {
      onDateSelect(day);
    }
  };

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
              className={`p-2 ${
                index === 0 || index === 6 ? "text-red-500" : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 text-center">
          {days.map((day) => {
            const isHoliday = [5, 12, 19, 26, 4, 11, 18, 25].includes(day);
            return (
              <div
                key={day}
                onClick={() => handleDateClick(day)}
                className={`p-2 ${
                  isHoliday
                    ? "text-red-500 cursor-not-allowed"
                    : "cursor-pointer hover:bg-blue-100"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between p-2">
        <div>
          <p>วันหยุดเดือนมกราคม</p>
          <p>1 - วันขึ้นปีใหม่</p>
          <p className="text-red-500">วันอาทิตย์และวันเสาร์ - หยุดทำการ</p>
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

Calendar.propTypes = {
  onDateSelect: PropTypes.func.isRequired,
};

export default Calendar;