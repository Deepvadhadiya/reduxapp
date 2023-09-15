import './App.css';
import Navbar from './component/Navbar';
import Shop from './component/Shop';

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <Shop />
      </div>
    </>
  );
}

export default App;
