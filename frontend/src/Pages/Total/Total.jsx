import React, { useState } from 'react'
import { CiCircleChevLeft, CiCircleChevRight, CiFileOn, CiShare1, CiShare2 } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { FaEye, FaShareAlt } from "react-icons/fa";
import View from '../View/View';
const Total = () => {
const [showModal, setShowModal]=useState(false);

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
            
            <tr onDoubleClick={()=>setShowModal(true)}>
                <td>1</td>
                <td><CiShare2/></td>
                <td><CiFileOn/> (.pdf)</td>
                <td>15/11/2020</td>
                <td>13/12/2022</td>
                <td>10</td>
            </tr>
            {showModal && <View closeModal={()=>setShowModal(false)}/>}
            <tr>
                <td>1</td>
                <td><CiShare2/></td>
                <td><CiFileOn/> (.pdf)</td>
                <td>15/11/2020</td>
                <td>13/12/2022</td>
                <td>10</td>
            </tr>
            <tr>
                <td>1</td>
                <td><CiShare2/></td>
                <td><CiFileOn/> (.pdf)</td>
                <td>15/11/2020</td>
                <td>13/12/2022</td>
                <td>10</td>
            </tr>
            <tr>
                <td>1</td>
                <td><CiShare2/></td>
                <td><CiFolderOn/> (folder)</td>
                <td>15/11/2020</td>
                <td>13/12/2022</td>
                <td>10</td>
            </tr>
            <tr>
                <td>1</td>
                <td><CiShare2/></td>
                <td><CiFileOn/>(.jpg)</td>
                <td>15/11/2020</td>
                <td>13/12/2022</td>
                <td>10</td>
            </tr>
            <tr>
                <td>1</td>
                <td><CiShare2/></td>
                <td><CiFileOn/> (.pdf)</td>
                <td>15/11/2020</td>
                <td>13/12/2022</td>
                <td>10</td>
            </tr>
            <tr>
                <td>1</td>
                <td><CiShare2/></td>
                <td><CiFileOn/> (.pdf)</td>
                <td>15/11/2020</td>
                <td>13/12/2022</td>
                <td>10</td>
            </tr>
            <tr>
                <td>1</td>
                <td><CiShare2/></td>
                <td><CiFileOn/> (.pdf)</td>
                <td>15/11/2020</td>
                <td>13/12/2022</td>
                <td>10</td>
            </tr>
            <tr>
                <td>1</td>
                <td><CiShare2/></td>
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

export default Total
