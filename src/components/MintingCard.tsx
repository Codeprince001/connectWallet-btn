import React, { useState } from 'react'
import Image from "next/image";
import NFT1 from "../assets/Monking.png"
import MintButton from "@/components/MintButton";
import { FiMinus, FiPlus } from "react-icons/fi";

const MintingCard = () => {



  const [numMinted, setNumMinted] = useState(1);

  const handleIncrease = () => {
     if (numMinted < 2) {  // Prevent increasing beyond 2
    setNumMinted((prev) => prev + 1);
  }
  };

  const handleDecrease = () => {
    if (numMinted > 1) {  // Prevent negative values or zero
      setNumMinted((prev) => prev - 1);
    }
  };

  return (
    <div className='p-4  rounded-lg'>
       <div className="md:h-[200px]">
              <Image
                className="h-[100%] rounded-md object-fill"
                src={NFT1}
                alt="Nft image"
                />
            </div>

           <h2 className='text-center text-4xl font-[800] my-4 '><span className='text-[#EC597E]'>{100}</span> / <span>{404}</span></h2>
           
           
           <div className='bg-[#0a041e] flex items-center rounded cursor-pointer  mx-auto w-[70%] border-[.05px] border-[#3e3e3e] p-1'>
            <button onClick={handleDecrease}>
              <FiMinus className='text-[2rem]'/>
            </button>

            
                <input type='number' value={numMinted} min={1} max={2} aria-label='Quantity Input' className='bg-inherit outline-none text-center text-2xl font-[600] focus:outline-none w-[100%] p-2' readOnly />

              <button onClick={handleIncrease} >
                <FiPlus className='text-[2rem]' />
              </button>
           </div>

           <div className='mt-2  text-center font-medium'>
            You are able to mint up to 2 <span className='text-[#166277]'>NFT</span>
           </div>

            {/* Minting Button */}
            <div className="flex justify-center items-center m-auto my-2 pt-[2rem] w-[80%]">
              {
                (<MintButton mintOption="public"/>)
              }
            </div>

    </div>
  )
}

export default MintingCard