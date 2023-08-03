import React, { useEffect, useState } from 'react'
import "./ProductView.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductView() {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});

  useEffect(() => {

    axios.get(`http://localhost:5000/productview/${id}`).then(res => {

      console.log(res.data);
      setProduct(res.data);

    })
  }, []);


  return (
    <>
      <div key={product._id}  id='view'>
        <div id='products' >
          <img src={product.image}  alt="Not Found" />
        </div>
        <div id="details">
          <h1 id='p-name'>{product.productName}</h1>
          <h3 id='price'>{product.price}</h3>
          <p id='discription'>{product.discription}</p>
        </div>
      </div>
    </>
  )
}

export default ProductView
