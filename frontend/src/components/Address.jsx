import React, { useState } from 'react'

const Address = (props) => {


    const getWalletAddress = async (mnemonic)=>{
        const url = 'https://web-based-wallet-n0vi.onrender.com/walletAddress';
        const bodyData = {
            arr:props.phrase
        }
        const response = await fetch(url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json', // Specify the content type as JSON
              },
              body: JSON.stringify(bodyData)
        })
        const data = await response.json();      
        props.setAddress([...props.address,data.address])
    }
  return (
    <div  className='my-4 flex justify-center flex-col gap-7'>
        <button disabled={!props.getMnemonic} onClick={getWalletAddress} className='text-center  rounded-lg hover:bg-slate-600 px-10 py-5 bg-slate-900 text-2xl font-bold'>Tap to get Wallet Address</button>
        <div className='flex flex-col justify-center gap-4'>
            {props.address && <div className='flex flex-col justify-center gap-4'>
                    {props.address.map(add => (
                        <div className='px-4 tracking-wide py-3 text-sm lg:text-xl rounded-lg bg-gray-700'>
                            {add}
                        </div>
                    ))}
                </div>}
        </div>
    </div>
  )
}

export default Address