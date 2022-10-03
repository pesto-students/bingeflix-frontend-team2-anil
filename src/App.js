import { useContext } from 'react';
import './App.scss';
import { AuthContext } from './authContext/AuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Register/>
      {/* <Home/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
