import React from 'react'
import Image from 'next/image'
import member from '../../../../public/images/team.png'
import customer from '../../../../public/images/customer.png'
// import pricing from '../../../../public/images/pricing.png'

const Cards = () => {
  return (
    <div className='flex items-center justify-around px-4 mt-6 mb-12'>
        <div className='flex items-center ' >
            <div className=' mx-1 lg:mx-2 p-2 sm:p-3 md:p-3 lg:p-4 rounded-lg bg-[#E5ECFD]'>
                <Image src={member} className='w-[20px] sm:w-[25px] md:w-[30px]' alt='team'/>
            </div>
            <div className='mx-2'>
                <h2 className='text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-semibold'>Expert Team Members</h2>
                <p className='text-[7px] sm:text-[10px] md:text-[12px] lg:text-[14px] mt-1 text-[#504C4C]'>We take pride in assembling a <br />
                    diverse and highly skilled
                </p>
            </div>
        </div>
        <div className='flex items-center ' >
            <div className=' mx-1 lg:mx-2 p-2 sm:p-3 md:p-3 lg:p-4 rounded-lg bg-[#FEF6EB]'>
                <Image src={customer} className='w-[20px] sm:w-[25px] md:w-[30px]' alt='team'/>
            </div>
            <div className='mx-2'>
                <h2 className='text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-semibold'>Fastest Customer Service</h2>
                <p className='text-[7px] sm:text-[10px] md:text-[12px] lg:text-[14px] mt-1 text-[#504C4C]'>We take pride in assembling a <br />
                    diverse and highly skilled
                </p>
            </div>
        </div>
        <div className='flex items-center ' >
            <div className=' mx-1 lg:mx-2 p-2 sm:p-3 md:p-3 lg:p-4 rounded-lg bg-[#FEECF2]'>
                <Image src={member} className='w-[20px] sm:w-[25px] md:w-[30px]' alt='team'/>
            </div>
            <div className='mx-2'>
                <h2 className='text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-semibold'>Reasonable Market Price</h2>
                <p className='text-[7px] sm:text-[10px] md:text-[12px] lg:text-[14px] mt-1 text-[#504C4C]'>We take pride in assembling a <br />
                    diverse and highly skilled
                </p>
            </div>
        </div>
       
    </div>
  )
}

export default Cards
