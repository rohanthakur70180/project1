import React from 'react';
import img4 from '../../assets/img4.jpg';

const Hero = () => {
  return (
    <section className='relative'>
      <img
        src={img4}
        alt="Rabbit"
        className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover'
      />
      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='text-center text-white p-6'>
          <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>
            Harvest<br />Ready
          </h1>
          <p className='text-sm md:text-lg tracking-tighter'>
            Your perfect getaway starts here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
