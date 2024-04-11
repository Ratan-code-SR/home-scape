
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = ({ loadData }) => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

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
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {
                    Array.isArray(loadData) && loadData.slice(0, 4).map(data => (
                        <SwiperSlide className='none_padding' key={data.id} >
                            <div className="hero h-[500px] z-0" style={{ backgroundImage: `url(${data.image_url})` }}>
                                <div className="hero-overlay "></div>
                                <div className="hero-content text-center text-neutral-content"
                                >
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-white via-purple-500 to-green-500 text-transparent bg-clip-text animate-gradient"
                                        >Hello there</h1>
                                        <p className="mb-5"

                                        >{data.description.slice(0, 220)}......</p>
                                        <Link to={`/details/${data.id}`}>
                                            <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded hover:bg-white group">
                                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                <span className="relative w-full text-left  transition-colors duration-300 ease-in-out group-hover:text-white text-white">View Details</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
export default Slider;
