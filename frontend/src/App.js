import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import AddData from './pages/AddData';

function App() {
  return (
    <div>
      <Navbar />
      <AddData />
      <Home />
    </div>
  );
}

export default App;
