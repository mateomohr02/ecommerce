import './App.css';
import {Routes, Route} from 'react-router-dom';

import Home from './Components/Home/home'
import Login from './Components/Login/login'
import Register from './Components/Register/register'
import Detail from './Components/Detail/detail'
import AddProduct from './Components/AddProduct/addProduct'
import Admin from './Components/Admin/admin'


function App() {


  return (

   <div className="App">

      <Routes>

        <Route exact path='/register' element={<Register/>} />

        <Route exact path='/login' element={<Login/>} />

        <Route exact path="/home" element={<Home/>} />

        <Route exact path='/product/:id' element={<Detail/>} />

        <Route exact path='/admin' element={<Admin/>} />
        
        <Route exact path='/admin/addProduct' element={<AddProduct/>} />

      </Routes>
    
    </div>
  );
}

export default App;
