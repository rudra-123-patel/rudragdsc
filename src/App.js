// import logo from './logo.svg';
import './App.css';
// import Text from './components/Text.jsx';
import Profile from './screens/Profile.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className=''>
      <header className="App-header">

        <Login/>

  
<BrowserRouter>
    <Routes >
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>


</BrowserRouter>



     
     
      
      {/* <Profile /> */}
      </header>
    </div>

   
  );
}

export default App;
