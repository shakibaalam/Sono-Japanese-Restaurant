import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

const Teppanyaki = () => {
    const slide = [
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2020/04/SonoTeppanyakiApril2019-34.jpg" },
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2020/04/SonoTeppanyakiApril2019-83.jpg" },
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2020/04/Hero-Teppanyaki-Image.jpg" }
    ]
    return (
        <div id='teppanyaki' className=' lg:flex block lg:h-[500px] h-[40vh]'>
            <div>
                <div className=' lg:w-[880px] '>

                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination]}
                        className='mySwiper'
                    >
                        {slide.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div
                                        className=''
                                    >
                                        <img className=' w-full lg:h-[500px] h-[30vh] object-cover' src={item.img} alt='' />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            <div className='lg:w-[calc(100%_-_880px)]  lg: lg:p-8 p-4'>

                <div style={{ backgroundImage: "url('https://www.sonorestaurant.com.au/wp-content/themes/sono/images/backgrounds-1000x1000-bamboo.jpg')" }} className='h-full py-4 lg:py-0'>

                    <div className='  w-1/2 flex justify-center items-center  h-full mx-auto font-semibold'>

                        <div className='  text-center'>
                            <img src="" alt="" />

                            <h3 className=' lg:text-3xl md:text-3xl mx-auto mt-2'>EXPERIENCE THE <span style={{ backgroundImage: "url('https://www.sonorestaurant.com.au/wp-content/themes/sono/images/PaintStroke_Orange.png')" }}>EXCITEMENT</span></h3>

                            <p className=' lg:text-lg lg:mt-10 mt-5 leading-tight'>Teppanyaki at Sono Saturday & Sunday Lunch, Friday & Saturday Dinner</p>

                            <button className=' bg-secondary hover:opacity-90 text-white px-6 py-2 lg:mt-10 my-5 uppercase '><a href="">Book now</a></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teppanyaki;