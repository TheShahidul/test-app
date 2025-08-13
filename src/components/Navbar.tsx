import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#">মূলপাতা</a></li>
        <li><a href="#">পরিচিতি</a></li>
        <li><a href="#">ভর্তি</a></li>
        <li><a href="#">কর্ণার</a></li>
        <li><a href="#">নোটিশ</a></li>
        <li><a href="#">স্টুডেন্ট কর্ণার</a></li>
        <li><a href="#">ফলাফল</a></li>
        <li><a href="#">গ্যালারী</a></li>
        <li><a href="#">আর্টিকেল</a></li>
        <li><a href="#">যোগাযোগ</a></li>
        <li><a href="#">অভিযোগ</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
