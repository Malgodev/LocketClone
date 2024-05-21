import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import LoginRegister from './component/LoginRegister/LoginRegister';
import PageLayout from './component/PageLayout/PageLayout';
import Profile from './component/Profile/Profile';

function App() {
  return (
    <Router>
      <PageLayout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<LoginRegister/>} />
            <Route path='/profile/:user_id' element={<Profile />} />
          </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;