import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // for mobile dropdown

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

  return (
    <nav className="w-full bg-[#005181] text-white relative z-50">
      <div className="flex items-center justify-between px-5 md:px-20 py-4">
        {/* <div className="text-xl font-bold">Site Name</div> */}

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl cursor-pointer focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <li><a href="#" className="hover:underline">মূলপাতা</a></li>
          <li><a href="#" className="hover:underline">পরিচিতি</a></li>
          <li><a href="#" className="hover:underline">ভর্তি</a></li>

          {/* Dropdown - Desktop */}
          <li className="relative group">
            <button className="hover:underline">কর্ণার</button>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black rounded shadow-md min-w-[150px] z-40">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">শিক্ষক (সাধারন) </a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">শিক্ষক (কারিগরি)</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">কর্মচারী</a></li>

            </ul>
          </li>

          <li><a href="#" className="hover:underline">নোটিশ</a></li>
          <li><a href="#" className="hover:underline">স্টুডেন্ট কর্ণার</a></li>
          <li><a href="#" className="hover:underline">ফলাফল</a></li>
          <li><a href="#" className="hover:underline">গ্যালারী</a></li>
          <li><a href="#" className="hover:underline">আর্টিকেল</a></li>
          <li><a href="#" className="hover:underline">যোগাযোগ</a></li>
          <li><a href="#" className="hover:underline">অভিযোগ</a></li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:hidden absolute top-[72px] left-0 w-full bg-[#6aa8fe] text-sm font-medium z-40 shadow-md`}
      >
        <a href="#" className="px-5 py-3 hover:bg-blue-100">মূলপাতা</a>
        <a href="#" className="px-5 py-3 hover:bg-blue-100">পরিচিতি</a>
        <a href="#" className="px-5 py-3 hover:bg-blue-100">ভর্তি</a>

        {/* Dropdown - Mobile */}
        <div>
          <button
            onClick={toggleSubmenu}
            className="w-full text-left px-5 py-3 hover:bg-blue-100 flex justify-between items-center"
          >
            কর্ণার
            <span className="ml-2">{isSubmenuOpen ? '▲' : '▼'}</span>
          </button>
          {isSubmenuOpen && (
            <div className="flex flex-col bg-blue-100">
              <a href="#" className="px-7 py-2 hover:bg-blue-200">উপ-কর্ণার 1</a>
              <a href="#" className="px-7 py-2 hover:bg-blue-200">উপ-কর্ণার 2</a>
            </div>
          )}
        </div>

        <a href="#" className="px-5 py-3 hover:bg-blue-100">নোটিশ</a>
        <a href="#" className="px-5 py-3 hover:bg-blue-100">স্টুডেন্ট কর্ণার</a>
        <a href="#" className="px-5 py-3 hover:bg-blue-100">ফলাফল</a>
        <a href="#" className="px-5 py-3 hover:bg-blue-100">গ্যালারী</a>
        <a href="#" className="px-5 py-3 hover:bg-blue-100">আর্টিকেল</a>
        <a href="#" className="px-5 py-3 hover:bg-blue-100">যোগাযোগ</a>
        <a href="#" className="px-5 py-3 hover:bg-blue-100">অভিযোগ</a>
      </div>
    </nav>
  );
};

export default Navbar;
