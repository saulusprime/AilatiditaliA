"use strict";
/* ============================================================
   AilatiditaliA — logica della pagina (vanilla JavaScript).
   Dati, filtro d'intervallo, grafici SVG, gauges, giudizio,
   tabelle ordinabili, accordion, tema.
   Fonte di verità dei valori: efficacia_governi_italiani_1900_2025.md (v2.1).
   ============================================================ */

/* ============ dati (caricati da data.json) ============ */
/* Tutti i dati puri vivono in data.json (fonte unica, consultabile e
   scaricabile); qui restano solo la logica e le definizioni di
   presentazione. Le variabili sono riempite da boot() dopo il fetch. */
let T1=[], PC_EXTRA=[], DEB_EXTRA=[], ERE=[],
    ISTR={analf:[],dip:[],eur:[]}, CRIM=[],
    SPESA1={difesa:[],sanita:[],istruz:[]}, SPESA2={socx:[],cofog:[],tot:[]},
    PRIV=[], PRIV_GOV={}, AREE_GIUDIZIO=[];
const GOV = {};

/* ============ giudizio per area politica ============ */
/* Le metriche per area (AREE_GIUDIZIO) vivono in data.json:
   p0/p1 = periodo dell'area (per il filtro d'intervallo)
   cres  = variazione media del PIL pro capite per quinquennio (%)
   deb   = variazione del debito/PIL in punti (negativo = migliora)
   istr  = progresso educativo in p.p. per quinquennio
   crim  = variazione % dei delitti denunciati nella finestra (serie dal 1956)
   asset = malus cessioni di asset statali 0-3 (contate come negative)
   fuori = esclusa dalla classifica (finestra troppo breve)              */
/* categorie: chiave, etichetta, direzione (1 = più alto è meglio), peso, formato */
const CAT_GIUDIZIO = [
 {k:"cres", lab:"Crescita", dir:1, w:30, f:v=>(v>0?"+":"")+fmt(v,1)+"%", desc:"PIL pro capite, media per quinquennio"},
 {k:"deb",  lab:"Debito",   dir:-1, w:25, f:v=>(v>0?"+":"")+fmt(v,1)+" p.p.", desc:"variazione del debito/PIL"},
 {k:"istr", lab:"Istruzione", dir:1, w:15, f:v=>"+"+fmt(v,1)+" p.p./quinq.", desc:"progresso educativo"},
 {k:"crim", lab:"Criminalità", dir:-1, w:15, f:v=>(v>0?"+":"")+fmt(v,1)+"%", desc:"variazione dei delitti denunciati"},
 {k:"asset", lab:"Cessioni di asset", dir:-1, w:15, f:v=>"malus "+fmt(v), desc:"scala delle cessioni (0–3)"},
];

/* ============ intervallo di analisi ============ */
const RANGE={from:1900,to:2025};
const FULL={from:1900,to:2025};
const inR = a => a>=RANGE.from && a<=RANGE.to;
const filtPts = arr => arr.filter(p=>p[0]==null||inR(p[0]));
function lastIn(arr){let r=null;for(const p of arr){if(p[0]!=null&&inR(p[0]))r=p;}return r;}
function maxIn(arr){let r=null;for(const p of arr){if(p[0]!=null&&inR(p[0])&&(r==null||p[1]>r[1]))r=p;}return r;}

