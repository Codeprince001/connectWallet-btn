import React from 'react'
import Socials from './Socials'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../assets/error-logo.png"

const Header = () => {
  return (
    <div className='flex flex-1 justify-between items-center py-4 px-6'>
      <div className='w-[300px]'>
        <Image src={logo} alt='logo'/>
      </div>
       {/* <h1 className="text-white text-3xl font-extrabold">Error 404</h1> */}
       
       <div className='flex gap-3 text-lg font-bold'>
        <Link href={""}>Home</Link>
        <Link href={""}>Features</Link>
        <Link href={""}>Roadmap</Link>
       </div>

      <div className="flex items-center justify-center gap-10">
        <Socials/>
        <div className="rounded text-center bg-gradient-to-r from-[#c91942] to-[#1E7D96]">
          <WalletMultiButton style={{borderWidth: "2px", border: "linear-gradient(to right, #F6577D, #1E7D96)"}} className=''/>
        </div>
      </div>
    </div>
  )
}

export default Header 