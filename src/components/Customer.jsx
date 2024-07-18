import React from 'react'
import image9 from "../assets/image9.svg";
import Image from 'next/image';
import logo8 from "../assets/Logo8.svg"
import logo9 from "../assets/Logo9.svg"
import logo10 from "../assets/Logo10.svg"
import logo11 from "../assets/Logo11.svg"
import logo12 from "../assets/Logo12.svg"
import logo13 from "../assets/Logo13.svg"
import Right from "../assets/Right.svg";

const Customer = () => {
    const data=[
        {sym:logo8},
        {sym:logo9},
        {sym:logo10},
        {sym:logo11},
        {sym:logo12},
        {sym:logo13},
    ]
    return (
        <div className='max-w-[1440px] mx-auto bg-[#F5F7FA] my-12'>
            <div className='w-full flex justify-between sm:justify-center gap-8 items-center py-[32px] px-[144px] sm:px-[20px] flex-wrap-reverse'>
                <div className='max-w-[326px] max-h-[326px] shadow-5xl'>
                    <Image src={image9} alt="...." className='w-full h-full object-contain' />
                </div>
                <div className='max-w-[748px]'>
                    <div className='w-full flex flex-col gap-4'>
                        <p className='text-base leading-6 sm:text-[14px] text-[#717171] font-normal'>
                            “We have enjoyed working with the JustGo system to setup and go live with our new membership platform.
                            The initial effort to organise it along the lines of how our sport currently works
                            was quick and relatively easy. The new system has already massively improved the time and
                            effort it takes to setup and process member and club applications. It will help us to communicate
                            with people in our sport in a much more effective way, and collect data to help us improve how our
                            sport is governed.”</p>
                        <div>
                            <p className='text-[#4CAF4F] text-xl leading-7 font-semibold'>
                                Tim smith
                            </p>
                            <p className='text-[#89939E] text-base leading-6 sm:text-[14px] font-normal'>
                                British Dragon Boat Racing Association
                            </p>
                        </div>
                        <div className='w-full flex flex-wrap items-center justify-between gap-4'>
                            {data.map((item,index)=>(
                                <Image src={item.sym} key={index} alt=".." className='w-[48px] h-[48px] object-contain' />
                            ))}
                            <div className='flex items-center text-[#4CAF4F] text-xl leading-7 font-semibold'>
                                <p>Meet all customers</p>
                                <Image src={Right} alt="..." className='w-6 h-6 object-contain' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer