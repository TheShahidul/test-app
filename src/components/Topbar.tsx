// import './Topbar.css';
import { SlCalender } from "react-icons/sl";

const Topbar = () => {
  return (
    <div className="topbar">

      <div className="bg-[#005181]">
        <div className="flex justify-center items-center gap-4">
          <SlCalender />
          <p> বুধবার, আগস্ট ১৩, ২০২৫</p>
        </div>

      </div>

      <p className="slogan">হাজী গোলাম হোসেন বালিকা উচ্চ বিদ্যালয়</p>
    </div>
  );
};

export default Topbar;
