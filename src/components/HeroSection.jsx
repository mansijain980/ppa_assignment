'use client';
import React from 'react';
import heroimg from "../assets/Illustration.svg";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import 'swiper/css/navigation';

const HeroSection = () => {
    const data=[
        {
            title: "Lessons and insights",
            highlight: "from 8 years",
            description: "Where to grow your business as a photographer: site or social media?",
            image: heroimg
        },
        {
            title: "Lessons and insights",
            highlight: "from 8 years",
            description: "Where to grow your business as a photographer: site or social media?",
            image: heroimg
        },
        {
            title: "Lessons and insights",
            highlight: "from 8 years",
            description: "Where to grow your business as a photographer: site or social media?",
            image: heroimg
        },
    ]
    return (
        <div className='max-w-full mx-auto'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                modules={[Pagination]}
            >{data.map((item,index)=>(
                <SwiperSlide key={index}>
                    <div className='flex justify-center items-center w-full h-[599px] gap-20 bg-[#F5F7FA] navmd:h-auto
                                    navmd:flex-col py-[96px] px-[144px] sm:px-[20px] sm:mb-[8rem]'>
                        <div className='max-w-[657px]'>
                            <div className='w-full flex flex-col'>
                                <p className='text-[64px] leading-[76px] text-black font-semibold sm:text-[32px] sm:leading-9'>
                                    {item.title}
                                    <br />
                                    <span className='text-[#4CAF4F]'>{item.highlight}</span>
                                </p>
                                <p className='text-[16px] sm:text-[11px] font-normal mt-3 leading-6 text-[#717171]'>
                                    {item.description}
                                </p>
                                <button className='bg-[#4CAF4F] mt-[32px] w-[128px] h-[52px] flex justify-center items-center rounded text-white'>
                                    Register
                                </button>
                            </div>
                        </div>
                        <div className='max-w-[391px] max-h-[407px]'>
                            <Image src={item.image} alt="..." className="w-full h-full object-cover" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}

export default HeroSection