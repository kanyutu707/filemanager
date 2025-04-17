import React from 'react';
import "./Upload.css";
import { CiCircleRemove } from 'react-icons/ci'

const Upload = ({closeModal}) => {
  return (
    <form className='uploadform'>
        <header><CiCircleRemove onClick={closeModal} title='close upload page'/></header>
        <span className="input_group">
            <label htmlFor="">Upload File</label>
            <input type="file" name="" id="" placeholder='select file to upload' />
        </span>
        <button>Continue to upload</button>
    </form>
  )
}

export default Upload