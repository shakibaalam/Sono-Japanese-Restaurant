import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phn, setPhn] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        const data = { name, email, phn, comment }
        if (data) {
            setMessage(true)
        }
        e.target.reset()
    }
    return (
        <div id='contact'>
            <div className=' grid lg:grid-cols-2 grid-cols-1 text-secondary '>

                <div className='lg:ml-8 lg:my-8 lg:mr-4 lg:p-20 m-3 px-6 py-10 ' style={{
                    background: "url('https://www.sonorestaurant.com.au/wp-content/uploads/2016/09/backgrounds-1000x1000-fish.jpg')"
                }} >

                    <div className=''>
                        <h4 className=' font-bold text-xl mb-2'>Sono Japanese Restaurant Portside</h4>
                        <p>Level 1, Portside Wharf</p>
                        <p>39 Hercules St, Hamilton QLD</p>
                        <p>(opposite Dendy Cinemas)</p>
                        <p>(07) 3268 6655</p>
                        <p>contact@sonorestaurant.com.au</p>

                        <h5 className='font-bold text-xl mt-8 mb-4'>Trading Hours</h5>

                        <h6 className=' font-bold text-xl mb-1'>Dinner</h6>
                        <p>Tuesday – Thursday</p>
                        <p>Bookings from 5:30pm, kitchen closes 9:30pm</p>

                        <div className=' my-4 w-3/4'>
                            <p>Friday & Saturday</p>
                            <p>Bookings from 5:30pm, kitchen closes 10pm
                                Teppanyaki seatings at 5:30pm and 8pm</p>
                        </div>

                        <p>Sunday</p>
                        <p> Bookings from 5:30pm, kitchen closes 9:30pm</p>

                        <h6 className='font-bold text-xl mb-1 mt-5'>Lunch</h6>
                        <p>Friday – Sunday</p>
                        <p> Bookings from 12pm, kitchen closes 2:30pm</p>

                        <h6 className='font-bold text-xl mt-8 mb-1'>Parking</h6>
                        <p>
                            Visitors to Sono Japanese Restaurant can enjoy the shared basement parking of Portside Wharf. Please be sure to bring your parking ticket to the restaurant for 3 hours of parking validation.
                            Please note Friday and Saturday evenings can be very busy at the precinct so we suggest allowing additional time to find parking.</p>
                    </div>

                </div>

                <div className='lg:ml-8 lg:my-8 lg:mr-4 lg:p-20 m-3 px-6 py-10 ' style={{ backgroundImage: "url('https://www.sonorestaurant.com.au/wp-content/uploads/2016/09/backgrounds-1000x1000-bonsai.jpg')" }} >

                    <h2 className=' text-4xl mb-4'>ENQUIRY FORM</h2>
                    <p>Please complete the form below for all enquiries regarding feedback, media, and general questions. If you wish to join the team at Sono, please forward your resume to contact@sonorestaurant.com.au, advising the position you are seeking.</p>

                    {/* small device */}

                    <form onSubmit={handleSubmit} className='lg:hidden' >
                        <div className=' lg:flex gap-7'>
                            <label className='block mb-3 mt-5' htmlFor="name">Name<sup>*</sup></label>
                            <input className='my-3 w-full' type="text" name="name" id="name" required onChange={e => setName(e.target.value)} />
                        </div>
                        <div className=' lg:flex  gap-7'>
                            <label className=' block mb-3' htmlFor="phn">Phone</label>
                            <input className='mb-3 w-full' type="number" name="phn" id="phn" onChange={e => setPhn(e.target.value)} />

                        </div>
                        <div className=' lg:flex gap-7'>
                            <label className='block mb-3' htmlFor="email">Email<sup>*</sup></label>
                            <input className='mb-3 w-full ' type="text" name="email" id="email" required onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className=' lg:flex gap-7'>
                            <label className=' block mb-3' htmlFor="commnet">Commnet</label>
                            <textarea className='mb-3 w-full' name="comment" id="" cols="30" rows="5" onChange={e => setComment(e.target.value)}></textarea>
                        </div>

                        <input type="checkbox" name="" id="" /><span className=' ml-1'>Add me to the mailing list</span>
                        <div className=' flex justify-end mt-8'>
                            <button className=' uppercase hover:opacity-90 text-white bg-secondary px-6 py-2'>Submit</button>
                        </div>

                    </form>

                    {/* large device */}
                    <form onSubmit={handleSubmit} className='lg:flex justify-start hidden'>
                        <div className=' mr-14'>
                            <label className=' block my-4' htmlFor="name">Name<sup>*</sup></label>
                            <label className=' block mb-4' htmlFor="phn">Phone</label>
                            <label className=' block mb-4' htmlFor="email">Email<sup>*</sup></label>
                            <label className=' block mb-4' htmlFor="commnet">Commnet</label>
                        </div>
                        <div className=''>
                            <input className='my-4 block w-[400px]' type="text" name="name" id="name" required onChange={e => setName(e.target.value)} />
                            <input className='mb-4 block w-full' type="number" name="phn" id="phn" onChange={e => setPhn(e.target.value)} />
                            <input className='mb-4 block w-full' type="text" name="email" id="email" required onChange={e => setEmail(e.target.value)} />
                            <textarea className='mb-4 block w-full' name="comment" id="" cols="30" rows="5" onChange={e => setComment(e.target.value)}></textarea>
                            <input type="checkbox" name="" id="" /><span className=' ml-1'>Add me to the mailing list</span>
                            <div className=' flex justify-end mt-8'>
                                <button className=' uppercase hover:opacity-90 text-white bg-secondary px-6 py-2'>Submit</button>
                            </div>
                        </div>
                    </form>

                    {message && <p className=' border-2 border-secondary mt-5 px-2 py-1' >Thank you for your message. It has been sent.</p>}
                </div>
            </div>
        </div>
    );
};

export default Contact;