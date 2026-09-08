const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req,res)=> res.send('CLARO API no ar'));
app.post('/connect-token', async (req,res)=>{
  try{
    const auth = await fetch('https://api.pluggy.ai/auth',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId:process.env.PLUGGY_CLIENT_ID,clientSecret:process.env.PLUGGY_CLIENT_SECRET})});
    const {apiKey} = await auth.json();
    const conn = await fetch('https://api.pluggy.ai/connect_token',{method:'POST',headers:{'Content-Type':'application/json','X-API-KEY':apiKey},body:JSON.stringify({})});
    const data = await conn.json();
    res.json(data);
  }catch(e){res.status(500).json({error:e.message})}
});
app.listen(process.env.PORT||3000);
