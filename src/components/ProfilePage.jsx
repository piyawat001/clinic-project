// src/components/ProfilePage.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Check } from 'lucide-react';

const ProfilePage = ({ onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'นางสาวศิตานนท์',
    lastName: 'กวะวิจารณ์',
    phone: '099-019-9693'
  });

  const [formData, setFormData] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    phone: userData.phone
  });

  const bookingHistory = [
    { 
      time: '16:30',
      date: '13/01/68',
      name: 'นางสาวศิตานนท์ กวะวิจารณ์',
      phone: '099-019-9693',
      status: 'รอรับบริการ'
    },
    {
      time: '16:00',
      date: '13/01/67',
      name: 'นางสาวศิตานนท์ กวะวิจารณ์', 
      phone: '099-019-9693',
      status: 'ยกเลิก'
    },
    {
      time: '20:00',
      date: '08/12/67',
      name: 'นางสาวศิตานนท์ กวะวิจารณ์',
      phone: '099-019-9693',
      status: 'เสร็จสิ้น'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    setIsEditing(false);
    setEditSuccess(true);
  };

  if (editSuccess) {
    return (
      <div className="p-4">
        <h2 className="bg-blue-900 text-white p-3 rounded-md text-center mb-4">
          แก้ไขข้อมูลส่วนตัว
        </h2>
        <div className="bg-emerald-100 rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl mb-4">แก้ไขข้อมูลส่วนตัวสำเร็จ</h2>
            <button
              onClick={() => {
                setEditSuccess(false);
                onBack();
              }}
              className="w-full bg-blue-900 text-white p-3 rounded-md"
            >
              กลับไปยังหน้าแรก
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="p-4">
        <h2 className="bg-blue-900 text-white p-3 rounded-md text-center mb-4">
          แก้ไขข้อมูลส่วนตัว
        </h2>
        <div className="bg-emerald-100 rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">ชื่อ :</label>
              <input 
                type="text"
                name="firstName"
                className="w-full p-2 border rounded"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">นามสกุล :</label>
              <input
                type="text"
                name="lastName"
                className="w-full p-2 border rounded"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">เบอร์โทร :</label>
              <input
                type="tel"
                name="phone"
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="flex-1 bg-red-500 text-white p-3 rounded-md"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="flex-1 bg-green-500 text-white p-3 rounded-md"
              >
                บันทึก
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="space-y-4">
        <div>
          <h2 className="bg-blue-900 text-white p-3 rounded-md text-center">
            ข้อมูลส่วนตัวของฉัน
          </h2>
          <div className="border rounded-lg p-4 mt-4">
            <div className="space-y-2">
              <p>ชื่อ- นามสกุล : {userData.firstName} {userData.lastName}</p>
              <p>เบอร์โทร : {userData.phone}</p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-red-500 text-white p-2 rounded-md mt-4"
            >
              แก้ไขข้อมูลส่วนตัว
            </button>
          </div>
        </div>

        <div>
          <h2 className="bg-blue-900 text-white p-3 rounded-md text-center">
            การจองของฉัน
          </h2>
          <div className="border rounded-lg mt-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="p-2">เวลาที่การจอง</th>
                  <th className="p-2">ชื่อ-สกุล</th>
                  <th className="p-2">เบอร์โทร</th>
                  <th className="p-2">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                {bookingHistory.map((booking, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{booking.time}<br/>{booking.date}</td>
                    <td className="p-2">{booking.name}</td>
                    <td className="p-2">{booking.phone}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        booking.status === 'รอรับบริการ' ? 'bg-yellow-100 text-yellow-800' :
                        booking.status === 'ยกเลิก' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default ProfilePage;