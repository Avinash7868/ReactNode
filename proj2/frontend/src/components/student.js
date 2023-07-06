import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Student = () => {
    const [studentData,setStudentData]=useState([])
    useEffect(() => {
      axios.get('http://localhost:4000/')
      .then(res => setStudentData(res.data))
      .catch(err => console.log(err))
    }, [])
    const handleDelete = async(id)=>{
        try {
            await axios.delete('http://localhost:4000/students/'+ id)
            window.location.reload();
            
        } catch (err) {
            console.log(err)            
        }
    }
  return (
    <>
        <div className="mainContainer">
            <div className="childcontainer">
              <button>  <Link to="/create" className="add link">ADD</Link>
              </button>
                <table className='table'>
                    <thead className='tableHead'>
                        <tr className='tableHeadRow'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody className='tableBody'>
                        {
                        studentData.map((data , i) => (
                            <tr key={i} className='tableBodyRow'>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>
                                  <button> <Link to={`update/${data.id}`}  className="link">Update</Link>
                                  </button> 
                                    <button onClick={ e => handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Student;