/* ============ util ============ */
const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
const fmt = (n,dec=0) => {
  if(n==null) return "N/D";
  try{return n.toLocaleString("it-IT",{minimumFractionDigits:dec,maximumFractionDigits:dec,useGrouping:"always"});}
  catch(e){return n.toLocaleString("it-IT",{minimumFractionDigits:dec,maximumFractionDigits:dec});}
};
const NS = "http://www.w3.org/2000/svg";
function el(name,attrs,parent){const e=document.createElementNS(NS,name);for(const k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e;}
function div(cls,parent){const d=document.createElement("div");if(cls)d.className=cls;if(parent)parent.appendChild(d);return d;}
function emptyMsg(host){const m=div("chart-empty",host);m.textContent="Nessun dato nell'intervallo selezionato ("+RANGE.from+"–"+RANGE.to+").";}
function niceTicks(min,max,n=5){
  const span=max-min; if(!(span>0)) return [min];
  const step0=span/n, mag=Math.pow(10,Math.floor(Math.log10(step0)));
  let step=mag; for(const m of [1,2,2.5,5,10]){ if(step0<=m*mag){step=m*mag;break;} }
  const t=[]; for(let v=Math.ceil(min/step)*step; v<=max+1e-9; v+=step) t.push(Math.round(v*100)/100);
  return t;
}

/* ============ grafico a linee ============ */
function lineChart(id, cfg){
  const host=document.getElementById(id); if(!host)return;
  const x0=Math.max(cfg.x0,RANGE.from), x1=Math.min(cfg.x1,RANGE.to);
  const series=cfg.series.map(s=>({...s,data:filtPts(s.data)}));
  const hasData=series.some(s=>s.data.some(p=>p[0]!=null));
  if(x1-x0<1||!hasData){emptyMsg(host);return;}
  const W=cfg.w||940, H=cfg.h||380, M={t:20,r:cfg.mr||150,b:34,l:46};
  const legendBox=series.length>1 ? div("legend") : null;
  if(legendBox){ host.parentNode.insertBefore(legendBox, host);
    series.forEach(s=>{const it=div("it",legendBox);const k=document.createElement("span");
      k.className="key";k.style.background=css(s.color);it.appendChild(k);
      it.appendChild(document.createTextNode(s.name));});}
  const svg=el("svg",{viewBox:`0 0 ${W} ${H}`,role:"img","aria-label":cfg.aria||""},host);
  const ymin=cfg.ymin??0, ymax=cfg.ymax;
  const X=a=>M.l+(a-x0)/(x1-x0)*(W-M.l-M.r);
  const Y=v=>H-M.b-(v-ymin)/(ymax-ymin)*(H-M.t-M.b);
  // fasce delle ere
  if(cfg.ere){ let i=0; for(const [a,b,lab] of ERE){
      if(b<x0||a>x1){i++;continue;}
      const xa=X(Math.max(a,x0)), xb=X(Math.min(b,x1));
      if(i%2===0) el("rect",{x:xa,y:M.t,width:xb-xa,height:H-M.t-M.b,fill:css("--wash-a")},svg);
      if(lab && xb-xa>lab.length*5.6+8) el("text",{x:(xa+xb)/2,y:M.t+12,"text-anchor":"middle","font-size":10.5,fill:css("--ink-3")},svg).textContent=lab;
      i++; } }
  // griglia + assi
  for(const t of niceTicks(ymin,ymax,cfg.yn||5)){
    el("line",{x1:M.l,x2:W-M.r,y1:Y(t),y2:Y(t),stroke:css("--grid"),"stroke-width":1},svg);
    el("text",{x:M.l-8,y:Y(t)+4,"text-anchor":"end","font-size":11,fill:css("--ink-3"),"font-variant-numeric":"tabular-nums"},svg).textContent=fmt(t,cfg.ydec||0);
  }
  el("line",{x1:M.l,x2:W-M.r,y1:Y(ymin),y2:Y(ymin),stroke:css("--axis"),"stroke-width":1},svg);
  const span=x1-x0;
  const xstep=span<=30?5:(span<=70?10:(cfg.xstep||10));
  for(let a=Math.ceil(x0/xstep)*xstep;a<=x1;a+=xstep)
    el("text",{x:X(a),y:H-M.b+18,"text-anchor":"middle","font-size":11,fill:css("--ink-3"),"font-variant-numeric":"tabular-nums"},svg).textContent=a;
  // linee di rottura
  (cfg.breaks||[]).filter(b=>inR(b[0])).forEach(([a,lab])=>{
    el("line",{x1:X(a),x2:X(a),y1:M.t,y2:H-M.b,stroke:css("--axis"),"stroke-width":1},svg);
    el("text",{x:X(a)+4,y:M.t+12,"font-size":10,fill:css("--ink-3")},svg).textContent=lab;
  });
  // serie
  series.forEach(s=>{
    const col=css(s.color); let d="",pen=false;
    for(const p of s.data){
      if(p[0]==null){pen=false;continue;}
      d+=(pen?" L":"M")+X(p[0])+" "+Y(p[1]); pen=true;
    }
    el("path",{d,fill:"none",stroke:col,"stroke-width":2,"stroke-linejoin":"round","stroke-linecap":"round"},svg);
    for(const p of s.data){ if(p[0]==null)continue;
      el("circle",{cx:X(p[0]),cy:Y(p[1]),r:3.4,fill:col,stroke:css("--surface-1"),"stroke-width":2},svg);}
    const last=[...s.data].reverse().find(p=>p[0]!=null);
    if(!last)return;
    const lbl=el("text",{x:X(last[0])+9,y:Y(last[1])+4,"font-size":11.5,fill:css("--ink-2")},svg);
    lbl.textContent=(series.length>1?(s.short||s.name)+" ":"")+fmt(last[1],s.dec??cfg.ydec??0)+(s.unit||cfg.unit||"");
  });
  // annotazioni
  (cfg.notes||[]).filter(n=>inR(n.a)).forEach(n=>{
    el("circle",{cx:X(n.a),cy:Y(n.v),r:4.5,fill:"none",stroke:css("--ink-3"),"stroke-width":1.2},svg);
    el("text",{x:X(n.a)+(n.dx??7),y:Y(n.v)+(n.dy??-8),"font-size":10.5,fill:css("--ink-2")},svg).textContent=n.t;
  });
  // interazione: crosshair + tooltip
  const wrap=host; wrap.style.position="relative";
  const tip=div("tooltip",wrap);
  const cross=el("line",{y1:M.t,y2:H-M.b,stroke:css("--axis"),"stroke-width":1,opacity:0},svg);
  const xs=[...new Set(series.flatMap(s=>s.data.filter(p=>p[0]!=null).map(p=>p[0])))].sort((a,b)=>a-b);
  function onmove(ev){
    const pt=svg.createSVGPoint(); pt.x=ev.clientX; pt.y=ev.clientY;
    const p=pt.matrixTransform(svg.getScreenCTM().inverse());
    let best=xs[0]; for(const a of xs) if(Math.abs(X(a)-p.x)<Math.abs(X(best)-p.x)) best=a;
    cross.setAttribute("x1",X(best)); cross.setAttribute("x2",X(best)); cross.setAttribute("opacity",.8);
    tip.textContent="";
    const t1=div("tt-title",tip); t1.textContent=best;
    series.forEach(s=>{
      const hit=s.data.find(q=>q[0]===best); if(!hit)return;
      const row=div("row",tip); const k=document.createElement("span");
      k.className="key"; k.style.background=css(s.color); row.appendChild(k);
      row.appendChild(document.createTextNode(s.name));
      const b=document.createElement("b"); b.textContent=fmt(hit[1],s.dec??cfg.ydec??0)+(s.unit||cfg.unit||""); row.appendChild(b);
    });
    if(cfg.govNote && GOV[best]){const n=div("note",tip); n.textContent=GOV[best];}
    if(cfg.noteFn){const x=cfg.noteFn(best); if(x){const n=div("note",tip); n.textContent=x;}}
    const r=wrap.getBoundingClientRect();
    const left=Math.min(ev.clientX-r.left+14, r.width-tip.offsetWidth-8);
    tip.style.left=Math.max(0,left)+"px";
    tip.style.top=Math.max(0,(ev.clientY-r.top-tip.offsetHeight-12))+"px";
    tip.style.opacity=1;
  }
  svg.addEventListener("pointermove",onmove);
  svg.addEventListener("pointerleave",()=>{tip.style.opacity=0;cross.setAttribute("opacity",0);});
}

/* ============ grafico a barre ============ */
function barChart(id,cfg){
  const host=document.getElementById(id); if(!host)return;
  const data=cfg.data.filter(d=>inR(d.a));
  if(!data.length){emptyMsg(host);return;}
  const W=cfg.w||940,H=cfg.h||360,M={t:26,r:20,b:34,l:52};
  const svg=el("svg",{viewBox:`0 0 ${W} ${H}`,role:"img","aria-label":cfg.aria||""},host);
  const ymin=cfg.ymin??Math.min(0,...data.map(d=>d.v)), ymax=cfg.ymax??Math.max(...data.map(d=>d.v));
  const Y=v=>H-M.b-(v-ymin)/(ymax-ymin||1)*(H-M.t-M.b);
  const slot=(W-M.l-M.r)/data.length, bw=Math.min(24,slot-4);
  for(const t of niceTicks(ymin,ymax,cfg.yn||5)){
    el("line",{x1:M.l,x2:W-M.r,y1:Y(t),y2:Y(t),stroke:css("--grid"),"stroke-width":1},svg);
    el("text",{x:M.l-8,y:Y(t)+4,"text-anchor":"end","font-size":11,fill:css("--ink-3"),"font-variant-numeric":"tabular-nums"},svg).textContent=fmt(t,0);
  }
  el("line",{x1:M.l,x2:W-M.r,y1:Y(0),y2:Y(0),stroke:css("--axis"),"stroke-width":1},svg);
  const wrap=host; wrap.style.position="relative";
  const tip=div("tooltip",wrap);
  data.forEach((d,i)=>{
    const cx=M.l+slot*i+slot/2, up=d.v>=0;
    const y0=Y(0), y1=Y(d.v), hpx=Math.max(1.5,Math.abs(y0-y1)), r=Math.min(4,hpx);
    const col=css(d.neg? "--neg" : (cfg.color||"--s1"));
    const x=cx-bw/2;
    const path= up
      ? `M${x} ${y0} L${x} ${y1+r} Q${x} ${y1} ${x+r} ${y1} L${x+bw-r} ${y1} Q${x+bw} ${y1} ${x+bw} ${y1+r} L${x+bw} ${y0} Z`
      : `M${x} ${y0} L${x} ${y1-r} Q${x} ${y1} ${x+r} ${y1} L${x+bw-r} ${y1} Q${x+bw} ${y1} ${x+bw} ${y1-r} L${x+bw} ${y0} Z`;
    const bar=el("path",{d:path,fill:col,opacity:d.faded?0.45:1},svg);
    if(d.lab){const anch=cx>W-110?"end":(cx<M.l+60?"start":"middle");
      el("text",{x:anch==="end"?cx+bw/2:(anch==="start"?cx-bw/2:cx),y:up?y1-7:y1+15,"text-anchor":anch,"font-size":10.5,fill:css("--ink-2")},svg).textContent=d.lab;}
    if(cfg.everyLabel||data.length<=12||i%Math.ceil(data.length/12)===0)
      el("text",{x:cx,y:H-M.b+17,"text-anchor":"middle","font-size":10.5,fill:css("--ink-3"),"font-variant-numeric":"tabular-nums"},svg).textContent=d.a;
    const hit=el("rect",{x:M.l+slot*i,y:M.t,width:slot,height:H-M.t-M.b,fill:"transparent"},svg);
    function show(ev){
      bar.setAttribute("opacity",d.faded?0.65:0.82);
      tip.textContent="";
      const t1=div("tt-title",tip); t1.textContent=d.a;
      const row=div("row",tip); row.appendChild(document.createTextNode(cfg.name||""));
      const b=document.createElement("b"); b.textContent=(d.v>0&&cfg.signed?"+":"")+fmt(d.v,cfg.dec||0)+(cfg.unit||""); row.appendChild(b);
      if(d.note){const n=div("note",tip); n.textContent=d.note;}
      else if(cfg.govNote&&GOV[d.a]){const n=div("note",tip); n.textContent=GOV[d.a];}
      const rct=wrap.getBoundingClientRect();
      const left=Math.min(ev.clientX-rct.left+14, rct.width-tip.offsetWidth-8);
      tip.style.left=Math.max(0,left)+"px";
      tip.style.top=Math.max(0,(ev.clientY-rct.top-tip.offsetHeight-12))+"px";
      tip.style.opacity=1;
    }
    hit.addEventListener("pointermove",show);
    hit.addEventListener("pointerleave",()=>{bar.setAttribute("opacity",d.faded?0.45:1);tip.style.opacity=0;});
  });
}

/* ============ gauges (ricalcolati sull'intervallo) ============ */
function computeGauges(){
  const out=[];
  // 1. PIL pro capite: ultimo valore vs picco dell'intervallo
  const pcSeries=T1.filter(r=>r.pc!=null).map(r=>[r.a,r.pc])
    .concat(PC_EXTRA.map(r=>[r.a,r.pc])).sort((a,b)=>a[0]-b[0]);
  const pcLast=lastIn(pcSeries), pcMax=maxIn(pcSeries);
  if(pcLast&&pcMax){
    const atPeak=pcLast[0]===pcMax[0];
    out.push({label:atPeak?("PIL pro capite al massimo nel "+pcLast[0]):("Recupero del picco "+pcMax[0]),
      value:pcLast[1]/pcMax[1]*100, min:0, max:100, txt:fmt(pcLast[1]/pcMax[1]*100,1)+"%",
      sub:"PIL pro capite "+pcLast[0]+" ("+fmt(pcLast[1])+" $)"+(atPeak?" · massimo dell'intervallo":" vs picco "+pcMax[0]+" ("+fmt(pcMax[1])+" $)")});
  } else out.push({nd:true,label:"PIL pro capite",sub:"nessun dato nell'intervallo"});
  // 2. debito: ultimo valore dell'intervallo
  const debSeries=T1.map(r=>[r.a,r.d]).concat(DEB_EXTRA.map(r=>[r.a,r.d])).sort((a,b)=>a[0]-b[0]);
  const debLast=lastIn(debSeries);
  if(debLast) out.push({label:"Debito pubblico "+debLast[0], value:debLast[1], min:0, max:160,
    txt:fmt(debLast[1],1)+"%", sub:"in % del PIL · scala 0–160, max storico 159,7 (1920)"});
  else out.push({nd:true,label:"Debito pubblico",sub:"nessun dato nell'intervallo"});
  // 3. istruzione: ultima serie disponibile nell'intervallo
  const eurLast=lastIn(ISTR.eur), dipLast=lastIn(ISTR.dip), anLast=lastIn(ISTR.analf);
  if(eurLast) out.push({label:"Istruzione "+eurLast[0], value:eurLast[1], min:0, max:100,
    txt:fmt(eurLast[1],1)+"%", sub:"25–64enni con almeno un diploma (Eurostat)"});
  else if(dipLast) out.push({label:"Istruzione "+dipLast[0], value:dipLast[1], min:0, max:100,
    txt:fmt(dipLast[1],1)+"%", sub:"pop. 6+ con diploma o laurea (censimenti)"});
  else if(anLast) out.push({label:"Alfabetizzazione "+anLast[0], value:100-anLast[1], min:0, max:100,
    txt:fmt(100-anLast[1],1)+"%", sub:"100 − analfabetismo al censimento (ISTAT)"});
  else out.push({nd:true,label:"Istruzione",sub:"nessun dato nell'intervallo"});
  // 4. delitti: ultimo valore vs massimo dell'intervallo (serie dal 1956)
  const crLast=lastIn(CRIM), crMax=maxIn(CRIM);
  if(crLast&&crMax){
    const atMax=crLast[0]===crMax[0];
    out.push({label:atMax?("Delitti al massimo nel "+crLast[0]):("Delitti "+crLast[0]+" vs massimo "+crMax[0]),
      value:crLast[1]/crMax[1]*100, min:0, max:100, txt:fmt(crLast[1]/crMax[1]*100,1)+"%",
      sub:fmt(crLast[1])+" mila nel "+crLast[0]+(atMax?" · massimo dell'intervallo":" · massimo: "+fmt(crMax[1])+" mila ("+crMax[0]+")")});
  } else out.push({nd:true,label:"Delitti denunciati",sub:"serie disponibile dal 1956"});
  // 5. reddito reale (confronto fisso 2006-2022, SHIW)
  if(RANGE.from<=2006&&RANGE.to>=2022)
    out.push({label:"Reddito reale vs 2006", value:90, min:0, max:100, txt:"90%",
      sub:"reddito familiare medio reale 2022 vs 2006: −10% (SHIW, Banca d'Italia)"});
  else out.push({nd:true,label:"Reddito reale vs 2006",sub:"il confronto SHIW 2006–2022 è fuori dall'intervallo"});
  return out;
}
function renderGauges(){
  const box=document.getElementById("gauges"); if(!box)return;
  box.textContent="";
  computeGauges().forEach(g=>{
    const card=div("gauge",box);
    const W=170,H=104,cx=85,cy=88,r=62,sw=12;
    const pct=g.nd?0:Math.max(0,Math.min(1,(g.value-g.min)/(g.max-g.min)));
    const svg=el("svg",{viewBox:`0 0 ${W} ${H}`,role:"img",
      "aria-label":g.label+": "+(g.nd?"non disponibile":g.txt)+" — "+g.sub},card);
    const arc=`M ${cx-r} ${cy} A ${r} ${r} 0 0 1 ${cx+r} ${cy}`;
    el("path",{d:arc,fill:"none",stroke:css("--gauge-track"),"stroke-width":sw,"stroke-linecap":"round",pathLength:100},svg);
    if(pct>0.001)
      el("path",{d:arc,fill:"none",stroke:css("--s1"),"stroke-width":sw,"stroke-linecap":"round",
        pathLength:100,"stroke-dasharray":`${pct*100} 100`},svg);
    el("text",{x:cx,y:cy-8,"text-anchor":"middle","font-size":g.nd?16:23,"font-weight":600,fill:css(g.nd?"--ink-3":"--ink-1")},svg).textContent=g.nd?"N/D":g.txt;
    if(!g.nd){
      el("text",{x:cx-r,y:cy+13,"text-anchor":"middle","font-size":9,fill:css("--ink-3"),"font-variant-numeric":"tabular-nums"},svg).textContent=fmt(g.min);
      el("text",{x:cx+r,y:cy+13,"text-anchor":"middle","font-size":9,fill:css("--ink-3"),"font-variant-numeric":"tabular-nums"},svg).textContent=fmt(g.max);
    }
    const l=div("lbl",card); l.textContent=g.label;
    const s=div("sub",card); s.textContent=g.sub;
  });
}

/* ============ giudizio (ricalcolato sull'intervallo) ============ */
function computeGiudizio(inGara){
  const points={};
  inGara.forEach(a=>points[a.n]={});
  for(const c of CAT_GIUDIZIO){
    const has=inGara.filter(a=>a[c.k]!=null);
    const sorted=[...has].sort((x,y)=>(y[c.k]-x[c.k])*c.dir);
    sorted.forEach(a=>{
      const ties=sorted.filter(b=>b[c.k]===a[c.k]);
      const first=sorted.findIndex(b=>b[c.k]===a[c.k]);
      const rank=first+(ties.length-1)/2;
      points[a.n][c.k]=has.length>1 ? 10*(has.length-1-rank)/(has.length-1) : 10;
    });
  }
  return inGara.map(a=>{
    let num=0, den=0;
    for(const c of CAT_GIUDIZIO){
      if(a[c.k]==null) continue;
      num+=c.w*points[a.n][c.k]; den+=c.w;
    }
    return {...a, score:den?num/den:null, pts:points[a.n]};
  });
}
function buildGiudizio(){
  const bestBox=document.getElementById("best-cards");
  const podioBox=document.getElementById("podio");
  const rankBody=document.getElementById("rank-body");
  const note=document.getElementById("giudizio-range");
  if(!bestBox||!podioBox||!rankBody) return;
  bestBox.textContent=""; podioBox.textContent=""; rankBody.textContent="";
  const table=rankBody.closest("table");
  if(table) table.querySelectorAll("th").forEach(h=>{h.classList.remove("sort-asc","sort-desc");h.removeAttribute("aria-sort");});
  const visibili=AREE_GIUDIZIO.filter(a=>a.p1>=RANGE.from&&a.p0<=RANGE.to);
  const inGara=visibili.filter(a=>!a.fuori);
  if(note){
    const full=RANGE.from===FULL.from&&RANGE.to===FULL.to;
    note.textContent=full?"":"Giudizio ricalcolato sulle "+inGara.length+
      " aree politiche che intersecano l'intervallo "+RANGE.from+"–"+RANGE.to+
      " (le metriche restano riferite all'intera finestra di ciascuna area).";
  }
  if(!inGara.length){
    const tr=document.createElement("tr"); const td=document.createElement("td");
    td.colSpan=CAT_GIUDIZIO.length+2; td.textContent="Nessuna area politica nell'intervallo selezionato.";
    tr.appendChild(td); rankBody.appendChild(tr);
    return;
  }
  // migliori per categoria (giudizio universale)
  for(const c of CAT_GIUDIZIO){
    const has=inGara.filter(a=>a[c.k]!=null);
    if(!has.length) continue;
    const best=has.reduce((m,a)=>((a[c.k]-m[c.k])*c.dir>0?a:m));
    const tied=has.filter(a=>a[c.k]===best[c.k]);
    const card=div("tile best-card",bestBox);
    const l=div("lbl",card); l.textContent="Migliore: "+c.lab.toLowerCase();
    const v=div("best-name",card); v.textContent=best.breve;
    const d=div("delta",card);
    d.textContent=c.f(best[c.k])+" · "+c.desc+
      (tied.length>1?" · a pari merito con "+(tied.length-1)+" altre aree":"");
  }
  // podio ponderato
  const ranked=computeGiudizio(inGara).sort((x,y)=>(y.score??-1)-(x.score??-1));
  ranked.filter(a=>a.score!=null).slice(0,3).forEach((a,i)=>{
    const card=div("tile podio-card"+(i===0?" primo":""),podioBox);
    const pos=div("pos",card); pos.textContent=(i+1)+"º";
    const nm=div("best-name",card); nm.textContent=a.n;
    const sc=div("delta",card); sc.textContent="punteggio ponderato "+fmt(a.score,1)+" / 10";
  });
  // classifica completa (con le eventuali aree fuori classifica in coda)
  const righe=[...ranked, ...visibili.filter(a=>a.fuori).map(a=>({...a,score:null}))];
  righe.forEach((a,i)=>{
    const tr=document.createElement("tr"); tr.dataset.orig=String(i);
    const cells=[a.score!=null?`${i+1}º · ${a.n}`:a.n];
    for(const c of CAT_GIUDIZIO) cells.push(a[c.k]==null?"N/D":c.f(a[c.k]));
    cells.push(a.score!=null?fmt(a.score,1):"fuori classifica");
    cells.forEach((t,j)=>{
      const td=document.createElement("td");
      if(j>0)td.className="n";
      td.textContent=t;
      if(j>0&&j<=CAT_GIUDIZIO.length){const c=CAT_GIUDIZIO[j-1];
        if(a[c.k]!=null)td.dataset.sort=String(a[c.k]);}
      if(j===CAT_GIUDIZIO.length+1&&a.score!=null)td.dataset.sort=String(a.score);
      tr.appendChild(td);
    });
    rankBody.appendChild(tr);
  });
}

/* ============ render dei grafici ============ */
function renderAll(){
  ["c-pil","c-var","c-debito","c-istruzione","c-crimini","c-spesa1","c-spesa2","c-priv"].forEach(id=>{
    const h=document.getElementById(id); if(h){h.textContent="";
      const l=h.parentNode.querySelector(".legend"); if(l)l.remove();}
  });
  renderGauges();
  const pcData=T1.filter(r=>r.pc!=null).map(r=>[r.a,r.pc]).concat([[2022,36224]]);
  lineChart("c-pil",{x0:1900,x1:2025,ymax:40000,yn:5,ere:true,govNote:true,mr:120,
    aria:"PIL pro capite dell'Italia dal 1900 al 2022 in dollari internazionali 2011",
    unit:" $",series:[{name:"PIL pro capite",color:"--s1",data:pcData}],
    notes:[{a:2007,v:36311,t:"picco 2007: 36.311 $",dx:-215,dy:16},{a:1945,v:2831,t:"1945: −44,5% in 5 anni",dx:8,dy:10}],
    noteFn:a=>a===2022?"Ultimo dato Maddison (+11,9% vs 2020; −0,2% vs picco 2007)":null});

  barChart("c-var",{name:"Variazione quinquennale",unit:"%",signed:true,dec:1,govNote:true,everyLabel:false,
    aria:"Variazione percentuale del PIL pro capite per quinquennio",
    data:T1.filter(r=>r.v!=null).map(r=>({a:r.a,v:r.v,neg:r.v<0,faded:!!r.stima,
      lab:r.stima?"≈ +14–15% stima":(Math.abs(r.v)>=30?((r.v>0?"+":"")+fmt(r.v,1)+"%"):null),
      note:r.stima?"Stima ≈ +14–15%: concatenazione Maddison 2020–22 + ISTAT 2023–25":null}))});

  const debData=T1.map(r=>[r.a,r.d]);
  const debSplit1=debData.filter(p=>p[0]<=1990), debSplit2=debData.filter(p=>p[0]>=1995)
    .concat(DEB_EXTRA.map(r=>[r.a,r.d])).sort((a,b)=>a[0]-b[0]);
  lineChart("c-debito",{x0:1900,x1:2025,ymax:170,yn:5,ere:true,govNote:true,mr:150,unit:"%",
    aria:"Debito pubblico italiano in percentuale del PIL dal 1900 al 2025",
    series:[{name:"serie storica (1900–1990)",short:"serie storica",color:"--s1",data:debSplit1,dec:1},
            {name:"Eurostat SEC2010 (dal 1995)",short:"Eurostat",color:"--s2",data:debSplit2,dec:1}],
    notes:[{a:1920,v:159.7,t:"max storico: 159,7%",dx:10,dy:4},
           {a:1950,v:29.5,t:"1947: minimo 24,2% (iperinflazione)",dx:6,dy:16},
           {a:2020,v:154.4,t:"2020: 154,4%",dx:8,dy:2}]});

  lineChart("c-istruzione",{x0:1900,x1:2025,ymax:100,yn:5,mr:160,unit:"%",xstep:20,
    aria:"Analfabetismo e titoli di studio in Italia dal 1901 al 2025",
    series:[{name:"Analfabetismo (censimenti)",short:"Analfabetismo",color:"--s1",data:ISTR.analf,dec:1},
            {name:"Diploma o laurea, pop. 6+",short:"Diploma+, 6+",color:"--s3",data:ISTR.dip,dec:1},
            {name:"Almeno diploma, 25–64 (Eurostat)",short:"25–64 diploma",color:"--s2",data:ISTR.eur,dec:1}],
    noteFn:a=>a===2020?"Diploma/laurea 2020: popolazione 9+, non comparabile con la serie 1951–2011":null});

  lineChart("c-crimini",{x0:1955,x1:2025,ymax:2800,yn:5,mr:96,xstep:10,
    aria:"Delitti denunciati in Italia dal 1956 al 2024, in migliaia",
    series:[{name:"Delitti denunciati",color:"--s1",data:CRIM,unit:" mila"}],
    breaks:[[1983,"rottura 1983"],[2004,"rottura 2004 (SDI)"]],
    notes:[{a:1990,v:2501.6,t:"picco serie pre-2004",dx:-60,dy:-12},
           {a:2020,v:1900.6,t:"2020: lockdown",dx:-110,dy:14}],
    noteFn:a=>a===1960?"Base Eurostat; per il 1959–61 la serie ISTAT è più alta di ~48 mila (1960: 381,0)":null});

  lineChart("c-spesa1",{x0:1950,x1:2025,ymax:8,yn:4,mr:130,unit:"%",xstep:10,
    aria:"Spesa per difesa, sanità e istruzione in percentuale del PIL dal 1951 al 2025",
    series:[{name:"Difesa (SIPRI)",color:"--s1",data:SPESA1.difesa,dec:1},
            {name:"Sanità",color:"--s2",data:SPESA1.sanita,dec:1},
            {name:"Istruzione",color:"--s3",data:SPESA1.istruz,dec:1}],
    noteFn:a=>(a===1995)?"Dal 1995: definizione COFOG (Eurostat) per sanità e istruzione":null});

  lineChart("c-spesa2",{x0:1955,x1:2025,ymax:60,yn:6,mr:178,unit:"%",xstep:10,
    aria:"Protezione sociale e spesa pubblica totale in percentuale del PIL",
    series:[{name:"Prot. sociale (SOCX)",color:"--s1",data:SPESA2.socx,dec:1},
            {name:"Prot. sociale (COFOG)",color:"--s2",data:SPESA2.cofog,dec:1},
            {name:"Spesa totale",color:"--s3",data:SPESA2.tot,dec:1}],
    noteFn:a=>a===2023?"53,6%: gonfiato dai crediti Superbonus contabilizzati come spesa":null});

  barChart("c-priv",{name:"Incassi da privatizzazioni",unit:" mln €",dec:0,everyLabel:true,
    aria:"Incassi annui da privatizzazioni 1992-2000 in milioni di euro",
    data:PRIV.map(([a,v])=>({a,v,lab:(a===1997||a===1999)?fmt(v)+" ("+(a===1997?"2,05":"2,21")+"% PIL)":null,
      note:PRIV_GOV[a]||null}))});
}

/* ============ Tabella 1 (costruita dai dati) ============ */
function buildT1(){
  const tb=document.getElementById("t1-body"); if(!tb)return;
  T1.forEach(r=>{
    const tr=document.createElement("tr");
    const cells=[r.a, r.g, r.c, fmt(r.pop,1), r.pil==null?"N/D":fmt(r.pil), r.pc==null?"N/D":fmt(r.pc),
      r.v==null?"—":(r.stima?"≈ +14–15% (stima)":((r.v>0?"+":"")+fmt(r.v,1)+"%")), fmt(r.d,1)];
    cells.forEach((c,i)=>{const td=document.createElement("td");
      if(i===0||i>=3)td.className="n"; td.textContent=c;
      if(i===6&&r.v!=null)td.dataset.sort=String(r.v);
      tr.appendChild(td);});
    tb.appendChild(tr);
  });
}

/* ============ filtro delle righe di tabella sull'intervallo ============ */
/* La prima cella di ogni riga contiene l'anno o l'intervallo ("1965–2000",
   "1922–25", "Fascismo (1922–1943)"): la riga resta visibile se interseca
   l'intervallo selezionato. La classifica del giudizio è ricostruita a parte. */
function filterTables(){
  document.querySelectorAll("main table").forEach(tb=>{
    if(tb.querySelector("#rank-body"))return;
    const body=tb.tBodies[0]; if(!body)return;
    [...body.rows].forEach(r=>{
      const t=r.cells[0]?r.cells[0].textContent:"";
      const m=t.match(/(\d{4})(?:\s*[–-]\s*(\d{2,4}))?/);
      if(!m){r.hidden=false;return;}
      const y0=parseInt(m[1],10);
      let y1=y0;
      if(m[2]) y1=m[2].length===4?parseInt(m[2],10):Math.floor(y0/100)*100+parseInt(m[2],10);
      if(y1<y0)y1+=100;
      r.hidden=!(y1>=RANGE.from&&y0<=RANGE.to);
    });
  });
}

/* ============ componente intervallo ============ */
function applyRange(){
  renderAll();
  buildGiudizio();
  filterTables();
  const noteEl=document.getElementById("rangeNote");
  if(noteEl){
    const full=RANGE.from===FULL.from&&RANGE.to===FULL.to;
    noteEl.textContent=full?"tutte le statistiche sull'intero periodo":
      "statistiche limitate al "+RANGE.from+"–"+RANGE.to;
  }
}
function initFilter(){
  const fromSel=document.getElementById("fromSel"), toSel=document.getElementById("toSel");
  if(!fromSel||!toSel)return;
  for(let a=1900;a<=2025;a+=5){
    const o1=document.createElement("option"); o1.value=a; o1.textContent=a; fromSel.appendChild(o1);
    const o2=document.createElement("option"); o2.value=a; o2.textContent=a; toSel.appendChild(o2);
  }
  fromSel.value=String(RANGE.from); toSel.value=String(RANGE.to);
  function markPreset(){
    document.querySelectorAll(".fpresets .ctrl-btn").forEach(b=>{
      const [f,t]=b.dataset.r.split(",").map(Number);
      b.classList.toggle("active",f===RANGE.from&&t===RANGE.to);
    });
  }
  function fromSelects(changed){
    let f=parseInt(fromSel.value,10), t=parseInt(toSel.value,10);
    if(t-f<5){ if(changed==="from") t=Math.min(2025,f+5); else f=Math.max(1900,t-5); }
    RANGE.from=f; RANGE.to=t;
    fromSel.value=String(f); toSel.value=String(t);
    markPreset(); applyRange();
  }
  fromSel.addEventListener("change",()=>fromSelects("from"));
  toSel.addEventListener("change",()=>fromSelects("to"));
  document.querySelectorAll(".fpresets .ctrl-btn").forEach(b=>{
    b.addEventListener("click",()=>{
      const [f,t]=b.dataset.r.split(",").map(Number);
      RANGE.from=f; RANGE.to=t;
      fromSel.value=String(f); toSel.value=String(t);
      markPreset(); applyRange();
    });
  });
  markPreset();
}

/* ============ ordinamento tabelle ============ */
/* Ogni intestazione diventa un bottone: 1º clic ordina crescente,
   2º decrescente, 3º ripristina l'ordine originale. Le celle numeriche
   in formato italiano ("1.139,2", "−44,5%", "48,5 (1901)", "1993–96")
   sono ordinate per valore; N/D e "—" vanno sempre in fondo. */
function cellKey(cell){
  if(!cell) return {num:null,txt:""};
  const ds=cell.dataset?cell.dataset.sort:undefined;
  if(ds!==undefined){ const n=parseFloat(ds);
    return isNaN(n)?{num:null,txt:ds.toLowerCase()}:{num:n,txt:ds.toLowerCase()}; }
  const raw=cell.textContent.trim();
  /* celle senza dato ("N/D …", "— …", "non rilevato"): sempre in fondo.
     Il test va fatto PRIMA di normalizzare il segno meno (− U+2212 ≠ — em dash). */
  if(!raw||raw==="-"||/^(N\/D|—|non rilevato)/i.test(raw)) return {num:null,txt:""};
  const t=raw.replace(/−/g,"-").replace(/≈|~/g,"");
  const m=t.match(/-?\d{1,3}(?:\.\d{3})+(?:,\d+)?|-?\d+(?:,\d+)?/);
  if(m){ const num=parseFloat(m[0].replace(/\./g,"").replace(",","."));
    if(!isNaN(num)) return {num,txt:t.toLowerCase()}; }
  return {num:null,txt:t.toLowerCase()};
}
function makeSortable(table){
  const thead=table.tHead, tbody=table.tBodies[0];
  if(!thead||!tbody) return;
  const ths=[...thead.rows[0].cells];
  [...tbody.rows].forEach((r,i)=>{if(!r.dataset.orig)r.dataset.orig=String(i);});
  ths.forEach((th,ci)=>{
    if(th.classList.contains("nosort")) return;
    const btn=document.createElement("button");
    btn.type="button"; btn.className="sortbtn";
    while(th.firstChild) btn.appendChild(th.firstChild);
    th.appendChild(btn);
    btn.addEventListener("click",()=>{
      const state=th.classList.contains("sort-asc")?"asc":th.classList.contains("sort-desc")?"desc":"none";
      ths.forEach(h=>{h.classList.remove("sort-asc","sort-desc");h.removeAttribute("aria-sort");});
      const rows=[...tbody.rows];
      if(state==="desc"){
        rows.sort((a,b)=>parseInt(a.dataset.orig||"0",10)-parseInt(b.dataset.orig||"0",10));
        rows.forEach(r=>tbody.appendChild(r)); return;
      }
      const dir=state==="asc"?-1:1;
      const keys=new Map(rows.map(r=>[r,cellKey(r.cells[ci])]));
      const numeric=rows.filter(r=>keys.get(r).num!=null).length >= rows.length/2;
      rows.sort((a,b)=>{
        const ka=keys.get(a), kb=keys.get(b);
        if(numeric){
          if(ka.num==null&&kb.num==null)return 0;
          if(ka.num==null)return 1; if(kb.num==null)return -1;
          return (ka.num-kb.num)*dir;
        }
        if(!ka.txt&&!kb.txt)return 0; if(!ka.txt)return 1; if(!kb.txt)return -1;
        return ka.txt.localeCompare(kb.txt,"it")*dir;
      });
      rows.forEach(r=>tbody.appendChild(r));
      th.classList.add(dir===1?"sort-asc":"sort-desc");
      th.setAttribute("aria-sort",dir===1?"ascending":"descending");
    });
  });
}

/* ============ accordion ============ */
function initAccordion(){
  const chapters=[...document.querySelectorAll("details.chapter")];
  const btn=document.getElementById("accBtn");
  function refresh(){
    if(!btn)return;
    const anyClosed=chapters.some(d=>!d.open);
    btn.textContent=anyClosed?"Apri tutti":"Chiudi tutti";
  }
  if(btn) btn.addEventListener("click",()=>{
    const anyClosed=chapters.some(d=>!d.open);
    chapters.forEach(d=>d.open=anyClosed);
    refresh();
  });
  chapters.forEach(d=>d.addEventListener("toggle",refresh));
  // i link della navigazione aprono il capitolo di destinazione
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",()=>{
      const t=document.querySelector(a.getAttribute("href"));
      if(t){ const d=t.closest("details.chapter")||( t.matches("details.chapter")?t:null);
        if(d) d.open=true; }
    });
  });
  function openFromHash(){
    if(!location.hash) return;
    let t=null; try{t=document.querySelector(location.hash);}catch(e){}
    if(t){ const d=t.closest("details.chapter")||(t.matches("details.chapter")?t:null);
      if(d) d.open=true; }
  }
  window.addEventListener("hashchange",openFromHash);
  openFromHash();
  refresh();
}

