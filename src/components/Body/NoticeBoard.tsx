import { FaBell } from 'react-icons/fa';

const NoticeBoard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <div className="bg-[#005181] text-white p-3 rounded-t-lg flex items-center">
        <FaBell className="mr-2 text-lg" />
        <h3 className="text-xl font-semibold">নোটিশ বোর্ড</h3>
      </div>

      <div className="p-4">
        <ul className="divide-y divide-gray-200 text-left">
          <li className="py-2 hover:bg-gray-50"><a href="#" className="block">জুলাই গ্রাফিতি আয়োজন</a></li>
          <li className="py-2 hover:bg-gray-50"><a href="#" className="block">বাৎসরিক ছুটির দিন সমূহ</a></li>
          <li className="py-2 hover:bg-gray-50"><a href="#" className="block">পুনর্জাগরণ অনুষ্ঠানমালা ২০২৫</a></li>
          <li className="py-2 hover:bg-gray-50"><a href="#" className="block">জুলাই অনির্বাণ</a></li>
          <li className="py-2 hover:bg-gray-50"><a href="#" className="block">আমরা অনেকজন</a></li>
        </ul>

        <div className="text-center mt-4">
          <a href="#" className="text-[#005181] hover:underline">সকল নোটিশ দেখুন</a>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
