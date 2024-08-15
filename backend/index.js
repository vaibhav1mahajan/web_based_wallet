


const express = require('express')
const cors = require('cors')
const zod = require('zod')


const bip39 = require('bip39');
const crypto = require('crypto');

const { HDNodeWallet } = require('ethers'); 

const app = express();

app.use(cors());
app.use(express.json());

const arraySchema = zod.object({
    arr:zod.string().array().length(12).nonempty({
    msg: 'Cant be empty'
})
}) 

let i = 1;


app.get('/Mnemonic',(req,res)=>{
        
        const entropy = crypto.randomBytes(16); 
        const mnemonic = bip39.entropyToMnemonic(entropy.toString('hex'));
        const arr = mnemonic.split(" ");
        res.json({
            mnemonic:arr
        })

})

app.post('/walletAddress',(req,res)=>{
    const body = req.body;
    const parsedBody = arraySchema.safeParse(body);
    if(!parsedBody.success){
        return res.json({
            msg:"send correct mnemonic"
        })
    }
    const mnemonic =body.arr.join(" ");

    const root = HDNodeWallet.fromPhrase(mnemonic);
    const path = `44'/60'/0'/0/${i}`;
    const wallet = root.derivePath(path);
    i++;
    res.json({
        address:wallet.address
    })

})

app.listen(3005);


