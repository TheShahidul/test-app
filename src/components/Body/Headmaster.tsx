import React from 'react';
import HeadmasterImg from '../imgs/Headmaster.jpg';

const Headmaster: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold bg-[#005181] rounded-xl p-1 text-white mb-4">প্রধান শিক্ষক</h2>
      <img src={HeadmasterImg} alt="Headmaster" className="w-280 h-300 rounded-xl mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">মোহাম্মদ সাইফুল ইসলাম খন্দকার</h3>
      
    </div>
  );
};

export default Headmaster;