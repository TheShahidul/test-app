import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

  const navLinkClasses = "px-4 py-2 rounded-lg hover:bg-[#ffc107] hover:text-[#005181] transition-colors duration-300 ease-in-out";
  const mobileNavLinkClasses = "block px-4 py-3 rounded-lg hover:bg-[#ffc107] hover:text-[#005181] transition-colors duration-300 ease-in-out";

  return (
    <nav className="w-full bg-[#005181] text-white relative z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between md:justify-center px-5 py-4">
        {/* <div className="md:absolute md:left-5 text-xl font-bold">
          <Link to="/">My School</Link>
        </div> */}

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            className="text-3xl cursor-pointer focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-2 text-lg items-center">
          <li><Link to="/" className={navLinkClasses}>মূলপাতা</Link></li>
          <li><Link to="/about" className={navLinkClasses}>পরিচিতি</Link></li>
          <li><Link to="/admission" className={navLinkClasses}>ভর্তি</Link></li>

          {/* Dropdown - Desktop */}
          <li className="relative group">
            <button className={`${navLinkClasses} flex items-center`}>
              কর্ণার <span className="ml-1 text-xl"><IoIosArrowDropdown/> </span>
            </button>
            <ul className="absolute left-0 mt-2 w-48 hidden group-hover:block bg-[#005282] text-white rounded-lg shadow-lg z-40 pt-2">
              <li><Link to="/teachers/general" className="block px-4 py-2 hover:bg-[#ffc107] hover:text-[#005181] transition-colors">শিক্ষক (সাধারন)</Link></li>
              <li><Link to="/teachers/technical" className="block px-4 py-2 hover:bg-[#ffc107] hover:text-[#005181] transition-colors">শিক্ষক (কারিগরি)</Link></li>
              <li><Link to="/staff" className="block px-4 py-2 hover:bg-[#ffc107] hover:text-[#005181] transition-colors">কর্মচারী</Link></li>
            </ul>
          </li>

          <li><Link to="/notice" className={navLinkClasses}>নোটিশ</Link></li>
          <li><Link to="/student-corner" className={navLinkClasses}>স্টুডেন্ট কর্ণার</Link></li>
          <li><Link to="/results" className={navLinkClasses}>ফলাফল</Link></li>
          <li><Link to="/gallery" className={navLinkClasses}>গ্যালারী</Link></li>
          <li><Link to="/articles" className={navLinkClasses}>আর্টিকেল</Link></li>
          <li><Link to="/contact" className={navLinkClasses}>যোগাযোগ</Link></li>
          <li><Link to="/complaints" className={navLinkClasses}>অভিযোগ</Link></li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#005181] transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-4 space-y-2">
            <Link to="/" className={mobileNavLinkClasses}>মূলপাতা</Link>
            <Link to="/about" className={mobileNavLinkClasses}>পরিচিতি</Link>
            <Link to="/admission" className={mobileNavLinkClasses}>ভর্তি</Link>

            {/* Dropdown - Mobile */}
            <div>
              <button
                onClick={toggleSubmenu}
                className={`${mobileNavLinkClasses} w-full flex justify-between items-center`}
              >
                কর্ণার
                <span className={`transform transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`}><IoIosArrowDropdown/></span>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isSubmenuOpen ? 'max-h-screen' : 'max-h-0'} ml-4`}>
                  <Link to="/teachers/general" className={`${mobileNavLinkClasses} text-sm`}>শিক্ষক (সাধারন)</Link>
                  <Link to="/teachers/technical" className={`${mobileNavLinkClasses} text-sm`}>শিক্ষক (কারিগরি)</Link>
                  <Link to="/staff" className={`${mobileNavLinkClasses} text-sm`}>কর্মচারী</Link>
              </div>
            </div>

            <Link to="/notice" className={mobileNavLinkClasses}>নোটিশ</Link>
            <Link to="/student-corner" className={mobileNavLinkClasses}>স্টুডেন্ট কর্ণার</Link>
            <Link to="/results" className={mobileNavLinkClasses}>ফলাফল</Link>
            <Link to="/gallery" className={mobileNavLinkClasses}>গ্যালারী</Link>
            <Link to="/articles" className={mobileNavLinkClasses}>আর্টিকেল</Link>
            <Link to="/contact" className={mobileNavLinkClasses}>যোগাযোগ</Link>
            <Link to="/complaints" className={mobileNavLinkClasses}>অভিযোগ</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;