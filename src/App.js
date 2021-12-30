import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactCompo from './Components/ContactCompo';
import HeaderCompo from './Components/HeaderCompo';
import HomeCompo from './Components/HomeCompo';
import PageNotFound from './Components/PageNotFoundCompo';
import StudentDesc from './Components/StudentDesc';
import StudentsCompo from './Components/StudentsCompo';
import { DataProvider } from './Components/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <HeaderCompo />
          <Routes>
            <Route path='/' element={<HomeCompo />} />
            <Route path='home' element={<HomeCompo />} />
            <Route path='students' element={<StudentsCompo />} />
            <Route path='student-desc' element={<StudentDesc />} />
            <Route path='student-desc/:id' element={<StudentDesc />} />
            <Route path='contact' element={<ContactCompo />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    </DataProvider>
  );

}

export default App;
