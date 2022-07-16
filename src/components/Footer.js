import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-secondary text-primary lg:flex block justify-between items-center p-16 '>
            <div className=' text-lg'>
                <h5 className=' font-bold mb-4'>Portside Wharf</h5>
                <p>Level 1, Portside Wharf, 39 Hercules St</p>
                <p>Hamilton QLD 4007</p>
                <p>(opposite Dendy Cinemas)</p>
                <p> (07) 3268 6655</p>
            </div>
            <div className=' flex gap-4 text-3xl text-secondary justify-center items-center mt-20 lg:mt-0'>
                <a href='https://www.facebook.com/SonoJapaneseRestaurant/' className=' w-16 h-16 rounded-full  bg-primary flex justify-center items-center'><AiFillFacebook /></a>

                <a href='https://www.instagram.com/sono_restaurant/' className=' w-16 h-16 rounded-full  bg-primary flex justify-center items-center'> <FaInstagramSquare /></a>

            </div>
        </div>
    );
};

export default Footer;