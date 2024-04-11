import React, { useRef, useState, useEffect, useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegStar } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ImQuotesLeft } from "react-icons/im";
import { RiDoubleQuotesR } from "react-icons/ri";
const Review = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])
   
    console.log(review);

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper "
            >
                {
                    review.map((data, index) => (
                        <SwiperSlide key={index} >
                            <div className='md:w-[500px] w-full bg-white p-10 rounded-md relative'
                            >
                                <div className='flex gap-2 text-orange-300 items-center justify-center my-1'>
                                    <>
                                        <li><FaRegStar /></li>
                                        <li><FaRegStar /></li>
                                        <li><FaRegStar /></li>
                                        <li><FaRegStar /></li>
                                        <li><FaRegStar /></li>
                                    </>
                                </div>
                                <h1 className='font-bold'>{data.name}</h1>
                                <div className='w-12 h-12 absolute top-[-20px] right-[45%]'>
                                    <img src={data.profile} className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" alt="" />
                                </div>
                                <p className='text-center relative text-sm'> <span className='text-orange-300  mr-[10px]'><ImQuotesLeft /></span>{data.review}</p> <span className='text-orange-300 text-xl absolute right-12 bottom-7'><RiDoubleQuotesR /></span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default Review;