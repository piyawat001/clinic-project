// components/BookingSteps.jsx
export const BookingSteps = ({ currentStep }) => (
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