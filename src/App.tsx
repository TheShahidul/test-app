
import Topbar from './components/Topbar';

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import NewsTicker from './components/NewsTicker';
import Corner from './components/Corner';

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
      <Corner/>
    </div>
  );
}

export default App;
