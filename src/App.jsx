import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

function App() {
  var settings = {
    infinite: true,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img src="https://images.pexels.com/photos/1187086/pexels-photo-1187086.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/986831/pexels-photo-986831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/986831/pexels-photo-986831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1187086/pexels-photo-1187086.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/450050/pexels-photo-450050.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </Slider>
    </>
  )
}

export default App
