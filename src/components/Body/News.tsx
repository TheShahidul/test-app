import { FaNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <div className="bg-[#005181] text-white p-3 rounded-t-lg flex items-center justify-center">
        <FaNewspaper className="mr-2 text-lg" />
        <h3 className="text-xl font-semibold">নিউজ</h3>
      </div>

      <div className="p-4">
        <ul className="divide-y divide-gray-200 text-left">
          <li className="py-2 hover:bg-gray-50">
            <Link to="/news/book-list" className="block">
              ২০২৫ শিক্ষাবর্ষের মাধ্যমিক স্তরের পাঠ্যপুস্তক সমূহ
            </Link>
          </li>
          <li className="py-2 hover:bg-gray-50">
            <Link to="/news/evaluation-guidelines" className="block">
              ২০২৫ শিক্ষাবর্ষের ৬ষ্ঠ থেকে ৮ম শ্রেণির বিষয় কাঠামো, মূল্যায়ন নির্দেশনা, নম্বর বিভাজন
            </Link>
          </li>
          <li className="py-2 hover:bg-gray-50">
            <Link to="/news/ssc-2026-syllabus" className="block">
              ২০২৬ সালের এসএসসি পরীক্ষার জন্য পুনর্বিন্যাসকৃত পাঠ্যসূচি
            </Link>
          </li>
          <li className="py-2 hover:bg-gray-50">
            <Link to="/news/stream-division" className="block">
              মাধ্যমিকে ফিরছে সায়েন্স-আর্টস-কমার্স বিভাজন, পরিপত্র জারি
            </Link>
          </li>
        </ul>

        <div className="text-center mt-4">
          <Link to="/news/all" className="text-[#005181] hover:underline">
            সকল নোটিশ দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
