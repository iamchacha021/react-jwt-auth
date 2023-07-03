
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './signup';
import Login from './login';
import AuthProvider from './AuthContext';
import Navbar from './Navbar';

function App() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const isLoggedIn = sessionStorage.getItem('jwtToken') ? true : false;
  // const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const pathname = window.location.pathname;
  
    // check if the user is authenticated, except for the signup page
    if (isLoggedIn && pathname !== '/signup') {
      setLoading(false);
    } else if (!isLoggedIn && pathname !== '/login' && pathname !== '/signup') {
      // navigate('/login', { replace: true });
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [isLoggedIn]);
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <header className="App-header">
            <Navbar />
          </header>
            <h1>Hello JWT</h1>
          <div>
            <Routes>
              <Route path='/login' element={ <Login />} />
              <Route path='/signup' element={ <Signup />} />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
