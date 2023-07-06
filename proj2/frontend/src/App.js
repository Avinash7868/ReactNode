import React from 'react'
import './App.css'
// import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Student from './components/student';
import StudentCreate from './components/studentCreate';
import StudentUpdate from './components/studentupdate';
const App = () => {
  return (
    <div className='APP'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Student />} ></Route> 
          <Route path='/create' element={ <StudentCreate />} ></Route> 
          <Route path='/update/:id' element={ <StudentUpdate />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App