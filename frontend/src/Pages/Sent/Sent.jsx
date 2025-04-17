import React from 'react'
import { CiCircleChevLeft, CiCircleChevRight, CiFileOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import "./Sent.css"
import { FaEye } from "react-icons/fa";


const Sent = () => {
  return (
    <table className='container'>
      <thead>
        <th>#</th>
        <th>Preview</th>
        <th>Type</th>
        <th>Date Created</th>
        <th>Date Updated</th>
        <th>No of Shares</th>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
            <td><FaEye /></td>
            <td><CiFileOn/> (.pdf)</td>
            <td>15/11/2020</td>
            <td>13/12/2022</td>
            <td>10</td>
        </tr>
        <tr>
            <td>1</td>
            <td><FaEye /></td>
            <td><CiFileOn/> (.pdf)</td>
            <td>15/11/2020</td>
            <td>13/12/2022</td>
            <td>10</td>
        </tr>
        <tr>
            <td>1</td>
            <td><FaEye /></td>
            <td><CiFileOn/> (.pdf)</td>
            <td>15/11/2020</td>
            <td>13/12/2022</td>
            <td>10</td>
        </tr>
        <tr>
            <td>1</td>
            <td><FaEye /></td>
            <td><CiFolderOn/> (folder)</td>
            <td>15/11/2020</td>
            <td>13/12/2022</td>
            <td>10</td>
        </tr>
        <tr>
            <td>1</td>
            <td><FaEye /></td>
            <td><CiFileOn/>(.jpg)</td>
            <td>15/11/2020</td>
            <td>13/12/2022</td>
            <td>10</td>
        </tr>
        <tr>
            <td>1</td>
            <td><FaEye /></td>
            <td><CiFileOn/> (.pdf)</td>
            <td>15/11/2020</td>
            <td>13/12/2022</td>
            <td>10</td>
        </tr>
        <tr>
            <td>1</td>
            <td><FaEye /></td>
            <td><CiFileOn/> (.pdf)</td>
            <td>15/11/2020</td>
            <td>13/12/2022</td>
            <td>10</td>
        </tr>
        <tr>
            <td>1</td>
            <td><FaEye /></td>
            <td><CiFileOn/> (.pdf)</td>
            <td>15/11/2020</td>
            <td>13/12/2022</td>
            <td>10</td>
        </tr>
        <tr>
            <td>1</td>
            
            <td><FaEye /></td>
            <td><CiFileOn/> (.pdf)</td>
            <td>15/11/2020</td>
            <td>13/12/2022</td>
            <td>10</td>
        </tr>
      </tbody>
      <span className="controls">
            <CiCircleChevLeft/>
            <span className="counts">
                1/100
            </span>
            <CiCircleChevRight/>
      </span>
    </table>
  )
}

export default Sent
