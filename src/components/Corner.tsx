
const Corner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Outer Rounded Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-4 shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Teacher's Corner */}
          <div className="flex-1 bg-[#005181] border border-blue-300 rounded-full p-4 shadow-sm">
            <p className="text-md font-semibold text-white text-center">
              শিক্ষক কর্ণার
            </p>
            
          </div>

          {/* Student's Corner */}
          <div className="flex-1 bg-[#005181] border border-blue-300 rounded-full p-4 shadow-sm">
            <p className="text-md font-semibold text-white text-center">
              শিক্ষার্থী কর্ণার
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corner;
