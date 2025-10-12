import React from 'react'
import Pots from './Pots'
import Transactions from './Transactions'

function Left() {
  return (
    <div className='flex flex-col justify-between w-full lg:w-[55%] min-h-[40%] lg:p-5'>
        <Pots/>
        <Transactions/>
    </div>
  )
}

export default Left