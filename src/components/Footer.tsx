import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaQuoteLeft, FaInfoCircle, FaLink, FaSlackHash } from "react-icons/fa";
import { Link } from "react-router-dom";

import GoogleMapComponent from "./GoogleMapComponent";


const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#00426b] rounded-t-xl text-white pt-12" style={{ fontFamily: 'Tiro Bangla, serif' }}>
      <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Us Column */}
        <div className="flex flex-col border-1 border-solid outline-2 outline-cyan-500 rounded-3xl bg-[#125c88] px-8 py-5">
          <h3 className="flex items-center justify-center gap-x-5 text-xl font-semibold mb-4 pb-2 border-b-2 border-white"> <FaInfoCircle /> আমাদের সম্পর্কে</h3>
          <p className="text-base leading-relaxed">
            আমরা একটি মানসম্পন্ন শিক্ষাপ্রতিষ্ঠান, যেখানে শিক্ষার্থীদের জ্ঞান, নৈতিকতা ও নেতৃত্বগুণ বিকাশে গুরুত্ব দেওয়া হয়। আধুনিক পাঠ্যক্রম ও প্রযুক্তিনির্ভর পরিবেশে আমরা ভবিষ্যতের জন্য প্রস্তুত করি আগামী প্রজন্মকে।
          </p>

          <div className="flex items-center">
                <p className="text-xl font-bold  text-white mt-2"> <FaQuoteLeft className=""/>
            শিক্ষা, নৈতিকতা ও নেতৃত্ব—আমাদের অঙ্গীকার
          </p>
          </div>
          

        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col border-1 border-solid outline-2 outline-cyan-500 rounded-3xl bg-[#125c88] px-8 py-5">
          <h3 className="flex items-center justify-center gap-x-5 text-xl font-semibold mb-4 pb-2 border-b-2 border-white"> <FaLink /> গুরুত্বপূর্ণ লিংক</h3>
          <ul className="space-y-3 text-left">
            <li><Link to="https://dhakaeducationboard.gov.bd/site/" className="hover:text-[#ffc107] transition-colors">ঢাকা শিক্ষা বোর্ড</Link></li>
            <li><Link to="https://bteb.gov.bd/" className="hover:text-[#ffc107] transition-colors">কারিগরি শিক্ষা বোর্ড</Link></li>
            <li><Link to="https://dshe.gov.bd/" className="hover:text-[#ffc107] transition-colors">মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর</Link></li>
            <li><Link to="https://nctb.gov.bd/" className="hover:text-[#ffc107] transition-colors">জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (এনসিটিবি)</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col border-1 border-solid outline-2 outline-cyan-500 rounded-3xl bg-[#125c88] px-8 py-5">
          <h3 className="flex items-center justify-center gap-x-5 text-xl font-semibold mb-4 pb-2 border-b-2 border-white"> <FaSlackHash /> যোগাযোগ</h3>
          <div className="text-base leading-relaxed">
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-3" /> তাড়াইল-সাচাইল, কিশোরগঞ্জ
            </p>
            <p className="flex items-center mb-2">
              <FaPhone className="mr-3" /> ০১৭১৮৯০৫৮২৫
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-3" /> info@example.com
            </p>
          </div>
        </div>
      </div>


      <GoogleMapComponent/>

      {/* Bottom Bar */}
      <div className="bg-[#003355] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
          <span>© 2025 All Rights Reserved</span>

          {/* Social Media */}
          <div className="flex space-x-4 my-3 md:my-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffc107] transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffc107] transition-colors">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffc107] transition-colors">
              <FaInstagram />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="bg-[#ffc107] text-[#00426b] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#e0a800] transition-colors"
          >
            <FaArrowUp />
          </button>
        </div>

        

      </div>
    </footer>

    

  );
};

export default Footer;