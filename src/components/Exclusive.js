import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

const Exclusive = () => {
    const slide = [
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2016/08/Sono-Sakuru-01.jpg" },
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2016/08/Sono-Sakuru-03.jpg" },
        { img: "https://www.sonorestaurant.com.au/wp-content/uploads/2016/08/Sono-Sakuru-02.jpg" }
    ]
    return (
        <div className=' lg:flex block lg:h-[470px] '>
            <div className='lg:w-[670px] lg:p-8'>

                <div style={{ backgroundImage: "url('https://www.sonorestaurant.com.au/wp-content/themes/sono/images/backgrounds-1000x1000-bamboo.jpg')" }} className='lg:h-full h-[370px]'>

                    <div className=' lg:w-3/4 flex justify-center items-center  h-full mx-auto font-semibold'>

                        <div className=' relative text-center'>
                            <img className=' w-3/4 mx-auto' src="https://www.sonorestaurant.com.au/wp-content/themes/sono/images/PaintStroke_Orange.png" alt="" />

                            <div className=' flex justify-center'>
                                <h3 className=' lg:text-3xl  absolute bottom-32 lg:bottom-[136px] w-1/2 lg:w-3/4'>SONO SAKURU
                                    LOYALTY PROGRAM</h3>
                            </div>

                            <p className=' mt-6 lg:text-lg leading-tight'>Exclusive rewards for Sono's most loyal customers</p>

                            <div className=' flex gap-4 justify-center'>

                                <button className=' bg-secondary hover:opacity-90 text-white px-6 py-2 mt-10 uppercase '><a href="">enquire now</a></button>

                                <button className=' bg-secondary hover:opacity-90 text-white px-6 py-2 mt-10 uppercase '><a href="https://www.sonorestaurant.com.au/wp-content/uploads/2020/03/Sono-Sakuru.pdf">program benefits</a></button>
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

export default Exclusive;