import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function SimpleSlider({movie, children}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 5000,
    autoplay: true,
  };
  const posters = movie.posters.backdrops.map(poster => {
    return(
     <div>
        <div className="box-img" style={{ backgroundImage: `url(${poster.link})` }} >

          {children}
        </div>
     </div>
    )
  }) 
    
  return (
    <Slider {...settings}>
      {posters}
    </Slider>
  );
}
        // <img className='img-size' src={poster.link} alt="poster" />
