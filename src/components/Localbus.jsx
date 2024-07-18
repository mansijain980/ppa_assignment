import React from 'react';
import icon4 from "../assets/Icon4.svg";
import icon5 from "../assets/Icon5.png";
import icon6 from "../assets/Icon6.svg";
import icon7 from "../assets/Icon7.svg";
import Image from 'next/image';
import Counter from './Counter';


const Localbus = () => {
    const data=[
        {sym:icon4,count:2245341,des:'Members'},
        {sym:icon5,count:46328,des:'Clubs'},
        {sym:icon6,count:828867,des:'Event Bookings'},
        {sym:icon7,count:1926436,des:'Payments'},
    ];
  return (
    <div className='max-w-[1440px] mx-auto bg-[#F5F7FA]'>
        <div className='w-full flex justify-between items-center flex-wrap py-[64px] px-[144px] sm:justify-center sm:px-[16px]'>
            <div className='max-w-[520px]'>
                <div className='w-full gap-2'>
                    <p className='text-[36px] sm:text-xl leading-[44px] sm:leading-6 font-semibold text-[#4D4D4D]'>
                        Helping a local 
                        <span className='text-[#4CAF4F]'>business reinvent itself</span>
                    </p>
                    <p className='font-normal text-base leading-6 sm:text-[11px] sm:leading-4 text-[#18191F] mt-4'>
                    We reached here with our hard work and dedication
                    </p>
                </div>
            </div>
            <div className='max-w-[540px]'>
                <div className='w-full grid grid-cols-2 place-content-start sm:grid-cols-1 gap-5 sm:place-items-center'>
                    {data.map((item,index)=>(
                        <div key={index} className='w-[255px] h-[60px] flex items-center justify-start gap-4'>
                            <Image src={item.sym} alt="..." className='w-[48px] h-[48px] object-contain' />
                            <div className='flex flex-col'>
                                <div className='text-[#4D4D4D] text-[28px] font-bold leading-9'><Counter number={item.count} /></div>
                                <p className='leading-6 font-normal text-[16px] text-[#717171]'>{item.des}</p>
                            </div>
                         </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Localbus