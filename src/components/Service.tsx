'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out',
            once: true,
        });
    }, []);

    return (
        <div>
            <div className="service-wrapper bg-gray-100 p-[3rem]">
                {/* Service Header with fade-up animation */}
                <div
                    className="service-header text-[32px] font-semibold mb-[2rem] justify-center flex gap-[.5rem]"
                    style={{ lineHeight: '1.1' }}
                    data-aos="fade-up"
                >
                    <h1 className="text-[#FF9800]">Our</h1>
                    <h1 className="text-black">Services</h1>
                </div>

                {/* Service Content with fade-up animation */}
                <div className="sevice-content">
                    <p
                        className="text-center text-black"
                        data-aos="fade-up"
                    >
                        At Civitas Imperium Limited, we are committed to driving positive change through better
                        governance. Our tailored solutions and expert services empower our clients to make informed
                        decisions, implement effective policies, and create lasting impact in their communities and
                        beyond.
                    </p>
                </div>

                {/* Timeline Section with delayed animations */}
                <div className="timeline-wrapper flex justify-center">
                    <div className="timeline-container relative">
                        <div className="line bg-gray-500 w-[5px] absolute top-[6%] left-[50%] h-[108%] flex flex-col items-start">
                            <div className="w-[10px] h-[10px] rounded-[50%] z-20 absolute top-0 left-[-40%] bg-[orange]"></div>
                            <div className="w-[10px] h-[10px] rounded-[50%] z-20 absolute top-[57%] left-[-40%] bg-[orange]"></div>
                            <div className="w-[10px] h-[10px] rounded-[50%] z-20 absolute top-[87%] left-[-40%] bg-[orange]"></div>
                        </div>

                        {/* Timeline content with staggered fade-in animations */}
                        <section className="flex">
                            <div
                                className="timeline-content pr-[2rem] pl-[2rem] left-content relative"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <h1 className="text-black">01</h1>
                                <div className="timeline-main bg-black">
                                    <h4>Governance Consulting</h4>
                                    <ul>
                                        <li>Institutional capacity building</li>
                                        <li>Governance structure optimization</li>
                                        <li>Transparency and accountability frameworks</li>
                                    </ul>
                                </div>
                                <span className="left-arrow1 absolute"></span>
                            </div>
                            <div
                                className="timeline-content pr-[2rem] mt-[2rem] pl-[2rem] right-content"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <h1 className="text-[#808080]">02</h1>
                                <div className="timeline-main bg-[gray]">
                                    <h4>Legislative Support Services</h4>
                                    <ul>
                                        <li>Bill drafting and review</li>
                                        <li>Legislative research and analysis</li>
                                        <li>Parliamentary procedure consulting</li>
                                    </ul>
                                </div>
                                <span className="right-arrow1 absolute"></span>
                            </div>
                        </section>

                        <section className="flex">
                            <div
                                className="timeline-content pr-[2rem] pl-[2rem] relative left-content"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <h1 className="text-black">03</h1>
                                <div className="timeline-main bg-black">
                                    <h4>Training and Capacity Development</h4>
                                    <ul>
                                        <li>Customized workshops for government officials</li>
                                        <li>Policy analysis and formulation training</li>
                                        <li>Leadership development for public sector executives</li>
                                    </ul>
                                </div>
                                <span className="left-arrow2 absolute"></span>
                            </div>
                            <div
                                className="timeline-content pr-[2rem] pl-[2rem] mt-[2rem] right-content"
                                data-aos="fade-up"
                                data-aos-delay="800"
                            >
                                <h1 className="text-[gray]">04</h1>
                                <div className="timeline-main bg-[gray]">
                                    <h4 className="w-[55%] poll">Policy Research and Analysis</h4>
                                    <ul className="w-[75%] pol">
                                        <li>In-depth policy studies</li>
                                        <li>Impact assessments</li>
                                        <li>Data-driven policy recommendations</li>
                                    </ul>
                                </div>
                                <span className="right-arrow2 absolute"></span>
                            </div>
                        </section>

                        <section className="flex">
                            <div
                                className="timeline-content pr-[2rem] pl-[2rem] relative left-content"
                                data-aos="fade-up"
                                data-aos-delay="1000"
                            >
                                <h1 className="text-black">05</h1>
                                <div className="timeline-main bg-black">
                                    <h4>Policy Formulation Support</h4>
                                    <ul>
                                        <li>Stakeholder engagement facilitation</li>
                                        <li>Policy design workshops</li>
                                        <li>Implementation strategy development</li>
                                    </ul>
                                </div>
                                <span className="left-arrow3 absolute"></span>
                            </div>
                            <div
                                className="timeline-content pr-[2rem] pl-[2rem] mt-[2rem] right-content"
                                data-aos="fade-up"
                                data-aos-delay="1200"
                            >
                                <h1 className="text-[gray]">06</h1>
                                <div className="timeline-main bg-[gray]">
                                    <h4>Digital Governance Solutions</h4>
                                    <ul>
                                        <li>E-governance system design and implementation</li>
                                        <li>Civic engagement platforms</li>
                                        <li>Data analytics for policy evaluation</li>
                                    </ul>
                                </div>
                                <span className="right-arrow2 absolute"></span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="divider bg-black flex flex-col items-start relative z-10 h-[45px] text-[27px]">
                <div>Logo</div>
                <div className="w-full h-[5px]" style={{ backgroundColor: 'rgb(101 99 99)' }}></div>
            </div>
        </div>
    );
};

export default Service;
