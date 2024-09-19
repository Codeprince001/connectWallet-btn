import React from 'react'


const MintButton = ({mintOption}: {mintOption: string}) => {
  return (
    <div className='flex items-center gap-2 w-[100%]'>
      <div className="md:hover:drop-shadow-lg md:w-full text-center px-4 md:py-3 bg-[#b5b6b7] hover:bg-[#1E7D96] rounded cursor-pointer text-[#000]">
        Mint
      </div>
    </div>
  )
}

export default MintButton;