import React from 'react';
import { Grid } from '@mui/material';
import AdjustSharpIcon from '@mui/icons-material/AdjustSharp';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl'>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className='flex cursor-pointer'>
            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_SY200_.jpg" alt='' />
            <div className='ml-5 space-y-2'>
              <p className=''>Mens Slim Pant</p>
              <p className='opacity-50 text-xs font-semibold'>Size: M</p>
              <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p className=''>$1099</p>
        </Grid>
        <Grid item xs={4}>
          {false && (
            <div>
              <p className=''>
                <AdjustSharpIcon className='text-green-600 mr-2 text-sm ' sx={{ width: "15px", height: "15px" }} />
                <span>Delivered on March 03</span>
              </p>
              <p className='text-xs'>Your Item has been Delivered</p>
            </div>
          )}
          {true && (
            <p className=''>
              <AdjustSharpIcon className='text-green-600 mr-2 text-sm ' sx={{ width: "15px", height: "15px" }} />
              <span>Expected Delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
