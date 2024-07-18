import React from 'react';
import calimg from "../assets/pana.svg";
import Image from 'next/image';

const Calander = () => {
    return (
        <div className='max-w-[1440px] mx-auto my-16'>
            <div className='w-full flex justify-between flex-wrap-reverse gap-8 items-center px-[144px] sm:px-[20px]'>
                <div className='max-w-[441px] max-h-[433px]'>
                    <Image src={calimg} alt="..." className='h-full w-full object-contain' />
                </div>
                <div className='max-w-[661px]'>
                    <div className='w-full flex flex-col gap-4'>
                        <p className='leading-[44px] text-[36px] font-semibold text-[#4D4D4D] dark:text-white'>
                            How to design your site footer like we did
                        </p>
                        <p className='font-normal text-[14px] leading-5 text-[#717171] dark:text-white'>
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec
                            tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.
                            Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst.
                            Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue
                            vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
                            commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac,
                            hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                        </p>
                        <button className='bg-[#4CAF4F] mt-8 w-[151px] h-[52px] flex justify-center items-center rounded text-white'>
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calander