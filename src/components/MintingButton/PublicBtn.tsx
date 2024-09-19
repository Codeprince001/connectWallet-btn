import React from 'react'
import Link from 'next/link';



const PublicBtn = ({onClick, isActive}: {onClick: () => void, isActive: boolean} ) => {
  return (
    <div 
      className={`w-[80%] p-5 rounded-lg hover:bg-[#4f5f7b] hover:cursor-pointer ${isActive ? "bg-[#512DA8]": "bg-[#394559]"}`}
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