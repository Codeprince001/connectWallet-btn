"use client";
 
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import NFT1 from "../assets/Monking.png"
import { useState } from "react";
import WhitielistBtn from "@/components/ActionsBtn/WhitielistBtn";
import PublicBtn from "@/components/ActionsBtn/PublicBtn";



export default function Home() {

  const [isPublic, setisPublic] = useState()

  return (
    <main className="min-h-screen">
      <div className="flex flex-1 justify-between m-10">
          <h1 className="text-white text-3xl font-extrabold">ERROR 404</h1>
                <div className="border rounded">
                  <WalletMultiButton style={{backgroundColor: 'black', border: 'none'}} />
              </div>
        </div>

      
      <div className="mx-[10rem] my-[5rem] border-1 border-[#ccc] rounded-md p-2">
        <div className="flex justify-between gap-10 mt-4">
          <div>
            <p className="md:max-w-[70%] max-w-[60%] md:text-[1.3rem]">
              Welcome to the future of digital ownership with our Web3 NFT Minting Platform,
              where creativity meets blockchain technology.
            </p>

            {/* Action button details and NFT Image */}
            <div className="flex flex-col gap-4 mt-6 flex-1">
              <WhitielistBtn/>
              <PublicBtn/>
            </div>
            
          </div>

          <div className="h-[100%]">
            <Image
              className="h-[100%]"
              src={NFT1}
              alt="Nft image"
            />
          </div>

        </div>
      </div>
    </main>
  );
}