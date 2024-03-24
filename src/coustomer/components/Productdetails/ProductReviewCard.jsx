import { Avatar, Grid, Box, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
    return (
        <div>
            <Grid container spacing={2} gap={3}>

            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <Box>
                            <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "rgb(236, 177, 89)" }}>S</Avatar>
                        </Box>
                        <p className='font-semi-bold'>Suresh</p>
                        <p className='opacity-70'>May 1 ,2024</p>
                    </div>
                </div>
                <Rating value={4.5} name='half-rating' />
                <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda doloribus commodi dicta, iure, deserunt voluptatem fugiat nulla amet eius quasi cum temporibus ullam reprehenderit adipisci quidem, ducimus cupiditate cumque velit!</p>
            </Grid>
        </div>
    )
}

export default ProductReviewCard