/* ============ tema ============ */
function initTheme(){
  const btn=document.getElementById("themeBtn");
  const seq=["auto","light","dark"];
  const store={
    get(k){try{return localStorage.getItem(k);}catch(e){return null;}},
    set(k,v){try{localStorage.setItem(k,v);}catch(e){}}
  };
  let cur=store.get("theme"); if(!seq.includes(cur)) cur="auto";
  function apply(){
    if(cur==="auto")document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme",cur);
    if(btn)btn.textContent="Tema: "+(cur==="auto"?"auto":cur==="light"?"chiaro":"scuro");
    renderAll();
  }
  if(btn)btn.addEventListener("click",()=>{cur=seq[(seq.indexOf(cur)+1)%3];store.set("theme",cur);apply();});
  apply();
  const mq=window.matchMedia("(prefers-color-scheme: dark)");
  const onMq=()=>{if(cur==="auto")apply();};
  if(typeof mq.addEventListener==="function") mq.addEventListener("change",onMq);
  else if(mq.addListener) mq.addListener(onMq);
}

/* ============ avvio ============ */
function boot(data){
  T1=data.T1; PC_EXTRA=data.PC_EXTRA; DEB_EXTRA=data.DEB_EXTRA; ERE=data.ERE;
  ISTR=data.ISTR; CRIM=data.CRIM; SPESA1=data.SPESA1; SPESA2=data.SPESA2;
  PRIV=data.PRIV; PRIV_GOV=data.PRIV_GOV; AREE_GIUDIZIO=data.AREE_GIUDIZIO;
  T1.forEach(r=>GOV[r.a]=r.g+" — "+r.c);
  buildT1();
  initFilter();
  initTheme();               // chiama renderAll() (grafici + gauges)
  buildGiudizio();
  document.querySelectorAll("table").forEach(makeSortable);
  initAccordion();
  filterTables();
}
fetch("data.json",{cache:"no-cache"})
  .then(r=>{ if(!r.ok) throw new Error("HTTP "+r.status); return r.json(); })
  .then(boot)
  .catch(e=>{
    const main=document.querySelector("main");
    if(main){
      const b=document.createElement("p");
      b.className="load-error";
      b.textContent="Impossibile caricare data.json ("+e.message+"): grafici, indicatori e giudizio "+
        "non sono disponibili. Se la pagina è aperta da file://, avvia un piccolo server locale "+
        "(es. \"python3 -m http.server\" nella cartella del progetto) oppure usa la versione online.";
      main.insertBefore(b,main.firstChild);
    }
    initTheme();
    document.querySelectorAll("table").forEach(makeSortable);
    initAccordion();
  });
