import React from 'react'
import Link from 'next/link'

const WhitielistBtn = () => {
  return (
    <div className='bg-[#1d1f28] p-5 rounded-lg hover:bg-[#111230]'>
      <Link href="/">
        <div>
          <p className='text-xl font-bold'>Whitelist </p>
          <p className='text-[#767373]'> Supply: {0}</p>
        </div>
      </Link>
    </div>
  )
}

export default WhitielistBtn