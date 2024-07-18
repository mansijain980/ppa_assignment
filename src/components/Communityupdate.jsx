import React from 'react';
import image18 from "../assets/image18.svg";
import image19 from "../assets/image19.svg";
import image20 from "../assets/image20.svg";
import Image from 'next/image';
import Right from "../assets/Right.svg";


const Communityupdate = () => {
    const data = [
        { img: image18, des: "Creating Streamlined Safeguarding Processes with OneRen" },
        { img: image19, des: "What are your safeguarding responsibilities and how can you manage them?" },
        { img: image20, des: "Revamping the Membership Model with Triathlon Australia" },
    ]
    return (
        <div className='max-w-[1440px] mx-auto my-16'>
            <div className='w-full flex flex-col justify-center items-center px-[144px] sm:px-[20px]'>
                <div className='max-w-[628px]'>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <p className='font-semibold text-[#4D4D4D] dark:text-white text-[36px] leading-[44px] text-center text-wrap sm:text-[24px] sm:leading-8'>
                            Caring is the new marketing
                        </p>
                        <p className='text-[#717171] dark:text-white text-wrap text-base leading-6 font-normal text-center sm:text-[14px] mt-4'>
                            The Nexcent blog is the best place to read about the latest membership
                            insights, trends and more. See who&apos;s joining the community, read about
                            how our community are increasing their membership income and lot&apos;s more.
                        </p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between sm:justify-center items-center mt-4 gap-4 sm:gap-8'>
                    {data.map((item,index)=>(
                        <div key={index} className='max-w-[368px] max-h-[366px] flex flex-col justify-center items-center'>
                            <Image src={item.img} alt="..." className='w-full h-[286px]' />
                            <div className='bg-[#F5F7FA] max-h-[176px] max-w-[317px] rounded-lg p-4 gap-4 -mt-16 flex flex-col justify-center items-center'>
                                <p className='text-[#717171] text-xl leading-7 font-semibold text-wrap text-center
                                 sm:text-base sm:leading-6'>{item.des}</p>
                                <div className='flex items-center text-[#4CAF4F] text-xl leading-7 font-semibold sm:text-base sm:leading-6'>
                                <p>Readmore</p>
                                <Image src={Right} alt="..." className='w-6 h-6 object-contain' />
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Communityupdate