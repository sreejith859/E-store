import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Admin from './pages/Admin'
import CreateProduct from './pages/CreateProduct'
import UserData from './pages/UserData'
import ProductData from './pages/ProductData'
import ProductView from './pages/ProductView'




function App() {
  
  return (
    <>
      <div className="App">
        <Router>
          
          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/create' element={<CreateProduct />} />
            <Route path='/userdata' element={<UserData />} />
            <Route path='/productdata' element={<ProductData />} />
            <Route path='/productview/:id' element={<ProductView />} />

          </Routes>

        </Router>
      </div>


      </>
      )
}

      export default App
