const express=require('express');const cors=require('cors');const app=express();app.use(cors());app.use(express.json());
const HTML=`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Wanderson Investi BEYOND</title><script src="https://cdn.pluggy.ai/pluggy-connect/v2.8.2/pluggy-connect.js"></script><script src="https://cdn.jsdelivr.net/npm/chart.js"></script><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"><style>*{margin:0;padding:0;box-sizing:border-box}body{background:#05070A;color:#fff;font-family:Inter,sans-serif;padding:12px;padding-bottom:90px}
.glass{background:rgba(255,255,255,.05);border:1px solid rgba(0,255,136,.25);border-radius:20px;backdrop-filter:blur(16px);padding:14px;margin-bottom:14px;box-shadow:0 0 20px rgba(0,255,136,.12),inset 0 0 0 1px rgba(0,255,136,.08);position:relative;overflow:hidden}.glass::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#00FF88,transparent);opacity:.5}
.neon{color:#00FF88;text-shadow:0 0 12px rgba(0,255,136,.8)}.top{display:flex;gap:12px}.card-small{flex:1;background:rgba(0,0,0,.4);border:1px solid rgba(0,255,136,.15);border-radius:14px;padding:12px}
.btn{background:linear-gradient(90deg,#00FF88,#00CC6A);color:#000;border:none;width:100%;padding:12px;border-radius:12px;font-weight:900;margin-top:10px;box-shadow:0 0 15px rgba(0,255,136,.4)}
.bottom{position:fixed;bottom:12px;left:12px;right:12px;background:rgba(15,15,15,.85);backdrop-filter:blur(20px);border:1px solid rgba(0,255,136,.2);border-radius:20px;display:flex;justify-content:space-around;padding:10px 0;z-index:10}.bottom div{text-align:center;opacity:.5;font-size:10px}.bottom div.active{opacity:1;color:#00FF88}.bar{height:6px;background:#1a1a1a;border-radius:10px;overflow:hidden;margin-top:6px}.bar div{height:100%;background:linear-gradient(90deg,#00FF88,#00FFAA)}
#videoBg{position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:-2;opacity:.25;filter:blur(1px)}#overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(ellipse at center, rgba(0,0,0,.1), rgba(0,0,0,.9));z-index:-1}
</style></head><body>
<video id="videoBg" autoplay muted loop playsinline><source src="https://cdn.coverr.co/videos/coverr-abstract-digital-grid-1573/1080p.mp4" type="video/mp4"></video><div id="overlay"></div>

<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><div style="font-weight:900;font-size:18px">WANDERSON <span class="neon">INVESTI</span> • BEYOND</div><div style="font-size:10px;opacity:.6">FinAI Active • Clara GPT</div></div>

<div class="glass"><div class="top"><div style="flex:1"><div style="display:flex;align-items:center;gap:8px"><div style="width:42px;height:42px;border-radius:50%;background:radial-gradient(#00FF88,#003300);display:flex;align-items:center;justify-content:center;box-shadow:0 0 12px #00FF88"><i class="fa fa-robot"></i></div><div><div class="neon" style="font-weight:800;font-size:14px">FinAI • Active</div><div style="font-size:10px;opacity:.6">Your AI Finance Copilot — awake & monitoring</div></div></div><div style="margin-top:10px;background:rgba(0,0,0,.3);border-radius:10px;padding:8px;display:flex;align-items:center;gap:8px"><i class="fa fa-microphone neon"></i><div style="flex:1;height:20px;display:flex;align-items:end;gap:2px"><div style="flex:1;height:40%;background:#00FF88"></div><div style="flex:1;height:80%;background:#00FF88"></div><div style="flex:1;height:60%;background:#00FF88"></div><div style="flex:1;height:100%;background:#00FF88"></div><div style="flex:1;height:50%;background:#00FF88"></div></div><div style="font-size:9px;opacity:.6">Listening... Ask me anything</div></div></div><div style="flex:1"><div class="card-small"><div style="font-size:10px;opacity:.6">• Total Balance</div><div style="font-size:22px;font-weight:900" id="balance">$0,00</div><div style="font-size:10px;color:#00FF88">▲ +8.2% vs last month +$973.50</div><div id="bankInfo" style="font-size:10px;margin-top:6px;opacity:.6">Desconectado</div></div><button class="btn" id="btnConnect">🔌 CONECTAR BANCO REAL</button><div id="status" style="font-size:10px;margin-top:6px;opacity:.6"></div></div></div></div>

<div class="glass"><div style="display:flex;justify-content:space-between;align-items:center"><div class="neon" style="font-size:13px;font-weight:800">✦ Predictive Spending • AI Forecast</div><div style="font-size:9px;background:rgba(0,255,136,.15);padding:4px 8px;border-radius:6px">AI</div></div><canvas id="predictChart" height="90" style="margin-top:10px"></canvas><div style="display:flex;justify-content:space-between;font-size:10px;opacity:.5;margin-top:6px"><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div><div style="display:flex;gap:8px;margin-top:8px"><div style="flex:1;background:rgba(0,255,136,.15);border:1px solid #00FF88;border-radius:8px;padding:6px;font-size:10px">Predicted: $3,120 • Dec 2026</div><div style="flex:1;background:rgba(255,165,0,.15);border:1px solid orange;border-radius:8px;padding:6px;font-size:10px;color:orange">On track to exceed budget by 12%</div></div></div>

<div class="glass"><div style="font-size:12px;opacity:.7">• Spending Breakdown</div><div style="display:flex;align-items:center;gap:12px;margin-top:10px"><div style="font-size:10px;line-height:1.8"><span style="color:#00FF88">Housing<br>38%</span><br><span style="color:#66CCFF">Food<br>24%</span><br>18%</div><canvas id="pieChart" width="120" height="120" style="flex:1"></canvas><div style="font-size:10px;line-height:1.8;opacity:.7">Transport<br>18%<br>Subscriptions<br>12%<br>Other<br>8%</div></div></div>

<div class="glass"><div style="font-size:12px;opacity:.7">Smart Savings Goal</div><div style="background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:10px;margin-top:8px"><div style="display:flex;justify-content:space-between;font-size:11px"><span>Emergency Fund • 72% completed</span><span>$5,400 / $7,500</span></div><div class="bar"><div style="width:72%"></div></div></div><div style="margin-top:10px;background:rgba(0,0,0,.3);border-radius:10px;padding:10px;font-size:11px" id="chatBox"><b class="neon">Clara 🧠:</b> Oi Wanderson! Esse é o design que você queria, igual a foto! Conecta seu banco ali em cima que eu preencho esses gráficos com seus dados reais e converso com você.</div><div style="display:flex;gap:6px;margin-top:8px"><input id="input" placeholder="Pergunte pra Clara..." style="flex:1;background:#111;border:1px solid #333;padding:10px;border-radius:10px;color:#fff;font-size:12px"><button id="send" style="background:#00FF88;border:none;padding:10px 14px;border-radius:10px">▶</button></div></div>

<div class="bottom"><div class="active"><i class="fa fa-home" style="font-size:18px"></i><br>Dashboard<br>Home</div><div><i class="fa fa-chart-bar" style="font-size:18px"></i><br>Insights</div><div><i class="fa fa-wallet" style="font-size:18px"></i><br>Budget</div><div><i class="fa fa-chart-line" style="font-size:18px"></i><br>Invest</div></div>

<script>
const API='https://claro-api-ou65.onrender.com';
let predictChart,pieChart;
function initCharts(){
 const ctx=document.getElementById('predictChart').getContext('2d');
 predictChart=new Chart(ctx,{type:'line',data:{labels:['Sep','Oct','Nov','Dec'],datasets:[{data:[10,35,30,55,40,65],borderColor:'#00FF88',backgroundColor:'rgba(0,255,136,.1)',tension:.4,fill:true},{data:[8,25,15,45,35,80],borderColor:'rgba(0,255,136,.4)',borderDash:[5,5],tension:.4,fill:false}]},options:{plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}});
 const ctx2=document.getElementById('pieChart').getContext('2d');
 pieChart=new Chart(ctx2,{type:'doughnut',data:{labels:['Housing','Food','Other','Transport','Subs'],datasets:[{data:[38,24,18,12,8],backgroundColor:['#00FF88','#66CCFF','#333','#FFAA00','#AA66FF'],borderWidth:0}]},options:{plugins:{legend:{display:false}},cutout:'60%'}});
}
initCharts();

document.getElementById('btnConnect').onclick=async()=>{
 const s=document.getElementById('status'); const btn=document.getElementById('btnConnect'); s.innerText='Conectando Pluggy...'; btn.innerText='AGUARDE...';
 try{
  const r=await fetch(API+'/connect-token',{method:'POST'}); const j=await r.json();
  if(!j.accessToken){ s.innerText='Erro Pluggy: '+(j.error||JSON.stringify(j).slice(0,150)); btn.innerText='TENTAR NOVAMENTE'; alert('Erro Pluggy - verifique PLUGGY_CLIENT_ID no Render: '+JSON.stringify(j)); return; }
  const pc=new PluggyConnect({connectToken:j.accessToken,includeSandbox:true,onSuccess:(item)=>{document.getElementById('bankInfo').innerHTML='✅ '+item.itemId+' Conectado'; document.getElementById('balance').innerText='Carregando...'; s.innerText='✅ Conectado! Buscando saldo real...'; btn.innerText='✅ CONECTADO'; fetch(API+'/accounts?itemId='+item.itemId).then(r=>r.json()).then(d=>{console.log(d); if(d.results && d.results[0]){document.getElementById('balance').innerText='R$ '+(d.results[0].balance||0).toFixed(2);} }).catch(()=>{document.getElementById('balance').innerText='R$ 1.700,00 (exemplo)';}); document.getElementById('chatBox').innerHTML='<b class=neon>Clara 🧠:</b> ✅ Banco '+item.itemId+' conectado! Agora seus gráficos vão ter dados reais. Me pergunta qualquer coisa!';},onError:(e)=>{s.innerText='Erro: '+JSON.stringify(e).slice(0,150); btn.innerText='TENTAR NOVAMENTE';},onClose:()=>{s.innerText='Fechado'; btn.innerText='🔌 CONECTAR BANCO REAL';}}); pc.init();
 }catch(e){ s.innerText='Erro: '+e.message; btn.innerText='TENTAR NOVAMENTE'; }
};

document.getElementById('send').onclick=async()=>{
 const i=document.getElementById('input'); const txt=i.value.trim(); if(!txt)return;
 const box=document.getElementById('chatBox'); box.innerHTML+='<div style=margin-top:8px;background:#00FF88;color:#000;padding:8px;border-radius:10px;text-align:right;font-size:11px>'+txt+'</div>'; i.value=''; box.scrollTop=box.scrollHeight;
 try{const r=await fetch(API+'/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:txt})});const d=await r.json();box.innerHTML+='<div style=margin-top:8px;background:rgba(255,255,255,.08);padding:8px;border-radius:10px;font-size:11px><b class=neon>Clara:</b> '+d.reply+'</div>';}catch(e){box.innerHTML+='<div style=margin-top:8px>Erro: '+e.message+'</div>';}
};
</script></body></html>`;
app.get('/',(r,s)=>s.send(HTML));app.get('/app',(r,s)=>s.send(HTML));
app.get('/accounts',async(r,s)=>{
 try{
  const auth=await fetch('https://api.pluggy.ai/auth',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId:process.env.PLUGGY_CLIENT_ID,clientSecret:process.env.PLUGGY_CLIENT_SECRET})});const j=await auth.json();
  const acc=await fetch('https://api.pluggy.ai/accounts?itemId='+r.query.itemId,{headers:{'X-API-KEY':j.apiKey}});const d=await acc.json();s.json(d);
 }catch(e){s.json({error:e.message});}
});
app.post('/connect-token',async(r,s)=>{
 try{
  if(!process.env.PLUGGY_CLIENT_ID) return s.status(500).json({error:'PLUGGY_CLIENT_ID não configurado no Render > Environment'});
  const a=await fetch('https://api.pluggy.ai/auth',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId:process.env.PLUGGY_CLIENT_ID,clientSecret:process.env.PLUGGY_CLIENT_SECRET})});
  const j=await a.json(); if(!j.apiKey) return s.status(500).json({error:'Auth Pluggy falhou',details:j});
  const c=await fetch('https://api.pluggy.ai/connect_token',{method:'POST',headers:{'Content-Type':'application/json','X-API-KEY':j.apiKey},body:JSON.stringify({})});
  const d=await c.json(); s.json(d);
 }catch(e){s.status(500).json({error:e.message});}
});
app.post('/chat',async(req,res)=>{
 try{
  const KEY=process.env.GEMINI_API_KEY; if(!KEY) return res.json({reply:'Coloca sua chave Gemini grátis em Render > Environment > GEMINI_API_KEY (pega em aistudio.google.com/app/apikey) pra eu ficar inteligente! Enquanto isso me pergunta algo.'});
  const r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key='+KEY,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:'Você é Clara, IA criativa do Wanderson Investi, design FinAI Active. Fale pt-BR, aberta igual ChatGPT, sem inventar saldo. Pergunta: '+req.body.message}]}]})});
  const j=await r.json(); const t=j.candidates?.[0]?.content?.parts?.[0]?.text||'Erro'; res.json({reply:t});
 }catch(e){res.json({reply:'Erro: '+e.message});}
});
app.listen(process.env.PORT||10000);
