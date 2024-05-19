import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import LoginRegister from './component/LoginRegister/LoginRegister';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<LoginRegister/>} />
      </Routes>
    </Router>
  );
}

export default App;