import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
  const Name= 'Member'

  return (
    <div className='home'>
      <div className="form">
        <div className="greatings">
          <h1>Hello {Name}</h1>
        </div>
        <div className="btn-group">
        <button class="l-btn" role="button" onClick={() => { navigate('/login')}} > Login</button>
        <button class="l-btn" role="button" onClick={() => { navigate('/signup')}}>Signup</button>


         

        </div>

      </div>
      
    </div>
  )
}

export default Home
