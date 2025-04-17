import React from 'react'
import holder from "../../assets/testfile.avif";
import "./View.css"
import { CiCirclePlus, CiCircleRemove } from 'react-icons/ci';
import { FaFont } from 'react-icons/fa';

const View = ({closeModal}) => {
  return (
    <div className='view_container'>
      <section className="side_view">
        <span className="single_file">
          <img src={holder} alt="" />
          <h5>hello</h5>
        </span>
        <span className="single_file">
          <img src={holder} alt="" />
          <h5>hello</h5>
        </span>
        <span className="single_file">
          <img src={holder} alt="" />
          <h5>hello</h5>
        </span>
        <span className="single_file">
          <img src={holder} alt="" />
          <h5>hello</h5>
        </span>
        <span className="single_file">
          <img src={holder} alt="" />
          <h5>hello</h5>
        </span>
        <span className="single_file">
          <img src={holder} alt="" />
          <h5>hello</h5>
        </span>
        <span className="single_file">
          <img src={holder} alt="" />
          <h5>hello</h5>
        </span>
      </section>
      <section className='detail_view'>
        <img src={holder} alt=''/>
      </section>
      <section className="controls">
        <section className="controlbuttons">
        <CiCirclePlus title='add a document'/>
        <FaFont title='change font'/>
      <CiCircleRemove onClick={closeModal} title='close page'/>
      
      </section>
      <header className="docname">FIRST FILE</header>
      <span className="totpages"><h3>Total pages</h3>5</span>
      <div className="access">
        <h5>AUTHORIZED</h5>
        <h4><input type='checkbox'/> doejohn@abc.com</h4>
        <h4><input type='checkbox'/> doejohn@abc.com</h4>
        <h4><input type='checkbox'/> doejohn@abc.com</h4>
        <h4><input type='checkbox'/> doejohn@abc.com</h4>
        <h4><input type='checkbox'/> doejohn@abc.com</h4>
      </div>
      </section>
    </div>
  )
}

export default View