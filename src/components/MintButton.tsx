import React from 'react'

const MintButton = ({mintOption}: {mintOption: string}) => {
  return (
    <div>
      <p className="md:hover:drop-shadow-lg md:px-[5rem] md:py-3 bg-[#08ad9f] hover:bg-[#00867b] rounded cursor-pointer">
        {mintOption}
      </p>
    </div>
  )
}

export default MintButton