import React from 'react';
import Image from 'next/image';
import logo1 from "../assets/Logo1.svg";
import logo2 from "../assets/Logo2.svg";
import logo3 from "../assets/Logo3.svg";
import logo4 from "../assets/Logo4.svg";
import logo5 from "../assets/Logo5.svg";
import logo6 from "../assets/Logo6.svg";
import logo7 from "../assets/Logo7.svg";

const OurClient = () => {
    const logos = [
        { sym: logo1 },
        { sym: logo2 },
        { sym: logo3 },
        { sym: logo4 },
        { sym: logo5 },
        { sym: logo6 },
        { sym: logo7 },
    ];
    return (
        <div className='max-w-[1440px] mx-auto my-16'>
            <div className='w-full  flex flex-col justify-center gap-4 items-center my-[28px] sm:h-auto'>
                <div className='flex flex-col gap-4'>
                    <p className='font-semibold text-[36px] leading-[44px] sm:text-[20px] sm:leading-4 text-center text-[#4D4D4D] dark:text-white'>
                        Our Clients
                    </p>
                    <p className='sm:text-[11px] sm:leading-4 text-base leading-6 font-normal text-wrap text-[#717171] dark:text-white text-center'>
                        We have been working with some Fortune 500+ clients
                    </p>
                </div>
                <div className='w-[80%] flex items-center justify-between flex-wrap gap-4 mx-auto my-5 dark:bg-[#F5F7FA]'>
                    {logos.map((item, index) => (
                        <Image src={item.sym} alt="..." className='w-[48px] h-[48px] object-contain' key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurClient