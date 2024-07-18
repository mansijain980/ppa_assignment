import React from 'react';
import Image from 'next/image';
import login from "../assets/rafiki.svg"

const Unlock = () => {
    return (
        <div className="max-w-[1440px] mx-auto my-16">
            <div className='w-full  h-full flex items-center flex-wrap-reverse sm:justify-center gap-10 justify-between px-[144px] sm:px-[16px]'>
                <div className='max-w-[442px] max-h-[433px]'>
                    <Image src={login} alt=".." className='w-full h-full object-contain' />
                </div>
                <div className='max-w-[661px]'>
                    <div className='w-full flex flex-col '>
                        <p className='font-semibold text-[36px] leading-[44px] sm:text-[20px] sm:leading-[24px] text-wrap text-[#4D4D4D] dark:text-white'>
                            The unseen of spending three years at Pixelgrade
                        </p>
                        <p className='sm:text-[14px] mt-4 sm:leading-[20px] text-[20px] leading-5 text-wrap font-normal text-[#717171] dark:text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
                            justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque
                            placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
                            Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,
                            aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                        </p>
                        <button className='bg-[#4CAF4F] mt-8 w-[151px] h-[52px] flex justify-center items-center rounded text-white'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unlock