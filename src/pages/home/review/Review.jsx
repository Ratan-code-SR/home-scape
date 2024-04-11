import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegStar } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './review.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ImQuotesLeft } from "react-icons/im";
import { RiDoubleQuotesR } from "react-icons/ri";
const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('../../../public/review.json')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])

    // console.log(review);

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
                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <p className='text-center relative text-sm'> <span className='text-orange-300  mr-[10px]'><ImQuotesLeft /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque earum, laboriosam facere nobis eligendi tempore animi distinctio hic doloribus ipsum dolorum voluptatem vero harum eius nemo deserunt obcaecati beatae!</p> <span className='text-orange-300 text-xl absolute right-12 bottom-7'><RiDoubleQuotesR /></span>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    );
};

export default Review;