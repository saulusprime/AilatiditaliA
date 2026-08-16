"use strict";
/* ============================================================
   AilatiditaliA — logica della pagina (vanilla JavaScript).
   Dati, grafici SVG, gauges, tabelle ordinabili, accordion, tema.
   Fonte di verità dei valori: efficacia_governi_italiani_1900_2025.md (v2.1).
   ============================================================ */

/* ============ dati ============ */
const T1 = [
 {a:1900,g:"Saracco",c:"Liberali (Sinistra storica)",pop:33.7,pil:110,pc:3264,v:null,d:109.8},
 {a:1905,g:"Fortis I",c:"Liberali (Sinistra storica)",pop:35.0,pil:124,pc:3532,v:8.2,d:100.9},
 {a:1910,g:"Luzzatti",c:"Liberali + Radicali",pop:36.6,pil:140,pc:3829,v:8.4,d:87.1},
 {a:1915,g:"Salandra II",c:"Liberali (governo di guerra)",pop:38.0,pil:138,pc:3642,v:-4.9,d:84.3},
 {a:1920,g:"Giolitti V",c:"Liberali, PPI, democratici sociali, radicali",pop:37.4,pil:142,pc:3789,v:4.0,d:159.7},
 {a:1925,g:"Mussolini",c:"PNF",pop:39.2,pil:179,pc:4580,v:20.9,d:103.8},
 {a:1930,g:"Mussolini",c:"PNF",pop:40.8,pil:189,pc:4631,v:1.1,d:106.6},
 {a:1935,g:"Mussolini",c:"PNF",pop:42.4,pil:198,pc:4670,v:0.8,d:80.7},
 {a:1940,g:"Mussolini",c:"PNF (economia di guerra)",pop:44.3,pil:226,pc:5099,v:9.2,d:72.6},
 {a:1945,g:"Parri",c:"PdA; esarchia CLN (DC, PCI, PSIUP, PLI, PdA, PDL)",pop:45.4,pil:129,pc:2831,v:-44.5,d:72.4},
 {a:1950,g:"De Gasperi VI",c:"DC, PSLI, PRI (centrismo)",pop:47.1,pil:263,pc:5582,v:97.2,d:29.5},
 {a:1955,g:"Scelba",c:"DC, PSDI, PLI",pop:48.6,pil:362,pc:7453,v:33.5,d:33.9},
 {a:1960,g:"Tambroni",c:"Monocolore DC (appoggio esterno MSI)",pop:50.2,pil:473,pc:9430,v:26.5,d:31.4},
 {a:1965,g:"Moro II",c:"Centrosinistra organico (DC, PSI, PSDI, PRI)",pop:52.0,pil:630,pc:12111,v:28.4,d:28.4},
 {a:1970,g:"Rumor III",c:"Centrosinistra (DC, PSI, PSU, PRI)",pop:53.7,pil:831,pc:15492,v:27.9,d:37.1},
 {a:1975,g:"Moro IV",c:"DC, PRI (appoggio esterno PSI e PSDI)",pop:55.6,pil:952,pc:17123,v:10.5,d:56.6},
 {a:1980,g:"Cossiga II",c:"DC, PSI, PRI",pop:56.5,pil:1183,pc:20959,v:22.4,d:56.1},
 {a:1985,g:"Craxi I",c:"Pentapartito (PSI, DC, PSDI, PRI, PLI)",pop:56.7,pil:1275,pc:22469,v:7.2,d:80.9},
 {a:1990,g:"Andreotti VI",c:"Pentapartito (DC, PSI, PSDI, PRI, PLI)",pop:56.7,pil:1475,pc:26003,v:15.7,d:95.2},
 {a:1995,g:"Dini",c:"Tecnico",pop:56.9,pil:1630,pc:28666,v:10.2,d:119.1},
 {a:2000,g:"Amato II",c:"Centrosinistra (DS, PPI, Dem., UDEUR, SDI, FdV, RI, PdCI)",pop:57.0,pil:1864,pc:32717,v:14.1,d:108.7},
 {a:2005,g:"Berlusconi III",c:"Casa delle Libertà (FI, AN, UdC, Lega, NPSI, PRI)",pop:58.2,pil:2029,pc:34872,v:6.6,d:106.2},
 {a:2010,g:"Berlusconi IV",c:"Centrodestra (PdL, Lega Nord, MpA)",pop:59.8,pil:2081,pc:34766,v:-0.3,d:118.8},
 {a:2015,g:"Renzi",c:"PD, NCD, UdC, SC, PSI, CD, DemoS",pop:60.3,pil:2026,pc:33621,v:-3.3,d:134.8},
 {a:2020,g:"Conte II",c:"M5S, PD, LeU, IV",pop:59.5,pil:1926,pc:32385,v:-3.7,d:154.4},
 {a:2025,g:"Meloni",c:"Centrodestra (FdI, Lega, FI, NM)",pop:58.9,pil:null,pc:null,v:14.5,d:137.1,stima:true},
];
const GOV = {}; T1.forEach(r=>GOV[r.a]=r.g+" — "+r.c);
const PC_EXTRA = [{a:2022,pc:36224}];           // ultimo dato Maddison
const DEB_EXTRA = [{a:2022,d:138.4},{a:2024,d:134.7}];
const ERE = [
 [1900,1922,"Liberali"],[1922,1943,"Fascismo"],[1943,1946,""],
 [1946,1962,"Centrismo"],[1962,1976,"Centrosinistra"],[1976,1992,"Pentapartito"],
 [1992,2001,"Ulivo"],[2001,2011,"Centrodestra"],[2011,2018,"Larghe intese"],
 [2018,2022,"Conte·Draghi"],[2022,2025.5,"Meloni"]
];
const ISTR = {
 analf:[[1901,48.5],[1911,37.6],[1921,27.0],[1931,20.9],[1951,12.9],[1961,8.3],[1971,5.2],[1981,3.1],[1991,2.1],[2001,1.5],[2011,1.1],[2021,0.5],[2024,0.5]],
 dip:[[1951,4.3],[1961,5.6],[1971,8.7],[1981,14.3],[1991,22.4],[2001,33.4],[2011,41.4],[null,null],[2020,50.9]],
 eur:[[1992,32.6],[1995,36.3],[2000,45.2],[2005,50.1],[2010,55.1],[2015,59.9],[2020,62.6],[2025,67.0]],
};
const CRIM = [[1956,344.9],[1960,332.7],[1965,452.8],[1970,547.8],[1975,770.6],[1980,1139.2],[1985,1364.0],[1990,2501.6],[1995,2267.5],[2000,2205.8],[2005,2579.1],[2010,2621.0],[2015,2687.2],[2019,2301.9],[2020,1900.6],[2021,2104.1],[2022,2255.8],[2023,2341.6],[2024,2399.3]];
const SPESA1 = {
 difesa:[[1951,3.8],[1955,3.3],[1960,2.7],[1965,2.7],[1970,2.1],[1975,2.0],[1980,1.8],[1985,1.9],[1990,1.9],[1995,1.5],[2000,1.7],[2005,1.6],[2010,1.5],[2015,1.2],[2020,1.7],[2025,1.9]],
 sanita:[[1960,2.7],[1965,3.5],[1970,4.1],[1975,4.8],[1980,5.1],[1985,4.9],[1990,5.7],[null,null],[1995,5.1],[2000,5.8],[2005,6.8],[2010,7.4],[2015,7.0],[2020,7.8],[2024,6.6]],
 istruz:[[1970,3.4],[1975,3.7],[1980,4.4],[1985,4.7],[1988,4.6],[null,null],[1995,4.4],[2000,4.4],[2005,4.5],[2010,4.4],[2015,4.0],[2020,4.3],[2024,4.0]],
};
const SPESA2 = {
 socx:[[1960,10.7],[1965,13.2],[1970,13.8],[1975,17.1],[1980,17.3],[1985,20.0],[1990,20.6],[1995,21.0],[2000,22.6],[2005,24.0],[2010,26.8]],
 cofog:[[1995,17.5],[2000,16.7],[2005,17.1],[2010,19.7],[2015,21.2],[2020,25.0],[2024,21.3]],
 tot:[[1995,51.4],[2000,46.4],[2005,47.1],[2010,49.8],[2015,50.2],[2020,56.8],[2023,53.6],[2024,50.4]],
};
const PRIV = [[1992,396],[1993,2000],[1994,6739],[1995,7681],[1996,8845],[1997,21130],[1998,12322],[1999,24332],[2000,10853]];
const PRIV_GOV = {1992:"Governi: Amato I",1993:"Governi: Amato I / Ciampi",1994:"Governi: Ciampi / Berlusconi I",
 1995:"Governo: Dini",1996:"Governi: Dini / Prodi I",1997:"Governo: Prodi I",1998:"Governi: Prodi I / D'Alema I",
 1999:"Governo: D'Alema I",2000:"Governi: D'Alema II / Amato II"};

