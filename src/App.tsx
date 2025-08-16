import Topbar from './components/Topbar';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import NewsTicker from './components/NewsTicker';
import Corner from './components/Corner';
import Body from './components/Body/Body'; // <-- Import Body component
import Instituteinfo from './components/Body/Institueinfo';

function App() {
  return (
    <div className="">
      <div className="flex justify-center py-4 text-[#005181]">
        <p>পড় তোমার রবের নামে, যিনি সৃষ্টি করেছেন।</p>
      </div>
      <Topbar />
      <Banner />
      <Navbar />
      <NewsTicker />
      <Corner />
      
      {/* Insert your Body layout here */}
      <Body />

      

      {/* Optional: Footer component later */}
    </div>
  );
}

export default App;
