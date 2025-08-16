import { useRef } from 'react';
import { FaClock } from "react-icons/fa";

const NewsTicker = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full bg-gray-100 border-y border-gray-300 overflow-hidden">
      <div className="flex items-center space-x-4 px-4 py-2 ">
        {/* Fixed Label */}
        <div className=" flex gap-3 justify-center items-center bg-[#005181] px-3 py-1 rounded-md border border-[#b3d8e6] text-sm md:text-base font-semibold text-white">
           <FaClock /> আপডেট নিউজ:
        </div>

        {/* Scrolling Content */}
        <div
          className="relative overflow-hidden flex-1"
        >
          <div
            ref={tickerRef}
            className="whitespace-nowrap animate-scroll text-sm md:text-base hover:[animation-play-state:paused]"
          >
            জুলাই গ্রাফিতি আয়োজন 
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            বাৎসরিক ছুটির দিন সমূহ
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
             পুনর্জাগরণ অনুষ্ঠানমালা ২০২৫ পুরষ্কার গণঅভ্যুত্থান জুলাই অনির্বাণ ছত্রিশ জুলাই ছিলো এক অভূতপূর্ব জাগরণ। সেদিন কোটি কন্ঠে আওয়াজ উঠেছিল— ‘শোন মহাজন… আমরা অনেকজন।’ জুলাই পুণর্জাগরণ অনুষ্ঠানমালা-২০২৫ উদযাপন
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
