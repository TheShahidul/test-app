import { Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import NewsTicker from './components/NewsTicker';
import Corner from './components/Corner';
import Body from './components/Body/Body';
import Footer from './components/Footer';
import './App.css';


// Placeholder components for the routes
const About = () => <h1>About Page</h1>;
const Admission = () => <h1>Admission Page</h1>;
const TeachersGeneral = () => <h1>Teachers (General) Page</h1>;
const TeachersTechnical = () => <h1>Teachers (Technical) Page</h1>;
const Staff = () => <h1>Staff Page</h1>;
const Notice = () => <h1>Notice Page</h1>;
const StudentCorner = () => <h1>Student Corner Page</h1>;
const Results = () => <h1>Results Page</h1>;
const Gallery = () => <h1>Gallery Page</h1>;
const Articles = () => <h1>Articles Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
const Complaints = () => <h1>Complaints Page</h1>;
const SubCorner1 = () => <h1>Sub Corner 1 Page</h1>;
const SubCorner2 = () => <h1>Sub Corner 2 Page</h1>;

function App() {
  return (
    <div className="App">
      <div className="text-[#005181] py-3">
        <p>পড় তোমার রবের নামে, যিনি সৃষ্টি করেছেন।</p>
      </div>
      <div className="upper-section">
        <Topbar />
        <Banner />
        <Navbar />
        <NewsTicker />
        <Corner />
        
      </div>

      <div className="body-section">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/teachers/general" element={<TeachersGeneral />} />
          <Route path="/teachers/technical" element={<TeachersTechnical />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/student-corner" element={<StudentCorner />} />
          <Route path="/results" element={<Results />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/sub-corner-1" element={<SubCorner1 />} />
          <Route path="/sub-corner-2" element={<SubCorner2 />} />
          
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
