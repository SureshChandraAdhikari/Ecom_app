import React from 'react'
import { IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Cartitem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md m'>
        <div className='flex items-center '>
            <div className='w-[5rem] h-[5rem] lg:[9rem] lg:h-[9rem]'>
                  <img className='w-full h-full object-cover object-top' src="https://images.unsplash.com/photo-1703138560531-7b033a785ae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='ml-5 space-y-1'>
              <p className='font-semibold '>Men Pant</p>
              <p className='opacity-70'>Size: L , White</p>
              <p className='opacity-70 mt-2'>Seller: Denim</p>
          <div> <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
            <p className="font-semibold">$199</p>
            <p className="opacity-50 line-through">$299</p>
            <p className="text-green-600 font-semibold">70%</p>
          </div></div>
              </div>
              
        </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
        <div className='flex items-center space-x-2'>
          
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
          <span className='py-1 px-7 border rounded-sm'>9</span>
          
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
          
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default Cartitem