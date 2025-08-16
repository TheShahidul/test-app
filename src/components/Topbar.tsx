import { MdEmail, MdDateRange } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-20 py-3 bg-[#005181] text-white text-sm md:text-base">

      
      
      {/* Date */}
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <MdDateRange className="text-lg md:text-xl" />
        <p>বুধবার, আগস্ট ১৩, ২০২৫</p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center">
        {/* Phone */}
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-sm md:text-base" />
          <p>০১৭১৮৯০৫৮২৫</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <MdEmail className="text-lg md:text-xl" />
          <p>hgh.school1983@gmail.com</p>
        </div>
      </div>

    </div>
  );
};

export default Topbar;
