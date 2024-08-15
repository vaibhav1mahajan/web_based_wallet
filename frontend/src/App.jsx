import { useState } from "react";
import Address from "./components/Address";
import Mnemonic from "./components/Mnemonic";

export default function App() {
  const [getMnemonic,isGetMnemonic] = useState(false);
  const [phrase,setPhrase] = useState([]);
  const [address,setAddress] = useState([]);


  return (
    <div className="overflow-x-hidden text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900 ">
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div >
      <div className="container mx-auto py-16 lg:py-32 h-full flex justify-center flex-col max-w-xl ">
        <Mnemonic getMnemonic={getMnemonic} isGetMnemonic={isGetMnemonic} phrase={phrase} setPhrase={setPhrase} setAddress={setAddress} address={address} />
        <Address getMnemonic={getMnemonic} phrase={phrase} setAddress={setAddress} address={address} />
      </div>
    </div>
  )
}