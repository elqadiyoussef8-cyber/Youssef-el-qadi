async function predict(){
let m=document.getElementById('match').value;
let o=document.getElementById('out');
o.innerHTML='⏳ Loading...';

let r=await fetch('https://api.openai.com/v1/chat/completions',{
method:'POST',
headers:{
'Content-Type':'application/json',
'Authorization':'Bearer YOUR_OPENAI_API_KEY'
},
body:JSON.stringify({
model:'gpt-4o-mini',
messages:[
{role:'system',content:'You are a football analyst. Provide xG, win %, score prediction, key stats.'},
{role:'user',content:`Match: ${m}. Give advanced prediction.`}
]
})
});
let d=await r.json();
o.innerHTML=d.choices?.[0]?.message?.content||'Error';
}