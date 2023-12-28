import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDataInput from '../components/addDataInput'
import StudentComponent from '../components/studentComponent';


function route() {
  return (
    <Router>
        <div>
            <Routes>
                <Route path='/studentcomponent' element={<StudentComponent/>}/>
                <Route path='/adddatainput' element={<AddDataInput/>}/>
            </Routes>
        </div>
    </Router>
  )
}

export default route