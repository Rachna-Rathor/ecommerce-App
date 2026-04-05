
// import './App.css'
// import Home from './Home/Home';
// import Shoping from './shop/Shoping';
// import Mens from './men/Mens';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import Womens from './women/Womens';
// import Kids from './kids/Kids';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import { Toaster } from 'react-hot-toast';
// import { useAuth } from './context/AuthProvider';


// function App() {
//   const [authUser,setauthUser]=useAuth();
//   console.log(authUser);

//   return (
//     <>
//    {/* Defininng Routes */}
//    <div>
//    <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path='/shop' element={<Shoping/>}/>
//     {/* <Route path="/shop" element={authUser?<Shoping/>:<Navigate to="/signup"/>}/> */}
//     <Route path="/men" element={<Mens/>}/>
//     <Route path="/women" element={<Womens/>}/>
//     <Route path="/kids" element={<Kids/>}/>
//     <Route path="/signup" element={<Signup/>}/>
//     <Route path="/login" element={<Login />} /> 
 

//    </Routes>
//    <Toaster/>
//    </div>
//     </>
//   )
// }

// export default App




import './App.css';
import Home from './Home/Home';
import Shoping from './shop/Shoping';
import Mens from './men/Mens';
import Womens from './women/Womens';
import Kids from './kids/Kids';
import Signup from './components/Signup';
import Login from './components/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import { useState } from 'react';
import Cart from './components/Cart'; // Assuming you have a Cart component

function App() {
  const [authUser] = useAuth();
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <> 
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shoping addToCart={addToCart} />} />
          <Route path="/men" element={<Mens addToCart={addToCart} />} />
          <Route path="/women" element={<Womens addToCart={addToCart} />} />
          <Route path="/kids" element={<Kids addToCart={addToCart} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
        <Toaster />
      </div>
    </>
  );
}

export default App;
