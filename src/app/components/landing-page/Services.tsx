import React from 'react'

const Services: React.FC = () => {

    const services: string[] = ['Web Development', 'Mobile Development', 'Graphics Designing', 'Game Development', 'AR/VR Games', 'ERP Solutions'];

    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className='bg-[#A1258F] text-white text-[9px] md:text-[11px] lg:text-[14px] font-semibold rounded-lg p-2 text-center'
                    >
                        {service}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;
