"use client";
 
import PublicBtn from "@/components/MitingBtn/PublicBtn";
import WhitielistBtn from "@/components/MitingBtn/WhitielistBtn";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import NFT1 from "../assets/Monking.png"

 
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-1 justify-between m-20">
          <h1 className="text-white text-3xl font-extrabold">NFT MINT</h1>
                <div className="border hover:border-slate-900 rounded">
                  <WalletMultiButton style={{}} />
              </div>
        </div>

      
      <div className="mx-[15rem] my-[5rem] border-2 rounded-md p-6">
        <div className="flex justify-between gap-10 mt-4">
          <div>
            <p className="max-w-[60%]">
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