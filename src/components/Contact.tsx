'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Animation duration
            easing: 'ease-in-out',  // Easing function
            once: true,  // Ensures animation happens only once
        });
    }, []);

    return (
        <div>
            <div className='contact-wrapper p-[5rem] bg-gray-100 gap-[3rem] flex flex-col'>
                <div className="widget-wrapper flex w-full justify-end">
                    <div className="widget h-[25px] w-[70px] bg-[#FF9800]" />
                </div>

                {/* Contact Header Animation */}
                <div className="contact-content flex h-[500px]" data-aos="fade-up">
                    <div className="contact-text bg-black flex flex-col justify-center text-[50px] w-[50%] font-semibold p-[2rem]">
                        <h1 className='text-[#FF9800]'>
                            Contact
                        </h1>
                        <h1>
                            Us
                        </h1>
                    </div>
                    <div className="contact-widget w-[50%] bg-[#FF9800] flex flex-col justify-center items-center" data-aos="fade-left">
                        <h5 className='text-[30px]'>
                            Image
                        </h5>
                    </div>
                </div>

                <div className="contact-info-wrapper gap-[10%] flex">
                    <div className="contact-form w-[50%] h-fit justify-center mt-[90px] p-[2.5rem]" style={{ boxShadow: '1px 2px 10px #00000040', borderRadius: '.4rem' }} data-aos="fade-up">
                        <h1 className='text-[30px] font-semibold mb-[2rem] text-black'>
                            Contact Us
                        </h1>
                        <section className='form-wrapper mt-[2rem]' style={{ borderTop: '1px solid gainsboro' }}>
                            <div className="personal w-[100%]">
                                <section className='mt-[3rem]' data-aos="fade-right">
                                    <h1 className='text-black text-[19px] mt-[.5rem] mb-[.5rem]'>
                                        Full Name
                                    </h1>
                                    <div className="nameform gap-[1rem] text-black flex">
                                        <input type="text" placeholder='First Name' className='w-[50%] h-[45px] p-[.4rem]' style={{ borderRadius: '.4rem', border: '1px solid #00000040', outline: 'none' }} />
                                        <input type="text" placeholder='Last Name' className='w-[50%] h-[45px] p-[.4rem]' style={{ borderRadius: '.4rem', border: '1px solid #00000040', outline: 'none' }} />
                                    </div>
                                </section>
                                <section data-aos="fade-left">
                                    <h1 className='text-black text-[19px] mt-[2rem] mb-[.5rem]'>
                                        E-mail
                                    </h1>
                                    <div className="nameform gap-[1rem] text-black flex mt-[20px]">
                                        <input type="text" placeholder='example@example.com' className='w-[50%] h-[45px] p-[.4rem]' style={{ borderRadius: '.4rem', border: '1px solid #00000040', outline: 'none' }} />
                                    </div>
                                </section>
                            </div>

                            <div className="company gap-[25px] flex flex-col mt-[40px]" data-aos="fade-up">
                                <h1 className='text-black text-[19px] mb-[.5rem]'>
                                    Message
                                </h1>
                                <textarea name="" id="" className='h-[100px]' style={{ borderRadius: '.4rem', border: '1px solid #00000040', outline: 'none' }}></textarea>
                            </div>

                            <div className='flex justify-center' data-aos="zoom-in">
                                <button className='w-[160px] bg-[#2b2828] text-white h-[51px] text-[19px] mt-[30px] text-center' style={{ borderRadius: '.3rem', outline: 'none' }}>
                                    submit
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* Contact Details Animation */}
                    <section className='w-[50%] flex items-center' data-aos="fade-left">
                        <div className="contact-infos mt-[5rem] h-fit gap-[10rem] grid grid-cols-2 text-black">
                            <div className='contact-details flex gap-[1rem]' data-aos="fade-up">
                                <div>Icon</div>
                                <div className='gap-[.8rem] flex flex-col'>
                                    <h1 className='text-[21px] font-semibold'>
                                        Address
                                    </h1>
                                    <p>
                                        National Assembly Complex,
                                        Three Arms Zone,
                                        Abuja
                                    </p>
                                </div>
                            </div>

                            <div className='contact-details flex gap-[1rem]' data-aos="fade-up">
                                <div>Icon</div>
                                <div className='gap-[.8rem] flex flex-col'>
                                    <h1 className='text-[21px] font-semibold'>
                                        Office Hours
                                    </h1>
                                    <p>
                                        Monday – Friday
                                    </p>
                                    <p>
                                        09:00 AM – 05:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className='contact-details flex gap-[1rem]' data-aos="fade-up">
                                <div>Icon</div>
                                <div className='gap-[.8rem] flex flex-col'>
                                    <h1 className='text-[21px] font-semibold'>
                                        Email Address
                                    </h1>
                                    <p>
                                        info@civitas.com.ng
                                    </p>
                                </div>
                            </div>

                            <div className='contact-details flex gap-[1rem]' data-aos="fade-up">
                                <div>Icon</div>
                                <div className='gap-[.8rem] flex flex-col'>
                                    <h1 className='text-[21px] font-semibold'>
                                        Phone Number
                                    </h1>
                                    <p>
                                        +234 701 407 2157
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div
  className="divider bg-black flex flex-row items-center justify-between h-[45px] px-[20px] text-[27px]"
  data-aos="fade-up"
>
  <div className="logo text-white">
    Logo
  </div>
  <div className="social-icons flex gap-[15px]">
    <div className="icon-wrapper">
      <i className="fab fa-twitter">icon</i>
    </div>
    <div className="icon-wrapper">
      <i className="fab fa-instagram">icon</i>
    </div>
    <div className="icon-wrapper">
      <i className="fab fa-facebook-f">icon</i>
    </div>
    <div className="icon-wrapper">
      <i className="fab fa-linkedin-in">icon</i>
    </div>
  </div>
</div>

        </div>
    );
};

export default Contact;
