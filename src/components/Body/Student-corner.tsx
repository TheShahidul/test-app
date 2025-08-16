import React from 'react';
import {
  FaSignInAlt,
  FaWpforms,
  FaUserPlus,
  FaUserGraduate,
  FaAward,
  FaMoneyBillWave,
  FaIdCard,
  FaFileAlt,
  FaCalendarAlt,
  FaBook,
  FaPoll,
  FaBookReader,
} from 'react-icons/fa';

const cornerItems = [
  { text: 'এডমিট', icon: <FaSignInAlt className="text-4xl text-[#005282]" />, link: '#' },
  { text: 'ভর্তি ফর্ম', icon: <FaWpforms className="text-4xl text-[#005282]" />, link: '#' },
  { text: 'ভর্তি', icon: <FaUserPlus className="text-4xl text-[#005282]" />, link: '#' },
  { text: 'শিক্ষার্থীবৃন্দ ', icon: <FaUserGraduate className="text-4xl text-[#005282]" />, link: '#' },
  { text: 'কৃতি শিক্ষার্থী', icon: <FaAward className="text-4xl text-[#005282]" />, link: '#' },
  { text: 'ফি প্রদান', icon: <FaMoneyBillWave className="text-4xl text-[#005282]" />, link: '#' },
  { text: 'এডমিট কার্ড', icon: <FaIdCard className="text-4xl text-[#005282]" />, link: '#' },
  { text: 'শিক্ষার্থী রিপোর্ট', icon: <FaFileAlt className="text-4xl text-[#005282]" />, link: '#' },
  { text: 'রুটিন', icon: <FaCalendarAlt className="text-4xl text-[#005282]" />, link: '#' },
  { text: 'সিলেবাস', icon: <FaBook className="text-4xl text-[#005282]" />, link: '#' },
  { text: 'রেজাল্ট', icon: <FaPoll className="text-4xl text-[#005282]" />, link: '#' },
  { text: 'লাইব্রেরি', icon: <FaBookReader className="text-4xl text-[#005282]" />, link: '#' },
];

const StudentCorner: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl text-center font-bold text-[#005282] mb-4">শিক্ষার্থী কর্ণার</h2>
      <hr className="mb-6" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {cornerItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors"
          >
            {item.icon}
            <span className="mt-2 text-center text-sm font-medium text-gray-700">{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StudentCorner;