import React, { useEffect, useState } from 'react'
// import dataList from '../data/data'
import axios from "axios"
import MainCard from './MainCard';

function Shop({addToCart}) {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    const getShop = async () => {
      try {
        const res = await axios.get("https://ecommerce-app-1-yt2q.onrender.com/item/v1/getItem");
        setShop(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getShop();
  }, []);

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className="font-semibold text-gray-800 text-3xl mb-2 mt-32 md:mt-32">
        Shop
      </div>
      <div className='mt-10 grid md:grid-cols-3 grid-cols-1'>
        {shop.map((item) => (
          <MainCard key={item.id} item={item} handleClick={addToCart} />
        ))}
      </div>
    </div>
  );
};


export default Shop;