/* ============ giudizio per area politica ============ */
/* Metriche per finestra (dalle tabelle della pagina):
   cres  = variazione media del PIL pro capite per quinquennio (%)
   deb   = variazione del debito/PIL in punti (negativo = migliora)
   istr  = progresso educativo in p.p. per quinquennio (fino al 1951:
           riduzione analfabetismo; 1951-91: analfabetismo + titoli 6+;
           dal 1992: quota 25-64 con diploma, Eurostat)
   crim  = variazione % dei delitti denunciati nella finestra (serie dal 1956)
   asset = malus cessioni di asset statali 0-3 (0 = nessuna cessione rilevante;
           3 = massime, ~94 mld € 1992-2000) — contate come negative
   fuori = esclusa dalla classifica (finestra troppo breve)              */
const AREE_GIUDIZIO = [
 {n:"Liberali giolittiani (1900–1914)", breve:"Liberali giolittiani", cres:8.3, deb:-26, istr:5.5, crim:null, asset:0},
 {n:"Guerra e crisi liberale (1915–1922)", breve:"Guerra e crisi liberale", cres:-0.5, deb:75, istr:5.3, crim:null, asset:0},
 {n:"Fascismo (1922–1943)", breve:"Fascismo", cres:-2.5, deb:-2, istr:2.4, crim:null, asset:2},
 {n:"Centrismo DC (1945–1962)", breve:"Centrismo DC", cres:52.4, deb:-42, istr:3.0, crim:-3.5, asset:0},
 {n:"Centrosinistra organico (1962–1976)", breve:"Centrosinistra organico", cres:22.3, deb:29, istr:3.1, crim:131.6, asset:0},
 {n:"Solidarietà naz. e pentapartito (1976–1992)", breve:"Pentapartito", cres:15.1, deb:49, istr:4.2, crim:224.6, asset:2},
 {n:"Tecnici e Ulivo (1992–2001)", breve:"Tecnici e Ulivo", cres:12.2, deb:-13, istr:7.9, crim:-11.8, asset:3},
 {n:"Centrodestra berlusconiano (2001–2011)", breve:"Centrodestra berlusconiano", cres:3.2, deb:10, istr:5.0, crim:18.8, asset:2},
 {n:"Monti, larghe intese e governi PD (2011–2018)", breve:"Larghe intese e governi PD", cres:-3.3, deb:15, istr:3.8, crim:-12.2, asset:1},
 {n:"Governi Conte I e II (2018–2021)", breve:"Governi Conte", cres:-3.7, deb:19, istr:2.7, crim:-8.6, asset:0},
 {n:"Unità nazionale (2021–2022)", breve:"Unità nazionale", cres:11.9, deb:-16, istr:null, crim:7.2, asset:0, fuori:true},
 {n:"Centrodestra Meloni (2022–2025)", breve:"Centrodestra Meloni", cres:3.7, deb:-1.3, istr:4.4, crim:6.4, asset:1},
];
/* categorie: chiave, etichetta, direzione (1 = più alto è meglio), peso, formato */
const CAT_GIUDIZIO = [
 {k:"cres", lab:"Crescita", dir:1, w:30, f:v=>(v>0?"+":"")+fmt(v,1)+"%", desc:"PIL pro capite, media per quinquennio"},
 {k:"deb",  lab:"Debito",   dir:-1, w:25, f:v=>(v>0?"+":"")+fmt(v,1)+" p.p.", desc:"variazione del debito/PIL"},
 {k:"istr", lab:"Istruzione", dir:1, w:15, f:v=>"+"+fmt(v,1)+" p.p./quinq.", desc:"progresso educativo"},
 {k:"crim", lab:"Criminalità", dir:-1, w:15, f:v=>(v>0?"+":"")+fmt(v,1)+"%", desc:"variazione dei delitti denunciati"},
 {k:"asset", lab:"Cessioni di asset", dir:-1, w:15, f:v=>"malus "+fmt(v), desc:"scala delle cessioni (0–3)"},
];
/* punteggio 0-10 per ranghi (pari merito condiviso); pesi ridistribuiti sulle categorie disponibili */
function computeGiudizio(){
  const inGara=AREE_GIUDIZIO.filter(a=>!a.fuori);
  const points={};
  inGara.forEach(a=>points[a.n]={});
  for(const c of CAT_GIUDIZIO){
    const has=inGara.filter(a=>a[c.k]!=null);
    const sorted=[...has].sort((x,y)=>(y[c.k]-x[c.k])*c.dir);
    // rango medio per i pari merito
    sorted.forEach((a,i)=>{
      const ties=sorted.filter(b=>b[c.k]===a[c.k]);
      const first=sorted.findIndex(b=>b[c.k]===a[c.k]);
      const rank=first+(ties.length-1)/2;
      points[a.n][c.k]=has.length>1 ? 10*(has.length-1-rank)/(has.length-1) : 10;
    });
  }
  return AREE_GIUDIZIO.map(a=>{
    if(a.fuori) return {...a, score:null, pts:{}};
    let num=0, den=0;
    for(const c of CAT_GIUDIZIO){
      if(a[c.k]==null) continue;
      num+=c.w*points[a.n][c.k]; den+=c.w;
    }
    return {...a, score:den?num/den:null, pts:points[a.n]};
  }).sort((x,y)=>(y.score??-1)-(x.score??-1));
}
function buildGiudizio(){
  const bestBox=document.getElementById("best-cards");
  const podioBox=document.getElementById("podio");
  const rankBody=document.getElementById("rank-body");
  if(!bestBox||!podioBox||!rankBody) return;
  const ranked=computeGiudizio();
  // migliori per categoria (giudizio universale)
  for(const c of CAT_GIUDIZIO){
    const has=AREE_GIUDIZIO.filter(a=>!a.fuori&&a[c.k]!=null);
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
  ranked.filter(a=>a.score!=null).slice(0,3).forEach((a,i)=>{
    const card=div("tile podio-card"+(i===0?" primo":""),podioBox);
    const pos=div("pos",card); pos.textContent=(i+1)+"º";
    const nm=div("best-name",card); nm.textContent=a.n;
    const sc=div("delta",card); sc.textContent="punteggio ponderato "+fmt(a.score,1)+" / 10";
  });
  // classifica completa
  ranked.forEach((a,i)=>{
    const tr=document.createElement("tr");
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

/* gauges tematici in testata: value su scala [min,max] */
const GAUGES = [
 {label:"Recupero del picco 2007", value:99.8, min:0, max:100, txt:"99,8%",
  sub:"PIL pro capite 2022 (36.224 $) vs picco 2007 (36.311 $)"},
 {label:"Debito pubblico 2025", value:137.1, min:0, max:160, txt:"137,1%",
  sub:"in % del PIL (+2,4 p.p. sul 2024, effetto Superbonus) · scala 0–160, max storico 159,7 (1920)"},
 {label:"Istruzione 2025", value:67.0, min:0, max:100, txt:"67,0%",
  sub:"25–64enni con almeno un diploma (32,6% nel 1992)"},
 {label:"Delitti 2024 vs massimo 2015", value:89.3, min:0, max:100, txt:"89,3%",
  sub:"2.399 mila nel 2024 · massimo della serie: 2.687 mila (2015)"},
 {label:"Reddito reale vs 2006", value:90, min:0, max:100, txt:"90%",
  sub:"reddito familiare medio reale 2022 vs 2006: −10% (SHIW, Banca d'Italia)"},
];

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
  const W=cfg.w||940, H=cfg.h||380, M={t:20,r:cfg.mr||150,b:34,l:46};
  const legendBox=cfg.series.length>1 ? div("legend") : null;
  if(legendBox){ host.parentNode.insertBefore(legendBox, host);
    cfg.series.forEach(s=>{const it=div("it",legendBox);const k=document.createElement("span");
      k.className="key";k.style.background=css(s.color);it.appendChild(k);
      it.appendChild(document.createTextNode(s.name));});}
  const svg=el("svg",{viewBox:`0 0 ${W} ${H}`,role:"img","aria-label":cfg.aria||""},host);
  const x0=cfg.x0, x1=cfg.x1;
  const ymin=cfg.ymin??0, ymax=cfg.ymax;
  const X=a=>M.l+(a-x0)/(x1-x0)*(W-M.l-M.r);
  const Y=v=>H-M.b-(v-ymin)/(ymax-ymin)*(H-M.t-M.b);
  // fasce delle ere
  if(cfg.ere){ let i=0; for(const [a,b,lab] of ERE){
      if(b<x0||a>x1)continue;
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
  const xstep=cfg.xstep||10;
  for(let a=Math.ceil(x0/xstep)*xstep;a<=x1;a+=xstep)
    el("text",{x:X(a),y:H-M.b+18,"text-anchor":"middle","font-size":11,fill:css("--ink-3"),"font-variant-numeric":"tabular-nums"},svg).textContent=a;
  // linee di rottura
  (cfg.breaks||[]).forEach(([a,lab])=>{
    el("line",{x1:X(a),x2:X(a),y1:M.t,y2:H-M.b,stroke:css("--axis"),"stroke-width":1},svg);
    el("text",{x:X(a)+4,y:M.t+12,"font-size":10,fill:css("--ink-3")},svg).textContent=lab;
  });
  // serie
  cfg.series.forEach(s=>{
    const col=css(s.color); let d="",pen=false;
    for(const p of s.data){
      if(p[0]==null){pen=false;continue;}
      d+=(pen?" L":"M")+X(p[0])+" "+Y(p[1]); pen=true;
    }
    el("path",{d,fill:"none",stroke:col,"stroke-width":2,"stroke-linejoin":"round","stroke-linecap":"round"},svg);
    for(const p of s.data){ if(p[0]==null)continue;
      el("circle",{cx:X(p[0]),cy:Y(p[1]),r:3.4,fill:col,stroke:css("--surface-1"),"stroke-width":2},svg);}
    const last=[...s.data].reverse().find(p=>p[0]!=null);
    const lbl=el("text",{x:X(last[0])+9,y:Y(last[1])+4,"font-size":11.5,fill:css("--ink-2")},svg);
    lbl.textContent=(cfg.series.length>1?(s.short||s.name)+" ":"")+fmt(last[1],s.dec??cfg.ydec??0)+(s.unit||cfg.unit||"");
  });
  // annotazioni
  (cfg.notes||[]).forEach(n=>{
    el("circle",{cx:X(n.a),cy:Y(n.v),r:4.5,fill:"none",stroke:css("--ink-3"),"stroke-width":1.2},svg);
    el("text",{x:X(n.a)+(n.dx??7),y:Y(n.v)+(n.dy??-8),"font-size":10.5,fill:css("--ink-2")},svg).textContent=n.t;
  });
  // interazione: crosshair + tooltip
  const wrap=host; wrap.style.position="relative";
  const tip=div("tooltip",wrap);
  const cross=el("line",{y1:M.t,y2:H-M.b,stroke:css("--axis"),"stroke-width":1,opacity:0},svg);
  const xs=[...new Set(cfg.series.flatMap(s=>s.data.filter(p=>p[0]!=null).map(p=>p[0])))].sort((a,b)=>a-b);
  function onmove(ev){
    const pt=svg.createSVGPoint(); pt.x=ev.clientX; pt.y=ev.clientY;
    const p=pt.matrixTransform(svg.getScreenCTM().inverse());
    let best=xs[0]; for(const a of xs) if(Math.abs(X(a)-p.x)<Math.abs(X(best)-p.x)) best=a;
    cross.setAttribute("x1",X(best)); cross.setAttribute("x2",X(best)); cross.setAttribute("opacity",.8);
    tip.textContent="";
    const t1=div("tt-title",tip); t1.textContent=best;
    cfg.series.forEach(s=>{
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
  const W=cfg.w||940,H=cfg.h||360,M={t:26,r:20,b:34,l:52};
  const svg=el("svg",{viewBox:`0 0 ${W} ${H}`,role:"img","aria-label":cfg.aria||""},host);
  const data=cfg.data;
  const ymin=cfg.ymin??Math.min(0,...data.map(d=>d.v)), ymax=cfg.ymax??Math.max(...data.map(d=>d.v));
  const Y=v=>H-M.b-(v-ymin)/(ymax-ymin)*(H-M.t-M.b);
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

/* ============ gauges ============ */
function renderGauges(){
  const box=document.getElementById("gauges"); if(!box)return;
  box.textContent="";
  GAUGES.forEach(g=>{
    const card=div("gauge",box);
    const W=170,H=104,cx=85,cy=88,r=62,sw=12;
    const pct=Math.max(0,Math.min(1,(g.value-g.min)/(g.max-g.min)));
    const svg=el("svg",{viewBox:`0 0 ${W} ${H}`,role:"img",
      "aria-label":g.label+": "+g.txt+" — "+g.sub},card);
    const arc=`M ${cx-r} ${cy} A ${r} ${r} 0 0 1 ${cx+r} ${cy}`;
    el("path",{d:arc,fill:"none",stroke:css("--gauge-track"),"stroke-width":sw,"stroke-linecap":"round",pathLength:100},svg);
    if(pct>0.001)
      el("path",{d:arc,fill:"none",stroke:css("--s1"),"stroke-width":sw,"stroke-linecap":"round",
        pathLength:100,"stroke-dasharray":`${pct*100} 100`},svg);
    el("text",{x:cx,y:cy-8,"text-anchor":"middle","font-size":23,"font-weight":600,fill:css("--ink-1")},svg).textContent=g.txt;
    el("text",{x:cx-r,y:cy+13,"text-anchor":"middle","font-size":9,fill:css("--ink-3"),"font-variant-numeric":"tabular-nums"},svg).textContent=fmt(g.min);
    el("text",{x:cx+r,y:cy+13,"text-anchor":"middle","font-size":9,fill:css("--ink-3"),"font-variant-numeric":"tabular-nums"},svg).textContent=fmt(g.max);
    const l=div("lbl",card); l.textContent=g.label;
    const s=div("sub",card); s.textContent=g.sub;
  });
}

/* ============ render dei grafici ============ */
function renderAll(){
  ["c-pil","c-var","c-debito","c-istruzione","c-crimini","c-spesa1","c-spesa2","c-priv"].forEach(id=>{
    const h=document.getElementById(id); if(h){h.textContent="";
      const l=h.parentNode.querySelector(".legend"); if(l)l.remove();}
  });
  renderGauges();
  const pcData=T1.filter(r=>r.pc!=null).map(r=>[r.a,r.pc]).concat(PC_EXTRA.map(r=>[r.a,r.pc]));
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
  const original=[...tbody.rows];
  ths.forEach((th,ci)=>{
    if(th.classList.contains("nosort")) return;
    const btn=document.createElement("button");
    btn.type="button"; btn.className="sortbtn";
    while(th.firstChild) btn.appendChild(th.firstChild);
    th.appendChild(btn);
    btn.addEventListener("click",()=>{
      const state=th.classList.contains("sort-asc")?"asc":th.classList.contains("sort-desc")?"desc":"none";
      ths.forEach(h=>{h.classList.remove("sort-asc","sort-desc");h.removeAttribute("aria-sort");});
      if(state==="desc"){ original.forEach(r=>tbody.appendChild(r)); return; }
      const dir=state==="asc"?-1:1;
      const rows=[...tbody.rows];
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
buildT1();
buildGiudizio();
initTheme();               // chiama renderAll() (grafici + gauges)
document.querySelectorAll("table").forEach(makeSortable);
initAccordion();
