import React from 'react'
import AddressCard from '../AddressCrd/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid,Box } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'><OrderTracker activeStep={3} /></div>
            <div className='p-5 shadow-md shadow-black hover:shadow-2xl mb-3'>
                {[1, 1, 1, 1].map((item) => <Grid  container spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-2'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_SY200_.jpg" alt='' />
                            <div className='ml-5 space-y-2'>
                                <p className=''>Mens Slim Pant</p>
                                <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                                <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                                <p>Seller : Denim</p>
                                <p>$1099</p>
                            </div></div>

                    </Grid>

                    <Grid item >
                        <Box className="text-deep-purple-500 ">
                            <StarIcon sx={{ fontSize: "2rem" }} className='px-2 text-5xl' />
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>)}
            </div>
        </div>

    )
}

export default OrderDetails