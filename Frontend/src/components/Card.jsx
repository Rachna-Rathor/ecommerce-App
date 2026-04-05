import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MainCard from "./MainCard";
import NotFound from "./NotFound";

function Card({ search }) {
  const [cart, setCart] = useState([]);
  const [shop, setShop] = useState([]);

  // Handle click to add items to the cart
  const handleClick = (item) => {
    console.log(item); // Verify it's working
    setCart((prevCart) => [...prevCart, item]); // Add item to the cart
  };

  // Fetch data from backend and filter based on category or search
  useEffect(() => {
    const getShop = async () => {
      try {
        const res = await axios.get(
          "https://ecommerce-app-1-yt2q.onrender.com/item/v1/getItem"
        );
        console.log(res.data);

        let filteredData = res.data.filter((item) => item.category === "free");

        if (search) {
          filteredData = filteredData.filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.description.toLowerCase().includes(search.toLowerCase())
          );
        }
        setShop(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getShop();
  }, [search]); // Runs when `search` changes

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-12">
        <div className="font-bold text-black text-3xl mb-2">
          Featured Categories
        </div>
        <progress
          className="progress w-56 h-2 bg-orange-500 rounded-full mb-10"
          value={0}
          max={100}
        />
      </div>

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {shop.length > 0 ? (
          <div className="slider-container">
            <Slider {...settings}>
              {shop.map((item) => (
                <MainCard key={item.id || item._id} item={item} handleClick={handleClick} />
              ))}
            </Slider>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}

export default Card;
