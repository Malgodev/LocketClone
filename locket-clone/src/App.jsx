import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import LoginRegister from './component/LoginRegister/LoginRegister';
import './App.css';
import PageLayout from './component/PageLayout/PageLayout';

function App() {
  return (
    <Router>
      <PageLayout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<LoginRegister/>} />
          </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;