import React from 'react'

const AddressCard = () => {
  return (
    <div>
    {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
    <div className="space-y-3">
      <p className="font-semibold">Rahul Mohanty</p>

      <p>
        Mumbai, GokulDham society, 461633
      </p>

      <div className="space-y-1">
        <p className="font-semibold">Phone Number</p>
        <p>46531163302</p>
      </div>
    </div>
  </div>
  )
}

export default AddressCard