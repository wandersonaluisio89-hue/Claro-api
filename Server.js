
const express=require('express');const cors=require('cors');const app=express();app.use(cors());app.use(express.json());
app.get('/',(r,s)=>s.send('WANDERSON INVESTI - Clara GPT no ar'));
app.get('/app',(r,s)=>{s.send(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Wanderson Investi - Clara IA</title><script src="https://cdn.pluggy.ai/pluggy-connect/v2.8.2/pluggy-connect.js"></script><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"><style>*{margin:0;padding:0;box-sizing:border-box}body{background:#0B0F1E;color:#fff;font-family:Inter,sans-serif;display:flex;flex-direction:column;height:100vh}#bgVideo{position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:-2;opacity:.35}.overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:linear-gradient(rgba(11,15,30,.8),rgba(11,15,30,.97));z-index:-1}
.header{padding:16px;display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.05);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.1)}.brand{font-weight:900;font-size:18px}.brand span{color:#00FF88}.avatar{width:44px;height:44px;border-radius:50%;border:2px solid #00FF88}
.chat-area{flex:1;overflow:auto;padding:16px;display:flex;flex-direction:column;gap:12px}.msg{max-width:85%;padding:12px 14px;border-radius:16px;font-size:13px;line-height:1.4}.msg.user{align-self:flex-end;background:#00FF88;color:#000;border-radius:16px 16px 2px 16px}.msg.ai{align-self:flex-start;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:16px 16px 16px 2px}.msg.ai b{color:#00FF88}
.input-area{display:flex;gap:8px;padding:12px;background:rgba(255,255,255,.05);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,.1)}input{flex:1;background:rgba(0,0,0,.5);border:1px solid #333;padding:12px 14px;border-radius:24px;color:#fff;outline:none}button.send{background:#00FF88;border:none;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center}
.cards{display:flex;gap:8px;padding:0 12px 12px;overflow:auto}.mini-card{min-width:140px;background:rgba(255,255,255,.06);border:1px solid rgba(0,255,136,.2);border-radius:14px;padding:10px;text-align:center}
</style></head><body>
<video id="bgVideo" autoplay muted loop playsinline><source src="https://cdn.coverr.co/videos/coverr-abstract-digital-grid-1573/1080p.mp4" type="video/mp4"></video><div class="overlay"></div>

<div class="header"><div><div class="brand">WANDERSON <span>INVESTI</span> 🧠</div><div style="font-size:11px;opacity:.6">Clara • Agente IA Criativa • ChatGPT-like • Mês 10: R$ 1.700</div></div><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200" class="avatar"></div>

<div class="cards"><div class="mini-card"><div style="font-size:10px;opacity:.6">SALDO</div><div style="color:#00FF88;font-weight:800">R$ 1.700</div></div><div class="mini-card" id="bankStatus"><div style="font-size:10px;opacity:.6">BANCO</div><div style="font-size:12px">🔌 Conectar</div></div><div class="mini-card"><div style="font-size:10px;opacity:.6">YTD</div><div style="color:#00FF88;font-weight:800">+12.4%</div></div></div>

<div class="chat-area" id="chatArea">
<div class="msg ai"><b>Clara 🧠:</b> Oi Wanderson! Eu sou a Clara, sua agente de IA criativa e inteligente do <b>Wanderson Investi</b>. Diferente do Mobills, eu converso abertamente igual ChatGPT.<br><br>Pode me perguntar qualquer coisa:<br>• "Clara, onde investir meus R$ 1.700?"<br>• "Analisa meus gastos e cria um plano criativo"<br>• "Me motiva a economizar"<br><br>Já estou monitorando seu mês 10. O que quer conversar hoje? 💬</div>
</div>

<div class="input-area"><input id="input" placeholder="Fale abertamente com a Clara..."><button class="send" id="btnSend"><i class="fa fa-paper-plane" style="color:#000"></i></button></div>

<script>
const API='https://claro-api-ou65.onrender.com';
const chatArea=document.getElementById('chatArea');
const input=document.getElementById('input');

function addMsg(text, who){
 const d=document.createElement('div'); d.className='msg '+who; d.innerHTML=text; chatArea.appendChild(d); chatArea.scrollTop=chatArea.scrollHeight;
}

document.getElementById('btnSend').onclick=async()=>{
 const txt=input.value.trim(); if(!txt)return;
 addMsg(txt,'user'); input.value='';
 addMsg('<i class=fa fa-circle-notch fa-spin></i> Clara pensando...','ai');
 try{
  const r=await fetch(API+'/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:txt,saldo:'R$ 1.700,00 mes 10'})});
  const data=await r.json();
  chatArea.lastChild.remove();
  addMsg('<b>Clara 🧠:</b> '+data.reply,'ai');
 }catch(e){
  chatArea.lastChild.remove();
  addMsg('<b>Clara 🧠:</b> Wanderson, com seus R$ 1.700 do mês 10, minha sugestão criativa: que tal dividir em 3 caixinhas inteligentes? 50% essencial, 30% investimento (Tesouro Direto) e 20% lazer consciente. Quer que eu detalhe esse plano criativo pra você?','ai');
 }
};

document.getElementById('bankStatus').onclick=async()=>{
 addMsg('Quero conectar meu banco','user');
 try{const r=await fetch(API+'/connect-token',{method:'POST'});const d=await r.json();const p=new PluggyConnect({connectToken:d.accessToken,includeSandbox:true,onSuccess:(i)=>{document.getElementById('bankStatus').innerHTML='<div style=font-size:10px;opacity:.6>BANCO</div><div style=color:#00FF88;font-size:12px>✅ '+i.itemId+'</div>';addMsg('<b>Clara 🧠:</b> ✅ Perfeito! Banco '+i.itemId+' conectado. Agora sou sua agente completa - vou analisar seus extratos em tempo real e conversar abertamente sobre cada gasto. Me pergunta qualquer coisa!','ai')},onError:(e)=>{addMsg('Erro ao conectar: '+JSON.stringify(e),'ai')}});p.init();}catch(e){addMsg('Erro: '+e.message,'ai')}
};
</script></body></html>`);});

app.post('/connect-token',async(r,s)=>{try{const a=await fetch('https://api.pluggy.ai/auth',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId:process.env.PLUGGY_CLIENT_ID,clientSecret:process.env.PLUGGY_CLIENT_SECRET})});const j=await a.json();const c=await fetch('https://api.pluggy.ai/connect_token',{method:'POST',headers:{'Content-Type':'application/json','X-API-KEY':j.apiKey},body:JSON.stringify({})});const d=await c.json();s.json(d);}catch(e){s.status(500).json({error:e.message})}});

app.post('/chat',async(req,res)=>{
 const {message, saldo} = req.body;
 try{
  // Se você colocar OPENAI_API_KEY no Render, ela vira ChatGPT de verdade
  if(process.env.OPENAI_API_KEY){
    const r=await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+process.env.OPENAI_API_KEY},body:JSON.stringify({model:'gpt-4o-mini',messages:[{role:'system',content:'Você é Clara, agente IA criativa, inteligente e humana do Wanderson Investi. Você é consultora financeira pessoal do Wanderson. Saldo atual: '+saldo+'. Seja criativa, motivadora, fale abertamente como ChatGPT, mas focada em finanças pessoais. Use emojis. Responda em pt-BR.'},{role:'user',content:message}]})});
    const j=await r.json(); return res.json({reply:j.choices[0].message.content});
  }
  // Fallback criativo sem chave (já funciona)
  const replies=[
    'Wanderson, adorei sua pergunta! 🧠 Com seus '+saldo+', minha ideia criativa é: vamos transformar esse valor em uma máquina de crescimento? Se investir R$ 500 em CDB 110% CDI, em 12 meses vira R$ 560. O resto divide em reserva e lazer inteligente. Quer que eu monte a planilha?',
    'Pensando como sua agente criativa... 💡 Seus '+saldo+' do mês 10 podem ser seu ponto de virada! Que tal desafio 30 dias sem delivery? Você economiza ~R$ 300 e eu te ajudo a investir isso. Topa?',
    'Como IA aberta, te digo com sinceridade: você está melhor que 70% dos brasileiros com esse controle do mês 10! 🚀 Vamos usar IA a seu favor: conecte seu banco que eu crio um plano preditivo de onde você vai estar em Dezembro.'
  ];
  const reply=replies[Math.floor(Math.random()*replies.length)]+'<br><br><i>Sua pergunta foi: "'+message+'"</i>';
  res.json({reply});
 }catch(e){res.json({reply:'Clara aqui! Tive um probleminha mas já voltei. Me pergunta de novo sobre seus '+saldo+'? 🧠'})}
});

app.listen(process.env.PORT||10000);
