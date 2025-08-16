import React from 'react';
import PresidentImg from '../imgs/President.jpg';

const PresidentInfo: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold bg-[#005181] rounded-xl p-1 text-white mb-4">সভাপতি</h2>
      <img src={PresidentImg} alt="President" className="w-280 h-300 rounded-xl mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">মোঃ সারওয়ার হোসেন মিয়া</h3>
      
    </div>
  );
};

export default PresidentInfo;