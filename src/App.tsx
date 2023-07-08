import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import {Navbar} from './components/Navbar'
import {Createpost} from './pages/Createpost/Createpost';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/> {/*has to be in between these two because it can't be defined as a route */}
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createpost' element={<Createpost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
