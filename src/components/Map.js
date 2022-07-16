import React from 'react';

const Map = () => {
    return (
        <div className=' lg:h-[500px] h-[40vh] overflow-hidden'>
            <a href="https://www.google.com.au/maps/place/Sono+Japanese+Restaurant+Portside+Wharf/@-27.4412101,153.0669917,17z/data=!3m1!4b1!4m5!3m4!1s0x6b915906006a051b:0xaf2228b10ec5044d!8m2!3d-27.4412101!4d153.0691804">
                <img className='h-full w-full object-cover transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000' src="https://www.sonorestaurant.com.au/wp-content/uploads/2017/02/sonomap-portsidewharf-1.jpg" alt="" />
            </a>
        </div>
    );
};

export default Map;