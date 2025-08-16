import Topbar from './components/Topbar';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import NewsTicker from './components/NewsTicker';
import Corner from './components/Corner';
import Body from './components/Body/Body'; // <-- Import Body component
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="text-[#005181]">
        <p>পড় তোমার রবের নামে, যিনি সৃষ্টি করেছেন।</p>
      </div>
      <div className="upper-section">
        <Topbar />
        <Banner />
        <Navbar />
        <NewsTicker />
        <Corner />
      </div>
      
      {/* Insert your Body layout here */}
      <div className="body-section">
        <Body />
      </div>

      

      {/* Optional: Footer component later */}
    </div>
  );
}

export default App;
