import React, { useState, useEffect } from 'react'
import './ProductData.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductData() {
    let nav = useNavigate()
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getproduct").then(res => {
            setProductData(res.data);
        })
    }, [])


    return (
        <div>

            <div className='U-data' >
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Discription</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    {productData.map((d) => (
                        <tbody key={d._id} onClick={() => { nav(`/productview/${d._id}`) }}>
                            <tr >
                                <td>{d.productName}</td>
                                <td>{d.price}</td>
                                <td>{d.discription}</td>
                                <td> <img src={d.image} alt="Add Images" /> </td>
                            </tr>
                        </tbody>
                    ))}
                </table>

            </div>


        </div>
    )
}

export default ProductData
