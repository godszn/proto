'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out',
            once: true,
        });
    }, []);

    return (
        <div>
            <div className="About-wrapper p-6 md:p-12 bg-gray-100">
                <div className="about-header">
                    {/* About Civitas Header with fade-up animation */}
                    <div
                        className="text-2xl md:text-3xl font-semibold mb-8 flex justify-center gap-2 text-center"
                        style={{ lineHeight: '1.1' }}
                        data-aos="fade-up"
                    >
                        <h1 className="text-[#FF9800]">
                            About
                        </h1>
                        <h1 className="text-black">
                            Civitas
                        </h1>
                    </div>

                    {/* About Content Text with fade-up animation */}
                    <div className="about-content">
                        <p
                            className="text-black text-sm md:text-base lg:text-lg text-center mb-12"
                            data-aos="fade-up"
                        >
                            Civitas Imperium Limited is a governance and public sector consulting and advisory firm
                            founded by a team of passionate experts in governance, policy formulation and analysis, and
                            public administration, who truly understand the unique challenges of the public sector.
                            Our diverse team brings together years of experience in government, academia, and the private
                            sector, allowing us to offer unique insights and practical solutions to complex governance
                            challenges. Our consultants have held senior positions in government, led major policy
                            initiatives, and managed large-scale public programs.
                            We are not just advisors; we are partners in governance. We roll up our sleeves and work
                            alongside our clients, providing insights that are both strategic and practical. We believe that
                            good governance is the cornerstone of prosperous and equitable societies. By combining
                            cutting-edge research, technological innovation, and hands-on expertise, we aim to revolutionize
                            how policies are developed, implemented, and evaluated.
                        </p>
                    </div>

                    {/* Core Values Text with fade-up animation */}
                    <div className="values flex flex-col gap-6">
                        <h1
                            className="text-black text-lg md:text-xl font-semibold text-center"
                            data-aos="fade-up"
                            data-aos-delay="200" // Add delay to stagger animations
                        >
                            Our Core Values
                        </h1>
                        <div className="value-widget text-black flex flex-wrap justify-center md:justify-between gap-8">
                            <div className="flex gap-2 items-center" data-aos="fade-up" data-aos-delay="400">
                                <div>[icon]</div>
                                <p className="text-sm md:text-base">Excellence</p>
                            </div>
                            <div className="flex gap-2 items-center" data-aos="fade-up" data-aos-delay="500">
                                <div>[icon]</div>
                                <p className="text-sm md:text-base">Integrity</p>
                            </div>
                            <div className="flex gap-2 items-center" data-aos="fade-up" data-aos-delay="600">
                                <div>[icon]</div>
                                <p className="text-sm md:text-base">Expertise</p>
                            </div>
                            <div className="flex gap-2 items-center" data-aos="fade-up" data-aos-delay="700">
                                <div>[icon]</div>
                                <p className="text-sm md:text-base">Innovation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className='divider bg-black flex flex-col items-start h-[45px] text-[27px]'>
                <div>
                    Logo
                </div>
                <div className='w-full h-[5px]' style={{ backgroundColor: 'rgb(101 99 99)' }}></div>
            </div>
        </div>
    );
};

export default About;
