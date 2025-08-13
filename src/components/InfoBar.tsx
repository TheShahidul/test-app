import { useState, useEffect } from 'react';
import './InfoBar.css';

const InfoBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="info-bar">
      <div className="date">{currentDate.toLocaleDateString()}</div>
      <div className="contact">
        <span>Phone: 01718905825</span>
        <span>Email: hgh.school1983@gmail.com</span>
      </div>
    </div>
  );
};

export default InfoBar;
