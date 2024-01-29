import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Browse from './pages/Browse';
import Collection from './pages/Collection';
import Community from './pages/Community';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="Collection" element={<Collection />} />
          <Route path="community" element={<Community />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
