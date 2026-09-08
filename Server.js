const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=> res.send('CLARO API no ar'));

app.get('/app', (req,res)=>{
  res.send(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>ClaroPRO</title><script src="https://cdn.pluggy.ai/pluggy-connect/v2.8.2/pluggy-connect.js"></script><style>body{font-family:sans-serif;background:#0f172a;color:#fff;padding:20px}.card{background:#1e293b;padding:20px;border-radius:16px;margin-bottom:15px}button{background:#22c55e;color:#000;padding:15px;border-radius:12px;border:none;font-weight:bold;width:100%;font-size:16px}</style></head><body><h2>ClaroPRO - Ao Vivo</h2><div class="card"><div style="font-size:32px;color:#22c55e;font-weight:bold">R$ 1.700,00</div>Saldo Mes 10</div><div class="card"><button id="btn">CONECTAR BRADESCO / CAIXA</button></div><div class="card" id="tx">Clique para conectar</div><script>const API='https://claro-api-ou65.onrender.com';document.getElementById('btn').onclick=async()=>{const r=await fetch(API+'/connect-token',{method:'POST'});const d=await r.json();const pluggy=new PluggyConnect({connectToken:d.accessToken,includeSandbox:true,onSuccess:(i)=>{document.getElementById('tx').innerHTML='Conectado: '+i.itemId},onError:(e)=>alert(JSON.stringify(e))});pluggy.init();}</script></body></html>`);
});

app.post('/connect-token', async (req,res)=>{
  try{
    const a = await fetch('https://api.pluggy.ai/auth',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId:process.env.PLUGGY_CLIENT_ID,clientSecret:process.env.PLUGGY_CLIENT_SECRET})});
    const j = await a.json();
    const c = await fetch('https://api.pluggy.ai/connect_token',{method:'POST',headers:{'Content-Type':'application/json','X-API-KEY':j.apiKey},body:JSON.stringify({})});
    const d = await c.json();
    res.json(d);
  }catch(e){res.status(500).json({error:e.message})}
});

app.listen(process.env.PORT||10000, ()=>console.log('ok'));
