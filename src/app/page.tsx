"use client";
 
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { useState } from "react";
import WhitielistBtn from "@/components/MintingButton/WhitielistBtn";
import PublicBtn from "@/components/MintingButton/PublicBtn";

import Socials from "@/components/Socials";
import MintingCard from "@/components/MintingCard";
import MintButton from "@/components/MintButton";
import Header from "@/components/Header";



export default function Home() {

  const [mintOption, setMintOption] = useState<string>("")
  const [activeButton, setActiveButton] = useState<string>("whitelist")
  console.log(activeButton)

  const handleMintOptionChange = (mintOption: string) => {
    setMintOption(mintOption)
    setActiveButton(mintOption)
  }


  return (
    <main className="min-h-screen bg-[url('../assets/404.png')] bg-cover relative" style={{ height: "100vh", width: "100vw"}}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000]/80 to-[#000]/70">

         <Header/>
      
      <div className="mx-[10rem] md:mt-[2rem] px-4 py-2 bg-[#050113] rounded-4xl">
        <div className="flex justify-between gap-[2rem] mt-1 items-center">
          <div className="p-4">
            <p className="md:max-w-[80%] max-w-[60%] md:text-[1.3rem]">
              Error 404 is an Exclusive NFT Project on Solana, featuring a limited supply of 404 unique NFTs in the OG collections.
            </p>

            {/* Action button details and NFT Image */}
            <div className="flex flex-col gap-4 mt-6 flex-1">
              <WhitielistBtn
                onClick={() => handleMintOptionChange("whitelist")}
                isActive={activeButton === "whitelist"}
              />
              <PublicBtn 
                onClick={() => handleMintOptionChange("public")}
                isActive={activeButton === "public"}
              />
            </div>
          </div>

          <div className="md:max-w-[50%]">
           <MintingCard/>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}