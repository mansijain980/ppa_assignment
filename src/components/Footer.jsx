import React from 'react';
import right from "../assets/whiteRight.svg";
import Image from 'next/image';
import logo from "../assets/Logo.svg";
import social1 from "../assets/SocialIcons1.svg";
import social2 from "../assets/SocialIcons2.svg";
import social3 from "../assets/SocialIcons3.svg";
import social4 from "../assets/SocialIcons4.svg"
import send from "../assets/send.svg"

const Footer = () => {
    const logos = [
        { lgo: social1 },
        { lgo: social2 },
        { lgo: social3 },
        { lgo: social4 },
    ]
    return (
        <div className='max-w-full mx-auto'>
            <div className='w-full flex-col flex justify-center items-center'>
                <div className='flex w-full flex-col justify-center gap-8 items-center bg-[#F5F7FA] py-[32px]'>
                    <div className='max-w-[887px] mx-auto'>
                        <div className='w-full text-[60px] sm:text-[30px] sm:leading-10 leading-[76px] font-semibold text-center text-wrap text-[#263238]'>
                            Pellentesque suscipit fringilla libero eu.
                        </div>
                    </div>
                    <button className='w-[178px] h-[52px] bg-[#4CAF4F] text-white rounded flex justify-center items-center gap-2'>
                        Get a Demo
                        <Image src={right} alt="..." className='w-6 h-6 object-contain' />
                    </button>
                </div>
                <div className='w-full bg-[#263238] px-[165px] py-[64px] sm:px-[20px] flex flex-wrap justify-between sm:justify-center
                                 items-center gap-8'>
                    <div className='w-auto flex flex-col gap-6'>
                        <Image src={logo} alt="..." className='w-[191px] h-[30px] object-contain' />
                        <div className='text-[#F5F7FA] text-[14px] leading-5 font-normal'>
                            Copyright © 2020 Nexcent ltd. <br />
                            All rights reserved
                        </div>
                        <div className='w-[176px] mt-4 flex justify-between items-center'>
                            {logos.map((item,index)=>(
                                <Image key={index} alt="..." src={item.lgo} className='w-8 h-8 object-contain' />
                            ))}
                        </div>
                    </div>
                    <div className='max-w-[635px]'>
                        <div className='w-full flex items-center justify-between flex-wrap sm:justify-center gap-8'>
                            <div className='w-auto flex justify-center flex-wrap items-center gap-[20px]'>
                                <div className='flex flex-col w-[160px] h-[200px] gap-6 text-white'>
                                    <p className='text-xl leading-7 h-[28px] font-semibold'>Company</p>
                                    <div className='w-full h-[148px] gap-3 flex flex-col'>
                                        <p className='leading-5 text-[14px] font-normal'>About us</p>
                                        <p className='leading-5 text-[14px] font-normal'>Blog</p>
                                        <p className='leading-5 text-[14px] font-normal'>Contact us</p>
                                        <p className='leading-5 text-[14px] font-normal'>Pricing</p>
                                        <p className='leading-5 text-[14px] font-normal'>Testimonials</p>
                                    </div>
                                </div>
                                <div className='flex flex-col w-[160px] h-[200px] gap-6 text-white'>
                                    <p className='text-xl leading-7 h-[28px] font-semibold'>Support</p>
                                    <div className='w-full h-[148px] gap-3 flex flex-col'>
                                        <p className='leading-5 text-[14px] font-normal'>Help center</p>
                                        <p className='leading-5 text-[14px] font-normal'>Terms of service</p>
                                        <p className='leading-5 text-[14px] font-normal'>Legal</p>
                                        <p className='leading-5 text-[14px] font-normal'>Privacy policy</p>
                                        <p className='leading-5 text-[14px] font-normal'>Status</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[255px] flex flex-col gap-6 text-white -ml-8'>
                            <p className='text-xl leading-7 h-[28px] font-semibold'>Stay up to date</p>
                            <div className='w-full h-[40px] overflow-hidden rounded-lg flex items-center justify-end 
                            relative'>
                                <input
                                type="text"
                                placeholder='Your Email address'
                                className='pl-4 w-full h-full bg-[#FFFFFF] text-black opacity-20 rounded-lg' />
                                <Image src={send} alt=".." className='w-[18px] h-[18px] absolute mr-4' />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer