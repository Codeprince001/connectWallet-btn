import React from 'react'
import Link from 'next/link';



const PublicBtn = ({onClick}: {onClick: () => void}) => {
  return (
    <div 
      className='bg-[#1d1f28] p-5 rounded-lg hover:bg-[#111230] hover:cursor-pointer'
      onClick={onClick}
    >
      <div>
        <p className='text-xl font-bold'>Public </p>
        <p className='text-[#767373]'> Supply: {0}</p>
      </div>
  </div>
  )
}

export default PublicBtn