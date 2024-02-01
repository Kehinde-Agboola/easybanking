import React from 'react'
import { onlineBanking } from '../constants'

const Offers = () => {
  return (
    <div className='h-full text-black bg-LightBlue text-3xl flex justify-center'>
    <div className='w-[90vw] mt-10'>
    <div className='text-center mb-8'>
       <h2 className='text-2xl mb-4'>Why choose Easybank?</h2>
       <h4 className='text-xs'>We leverage Open Bank to tutrn your bank account into your financial hub. Control your financies like never before. 
       </h4>
     </div>

     <div className='sm:flex gap-6 m'>
       {onlineBanking.map((fill) => (
         <div className='flex flex-col justify-center items-center mb-10'>
           <img className='mb-5' src={fill.icon} alt='' />
         <h3 className='font-Bold text-base mb-4'>{fill.title}</h3>
         <h4 className='font-thin text-xs text-center'>{fill.body}</h4>
         </div>
       ))}
     </div>
    </div>
   </div>
  )
}

export default Offers