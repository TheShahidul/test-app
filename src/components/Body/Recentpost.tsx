import React from 'react';
import { FaRegNewspaper, FaRegCalendarAlt, FaRegUserCircle } from 'react-icons/fa';

const recentPosts = [
  {
    title: '২০২৪-২৫ শিক্ষাবর্ষের ভর্তি চলছে',
    date: '18 Aug 2025',
    author: 'Admin',
    icon: <FaRegNewspaper className="text-4xl text-[#005282]" />,
  },
  {
    title: 'উচ্চ মাধ্যমিক ২য় বর্ষের পরীক্ষার রেজাল্ট পাবলিশ করা হয়েছে',
    date: '17 Aug 2025',
    author: 'Admin',
    icon: <FaRegNewspaper className="text-4xl text-[#005282]" />,
  },
  {
    title: 'সাংস্কৃতিক সপ্তাহ ২০২৫, ২৫ই আগস্ট অনুষ্ঠিত হবে',
    date: '16 Aug 2025',
    author: 'Admin',
    icon: <FaRegNewspaper className="text-4xl text-[#005282]" />,
  },
  {
    title: 'অর্ধ-বার্ষিক পরীক্ষার রুটিন প্রকাশ করা হয়েছে',
    date: '15 Aug 2025',
    author: 'Admin',
    icon: <FaRegNewspaper className="text-4xl text-[#005282]" />,
  },
];

const RecentPost: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl text-center font-bold text-[#005282] mb-4">সাম্প্রতিক পোস্ট</h2>
      <hr className="mb-6" />
      <div className="space-y-4">
        {recentPosts.map((post, index) => (
          <div key={index} className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
            <div className="flex-shrink-0">
              {post.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-md font-medium text-gray-800">{post.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <FaRegCalendarAlt className="mr-2" />
                <span>{post.date}</span>
                <FaRegUserCircle className="ml-4 mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
