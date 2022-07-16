import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

const Events = () => {
    const slide = [
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2020/04/SonoSmallRoom-003.jpg" },
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2016/08/2909_1886.jpg" },
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2020/04/Unknown-3.jpg" }
    ]
    return (
        <div id='event' className=' lg:flex block lg:h-[470px] '>
            <div className='lg:w-[670px] lg:p-8 p-4 mt-44 lg:mt-0 '>

                <div style={{ backgroundImage: "url('https://www.sonorestaurant.com.au/wp-content/themes/sono/images/backgrounds-1000x1000-mountains.jpg')" }} className='lg:h-full h-[30vh]'>

                    <div className=' lg:w-3/4 flex justify-center items-center  h-full mx-auto font-semibold'>

                        <div className=' relative text-center'>
                            <img className=' w-3/4 mx-auto' src="https://www.sonorestaurant.com.au/wp-content/themes/sono/images/PaintStroke_Grey.png" alt="" />

                            <div className=' flex justify-center'>
                                <h3 className=' lg:text-3xl  absolute lg:bottom-[136px] bottom-28 w-1/2 lg:w-3/4'>EXPERIENCE THE
                                    MEMORIES</h3>
                            </div>

                            <p className=' mt-6 lg:text-lg leading-tight'>Events & Private Dining</p>

                            <div className=' flex gap-4 justify-center'>
                                <button className=' bg-secondary text-white px-6 py-2 lg:mt-10 mt-5 uppercase '><a href="https://www.sonorestaurant.com.au/wp-content/uploads/2022/01/Sono-Functions-2022.pdf">Function menu</a></button>

                                <button className=' bg-secondary hover:opacity-90 text-white px-6 py-2 lg:mt-10 mt-5 uppercase '><a href="">enquire now</a></button>
                            </div>
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

export default Events;