import React from 'react';
import restaurant from '../assets/image-restaurant.jpg';
import currency from '../assets/image-currency.jpg';
import confetti from '../assets/image-confetti.jpg';
import plane from '../assets/image-plane.jpg';

const Articles = () => {
  return (
    <div className='bg-gray-50'>
       <div className='flex justify-center items-center'>
            <div className='w-[85vw] text-center font-thin mt-12'>
                <h2 className='text-xl mb-6'>Latest Articles</h2>
                <div className='h-full bg-white rounded mb-4'>
                    <img className='rounded w-full h-[30vh] mb-4' src={currency} />

                    <div className='flex justify-center items-center mb-10'>
                    <div className='w-[70vw] text-start'>
                        <h6 className='text-[0.6em]'>By Claire Robinson</h6>
                        <h3 className='text-sm font-semibold mb-4'>Recieve money in any currency with no fees</h3>
                        <h4 className='text-xs'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a single...</h4>
                    </div>
                    </div>
                </div>

                <div className='h-full bg-white rounded mb-4'>
                    <img className='rounded w-full h-[30vh] mb-4' src={restaurant} />

                    <div className='flex justify-center items-center mb-10'>
                    <div className='w-[70vw] text-start'>
                        <h6 className='text-[0.6em]'>By Claire Robinson</h6>
                        <h3 className='text-sm font-semibold mb-4'>Recieve money in any currency with no fees</h3>
                        <h4 className='text-xs'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a single...</h4>
                    </div>
                    </div>
                </div>

                <div className='h-full bg-white rounded mb-4'>
                    <img className='rounded w-full h-[30vh] mb-4' src={plane} />

                    <div className='flex justify-center items-center mb-10'>
                    <div className='w-[70vw] text-start'>
                        <h6 className='text-[0.6em]'>By Wilson Hutton</h6>
                        <h3 className='text-sm font-semibold mb-4'>Take your Easybank card wherever you go</h3>
                        <h4 className='text-xs'>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. we'll even show you...</h4>
                    </div>
                    </div>
                </div>

                <div className='h-full bg-white rounded mb-12'>
                    <img className='rounded w-full h-[30vh] mb-4' src={confetti} />

                    <div className='flex justify-center items-center mb-10'>
                    <div className='w-[70vw] text-start'>
                        <h6 className='text-[0.6em]'>By Claire Robinson</h6>
                        <h3 className='text-sm font-semibold mb-4'>Our invite-only Beta acounts are now live!</h3>
                        <h4 className='text-xs'>After a lot of hard work by the whole team, we're excited to launch our closed beta. it's easy to request an invite through the site...</h4>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles