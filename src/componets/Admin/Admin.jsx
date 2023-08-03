import React from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';

function AdminNav() {
    const navigate = useNavigate()


    return (
        <div >
            <nav className="navbar">
                <a onClick={() => { navigate('/productdata') }}>Product View</a>
                <a onClick={() => { navigate('/create') }}>Add Product</a>
                <a onClick={() => { navigate('/userdata') }}>Users Data</a>

            </nav>

        </div>
    );
}

export default AdminNav;
