import React from 'react';
import '../App.css'
import { FiChevronDown } from 'react-icons/fi';

const Banner = () => {
    const img = "https://www.sonorestaurant.com.au/wp-content/themes/sono/images/Small-Flowers.png"
    const menu = [
        { id: "1", name: "A LA CARTE", link: "https://www.sonorestaurant.com.au/wp-content/uploads/2022/06/Sono-Food-Menu-160622-LR.pdf", boundary: true },
        { id: "2", name: "FUNCTIONS", link: "https://www.sonorestaurant.com.au/wp-content/uploads/2021/11/Sono-Functions-2021.pdf", boundary: true },
        { id: "3", name: "TEPPANYAKI", link: "https://www.sonorestaurant.com.au/wp-content/uploads/2021/04/Sono-Teppanyaki-Menu-010421-LR.pdf", boundary: true },
        { id: "4", name: "BEVERAGES", link: "https://www.sonorestaurant.com.au/wp-content/uploads/2022/05/Sono_Drinks_Menu_130522.pdf" },
    ]
    return (
        <div className=' text-primary bg-img '>
            <img className=' w-20 mx-auto' src="https://www.sonorestaurant.com.au/wp-content/themes/sono/images/triangle-decoration.png" alt="" />

            <div className='lg:h-[80vh] h-[90vh]'>
                <nav className=' list-none flex-wrap flex justify-center lg:gap-10 gap-2 px-2 mt-10 cursor-pointer'>
                    <li>HOME</li>
                    <li><a href="#menu">MENU</a></li>
                    <li><a href="#teppanyaki">TEPPANYAKI</a></li>
                    <li><a href="#event">EVENTS  &  PRIVATE  DINING</a> </li>
                    <li><a href="#gift">GIFT CARDS</a></li>
                    <li><a href="#contact"> CONTACT</a></li>
                    <li><a href="https://bookings.nowbookit.com/?accountid=eb5238ec-1924-4d63-bab0-c313658930e1&venueid=6839&theme=light&colors=hex,3e2723&font=Arimo">RESERVATIONS</a></li>
                </nav>
                <div className='my-44'>
                    <img className=' lg:w-96 md:w-80 w-44 mx-auto mb-6' src="https://www.sonorestaurant.com.au/wp-content/uploads/2016/08/Sono_Logo.png" alt="" />


                    <div className=' border-primary border-2 bg-primary w-1/2 mx-auto '></div>

                    <h1 className=' text-center mt-6 text-4xl'>PORTSIDE <br /> WHARF</h1>
                </div>
                <div className='lg:hidden '>
                <svg class="animate-bounce w-28 h-28 mx-auto">
                  <FiChevronDown className=' text-5xl'/>
                </svg>
                </div>
            </div>
            <div className=' bg-img h-[50vh] pt-24'>
                <div id='menu' className=' text-center cursor-pointer'>
                    <h1 className=' lg:text-4xl md:text-3xl mb-10'>EXPERIENCE THE TRUE TASTE OF TRADITION</h1>
                    <div className=' grid lg:grid-cols-4 grid-cols-1 lg:mx-24 gap-8 lg:gap-0'>
                        {
                            menu.map(m => <div key={m.id} className={m.boundary ? "lg:border-primary lg:border-r-2" : ""}>
                                <div className=' flex lg:block justify-center items-center'>
                                <img className='App-logo lg:mx-auto w-10' src={img} alt="" />
                                <h2 className=' lg:mt-5 lg:text-4xl ml-5 lg:ml-0'><a href={m.link}>{m.name}</a></h2>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;