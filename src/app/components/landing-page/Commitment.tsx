import React from 'react'
import Image from 'next/image'
import laptop from '../../../../public/images/laptop.png'
import star from '../../../../public/images/star.png'
import arrow from '../../../../public/images/arrow.png'
import signals from '../../../../public/images/signals.png'
import paintbrush from '../../../../public/images/paintbrush.png'
import global from '../../../../public/images/global.png'
import meta from '../../../../public/images/meta.png'



const Commitment:React.FC = () => {
  return (
    <section className=' p-4 mb-12'>
        <div className='flex flex-col md:flex-row items-center justify-center space-x-12'>
        
        <div className='relative'>
            <Image src={laptop} alt='laptop' priority className='w-[320px] sm:w-[350px] md:w-[400px] lg:w-[450px]'/>

            <Image src={signals} className='absolute bottom-6 right-6 w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]'  alt='signals'/>
            <Image src={global} className='absolute bottom-12 left-0 w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]'  alt='global'/>
            <Image src={meta} className='absolute top-8 left-6 w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]'  alt='meta'/>
            <Image src={paintbrush} className='absolute top-8 right-4 w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]'  alt='paintbrush'/>
        </div>

        <div className='mt-16 md:mt-0'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                Our Commitment to <br />
                Client Satisfaction
            </h2>
            <p className='text-[10px] md:text-[11px] lg:text-[13px] my-4 '>
                At Decimal Solutions, our commitment to client satisfaction is at <br />
                the care of everything  we do. We understand client’s success
            </p>
            <ul className='my-4 '>
                <li className='flex items-center text-[10px] md:text-[11px] lg:text-[13px] my-2'> <Image src={star} className='mr-2 w-[20px]' alt='star' />Grow your business the right way</li>
                <li className='flex items-center text-[10px] md:text-[11px] lg:text-[13px] my-2'> <Image src={star} className='mr-2 w-[20px]' alt='star' />Let business growth help your business grow</li>
                <li className='flex items-center text-[10px] md:text-[11px] lg:text-[13px] my-2'> <Image src={star} className='mr-2 w-[20px]' alt='star' />Helping you to get better</li>
            </ul>
            
            <button className="flex my-4 items-center bg-[#A1258F] text-white rounded-full font-semibold py-1 px-4 sm:py-2 md:py-3 text-[12px] sm:text-[12px] md:text-[10px] lg:text-md">
              GET STARTED
              <Image src={arrow} width={8} alt="arrow" className="ml-2" />
            </button>

        </div>
        </div>
    </section>
  )
}

export default Commitment
