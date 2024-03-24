import React from 'react'

const AddressCard = () => {
  return (
    <div>
      <div className="space-y-3">
        <p className='font-bold underline'>Delivery Address</p>

        <p className="font-semibold">Raam Kapoor</p>
        <p>123 Main Street</p>
        <p>Anytown, CA 12345</p>
        <p className='font-semibold'>Phone Number</p>
        <p className='pb-3' >(555) 555-5555</p>
      </div>
    </div>
  )
}

export default AddressCard