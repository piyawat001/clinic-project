// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ProfilePage from "./components/ProfilePage";
import AboutPage from "./components/AboutPage";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [currentStep, setCurrentStep] = useState(1);

  const menuItems = [
    {
      id: "1",
      text: "หน้าแรก",
      primary: true,
      onClick: () => {
        setCurrentPage("home");
        setShowMenu(false);
      },
    },
    {
      id: "2",
      text: "เกี่ยวกับคลินิก",
      primary: false,
      onClick: () => {
        setCurrentPage("about"); // เพิ่มการเปลี่ยนไปหน้า about
        setShowMenu(false);
      },
    },
    {
      id: "3",
      text: "บริการของเรา",
      primary: false,
      onClick: () => {
        setShowMenu(false);
      },
    },
    {
      id: "4",
      text: "บทความ",
      primary: false,
      onClick: () => {
        setShowMenu(false);
      },
    },
    {
      id: "5",
      text: "ข้อมูลส่วนตัว/การจอง",
      primary: false,
      onClick: () => {
        setCurrentPage("profile");
        setShowMenu(false);
      },
    },
  ];

  const handleBackToHome = () => {
    setCurrentPage("home");
    setCurrentStep(1);
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu ? (
        <Navigation menuItems={menuItems} setShowMenu={setShowMenu} />
      ) : currentPage === "home" ? (
        <HomePage
          setCurrentPage={setCurrentPage}
          setCurrentStep={setCurrentStep}
        />
      ) : currentPage === "booking" ? (
        <BookingPage currentStep={currentStep} />
      ) : currentPage === "profile" ? (
        <ProfilePage onBack={handleBackToHome} />
      ) : currentPage === "about" ? ( // เพิ่มเงื่อนไขนี้
        <AboutPage />
      ) : null}
    </div>
  );
};

export default App;
