import React, { useState } from 'react'
import axios from 'axios'
import './CreateProduct.css'
import { useNavigate } from 'react-router-dom'


function CreateProduct() {
    const navigate = useNavigate()
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState()
    const [discription, setDiscription] = useState('')

    const [imgUrl, setImgUrl] = useState(null);
    function fileUpload(e) {
        setImgUrl(e.target.value)
    }

    function ADD(e) {
        e.preventDefault();
        const productdata = {
            productName: product,
            price: price,
            discription : discription,
            image: imgUrl,
        }
        axios.post("http://localhost:5000/productdata", productdata).then((res) => {

            console.log(res.data)
        })
        navigate('/productdata')
        
    }


    return (
       
            <div className="login_form_container">
                <form className="login_form" onSubmit={ADD}  >
                    <h2>Add Product</h2>
                    <div className="input_group">
                        <i className="fa fa-user"></i>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input_text"
                            onChange={(e) => { setProduct(e.target.value) }}
                            autoComplete="off"
                            required

                        />
                    </div>
                    <div className="input_group">
                        <i className="fa fa-user"></i>
                        <input
                            type="number"
                            placeholder="Price"
                            className="input_text"
                            onChange={(e) => { setPrice(e.target.value) }}
                            autoComplete="off"

                            required
                        />
                    </div>
                    <div className="input_group">
                        <i className="fa fa-user"></i>
                        <input
                            type="text"
                            placeholder="Discription"
                            className="input_text"
                            onChange={(e) => { setDiscription(e.target.value) }}
                            autoComplete="off"

                            required
                        />
                    </div>

                    <div className="input_group">
                        <i className="fa fa-unlock-alt"></i>
                        <label className='add-img'>Add product image</label>
                        <input
                            type="text"
                            id='ImgUrl'
                            className="input_img"
                            placeholder='enter URL'
                            
                            onChange={fileUpload}
                            autoComplete="off"

                            required
                        />
                    </div>
                    
                    <div className="input_group img-body">
                        {imgUrl && <img src={imgUrl} alt="Add Images" /> }
                        
                    </div>




                    <div className="button_group" id="signup_button">
                        <a>
                            <input type="submit" className='sbm-btn' value={'Add Now'} /></a>
                    </div>


                </form>
            </div>


       
    )
}

export default CreateProduct
