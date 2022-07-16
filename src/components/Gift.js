import React, { useState } from 'react';

const Gift = () => {
    const [present, setPresent] = useState(true)
    const [pay, setPay] = useState(false)

    const handleBook = () => {
        setPresent(false)
        setPay(true)

    }
    return (
        <div id='gift' className=' lg:flex lg:h-[500px]'>
            <div className=' lg:w-[880px]'>
                <img className=' w-full lg:h-[500px] h-[30vh] object-cover' src="https://www.sonorestaurant.com.au/wp-content/uploads/2020/04/Sono-Gift-Card.jpg" alt="" />
            </div>

            {
                present && <div className='lg:w-[calc(100%_-_880px)] lg:p-8 p-2'>

                    <div style={{ backgroundImage: "url('https://www.sonorestaurant.com.au/wp-content/themes/sono/images/backgrounds-1000x1000-fish.jpg')" }} className='lg:h-full h-[30vh] w-full'>

                        <div className=' w-3/4 flex justify-center items-center  h-full mx-auto font-semibold '>

                            <div className=' relative text-center'>
                                <img className=' w-3/4 mx-auto' src="https://www.sonorestaurant.com.au/wp-content/themes/sono/images/PaintStroke_Purple.png" alt="" />

                                <div className='flex justify-center'>
                                    <h3 className=' lg:text-3xl  absolute lg:bottom-[156px] bottom-40  lg:w-3/4 w-1/2'>SHARE THE
                                        EXPERIENCE</h3>
                                </div>

                                <p className=' mt-5 lg:text-xl leading-tight'>Sono Gift Cards</p>

                                <button className=' bg-secondary hover:opacity-90 text-white px-6 py-2 lg:mt-6 my-10 uppercase ' onClick={handleBook}>Book now</button>
                            </div>

                        </div>
                    </div>
                </div>
            }

            {
                pay && <div className='lg:w-[calc(100%_-_880px)] lg:p-8 p-2'>

                    <div style={{ backgroundImage: "url('https://www.sonorestaurant.com.au/wp-content/themes/sono/images/backgrounds-1000x1000-fish.jpg')" }} className='lg:h-full h-[500px] w-full'>

                        <div className=' w-3/4 flex   h-full mx-auto '>

                            <div className=' my-8'>
                                <p className='text-center  font-bold mb-3 text-base'>A personalised Sono Gift Card can be purchased for any value from $30.</p>

                                <form>
                                    <div className=' my-3 '>
                                        <label className=' block mb-2' htmlFor="msg">Optional message on the gift card:</label>
                                        <input className=' w-full px-2' type="text" name="msg" id="msg" placeholder='Maximum 20 characters' />
                                    </div>

                                    <div>
                                        <label className=' block mb-2' htmlFor="deliver">Delivery method:</label>
                                        <select className=' w-full px-2 mb-1' name="deliver" id="deliver">
                                            <option value="Complimentary Post*">Complimentary Post*</option>
                                            <option value="Pick up from Sono Portside*">Pick up from Sono Portside*</option>
                                        </select>
                                        <p>*Complimentary post (allow 3-7 business days)</p>
                                    </div>

                                    <div className=' flex gap-5  items-center'>
                                        <div>
                                            <label className=' block mt-2 mb-1' htmlFor="phn">Your Phone No:</label>
                                            <input className=' w-full px-2 ' type="number" name="phn" id="phn" required />
                                        </div>
                                        <div>
                                            <label className=' block mt-2 mb-1' htmlFor="amount">
                                                Gift card amount:</label>
                                            <input className=' w-full px-2 ' type="number" name="amount" id="amount" value={100.00} />

                                        </div>
                                        <p className=' mt-8'>AUD</p>
                                    </div>

                                    <div className=' flex justify-center'>
                                        <button className=' hover:opacity-90 bg-secondary text-white px-6 py-2 lg:mt-6 my-10 uppercase '>Pay now</button>
                                    </div>
                                </form>


                            </div>

                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Gift;