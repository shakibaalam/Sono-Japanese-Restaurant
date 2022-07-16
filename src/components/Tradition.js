import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

const Tradition = () => {
    const slide = [
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2020/12/SonoFood12Mar2020LowRes-3.jpg" },
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2020/12/SonoDrinksNov2020Web-20.jpg" },
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2020/04/SonoCocktailMenuShootFeb2019-DylanEvans-307.jpg" },
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2016/08/SunsetInterior.jpg" },
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2020/12/SonoDrinksNov2020Web-87.jpg" },
    ]
    return (
        <div className=' lg:flex lg:h-[470px] block'>
            <div className='lg:w-[670px] lg:p-8 p-2'>

                <div style={{ backgroundImage: "url('https://www.sonorestaurant.com.au/wp-content/themes/sono/images/backgrounds-1000x1000-bonsai.jpg')" }} className='lg:h-full h-[30vh]'>

                    <div className='  w-1/2 flex justify-center items-center  h-full mx-auto font-semibold'>

                        <div className=' relative text-center'>
                            <img src="https://www.sonorestaurant.com.au/wp-content/themes/sono/images/PaintStroke_Maroon.png" alt="" />

                            <h3 className=' lg:text-3xl mx-auto absolute bottom-20'>EXPERIENCE THE TRADITION</h3>

                            <button className=' bg-secondary hover:opacity-90 text-white px-6 py-2 mt-10 uppercase '><a href="https://bookings.nowbookit.com/?accountid=eb5238ec-1924-4d63-bab0-c313658930e1&venueid=6839&theme=light&colors=hex,3e2723&font=Arimo">Book now</a></button>
                        </div>

                    </div>
                </div>
            </div>
            <div className=' lg:w-[calc(100%_-_670px)]'>

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
                                    <img className=' w-full lg:h-[470px] h-[30vh] object-cover' src={item.img} alt='' />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Tradition;