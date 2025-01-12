'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Overview = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out',
            once: true,
        });
    }, []);

    return (
        <div>
            <div className='overview-wrapper p-6 md:p-12 bg-gray-100'>
                {/* Overview Header with animation */}
                <div
                    className="overview-header text-2xl md:text-3xl font-semibold mb-8 flex justify-center gap-2 text-center"
                    style={{ lineHeight: '1.1' }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h1 className='text-[#FF9800]'>
                        Civitas
                    </h1>
                    <h1 className='text-black'>
                        Overview
                    </h1>
                </div>

                {/* Overview Content with animation */}
                <div className='overview-content flex flex-col items-center mb-12'>
                    <main className='w-full sm:w-4/5' data-aos="fade-up" data-aos-delay="400">
                        <p className='text-black mb-6 text-sm sm:text-base md:text-lg text-center'>
                            Civitas Imperium Limited is a leading governance and public sector consulting and advisory firm.
                            We partner with governments and public sector organizations around the world to creatively
                            tackle complex challenges and drive meaningful change. Our team of seasoned experts bring
                            decades of hands-on experience in public policy, governance, and administration to every
                            project.
                        </p>
                    </main>

                    {/* Overview Widget with slide-right animation */}
                    <div className='overview-widget w-full sm:w-4/5 h-24 flex flex-col sm:flex-row mb-8'>
                        <div className='bg-black w-full sm:w-1/3 flex justify-center items-center text-white'>
                            Image
                        </div>
                        <div
                            className='gap-4 w-full sm:w-2/3 flex flex-col sm:flex-row items-center bg-gray-300 p-4'
                            data-aos="slide-right"
                            data-aos-delay="600"
                        >
                            <div>
                                [Icon]
                            </div>
                            <div>
                                <h4 className='text-black text-lg font-semibold'>
                                    Brand Statement
                                </h4>
                                <p className='text-black text-sm'>
                                    Shaping the future
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Goal Wrapper with staggered fade-up animation */}
                <div className="goal-wrapper flex flex-col sm:flex-row gap-8 sm:gap-12 mb-12">
                    <div className='text-black w-full sm:w-1/2' data-aos="fade-up" data-aos-delay="800">
                        <h2 className='text-lg md:text-xl font-semibold text-center sm:text-left mb-4'>
                            Our Mission
                        </h2>
                        <p className='text-sm md:text-base text-center sm:text-left'>
                            To empower governments, organizations, and individuals with the
                            knowledge, tools, and support needed to create and implement effective
                            policies that drive positive societal change.
                        </p>
                    </div>
                    <div className='w-full sm:w-1/2' data-aos="fade-up" data-aos-delay="1000">
                        <h2 className='text-[#FF9800] text-lg md:text-xl font-semibold text-center sm:text-left mb-4'>
                            Our Vision
                        </h2>
                        <p className='text-sm md:text-base text-center sm:text-left text-black'>
                            A world where effective governance leads to thriving communities, with
                            public institutions that are responsive, efficient, and trusted by the people
                            they serve.
                        </p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className='divider bg-black flex flex-col items-start h-[45px] text-[27px]' >
                <div>
                    Logo
                </div>
                <div className='w-full h-[5px]' style={{ backgroundColor: 'rgb(101 99 99)' }}></div>
            </div>
        </div>
    );
};

export default Overview;
