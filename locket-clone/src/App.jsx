import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import LoginRegister from './component/LoginRegister/LoginRegister';
import PageLayout from './component/PageLayout/PageLayout';
import Profile from './component/Profile/Profile';
import CreatePost from './component/CreatePost/CreatePost';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    description: "<i>CS142!</i>",
    first_name: "John",
    last_name: "Ousterhout",
    location: "Stanford, CA",
    login_name: "john",
    occupation: "Professor",
    password: "123",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjM3MmJlODZmZTJjNWE0MmM5NmM5NjMiLCJpYXQiOjE3MTYzODkwMTMsImV4cCI6MTcxNjQ3NTQxM30.5UHRQF0dO-quuw_WmoxdmeDyBCtYO79hYAI08vToBJQ",
    __v: 0,
    _id: "66372be86fe2c5a42c96c963"
  });

  return (
    <Router>
      <PageLayout user={user}>
        <Routes>
          <Route path='/' element={<HomePage user={user}/>} />
          <Route path='/auth' element={<LoginRegister setUser={setUser}/>} />
          <Route path='/profile/:user_id' element={<Profile user={user}/>} />
          <Route path='/create-post' element={<CreatePost user={user}/>} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;