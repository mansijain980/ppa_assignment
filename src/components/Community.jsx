import React from 'react';
import icon1 from "../assets/Icon1.svg";
import icon2 from "../assets/Icon2.svg";
import icon3 from "../assets/icon3.svg";
import Image from 'next/image';

const Community = () => {
    const data = [
        { logo: icon1, title: "Membership Organisations", text:'Our membership management software provides full automation of membership renewals and payments' },
        { logo: icon2, title: "National Associations",text:'Our membership management software provides full automation of membership renewals and payments' },
        { logo: icon3, title: "Clubs And Groups",text:'Our membership management software provides full automation of membership renewals and payments' },
    ]
    return (
        <div className='max-w-[1440px] flex flex-col justify-center items-center gap-[11px] mx-auto navmd:h-auto my-16'>
            <div className='flex flex-col gap-[6px]'>
                <p className='font-semibold text-[36px] leading-[44px] sm:text-[20px] sm:leading-6 text-center text-[#4D4D4D] dark:text-white text-wrap'>
                    Manage your entire community <br /> in a single system
                </p>
                <p className='font-normal text-base leading-6 sm:text-[11px] sm:leading-4 text-center text-[#717171] dark:text-white text-wrap'>
                    Who is Nextcent suitable for?
                </p>
            </div>
            <div className='w-full flex justify-between px-[144px] items-center navmd:justify-center lg:flex-col gap-5'>
                {data.map((item, index) => (
                    <div key={index} className='bg-white h-[260px] w-[299px] rounded-md gap-4 
                    shadow-4xl flex justify-center items-center flex-col'>
                        <div className='w-[267px] h-[144px] gap-4 flex flex-col  justify-center items-center'>
                            <Image src={item.logo} alt="..." className='w-[65px] h-[56px] object-contain' />
                            <p className='text-wrap font-bold text-[28px] leading-[36px] text-center text-[#4D4D4D]'>{item.title}</p>
                        </div>
                        <div className='w-[251px]'>
                            <p className='text-wrap text-[14px] leading-5 text-center text-[#717171] font-normal'>{item.text}</p>
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Community