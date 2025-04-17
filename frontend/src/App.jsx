import React, { useState } from 'react'
import "./App.css"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { CiFileOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import Sent from './Pages/Sent/Sent';
import Receipt from './Pages/Receipt/Receipt';
import Total from './Pages/Total/Total';
import View from './Pages/View/View';
import Upload from './Pages/Upload/Upload';
const App = () => {
  const [showModal, setShowModal]=useState(false);
  return (
    <BrowserRouter>
    <div className='app_container'>
      <section className="navigation">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/account">Account</Link>
        <Link to="/logout">Logout</Link>
      </section>
      <section className="top_app_container">
        <span className="single_top_app_container" onClick={()=>setShowModal(true)}>
          <CiFileOn/>
          <h3>upload a file</h3>
        </span>
        
        <span className="single_top_app_container">
          <CiFolderOn/>
          <h3>upload a folder</h3>
        </span>
      </section>
      {showModal && <Upload closeModal={()=>setShowModal(false)}/>}
      <section className="sub_navigations">
      <Link to="/total" className="sub_navigation">
          Total
        </Link>
        <Link to="/sent" className="sub_navigation">
          Sent
        </Link>
        <Link to="/received" className="sub_navigation">
          Received
        </Link>
        <span className="sub_navigation">
          <select name="" id="">
            <option value="">-------- filter by --------</option>
            <option value="">Date</option>
            <option value="">Type</option>
            <option value="">Shares</option>
          </select>
        </span>
        <span className="sub_navigation">
          <input type="search"/>
        </span>
      </section>

      <section className="resource_container">
        
          <Routes>
            <Route path='/total' element={<Total/>}/>
            <Route path='/sent' element={<Sent/>}/>
            <Route path='/received' element={<Receipt/>}/>
            <Route path='/view' element={<View/>}/>
          </Routes>
        
      </section>
    </div>
    </BrowserRouter>
  )
}

export default App
