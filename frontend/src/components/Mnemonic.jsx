import React, { useState } from 'react'

const Mnemonic = (props) => {

    async function getMnemonic(){
        try {
            const response = await fetch('http://localhost:3005/Mnemonic');
            const data = await response.json();
        props.setPhrase(data.mnemonic);
        props.isGetMnemonic(true);
        props.setAddress([]);
        console.log("heellloooo" , props.address);
        } catch (error) {
            console.log(error);
        }   
        
    }

  return (
    <div className='my-4 flex justify-center flex-col gap-7'>
        <button onClick={getMnemonic} className='text-center  rounded-lg hover:bg-slate-600 px-10 py-5 bg-slate-900 text-2xl font-bold'>Tap to get Mnemonic Phrase</button>
        {props.phrase && <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
            {props.phrase.map((word,index)=> (
                singleWord(index,word)
            ))}
        </div> }
    </div>
  )
}

const singleWord = (index,word) =>{
    return (
        <div className='flex justify-start px-3 py-3 bg-slate-800 rounded-lg text-lg'>
            <div className='px-2'>{(index+1)}.</div>
            <div>{word}</div>
        </div>
    )
}

export default Mnemonic