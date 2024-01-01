import React, { useEffect, useState } from "react";
import delivery from "../assets/home-delivery.svg";
import peace from '../assets/peace.svg';
import quality from '../assets/quality.svg';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import arrowR from '../assets/right-arrow.svg';
import arrowL from '../assets/left-arrow.svg';
import circle from '../assets/circle.svg';
import comments from '../components/comments.json';
import bruce from '../assets/bruce.jpg';
import queen from '../assets/rhaen.jpg';
import gojo from '../assets/gojo.jpg';
import leftcom from '../assets/left-com.svg';
import rightcom from '../assets/right-com.svg';
import quote from '../assets/open-quote.svg';
import close from '../assets/close.svg';

export const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [infoClicked, setInfoClicked] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const profilePics = [bruce, queen, gojo];

  const handleSearch = () => {
    axios.get('/cars', {
      params: {
        search: searchTerm,
      },
    })
      .then(response => setGalleryData(response.data))
      .catch(error => console.error('Error fetching data', error));
  };

  useEffect(() => {
    axios.get('/cars')
      .then(response => setGalleryData(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);
  
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      axios.get('/cars')
        .then(response => setGalleryData(response.data))
        .catch(error => console.error('Error fetching data', error));
    } else {
      setSelectedCategory(category);
      axios.get('/cars', {
        params: {
          category: category,
        },
      })
        .then(response => setGalleryData(response.data))
        .catch(error => console.error('Error fetching data', error));
    }
  };

  const handleInfoClick = (index) => {
    const newInfoClicked = [...infoClicked];
    newInfoClicked[index] = !newInfoClicked[index];
    setInfoClicked(newInfoClicked);
  };

  const categories = [
  'Electric', 'Sedan', 'Pickup Truck', 'SUV', 'Hybrid',
  'Diesel', 'Coupe', 'Hatchback', 'Wagon', 'Convertible',
  'Minivan', 'Plug-in Hybrid']

  useEffect(() => {
    axios.get('/cars')
      .then(response => setGalleryData(response.data))
      .catch(error => console.error('Error fetching data: ', error))
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 550,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <img src={arrowL} alt="arrowL" />,
    nextArrow: <img src={arrowR} alt="arrowR" />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4, 
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  const commentSettings = {
    dots: true,
    infinite: true,
    speed:300,
    slidesToShow:1,
    slidesToScroll:1,
    nextArrow: <img src={rightcom} alt="rightcom" />,
    leftArrow: <img src={leftcom} alt="leftcom" />,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow:1
        },
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow:2
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow:3,
        }
      }
    ]
  }

  return (
    <div className="mt-[5rem] lg:mt-[6rem]" id="hero-container">
      <div id="hero-content">
        <div className="mt-[-6.5rem] pb-[2rem] md:mt-[-8.5rem] lg:mt-[-9.5rem]" id="search-logic">
          <div className="flex justify-center mt-[-1.5rem] md:mt-[-3rem]" id="search-button">
              <button
              onClick={() => setSearchClicked(!searchClicked)}
              className={`bg-[#1d1d53] w-[13rem] h-[3rem]
              rounded-md border-solid border-[1px] border-black 
              duration-300 text-[#d7d6d6] tracking-wider font-medium z-[1000]
              shadow-lg shadow-blue-600 xl:w-[17rem] xl:h-[3.5rem]
              hover:bg-blue-600 ${searchClicked ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                Search for cars
              </button>
            </div>

            <div className="flex justify-center space-x-2 relative top-[1.5rem]" id="search-input">
              <button onClick={() => setSearchClicked(!searchClicked)}
              className={`${searchClicked ? 'opacity-100' : 'opacity-0 pointer-events-none'}
              duration-300 w-[2rem]`}>
                <img src={close} alt="closee" />
              </button>
              
              <input 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch(e.target.value)
              }}
              type="text" placeholder="Search for cars" className={`duration-700 border-solid
              ${searchClicked ? 'opacity-100 w-[25rem]' : 'opacity-0 pointer-events-none w-[2rem]'}
              border-black border-[1px] h-[3rem] rounded-md pl-5 hover:border-gray-500
              focus:outline-none`}/>
            </div>
        </div>

        <div className="p-8 flex flex-col items-center" id="popular-section">
          <div className="relative left-[-4.5rem] top-[-1rem] md:left-[-11.5rem] 
          lg:left-[-21rem] xl:left-[-27.5rem] 2xl:left-[-35.5rem] 2xl:top-[-2rem]" id="popular-header">
              <h1 className="text-[#1d1d53] font-bold">Popular Categories</h1>
          </div>
          <Slider {...settings} className="bg-white text-white rounded-md w-[25rem] m-auto
          md:w-[35rem] lg:w-[50rem] xl:w-[65rem]">
            {categories.map(info => (
              <div className="p-2" id="categories"> 
                <button 
                onClick={() => handleCategoryClick(info)}
                className="w-[7rem] h-[3rem] border-solid border-[1px] bg-transparent
                rounded-md border-[#2f2f6d] hover:bg-blue-800 duration-150
                active:bg-blue-600 bg-white text-black hover:text-white">
                  {info}
                </button>
              </div>
            ))}
          </Slider>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 rounded-sm bg-[#e1e1e3d2]
          mt-5 relative left-[-.5rem] sm:left-0 p-4 gap-4 m-auto w-[28rem] sm:w-[28rem] md:w-[41.5rem]
          lg:w-[60rem] xl:w-[73rem] 2xl:w-[90rem]"
          id="products-section">
            {galleryData.map((info, index) => {
              return(
                <div
                key={index}
                className="flex flex-col p-3 border-solid border-[1px] border-[#b8b7b7]
                hover:bg-[#cbcbcb] items-center"
                id="proucts-wrapper">
                  <div className={`bg-blacke w-[12.5rem] absolute mt-[-.75rem] duration-500 lg:w-[10.7rem] xl:w-[13.4rem]
                  2xl:w-[16.7rem]
                  ${infoClicked[index] ? 'h-[15.7rem] lg:h-[15.6rem] xl:h-[16.3rem] 2xl:h-[18.5rem] opacity-100' 
                  : 'opacity-0 pointer-events-none h-[1rem]'}`}
                  id="product-info">
                    <div 
                    className="p-2 text-[.8rem] xl:text-[.9rem] 2xl:text-[1rem] text-white space-y-4"
                    id="info-text">
                      <h4 className="font-bold tracking-wider">
                        <span className="tracking-widest font-bold text-[.8rem] xl:text-[.9rem]
                        2xl:text-[1.1rem] text-black pr-1">
                          Year:  
                        </span>
                        {info.year}
                      </h4>

                      <h4 className="font-bold tracking-wider">
                        <span className="tracking-widest font-bold text-[.8rem] xl:text-[.9rem]
                        2xl:text-[1.1rem] text-black pr-2">
                          Horsepower:  
                        </span>
                        {info.horsepower}
                      </h4>

                      <h4 className="font-bold tracking-wider">
                        <span className="tracking-widest font-bold text-[.8rem] xl:text-[.9rem]
                        2xl:text-[1.1rem] text-black pr-2">
                          Fuel:  
                        </span>
                        {info.fuel}
                      </h4>

                      <h4 className="font-bold tracking-wider">
                        <span className="tracking-widest font-bold text-[.8rem] xl:text-[.9rem]
                        2xl:text-[1.1rem] text-black pr-2">
                          Int. Color:  
                        </span>
                        {info.intcolor}
                      </h4>

                      <h4 className="font-bold tracking-wider">
                        <span className="tracking-widest font-bold text-[.8rem] xl:text-[.9rem]
                        2xl:text-[1.1rem] text-black pr-2">
                          Ext. Color:  
                        </span>
                        {info.extcolor}
                      </h4>
                    </div>
                  </div>

                  <div id="product-picture">
                    <img src={info.image} alt={info.model} />
                  </div>

                  <div className="flex flex-col p-1" id="product-text-wrapper">
                    <div id="product-model">
                      <h1 className="text-[.9rem] font-medium">
                        {info.model}
                      </h1>
                    </div>

                    <div className="flex flex-col" id="shop-btn">
                        <div id="shop-button">
                          <button 
                            className="text-cyan-400 font-medium tracking-wide hover:text-cyan-500
                            duration-100">
                            Shop now
                          </button>
                        </div>

                        <div className="flex justify-center relative top-4" id="info-button">
                          <button 
                          onClick={() => handleInfoClick(index)}>
                            <img src={circle} alt="circle" className="w-[2rem]"/>
                          </button>
                        </div>
                    </div>
                  </div>
                  <hr className="mt-4"/>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-[10rem]"
         id="why-choose-section">
          <div className="flex justify-center" id="header">
            <h1 className="tracking-wider text-[#1d1d53] font-bold lg:text-[2.8rem] xl:text-[3.2rem]">
              Why choose Carfit?
            </h1>
          </div>

          <div className="flex flex-col space-y-[5rem] justify-center mt-[3rem] xl:mt-[5rem]"
          id="why-choose-items">
            <div className="flex flex-col lg:flex-row space-x-[4rem]" id="home-delivery">
              <div className="flex justify-center" id="delivery-img">
                <img src={delivery} alt="delivery" className="w-[12rem] p-4 lg:w-[13rem]"/>
              </div>

              <div className="w-[22rem] lg:w-[30rem] xl:w-[35rem] lg:text-start m-auto relative
              left-[-1rem]"
                id="delivery-text">
                <div id="delivery-header">
                  <h1 className="font-medium">Secure home delivery</h1>
                </div>

                <div className="leading-loose font-medium text-gray-500" id="delivery-p">
                  <p>
                    You can order online and have your next car delivered to
                    your front door, fully secure.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-x-[4rem]" id="peace-of-mind">
              <div className="flex justify-center" id="peace-img">
                <img src={peace} alt="peace" className="w-[12rem] lg:w-[13rem]"/>
              </div>

              <div className="text-center w-[22rem] lg:w-[30rem] xl:w-[35rem] lg:text-start pt-5
              relative left-[-2.4rem] lg:left-[-1rem]" 
              id="peace-text">
                <div id="peace-header">
                  <h1 className="font-medium">Peace of mind</h1>
                </div>

                <div className="leading-loose font-medium text-gray-500" id="peace-p">
                  <p>
                    All of our cars include warranties and a 12-day money back guarantee,
                    giving you confidence in your next car
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-x-[4rem]" id="quality">
                <div className="flex justify-center" id="quality-img">
                    <img src={quality} alt="quality" className="w-[12rem] lg:w-[13rem]"/>
                </div>

                <div className="text-center w-[22rem] lg:w-[30rem] xl:w-[35rem] lg:text-start 
                relative left-[-2rem] lg:left-[-1rem]"
                id="quality-text">
                    <div id="quality-header">
                        <h1 className="font-medium">Perfect value, high-quality cars</h1>
                    </div>

                    <div id="peace-p">
                        <p className="leading-loose font-medium text-gray-500">
                        With thousands of cars all in one place, you’re sure to find your perfect one.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="pt-[11rem]" id="comments-section">
          <div className="flex justify-center text-center pb-[4rem]" id="section-header">
            <h1 className="text-[#1d1d53] font-bold tracking-wider lg:text-[2.8rem] xl:text-[3.2rem]">
              What do customers say about Carfit?
            </h1>
          </div>
            <Slider className="w-[20rem] md:w-[25rem] lg:w-[47rem] xl:w-[70rem] pb-3 m-auto" {...commentSettings}>
              {comments.map(info => (
                <div className="flex flex-row p-5 relative top-[-1.2rem]" id="comments-content">
                  <div className="flex flex-row space-x-3 justify-center lg:justify-start"
                  id="comments-top">
                    <div id="profile-img">
                      <img src={profilePics[info.id]} alt={info.name}
                      className="w-[4rem] h-[4rem] rounded-full object-cover border-solid
                      border-[2px] border-[#5b5b5b]"/>
                    </div>
                    
                    <div className="flex justify-center items-center" id="person-name">
                      <h1 className="text-[1rem] font-bold text-[#484848]">
                        {info.name}
                      </h1>
                    </div>
                  </div>

                  <div>
                    <img src={quote} className="w-[2.5rem] relative top-[1rem] left-[.8rem]
                    lg:left-[.3rem]" alt="quote" />
                  </div>

                  <div className="p-3 border-solid border-[1px] border-[#1d1d53] rounded-md
                  w-[15rem] md:w-[20rem] h-[10rem] font-serif flex m-auto"
                  id="comments-bot">
                    <p className="leading-[1.5rem] text-[#4e4d4d] font-medium">
                      "{info.comment}"
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
        </div>
      </div>
    </div>
  );
};
