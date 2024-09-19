import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className='flex cursor-pointer  gap-x-[2rem] justify-between items-center text-[1.5rem] group-hover:md:hover:bg-cyan-400 '>
      <FaDiscord/>
      <FaTelegram/>
      <FaXTwitter/>
    </div>
  )
}

export default Socials