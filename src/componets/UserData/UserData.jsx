import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './UserData.css'
function UserData() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getuser").then(res=>{

            setUserData(res.data);
        })
    },[])
    return (
       
            <div>

                <div className='U-data' >
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userData.map((d) => (
                            <tr key={d._id} >
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.password}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </div>


            </div>
       
    )
}

export default UserData
