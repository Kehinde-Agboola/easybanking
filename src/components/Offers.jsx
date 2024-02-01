import React from 'react'
import { onlineBanking } from '../constants'

const Offers = () => {
  return (
    <div className='h-full text-black bg-LightBlue text-3xl flex justify-center'>
    <div className='w-[80vw] mt-10'>
    <div className='text-center  sm:text-start mb-8'>
       <h2 className='text-2xl xl:text-3xl mb-4 font-semibold'>Why choose Easybank?</h2>
       <h4 className='text-xs sm:text-sm xl:text-lg'>We leverage Open Bank to tutrn your bank account into your financial hub. <br className='hidden sm:block'/>Control your financies like never before. 
       </h4>
     </div>

     <div className='sm:flex gap-6'>
       {onlineBanking.map((fill) => (
         <div className='flex flex-col justify-center sm:justify-start items-center sm:items-start mb-10'>
           <img className='mb-5' src={fill.icon} alt='' />
         <h3 className='font-bold text-base sm:text-lg xl:text-2xl mb-4'>{fill.title}</h3>
         <h4 className='font-thin text-xs sm:text-sm xl:text-lg text-center sm:text-start'>{fill.body}</h4>
         </div>
       ))}
     </div>
    </div>
   </div>
  )
}

export default Offers