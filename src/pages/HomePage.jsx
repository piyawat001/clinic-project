// src/pages/HomePage.jsx
const HomePage = ({ setCurrentPage, setCurrentStep }) => (
  <div className="p-4">
    <button
      onClick={() => {
        setCurrentPage("booking");
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

export default HomePage;