import React from 'react'
import Link from 'next/link'

const WhitielistBtn = ({onClick, isActive}: {onClick: () => void, isActive: boolean}) => {
  console.log(isActive)
  
  return (
    <div 
      className={`${isActive ? "bg-[#512DA8]": "bg-[#394559]"} p-5 w-[80%] rounded-lg hover:bg-[#4f5f7b] hover:cursor-pointer `}
      onClick={onClick}
    >
        <div>
          <p className='text-xl font-bold'>Whitelist </p>
          <p className='text-[#767373]'> Supply: {0}</p>
        </div>
    </div>
  )
}

export default WhitielistBtn