
const K="vetted_resupply_v2_1";
const starter={"suppliers":[{"id":"amazon","name":"Amazon","url":"https://www.amazon.com/"},{"id":"weaver","name":"Weaver Leather Supply","url":"https://www.weaverleathersupply.com/"},{"id":"ivan","name":"Ivan Leathercraft","url":"https://www.ivan.tw/"},{"id":"stickerapp","name":"StickerApp","url":"https://stickerapp.com/"},{"id":"brettuns","name":"Brettuns Village","url":"https://brettunsvillage.com/"},{"id":"badgesetc","name":"Badges Etc.","url":"https://www.badges-etc.com/"},{"id":"cargosystems","name":"Cargo Systems","url":"https://www.cargosystems.com/"},{"id":"paragear","name":"ParaGear","url":"https://www.paragear.com/"},{"id":"rml","name":"Rocky Mountain Leather Supply","url":"https://www.rmleathersupply.com/"},{"id":"wickett","name":"Wickett & Craig","url":"https://wickett-craig.com/"}],"hardware":[{"id":"loctite","name":"Loctite","variants":[{"id":"std","name":"Standard","supplierId":"amazon","url":"https://a.co/d/0ezSV98e","sku":"","pack":1}]},{"id":"angelus4coat","name":"Angelus 4-Coat High Gloss","variants":[{"id":"std","name":"High Gloss","supplierId":"amazon","url":"https://a.co/d/05jgqqGJ","sku":"","pack":1}]},{"id":"stickers","name":"Custom Stickers","variants":[{"id":"std","name":"Custom","supplierId":"stickerapp","url":"https://stickerapp.com/custom-stickers","sku":"","pack":1}]},{"id":"eyelets","name":"Eyelets and Grommets","variants":[{"id":"std","name":"Standard","supplierId":"amazon","url":"https://a.co/d/05qnZhX4","sku":"","pack":1}]},{"id":"buttonsnap","name":"Button Snap Set","variants":[{"id":"std","name":"Standard","supplierId":"amazon","url":"https://a.co/d/0ejVWQlA","sku":"","pack":1},{"id":"black","name":"Black","supplierId":"amazon","url":"https://a.co/d/4deOezP","sku":"","pack":1}]},{"id":"threadheavy","name":"Heavy Duty Thread","variants":[{"id":"black","name":"Black","supplierId":"amazon","url":"https://a.co/d/0eVCAKCR","sku":"","pack":1},{"id":"white","name":"White","supplierId":"amazon","url":"https://a.co/d/0eVCAKCR","sku":"","pack":1}]},{"id":"thread","name":"Thread","variants":[{"id":"std","name":"Standard","supplierId":"amazon","url":"https://a.co/d/04DyfaJ0","sku":"","pack":1}]},{"id":"velcro","name":"Velcro","variants":[{"id":"std","name":"Standard","supplierId":"amazon","url":"https://a.co/d/04ETlEOC","sku":"","pack":1}]},{"id":"rivetburr","name":"Rivet and Burr","variants":[{"id":"copper","name":"Copper","supplierId":"amazon","url":"https://a.co/d/0iZaRnDx","sku":"","pack":1},{"id":"brass","name":"Brass","supplierId":"amazon","url":"https://a.co/d/0j1kM8YP","sku":"","pack":1},{"id":"black","name":"Black","supplierId":"brettuns","url":"https://brettunsvillage.com/tools-hardware/leather-parts/rivets/black-steel-tubular-or-post-rivets/","sku":"","pack":1}]},{"id":"bugle","name":"Brass Bugles / Shield Front Circle","variants":[{"id":"brass","name":"Brass","supplierId":"badgesetc","url":"https://www.badges-etc.com/product/CCFD_C110.html","sku":"","pack":1}]},{"id":"bunker_snap","name":"Snap Hook for Bunker Belt","variants":[{"id":"chrome","name":"Chrome","supplierId":"cargosystems","url":"https://www.cargosystems.com/product/ps-22042-1/","sku":"PS-22042-1","pack":1}]},{"id":"butterfly_snap","name":"Butterfly Snap Hook for Bunker Belt","variants":[{"id":"black","name":"Black","supplierId":"paragear","url":"https://www.paragear.com/skydiving/10000175/H411BK/","sku":"H411BK","pack":1}]},{"id":"bunker_dring","name":"D-Ring for Bunker Belt","variants":[{"id":"black","name":"Black","supplierId":"paragear","url":"https://www.paragear.com/skydiving/10000173/H303BK/BLACK-D-RING-PS22046-2","sku":"H303BK / PS22046-2","pack":1}]},{"id":"scissor1","name":"1 inch Scissor Snap","variants":[{"id":"std","name":"Standard","supplierId":"weaver","url":"https://www.weaverleathersupply.com/products/5015-square-scissor-snap?variant=40929254342796","sku":"","pack":1}]},{"id":"scissor075","name":"3/4 inch Scissor Snap","variants":[{"id":"std","name":"Standard","supplierId":"","url":"","sku":"","pack":1}]},{"id":"firemanbuckle","name":"Fireman Quick Release Belt Buckle","variants":[{"id":"brass","name":"Solid Brass","supplierId":"rml","url":"https://www.rmleathersupply.com/products/belt-buckles-quick-release-fireman-solid-brass?variant=14671893135469","sku":"","pack":1}]},{"id":"chicago38","name":"Chicago Screws 3/8 inch","variants":[{"id":"std","name":"Chin Strap","supplierId":"amazon","url":"https://a.co/d/0bL9yqo7","sku":"","pack":1}]},{"id":"chicago","name":"Chicago Screws","variants":[{"id":"std","name":"Standard","supplierId":"","url":"","sku":"","pack":1}]},{"id":"buttonstud","name":"Button Screw Studs","variants":[{"id":"brass","name":"Brass (supplier lists as Gold)","supplierId":"amazon","url":"https://a.co/d/0gzC8tH6","sku":"","pack":1}]},{"id":"alligator","name":"Alligator / Postman / Spring Buckle","variants":[{"id":"std","name":"Standard","supplierId":"weaver","url":"https://www.weaverleathersupply.com/products/postman-slide?_pos=1&_sid=81dc14cf3&_ss=r","sku":"","pack":1}]},{"id":"sideaccess","name":"Side Access Clasp","variants":[{"id":"std","name":"Standard","supplierId":"","url":"","sku":"","pack":1}]},{"id":"siderelease","name":"3/4 inch Side Release Buckle","variants":[{"id":"black","name":"Black","supplierId":"weaver","url":"https://www.weaverleathersupply.com/products/5605-wide-guard-side-release-buckle-black-3-4?_pos=1&_sid=092273e08&_ss=r","sku":"","pack":1}]},{"id":"dring15","name":"1 1/2 inch D-Ring","variants":[{"id":"std","name":"Standard","supplierId":"amazon","url":"https://a.co/d/07WQPHcz","sku":"","pack":1}]},{"id":"dringbracket05","name":"1/2 inch D-Ring Bracket Assembly","variants":[{"id":"std","name":"Standard","supplierId":"","url":"","sku":"","pack":1}]},{"id":"ring3","name":"3 inch Welded Ring","variants":[{"id":"std","name":"Standard","supplierId":"weaver","url":"https://www.weaverleathersupply.com/products/2-ring?variant=40909141606540","sku":"","pack":1}]},{"id":"strength","name":"Strength Ribbon","variants":[{"id":"std","name":"Standard","supplierId":"amazon","url":"https://a.co/d/8tVKinf","sku":"","pack":1}]},{"id":"square15","name":"1 1/2 inch Square Buckle","variants":[{"id":"primary","name":"Primary - Weaver","supplierId":"weaver","url":"https://www.weaverleathersupply.com/products/150-buckle?variant=40929206370444","sku":"","pack":1},{"id":"backup","name":"Backup - Ivan","supplierId":"ivan","url":"https://www.ivan.tw/products/rectangle-center-bar-roller-buckles?variant=46803626197228","sku":"","pack":1}]},{"id":"square05","name":"1/2 inch Square Buckle","variants":[{"id":"std","name":"Standard","supplierId":"","url":"","sku":"","pack":1}]},{"id":"scbaquick","name":"Quick Release SCBA Clasp","variants":[{"id":"std","name":"Standard","supplierId":"amazon","url":"https://a.co/d/0jZPYGr","sku":"","pack":1}]},{"id":"beltbuckle15","name":"1 1/2 inch Belt Buckle","variants":[{"id":"std","name":"Standard","supplierId":"","url":"","sku":"","pack":1}]},{"id":"velcro05","name":"1/2 inch Velcro Strip","variants":[{"id":"std","name":"Standard","supplierId":"amazon","url":"https://a.co/d/04ETlEOC","sku":"","pack":1}]},{"id":"leather","name":"Leather","variants":[{"id":"wickett","name":"Wickett & Craig","supplierId":"wickett","url":"https://wickett-craig.com/","sku":"","pack":1}]}],"products":[{"id":"chin","name":"Chin Strap","components":[{"hardwareId":"alligator","variantId":"std","qty":1},{"hardwareId":"sideaccess","variantId":"std","qty":1},{"hardwareId":"chicago38","variantId":"std","qty":4},{"hardwareId":"rivetburr","variantId":"copper","qty":3}]},{"id":"radio","name":"Radio Strap","costToMake":36.18,"components":[{"hardwareId":"dringbracket05","variantId":"std","qty":2},{"hardwareId":"buttonsnap","variantId":"std","qty":1},{"hardwareId":"scissor1","variantId":"std","qty":2},{"hardwareId":"scissor075","variantId":"std","qty":2},{"hardwareId":"square15","variantId":"primary","qty":1},{"hardwareId":"rivetburr","variantId":"copper","qty":20},{"note":"Thread"}]},{"id":"glove","name":"Glove Strap","components":[{"hardwareId":"scissor1","variantId":"std","qty":1},{"hardwareId":"rivetburr","variantId":"copper","qty":1},{"hardwareId":"velcro05","variantId":"std","qty":1},{"note":"Thread"}]},{"id":"hback","name":"H-Back Suspenders","components":[{"hardwareId":"dring15","variantId":"std","qty":4},{"hardwareId":"square15","variantId":"primary","qty":2},{"hardwareId":"buttonstud","variantId":"brass","qty":2},{"note":"Thread"}]},{"id":"ringback","name":"Ring Back Suspenders","components":[{"hardwareId":"dring15","variantId":"std","qty":4},{"hardwareId":"square05","variantId":"std","qty":2},{"hardwareId":"ring3","variantId":"std","qty":1},{"hardwareId":"buttonstud","variantId":"brass","qty":2},{"note":"Thread"}]},{"id":"flash","name":"Flashlight Holder","components":[{"hardwareId":"scissor1","variantId":"std","qty":1},{"hardwareId":"rivetburr","variantId":"copper","qty":3},{"note":"Possible thread"}]},{"id":"belt","name":"Duty Belt","components":[{"hardwareId":"beltbuckle15","variantId":"std","qty":1},{"hardwareId":"chicago","variantId":"std","qty":2},{"note":"Thread"}]},{"id":"shield","name":"Shield","components":[{"note":"Thread"}]},{"id":"tool","name":"Tool Ring","components":[{"hardwareId":"chicago","variantId":"std","qty":2},{"hardwareId":"ring3","variantId":"std","qty":1}]}],"orders":[]};
const INITIAL_LOCAL_DATA_PRESENT=!!localStorage.getItem(K);
let SERVER_BACKUP_READY=false;
let db=JSON.parse(localStorage.getItem(K)||"null")||starter;
const PAGE_KEY=K+"_page";
const FILTER_KEY=K+"_filters";
const validPages=["dashboard","products","hardware","suppliers","orders","purchasing","inventory","shopify","locations","backup"];
const NAV_KEY=K+"_nav_order";
const LOCATION_KEY=K+"_active_location";
let activeLocationId=localStorage.getItem(LOCATION_KEY)||"";
const DEFAULT_NAV_PAGES=[
  ["dashboard","Dashboard"],["products","Products"],["hardware","Supplies"],
  ["suppliers","Suppliers"],["orders","Orders"],["purchasing","Purchasing"],
  ["inventory","Inventory"],["shopify","Shopify"],["locations","Locations"],["backup","Backup"]
];
let tab=validPages.includes(localStorage.getItem(PAGE_KEY))?localStorage.getItem(PAGE_KEY):"dashboard";
let pageFilters=(()=>{try{return JSON.parse(localStorage.getItem(FILTER_KEY)||"{}")}catch(e){return {}}})();
const $=x=>document.getElementById(x), uid=p=>p+"_"+Math.random().toString(36).slice(2,9);
async function openExternal(url){
  if(!url || !/^https?:\/\//i.test(url)) return;
  try{
    const r=await fetch('/api/system/open-external',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url})});
    if(!r.ok) throw new Error('Open failed');
  }catch(e){ window.open(url,'_blank','noopener,noreferrer'); }
}
document.addEventListener('click',function(e){
  const a=e.target.closest('a[href]');
  if(!a)return;
  const href=a.getAttribute('href')||'';
  if(/^https?:\/\//i.test(href)){e.preventDefault();openExternal(href);}
});

// Edge app-mode does not expose a native close event to the page. We notify the
// local server when the window disappears, then cancel that pending shutdown if
// the page immediately comes back (for example a normal reload).
let VR_SUPPRESS_WINDOW_CLOSE=false;
async function vrWindowActive(){
  try{await fetch('/api/system/window-active',{method:'POST',keepalive:true});}catch(_){ }
}
window.addEventListener('pageshow',()=>{VR_SUPPRESS_WINDOW_CLOSE=false;vrWindowActive();});
window.addEventListener('pagehide',()=>{
  if(VR_SUPPRESS_WINDOW_CLOSE)return;
  try{navigator.sendBeacon('/api/system/window-closing','');}catch(_){ }
});
vrWindowActive();

const esc=s=>String(s??"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
let VR_SYNC_CONFIG=null;
let VR_SYNC_APPLYING=false;
let VR_SYNC_PUSH_TIMER=null;
let VR_SYNC_POLL_TIMER=null;
let VR_SYNC_STATUS="Local only";

function vrSyncPayload(){return {db};}
function vrBackupPayload(){return {db,page:tab,filters:pageFilters};}
function vrScheduleSyncPush(){
  if(VR_SYNC_APPLYING||!VR_SYNC_CONFIG?.enabled||!VR_SYNC_CONFIG?.configured)return;
  clearTimeout(VR_SYNC_PUSH_TIMER);
  VR_SYNC_PUSH_TIMER=setTimeout(async()=>{
    try{
      const r=await fetch('/api/sync/push',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:vrSyncPayload()})});
      const j=await r.json();
      if(!j.ok)throw new Error(j.error||'Sync failed');
      if(j.config)VR_SYNC_CONFIG=j.config;
      VR_SYNC_STATUS='Synced';
      vrRefreshSyncBadge();
    }catch(e){VR_SYNC_STATUS='Sync error';vrRefreshSyncBadge();}
  },700);
}
function save(){
  localStorage.setItem(K,JSON.stringify(db));
  if(!SERVER_BACKUP_READY)return;
  try{fetch("/api/data/backup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(vrBackupPayload())}).catch(()=>{});}catch(_){}
  vrScheduleSyncPush();
}
function hw(id){return db.hardware.find(x=>x.id===id)} function sup(id){return db.suppliers.find(x=>x.id===id)}
function vari(hid,vid){return hw(hid)?.variants.find(x=>x.id===vid)}

function listSearch(q,selector){
  q=(q||"").trim().toLowerCase();
  let shown=0;
  document.querySelectorAll(selector).forEach(el=>{
    const ok=!q||(el.dataset.search||el.innerText||"").toLowerCase().includes(q);
    el.style.display=ok?"":"none";
    if(ok) shown++;
  });
  const empty=document.getElementById("search-empty");
  if(empty) empty.style.display=shown?"none":"block";
}
function searchBox(placeholder,selector){
  return `<div class="list-search"><input type="search" placeholder="${placeholder}" oninput="listSearch(this.value,'${selector}')"><span class="search-icon">⌕</span></div><div id="search-empty" class="search-empty">No matching items found.</div>`;
}

function ensureCreatedDates(){
  const groups=[db.products,db.hardware,db.suppliers,db.orders].filter(Array.isArray);
  groups.forEach(arr=>{
    const base=Date.now()-Math.max(0,arr.length-1)*1000;
    arr.forEach((x,i)=>{if(!x.createdAt)x.createdAt=new Date(base+i*1000).toISOString()});
  });
}
ensureCreatedDates();

function ensureVariantSizeFields(){
  const known={
    scissor1:["Scissor Snap","1 inch"],
    scissor075:["Scissor Snap","3/4 inch"],
    chicago38:["Chicago Screws","3/8 inch"],
    siderelease:["Side Release Buckle","3/4 inch"],
    dring15:["D-Ring","1 1/2 inch"],
    dringbracket05:["D-Ring Bracket Assembly","1/2 inch"],
    ring3:["Welded Ring","3 inch"],
    square15:["Square Buckle","1 1/2 inch"],
    square05:["Square Buckle","1/2 inch"],
    beltbuckle15:["Belt Buckle","1 1/2 inch"],
    velcro05:["Velcro Strip","1/2 inch"]
  };
  db.hardware.forEach(h=>{
    const k=known[h.id];
    let inheritedSize=String(h.size||"").trim();
    if(k){
      if(!inheritedSize)inheritedSize=k[1];
      if(/^\s*(?:\d|\d+\/\d+)/.test(h.name||"") || h.id==="chicago38")h.name=k[0];
    }else if(!inheritedSize){
      const m=String(h.name||"").match(/^\s*(\d+(?:\s+\d+\/\d+|\/\d+)?)(?:\s*(?:inch|inches|"))\s+(.+)$/i);
      if(m){inheritedSize=m[1]+" inch";h.name=m[2].trim()}
    }
    (h.variants||[]).forEach(v=>{
      if(v.size==null||v.size==="")v.size=inheritedSize||"";
    });
    if("size" in h)delete h.size;
  });
}
ensureVariantSizeFields();

function ensureVariantInventory(){
  db.hardware.forEach(h=>{
    const variants=h.variants||[];
    const legacy=Math.max(0,Number(h.onHand)||0);
    variants.forEach((v,i)=>{
      if(v.onHand==null){
        v.onHand=(variants.length===1)?legacy:0;
      }else{
        v.onHand=Math.max(0,Number(v.onHand)||0);
      }
    });
    // Inventory is now tracked on each variant, not on the overall supply.
    if("onHand" in h)delete h.onHand;
  });
}
ensureVariantInventory();

// ---- VETTED RESUPPLY V2.14 MULTI-LOCATION FOUNDATION ----
function ensureLocations(){
  if(!Array.isArray(db.locations)||!db.locations.length){
    db.locations=[{id:"main",name:"Main Location",active:true,createdAt:new Date().toISOString(),inventory:{},minimums:{}}];
  }
  db.locations.forEach((l,i)=>{
    if(!l.id)l.id=uid("loc");
    if(!l.name)l.name=`Location ${i+1}`;
    if(l.active==null)l.active=true;
    if(!l.createdAt)l.createdAt=new Date().toISOString();
    if(!l.inventory||typeof l.inventory!=="object")l.inventory={};
    if(!l.minimums||typeof l.minimums!=="object")l.minimums={};
  });
  const firstActive=db.locations.find(l=>l.active!==false)||db.locations[0];
  if(!activeLocationId||!db.locations.some(l=>l.id===activeLocationId&&l.active!==false)){activeLocationId=firstActive.id;localStorage.setItem(LOCATION_KEY,activeLocationId);}

  // One-time migration: preserve every existing inventory count, reorder minimum and order.
  if(Number(db.locationDataVersion||0)<1){
    const main=db.locations[0];
    db.hardware.forEach(h=>{
      if(main.minimums[h.id]==null)main.minimums[h.id]=Math.max(0,Number(h.minimum)||0);
      (h.variants||[]).forEach(v=>{
        const key=h.id+"|"+v.id;
        if(main.inventory[key]==null)main.inventory[key]=Math.max(0,Number(v.onHand)||0);
      });
    });
    (db.orders||[]).forEach(o=>{if(!o.locationId)o.locationId=main.id;});
    db.locationDataVersion=1;
  }else{
    const fallback=db.locations[0]?.id||"main";
    (db.orders||[]).forEach(o=>{if(!o.locationId)o.locationId=fallback;});
  }
}
function activeLocation(){ensureLocations();return db.locations.find(l=>l.id===activeLocationId)||db.locations[0]}
function locationName(id){return db.locations.find(l=>l.id===id)?.name||"Unknown location"}
function inventoryKey(hid,vid){return hid+"|"+vid}
function getOnHand(hid,vid,locationId=activeLocationId){
  ensureLocations();const l=db.locations.find(x=>x.id===locationId)||activeLocation();
  return Math.max(0,Number(l.inventory[inventoryKey(hid,vid)])||0);
}
function setOnHand(hid,vid,val,locationId=activeLocationId){
  ensureLocations();const l=db.locations.find(x=>x.id===locationId)||activeLocation();
  l.inventory[inventoryKey(hid,vid)]=Math.max(0,Number(val)||0);
}
function getMinimum(hid,locationId=activeLocationId){
  ensureLocations();const l=db.locations.find(x=>x.id===locationId)||activeLocation();
  return Math.max(0,Number(l.minimums[hid])||0);
}
function setMinimum(hid,val,locationId=activeLocationId){
  ensureLocations();const l=db.locations.find(x=>x.id===locationId)||activeLocation();
  l.minimums[hid]=Math.max(0,Number(val)||0);
}
function ordersForLocation(locationId=activeLocationId){ensureLocations();return (db.orders||[]).filter(o=>o.locationId===locationId)}
function switchLocation(id){
  ensureLocations();const l=db.locations.find(x=>x.id===id&&x.active!==false);if(!l)return;
  activeLocationId=id;localStorage.setItem(LOCATION_KEY,id);render();
}
function locationSelectorHtml(){
  ensureLocations();const active=db.locations.filter(l=>l.active!==false);
  return `<div class="location-switcher" title="Switch location"><span>Location</span><select onchange="switchLocation(this.value)">${active.map(l=>`<option value="${esc(l.id)}" ${l.id===activeLocationId?"selected":""}>${esc(l.name)}</option>`).join("")}</select></div>`;
}
function getNavPages(){
  let order=[];try{order=JSON.parse(localStorage.getItem(NAV_KEY)||"[]")}catch(_){order=[]}
  const valid=DEFAULT_NAV_PAGES.map(x=>x[0]);
  order=order.filter(x=>valid.includes(x));valid.forEach(x=>{if(!order.includes(x))order.push(x)});
  const labels=Object.fromEntries(DEFAULT_NAV_PAGES);return order.map(k=>[k,labels[k]]);
}
function saveNavOrder(){
  const order=[...document.querySelectorAll("#nav .nav-page-btn")].map(b=>b.dataset.page).filter(Boolean);
  localStorage.setItem(NAV_KEY,JSON.stringify(order));
}
function resetNavOrder(){localStorage.removeItem(NAV_KEY);render();}
let navDragKey="";
function navDragStart(e){navDragKey=e.currentTarget.dataset.page||"";e.currentTarget.classList.add("dragging");if(e.dataTransfer){e.dataTransfer.effectAllowed="move";e.dataTransfer.setData("text/plain",navDragKey)}}
function navDragEnd(e){e.currentTarget.classList.remove("dragging");navDragKey="";saveNavOrder();}
function navDragOver(e){
  e.preventDefault();const target=e.currentTarget;if(!navDragKey||target.dataset.page===navDragKey)return;
  const dragged=document.querySelector(`#nav .nav-page-btn[data-page="${navDragKey}"]`);if(!dragged)return;
  const r=target.getBoundingClientRect();target.parentNode.insertBefore(dragged,e.clientX<r.left+r.width/2?target:target.nextSibling);
}
ensureLocations();
save();

function fget(page,key,def=""){return pageFilters?.[page]?.[key]??def}
function fset(page,key,val){
  pageFilters[page]=pageFilters[page]||{};
  pageFilters[page][key]=val;
  localStorage.setItem(FILTER_KEY,JSON.stringify(pageFilters));
  render();
}
function sortItems(items,sort,nameFn=x=>x.name||""){
  const a=[...items];
  if(sort==="za")return a.sort((x,y)=>nameFn(y).localeCompare(nameFn(x)));
  if(sort==="newest")return a.sort((x,y)=>String(y.createdAt||"").localeCompare(String(x.createdAt||"")));
  if(sort==="oldest")return a.sort((x,y)=>String(x.createdAt||"").localeCompare(String(y.createdAt||"")));
  return a.sort((x,y)=>nameFn(x).localeCompare(nameFn(y)));
}
function filterToolbar(page,{sort=true,extra=""}={}){
  const s=fget(page,"sort","az");
  return `<div class="filter-bar">
    ${sort?`<div><label>Sort</label><select onchange="fset('${page}','sort',this.value)">
      <option value="az" ${s==="az"?"selected":""}>A → Z</option>
      <option value="za" ${s==="za"?"selected":""}>Z → A</option>
      <option value="newest" ${s==="newest"?"selected":""}>Date added — newest</option>
      <option value="oldest" ${s==="oldest"?"selected":""}>Date added — oldest</option>
    </select></div>`:""}
    ${extra}
  </div>`;
}


function activeOrders(){return ordersForLocation().filter(o=>!["Completed","Cancelled"].includes(o.status))}
function orderNeeds(orders){
  const map={};
  (orders||[]).forEach(o=>(o.items||[]).forEach(item=>{
    const p=prod(item.productId); if(!p)return;
    const overrides=item.componentOverrides||[];
    (p.components||[]).forEach((c,idx)=>{
      if(!c.hardwareId)return;
      const ov=overrides.find(x=>Number(x.componentIndex)===idx);
      if(ov && ov.include===false)return;
      const variantId=(ov&&ov.variantId)||c.variantId||"";
      const key=c.hardwareId+"|"+variantId;
      if(!map[key])map[key]={hardwareId:c.hardwareId,variantId,need:0};
      map[key].need+=(Number(c.qty)||0)*(Number(item.qty)||1);
    });
  }));
  return Object.values(map);
}
function purchaseCalc(orders){
  return orderNeeds(orders).map(r=>{
    const h=hw(r.hardwareId), v=vari(r.hardwareId,r.variantId)||{};
    const onHand=getOnHand(r.hardwareId,r.variantId);
    const shortage=Math.max(0,r.need-onHand);
    const pack=Math.max(1,Number(v.pack)||1);
    const packs=shortage?Math.ceil(shortage/pack):0;
    const buyUnits=packs*pack;
    const price=Math.max(0,Number(v.price)||0);
    return {...r,name:h?.name||"Unknown component",size:v.size||"",option:v.name||"Standard",
      onHand,shortage,pack,packs,buyUnits,price,cost:packs*price,
      sid:v.supplierId||"",url:v.url||"",sku:v.sku||"",sourceStatus:v.status||"Primary"};
  }).sort((a,b)=>(sup(a.sid)?.name||"ZZZ").localeCompare(sup(b.sid)?.name||"ZZZ")||a.name.localeCompare(b.name));
}
function calc(o){return purchaseCalc([o]).map(x=>({name:x.name,v:x.option,need:x.need,buy:x.packs,pack:x.pack,sid:x.sid,url:x.url,sku:x.sku,onHand:x.onHand,shortage:x.shortage,buyUnits:x.buyUnits,cost:x.cost}))}
function fmtMoney(n){return "$"+Number(n||0).toFixed(2)}
function setOrderStatus(id,status){const o=db.orders.find(x=>x.id===id);if(!o)return;o.status=status;save();render()}
function completeOrder(id){
  const o=db.orders.find(x=>x.id===id); if(!o||o.status==="Completed")return;
  if(!confirm("Mark this order completed and deduct its materials from inventory?"))return;
  orderNeeds([o]).forEach(r=>{const v=vari(r.hardwareId,r.variantId);if(v)setOnHand(r.hardwareId,r.variantId,Math.max(0,getOnHand(r.hardwareId,r.variantId)-r.need))});
  o.status="Completed"; o.completedAt=new Date().toISOString(); save(); render();
}
function receiveSupplier(sid){
  const rows=purchaseCalc(activeOrders()).filter(x=>x.sid===sid&&x.buyUnits>0);
  if(!rows.length)return;
  const s=sup(sid);
  if(!confirm(`Add the planned ${s?.name||"supplier"} purchase quantities to inventory as received?`))return;
  rows.forEach(x=>{const v=vari(x.hardwareId,x.variantId);if(v)setOnHand(x.hardwareId,x.variantId,getOnHand(x.hardwareId,x.variantId)+x.buyUnits)});
  save(); purchasing();
}

function extractVariantId(url){
  const m=String(url||"").match(/[?&]variant=(\d+)/i);
  return m?m[1]:"";
}
function supplierCartRows(sid){
  return purchaseCalc(activeOrders()).filter(x=>x.sid===sid&&x.packs>0);
}
function supplierCartStatus(sid){
  const s=sup(sid), rows=supplierCartRows(sid);
  if(!s||s.cartType!=="shopify")return {ready:false,reason:"Supplier cart integration not configured",missing:rows};
  const missing=rows.filter(x=>!vari(x.hardwareId,x.variantId)?.cartVariantId);
  return {ready:rows.length>0&&missing.length===0,missing,rows};
}
function buildSupplierCartUrl(sid){
  const s=sup(sid), rows=supplierCartRows(sid);
  if(!s||s.cartType!=="shopify"||!s.cartBase)return "";
  const lines=rows.map(x=>{
    const v=vari(x.hardwareId,x.variantId);
    return v?.cartVariantId?`${v.cartVariantId}:${x.packs}`:"";
  }).filter(Boolean);
  return lines.length?`${s.cartBase.replace(/\/$/,"")}/cart/${lines.join(",")}`:"";
}
function openSupplierCart(sid){
  const status=supplierCartStatus(sid), s=sup(sid);
  if(!status.ready){
    const names=status.missing.map(x=>`${x.name} (${x.option})`).join("\n");
    alert(`The ${s?.name||"supplier"} cart can't be built yet because exact cart variant IDs are missing for:\n\n${names}\n\nAdd the numeric Supplier Cart Variant ID under Supplies > Edit for those variants.`);
    return;
  }
  const url=buildSupplierCartUrl(sid);
  if(url)openExternal(url);
}

function showCartSetup(sid){
  const s=sup(sid), status=supplierCartStatus(sid), rows=status.missing||[];
  modal(`<div class="between"><h2>${esc(s?.name||"Supplier")} cart setup</h2><button onclick="closeM()">✕</button></div>
    <p>Vetted Resupply can build one combined cart only when every required supply has the supplier's <b>exact variant ID</b>.</p>
    <div class="notice"><b>What to add:</b> Go to <b>Supplies → Edit</b>, open the correct option/finish, and fill in <b>Supplier Cart Variant ID</b>. If the saved product URL contains <code>?variant=123456789</code>, the app can use that numeric value.</div>
    <h3 style="margin-top:16px">Still missing for this cart</h3>
    ${rows.length?rows.map(x=>`<div class="card"><b>${esc(x.name)}</b><div class="muted">${esc(x.option)} • ${esc(s?.name||"Supplier")}</div>
      <div class="row" style="margin-top:8px">${x.url?`<a class="btn" target="_blank" href="${esc(x.url)}">Open supplier item</a>`:"<span class='warn'>Supplier link missing</span>"}
      <button onclick="closeM();editHardware('${x.hardwareId}')">Edit supply</button></div></div>`).join(""):`<div class="card good">All required variant IDs are present.</div>`}
    <h3>How to get the ID</h3>
    <p class="muted">On the supplier site, select the exact size and finish you want. If the address changes to something like <code>...?variant=456789123</code>, copy the number after <code>variant=</code>. Paste that number into Supplier Cart Variant ID. If the supplier does not expose a stable variant ID/cart permalink, leave that supplier on Links only and use Open resupply links instead.</p>`);
}

function supplierLinkList(sid){
  const rows=supplierCartRows(sid), s=sup(sid);
  modal(`<div class="between"><h2>${esc(s?.name||"Supplier")} resupply links</h2><button onclick="closeM()">✕</button></div>
    <p class="muted">These are the exact item pages currently saved in Vetted Resupply.</p>
    ${rows.map(x=>`<div class="card between"><div><b>${x.packs} × ${esc(x.name)}</b><div class="muted">${esc(x.option)}</div></div>${x.url?`<a class="btn" target="_blank" href="${esc(x.url)}">Open item</a>`:`<span class="cart-missing">Link missing</span>`}</div>`).join("")}`);
}

function purchasing(){
  ensurePurchaseData();
  const os=activeOrders(), rows=purchaseCalc(os);
  const needBuy=rows.filter(x=>x.shortage>0), total=needBuy.reduce((a,x)=>a+x.cost,0);
  const known=needBuy.filter(x=>x.price>0).reduce((a,x)=>a+x.cost,0);
  const missingPrice=needBuy.filter(x=>!x.price).length;
  const unassigned=needBuy.filter(x=>!x.sid).length;
  const sids=[...new Set(needBuy.map(x=>x.sid||"__none"))];
  const psort=fget("purchasing","sort","az");
  $("app").innerHTML=`<div class="between"><div><h1>Purchasing</h1><p class="muted">Combined requirements from open orders at ${esc(activeLocation().name)}, minus this location's inventory on hand.</p></div><button class="primary" onclick="newOrder()">+ New order</button></div>
  ${searchBox("Search purchasing list…",".purchase-row")}
  <div class="filter-bar"><div><label>Sort supplies</label><select onchange="fset('purchasing','sort',this.value)">
    <option value="az" ${psort==="az"?"selected":""}>A → Z</option>
    <option value="za" ${psort==="za"?"selected":""}>Z → A</option>
    <option value="short" ${psort==="short"?"selected":""}>Largest shortage</option>
    <option value="cost" ${psort==="cost"?"selected":""}>Highest cost</option>
  </select></div></div>
  <div class="purchase-summary">
    <div class="purchase-stat"><div class="muted">Open orders</div><div class="big">${os.length}</div></div>
    <div class="purchase-stat"><div class="muted">Supplies to purchase</div><div class="big">${needBuy.length}</div></div>
    <div class="purchase-stat"><div class="muted">Known purchase cost</div><div class="big">${fmtMoney(known)}</div></div>
    <div class="purchase-stat"><div class="muted">Missing prices</div><div class="big">${missingPrice}</div></div>
  </div>
  ${unassigned?`<div class="notice"><b>${unassigned} item${unassigned===1?"":"s"} need a supplier assigned.</b> They will appear in Unassigned below.</div>`:""}
  ${!os.length?`<div class="card muted">No open orders. Create an order to generate a purchasing plan.</div>`:""}
  ${os.length&&!needBuy.length?`<div class="card"><h3>No purchasing required</h3><p class="muted">Current inventory covers all materials required by open orders.</p></div>`:""}
  ${sids.map(sid=>{
    let rs=needBuy.filter(x=>(x.sid||"__none")===sid), s=sid==="__none"?null:sup(sid);
    rs=rs.sort((a,b)=>psort==="za"?b.name.localeCompare(a.name):psort==="short"?b.shortage-a.shortage:psort==="cost"?b.cost-a.cost:a.name.localeCompare(b.name));
    const sub=rs.reduce((a,x)=>a+x.cost,0);
    return `<div class="card">
      <div class="supplier-head"><div><h2>${esc(s?.name||"Unassigned")}</h2><div class="muted">${rs.length} component${rs.length===1?"":"s"} • known subtotal ${fmtMoney(sub)}</div></div>
      <div class="cart-controls">
        ${s?.id==="amazon"?`<button class="primary" onclick="amazonCurate('${s.id}')">Curate Amazon cart</button>`:(s&&s.cartType==="shopify"?(supplierCartStatus(s.id).ready?`<button class="primary" onclick="openSupplierCart('${s.id}')">Open combined cart</button>`:`<button class="cart-missing" onclick="showCartSetup('${s.id}')">Cart setup needed: ${supplierCartStatus(s.id).missing.length}</button>`):"")}
        ${s?`<button onclick="supplierLinkList('${s.id}')">Open resupply links</button>`:""}
        ${s?.url?`<a class="btn" target="_blank" href="${esc(s.url)}">Open supplier</a>`:""}
        ${s?`<button onclick="receiveSupplier('${s.id}')">Receive planned purchase</button>`:""}
      </div></div>
      <div class="scroll"><table class="purchase-table"><tr><th>Component</th><th>Need</th><th>On hand</th><th>Short</th><th>Pack</th><th>Buy</th><th>Cost</th><th></th></tr>
      ${rs.map(x=>`<tr class="purchase-row" data-search="${esc((x.name+" "+x.option+" "+(s?.name||"unassigned")+" "+x.sku).toLowerCase())}">
        <td><b>${esc(x.name)}</b><div class="muted">${x.size?`${esc(x.size)} • `:""}${esc(x.option)}${inferFinish(vari(x.hardwareId,x.variantId))?` • Finish: ${esc(inferFinish(vari(x.hardwareId,x.variantId)))}`:""}${x.sku?` • ${esc(x.sku)}`:""}</div></td>
        <td>${x.need}</td><td>${x.onHand}</td><td><b>${x.shortage}</b></td><td>${x.pack}</td>
        <td><b>${x.packs} pack${x.packs===1?"":"s"}</b><div class="muted">${x.buyUnits} units</div></td>
        <td>${x.price?`<span class="money">${fmtMoney(x.cost)}</span><div class="muted">${fmtMoney(x.price)}/pack</div>`:`<span class="warn">Price needed</span>`}</td>
        <td>${x.url?`<a class="btn" target="_blank" href="${esc(x.url)}">Open item</a>`:`<span class="warn">Link needed</span>`}</td>
      </tr>`).join("")}</table></div>
    </div>`;
  }).join("")}`;
}
function ensurePurchaseData(){
  db.hardware.forEach(h=>(h.variants||[]).forEach(v=>{if(v.price==null)v.price=0;if(!v.status)v.status="Primary";}));
}


function prod(id){return db.products.find(x=>x.id===id)}
function dashboard(){
  const open=activeOrders().length;
  const low=db.hardware.reduce((n,h)=>n+(h.variants||[]).filter(v=>getOnHand(h.id,v.id)<=getMinimum(h.id)).length,0);
  const buy=purchaseCalc(activeOrders()).filter(x=>x.shortage>0).length;
  return `<div class="between"><div><h1>Dashboard</h1><div class="muted">${esc(activeLocation().name)}</div>
    </div><button class="primary" onclick="newOrder()">+ New order</button></div>
    <div class="grid">
      <div class="card dashboard-link" role="button" tabindex="0" onclick="go('orders')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();go('orders')}"><span class="muted">Open orders</span><div class="metric">${open}</div></div>
      <div class="card dashboard-link" role="button" tabindex="0" onclick="go('purchasing')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();go('purchasing')}"><span class="muted">Supplies to purchase</span><div class="metric">${buy}</div></div>
      <div class="card dashboard-link" role="button" tabindex="0" onclick="go('inventory')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();go('inventory')}"><span class="muted">Low stock</span><div class="metric">${low}</div></div>
    </div>`;
}

async function shutdownApp(){
  // Hide the UI before the local server shuts down so no disconnected/dead page is ever shown.
  const curtain=document.createElement("div");
  curtain.id="shutdown-curtain";
  curtain.style.cssText="position:fixed;inset:0;z-index:2147483647;background:#000;";
  document.documentElement.style.background="#000";
  document.body.appendChild(curtain);
  try{
    fetch("/api/system/shutdown",{method:"POST",keepalive:true}).catch(()=>{});
    setTimeout(()=>{try{window.open("","_self");window.close()}catch(_){ }},20);
  }catch(e){
    curtain.remove();
    alert("Could not shut down Vetted Resupply.");
  }
}

function go(page){
  if(!validPages.includes(page))page="dashboard";
  tab=page;
  localStorage.setItem(PAGE_KEY,tab);
  render();
}
function render(){
  ensureLocations();
  const pages=getNavPages();
  if(!validPages.includes(tab))tab="dashboard";
  $("nav").innerHTML=locationSelectorHtml()+`<div class="nav-pages">${pages.map(([key,label])=>`<button draggable="true" data-page="${key}" class="nav-page-btn ${tab===key?"active":""}" onclick="go('${key}')" ondragstart="navDragStart(event)" ondragend="navDragEnd(event)" ondragover="navDragOver(event)">${label}</button>`).join("")}</div>`;
  if(tab==="purchasing"){purchasing();return}
  if(tab==="inventory"){
    if(typeof window.v2Inventory==="function"){window.v2Inventory();return}
    return;
  }
  if(tab==="shopify"){
    if(typeof window.shopifyPage==="function"){window.shopifyPage();return}
    return;
  }
  if(tab==="backup"){
    if(typeof window.v2Backup==="function"){window.v2Backup();return}
    return;
  }
  if(tab==="locations"){locationsPage();return}
  const fn=({dashboard,products,hardware,suppliers,orders})[tab]||dashboard;
  $("app").innerHTML=fn();
}
function products(){
  const items=sortItems(db.products,fget("products","sort","az"));
  return `<div class="between"><div><h1>Products / BOMs</h1><p class="muted">Add products and required build materials</p></div><button class="primary" onclick="editProduct()">+ Add product</button></div>
  ${searchBox("Search products or materials…",".search-product")}
  ${filterToolbar("products")}
  ${items.map(p=>`<div class="card search-product" data-search="${esc((p.name+" "+p.components.map(c=>c.note||(hw(c.hardwareId)?.name||"")+" "+(vari(c.hardwareId,c.variantId)?.name||"")).join(" ")).toLowerCase())}"><div class="between"><h3>${esc(p.name)}</h3><div class="row"><button onclick="editProduct('${p.id}')">Edit BOM</button><button class="danger" onclick="deleteProduct('${p.id}')">Delete</button></div></div>${p.costToMake!=null?`<div class="pill" style="margin-bottom:10px">Cost to make: $${Number(p.costToMake).toFixed(2)}</div>`:""}${p.components.map(c=>c.note?`<div>• ${esc(c.note)}</div>`:`<div>• ${c.qty} × ${esc(hw(c.hardwareId)?.name)} <span class="muted">${esc(vari(c.hardwareId,c.variantId)?.name||"")}</span></div>`).join("")}</div>`).join("")}`;
}

function hardware(){
  const supplier=fget("hardware","supplier","");
  let items=db.hardware.filter(h=>!supplier||(h.variants||[]).some(v=>v.supplierId===supplier));
  items=sortItems(items,fget("hardware","sort","az"));
  const extra=`<div><label>Supplier</label><select onchange="fset('hardware','supplier',this.value)"><option value="">All suppliers</option>${db.suppliers.slice().sort((a,b)=>a.name.localeCompare(b.name)).map(s=>`<option value="${s.id}" ${supplier===s.id?"selected":""}>${esc(s.name)}</option>`).join("")}</select></div>`;
  return `<div class="between"><div><h1>Supplies</h1><p class="muted">Add supplies for easy resupply access. All of these can be added to your products</p></div><button class="primary" onclick="editHardware()">+ Add supply</button></div>
  ${searchBox("Search supplies, finish, size or supplier…",".search-hardware")}
  ${filterToolbar("hardware",{extra})}
  <div class="card scroll"><table><tr><th>Supply</th><th>Types</th><th></th></tr>${items.map(h=>{
    const finishes=[...new Set((h.variants||[]).map(v=>String(v.finish||"").trim()).filter(Boolean).map(x=>x.toLowerCase()))];
    return `<tr class="search-hardware" data-search="${esc((h.name+" "+h.variants.map(v=>(v.size||"")+" "+(v.finish||"")+" "+v.name+" "+(sup(v.supplierId)?.name||"")).join(" ")).toLowerCase())}"><td><b>${esc(h.name)}</b></td><td>${finishes.length?finishes.map(f=>`<span class="pill">${esc(f.replace(/\b\w/g,c=>c.toUpperCase()))}</span>`).join(" "):`<span class="muted">—</span>`}</td><td><div class="hardware-actions"><button onclick="editHardware('${h.id}')">Edit</button><button class="danger" onclick="deleteHardware('${h.id}')">Delete</button></div></td></tr>`;
  }).join("")}</table></div>`;
}

function suppliers(){
  const items=sortItems(db.suppliers,fget("suppliers","sort","az"));
  return `<div class="between"><div><h1>Suppliers</h1></div><button class="primary" onclick="editSupplier()">+ Add supplier</button></div>
  ${searchBox("Search suppliers…",".search-supplier")}
  ${filterToolbar("suppliers")}
  ${items.map(s=>`<div class="card between search-supplier" data-search="${esc((s.name+" "+s.url).toLowerCase())}"><div><b>${esc(s.name)}</b><br><span class="muted">${esc(s.url)}</span></div><button onclick="editSupplier('${s.id}')">Edit</button></div>`).join("")}`;
}

function orders(){
  const status=fget("orders","status","");
  let items=ordersForLocation().filter(o=>!status||o.status===status);
  items=sortItems(items,fget("orders","sort","newest"),x=>x.name||"");
  const extra=`<div><label>Status</label><select onchange="fset('orders','status',this.value)"><option value="">All statuses</option>${["New","Materials needed","Materials ordered","Ready to build","Completed","Cancelled"].map(s=>`<option ${status===s?"selected":""}>${s}</option>`).join("")}</select></div>`;
  return `<div class="between"><div><h1>Orders</h1><div class="muted">${esc(activeLocation().name)}</div></div><button class="primary" onclick="newOrder()">+ Add order</button></div>
  ${ordersForLocation().length?searchBox("Search orders, products or status…",".search-order"):""}
  ${ordersForLocation().length?filterToolbar("orders",{extra}):""}
  ${ordersForLocation().length?(items.length?items.map(orderCard).join(""):'<div class="card muted">No orders match this filter.</div>'):'<div class="card muted">No orders yet.</div>'}`;
}
function orderCard(o){
  let r=purchaseCalc([o]), sids=[...new Set(r.map(x=>x.sid).filter(Boolean))],
      searchText=[o.name,o.status,...(o.items||[]).map(i=>prod(i.productId)?.name||""),...r.map(x=>x.name)].join(" ");
  const productsText=(o.items||[]).map(i=>{
    const p=prod(i.productId);
    const changed=(i.componentOverrides||[]).filter(x=>x.include===false || (p?.components?.[x.componentIndex]?.variantId||"")!==x.variantId).length;
    return `${i.qty} × ${p?.name||"Unknown product"}${changed?` (${changed} material selection${changed===1?"":"s"})`:""}`;
  }).join(" • ");
  return `<div class="card search-order" data-search="${esc(searchText.toLowerCase())}">
    <div class="between"><div><h3>${esc(o.name)}${o.source==="shopify"?` <span class="pill">Shopify</span>`:""}</h3><div class="order-products">${esc(productsText)}</div></div>
      <div class="order-title-actions">
        <select class="status-select" onchange="setOrderStatus('${o.id}',this.value)">
          ${["New","Materials needed","Materials ordered","Ready to build","Completed","Cancelled"].map(s=>`<option ${o.status===s?"selected":""}>${s}</option>`).join("")}
        </select>
        <button class="danger order-delete-x" title="Delete order" onclick="deleteOrder('${o.id}')">×</button>
      </div>
    </div>
    <div class="scroll"><table><tr><th>Supply</th><th>Need</th><th>On hand</th><th>Short</th><th>Purchase</th><th>Supplier</th></tr>
      ${r.map(x=>`<tr><td><b>${esc(x.name)}</b><div class="muted">${x.size?`${esc(x.size)} • `:""}${esc(x.option)}</div></td><td>${x.need}</td><td>${x.onHand}</td><td>${x.shortage}</td>
        <td>${x.shortage?`<b>${x.packs} pack${x.packs===1?"":"s"}</b><div class="muted">${x.buyUnits} units</div>`:`<span class="good">Covered</span>`}</td>
        <td>${esc(sup(x.sid)?.name||"Unassigned")}</td></tr>`).join("")}
    </table></div>
    <div class="row" style="margin-top:12px">
      ${sids.map(s=>`<button onclick="shop('${o.id}','${s}')">Open ${esc(sup(s)?.name)} list</button>`).join("")}
      <button class="primary" onclick="go('purchasing')">Combined purchasing</button>
      ${o.status!=="Completed"&&o.status!=="Cancelled"?`<button onclick="completeOrder('${o.id}')">Complete & use inventory</button>`:""}
    </div>
  </div>`
}

function locationsPage(){
  ensureLocations();
  const active=activeLocation();
  $("app").innerHTML=`<div class="between"><div><h1>Locations</h1><p class="muted">Keep inventory, orders and purchasing separate for each business location.</p></div><button class="primary" onclick="addLocation()">+ Add location</button></div>
    <div class="notice"><b>Currently viewing:</b> ${esc(active.name)}. Products, BOMs, suppliers and supply definitions are shared company-wide. Inventory counts, reorder minimums, orders and purchasing are separated by location.</div>
    ${db.locations.map(l=>{const orderCount=(db.orders||[]).filter(o=>o.locationId===l.id).length;return `<div class="card location-card ${l.id===activeLocationId?'location-current':''}"><div class="between"><div><h3>${esc(l.name)} ${l.id===activeLocationId?'<span class="pill">Current</span>':''}${l.active===false?'<span class="pill">Archived</span>':''}</h3><div class="muted">${orderCount} order${orderCount===1?'':'s'} saved to this location</div></div><div class="row">${l.active!==false&&l.id!==activeLocationId?`<button class="primary" onclick="switchLocation('${l.id}')">Switch here</button>`:''}<button onclick="renameLocation('${l.id}')">Rename</button>${l.active===false?`<button onclick="toggleLocationArchive('${l.id}')">Restore</button>`:(db.locations.filter(x=>x.active!==false).length>1?`<button onclick="toggleLocationArchive('${l.id}')">Archive</button>`:'')}</div></div></div>`}).join('')}
    <div class="card"><h2>Navigation layout</h2><p class="muted">Drag the top menu buttons left or right into any order you prefer. Your layout is saved on this computer and does not rearrange another user's menu.</p><button onclick="resetNavOrder()">Reset menu order</button></div>`;
}
function addLocation(){
  modal(`<div class="between"><h2>Add location</h2><button onclick="closeM()">✕</button></div><label>Location name</label><input id="loc-name" placeholder="Example: Tyler Shop"><label class="custom-check" style="margin-top:14px"><input id="loc-copy" type="checkbox"> Copy current inventory counts and reorder minimums</label><p class="muted">Leave this unchecked to start the new location with zero inventory.</p><button class="primary" onclick="saveNewLocation()">Add location</button>`);
  setTimeout(()=>document.getElementById('loc-name')?.focus(),20);
}
function saveNewLocation(){
  ensureLocations();const name=String(document.getElementById('loc-name')?.value||'').trim();if(!name)return alert('Enter a location name.');
  const src=activeLocation(),copy=!!document.getElementById('loc-copy')?.checked;
  const l={id:uid('loc'),name,active:true,createdAt:new Date().toISOString(),inventory:copy?JSON.parse(JSON.stringify(src.inventory||{})):{},minimums:copy?JSON.parse(JSON.stringify(src.minimums||{})):{}};
  db.locations.push(l);activeLocationId=l.id;localStorage.setItem(LOCATION_KEY,l.id);save();closeM();render();
}
function renameLocation(id){
  const l=db.locations.find(x=>x.id===id);if(!l)return;const name=prompt('Location name:',l.name);if(name==null)return;const n=name.trim();if(!n)return;l.name=n;save();render();
}
function toggleLocationArchive(id){
  ensureLocations();const l=db.locations.find(x=>x.id===id);if(!l)return;
  if(l.active!==false){
    if(db.locations.filter(x=>x.active!==false).length<=1)return alert('At least one active location is required.');
    if(!confirm(`Archive "${l.name}"? Its inventory and orders will be kept and can be restored later.`))return;
    l.active=false;if(activeLocationId===id){activeLocationId=db.locations.find(x=>x.active!==false).id;localStorage.setItem(LOCATION_KEY,activeLocationId);}
  }else l.active=true;
  save();render();
}

function deleteOrder(id){
  const o=(db.orders||[]).find(x=>x.id===id);
  if(!o)return;

  let extra="";
  if(o.status==="Completed"){
    extra="\n\nThis order is marked Completed. Deleting it will NOT put its materials back into inventory.";
  }
  if(!confirm(`Delete "${o.name}"?\n\nThis permanently removes the order from Vetted Resupply.${extra}`))return;

  db.orders=db.orders.filter(x=>x.id!==id);
  save();
  render();
}

function modal(x){$("box").innerHTML=x;$("modal").classList.add("show")}
function closeM(){
  if(currentEditingSupplyId && $("modal").classList.contains("show")){
    clearTimeout(supplyAutosaveTimer);
    persistSupplyEditor(currentEditingSupplyId,{renderBehind:true});
    currentEditingSupplyId=null;
  }
  $("modal").classList.remove("show");
}
$("modal").addEventListener("mousedown",e=>{if(e.target===$("modal"))closeM()});
function editSupplier(id){let s=id?sup(id):{id:uid("s"),name:"",url:"",cartType:"links",cartBase:""};modal(`<div class="between"><h2>Supplier</h2><button onclick="closeM()">✕</button></div><label>Name</label><input id="sn" value="${esc(s.name)}"><label>Website</label><input id="su" value="${esc(s.url)}"><div class="grid"><div><label>Cart integration</label><select id="sct"><option value="links" ${s.cartType!=="shopify"?"selected":""}>Links only</option><option value="shopify" ${s.cartType==="shopify"?"selected":""}>Shopify cart permalink</option></select></div><div><label>Cart base URL</label><input id="scb" value="${esc(s.cartBase||"")}" placeholder="https://supplier.com"></div></div><p class="muted">For Shopify-style suppliers, Vetted Resupply can combine exact variant IDs into one preloaded cart. Amazon uses ASINs instead and is curated from the Purchasing page.</p><button class="primary" onclick="saveSupplier('${s.id}')">Save</button>`)}
function saveSupplier(id){let old=sup(id)||{},o={...old,id,createdAt:old.createdAt||new Date().toISOString(),name:$("sn").value.trim(),url:$("su").value.trim(),cartType:$("sct").value,cartBase:$("scb").value.trim()},i=db.suppliers.findIndex(x=>x.id==id);i>=0?db.suppliers[i]=o:db.suppliers.push(o);save();closeM();render()}


function syncOpenSupplyLink(input){
  const link=input.parentElement.querySelector(".open-supply-link");
  if(!link)return;
  const url=input.value.trim();
  const valid=/^https?:\/\//i.test(url);
  link.href=valid?url:"#";
  link.style.display=valid?"inline-block":"none";
}
function syncVariantSupplierFields(sel){
  const row=sel.closest(".variant"), isAmazon=sel.value==="amazon";
  const asin=row.querySelector(".asin-wrap"), cart=row.querySelector(".cartid-wrap");
  if(asin)asin.style.display=isAmazon?"":"none";
  if(cart)cart.style.display=isAmazon?"none":"";
}
function extractAmazonAsin(url){
  const s=String(url||"");
  const patterns=[
    /\/dp\/([A-Z0-9]{10})(?:[/?]|$)/i,
    /\/gp\/product\/([A-Z0-9]{10})(?:[/?]|$)/i,
    /[?&](?:asin|ASIN)=([A-Z0-9]{10})(?:&|$)/i
  ];
  for(const p of patterns){const m=s.match(p);if(m)return m[1].toUpperCase()}
  return "";
}
function amazonProductUrl(v){
  if(v?.asin)return `https://www.amazon.com/dp/${encodeURIComponent(v.asin)}`;
  return v?.url||"";
}
function amazonCurate(sid){
  const rows=supplierCartRows(sid);
  modal(`<div class="between"><div><h2>Curate Amazon buy list</h2><p class="muted">Use this page as a clean Amazon resupply checklist. Open each exact product page, add it to your cart, and adjust quantities as needed.</p></div><button onclick="closeM()">✕</button></div>
    <div class="notice"><b>Amazon note:</b> Vetted Resupply can curate the exact ASINs and quantities, but a normal Amazon consumer account does not provide the same reliable public multi-item cart permalink that Weaver uses. This screen keeps the buying list organized and gives you quick access to each exact Amazon product listing.</div>
    <div id="amazon-curated-list">
    ${rows.map((x,i)=>{
      const v=vari(x.hardwareId,x.variantId), asin=v?.asin||extractAmazonAsin(v?.url);
      return `<div class="card amazon-curate-row" data-amazon-index="${i}">
        <input class="ac-include" type="checkbox" checked>
        <div><b>${esc(x.name)}</b><div class="muted">${esc(x.option)}</div><div class="amazon-asin">${asin?`ASIN: ${esc(asin)}`:"ASIN missing"}</div></div>
        <div class="amazon-qty"><label>Qty</label><input class="ac-qty" type="number" min="1" step="1" value="${Math.max(1,Number(x.packs)||1)}"></div>
        <div class="amazon-open">${(asin||x.url)?`<a class="btn" target="_blank" href="${esc(asin?`https://www.amazon.com/dp/${asin}`:x.url)}">Open item</a>`:`<button onclick="closeM();editHardware('${x.hardwareId}')">Add ASIN</button>`}</div>
      </div>`;
    }).join("")}
    </div>
    <div class="row" style="margin-top:14px">
      <button onclick="openAmazonSelected('${sid}')">Open selected items</button>
      <a class="btn" target="_blank" href="https://www.amazon.com/gp/cart/view.html">Open Amazon cart</a>
    </div>
    <p class="muted">Tip: use the quantities shown here as your resupply guide. ASINs stay attached to each supply so the exact Amazon listing is always easy to reopen.</p>`);
}
function amazonCuratedData(sid){
  const rows=supplierCartRows(sid), cards=[...document.querySelectorAll("#amazon-curated-list .amazon-curate-row")];
  return cards.map((card,i)=>{
    const x=rows[i],v=vari(x.hardwareId,x.variantId),asin=v?.asin||extractAmazonAsin(v?.url);
    return {include:card.querySelector(".ac-include").checked,qty:Math.max(1,Number(card.querySelector(".ac-qty").value)||1),name:x.name,option:x.option,asin,url:asin?`https://www.amazon.com/dp/${asin}`:(v?.url||"")};
  }).filter(x=>x.include);
}
function openAmazonSelected(sid){
  const rows=amazonCuratedData(sid).filter(x=>x.url);
  if(!rows.length){alert("No selected Amazon items have a saved URL or ASIN yet.");return;}
  // Browsers may block many popups, so open the first item automatically and show the remaining exact links.
  openExternal(rows[0].url);
  if(rows.length>1){
    modal(`<div class="between"><h2>Remaining Amazon items</h2><button onclick="closeM()">✕</button></div><p class="muted">Your browser may block multiple automatic tabs. Open the remaining exact listings here:</p>${rows.slice(1).map(x=>`<div class="card between"><div><b>${x.qty} × ${esc(x.name)}</b><div class="muted">${esc(x.option)}${x.asin?` • ${esc(x.asin)}`:""}</div></div><a class="btn" target="_blank" href="${esc(x.url)}">Open item</a></div>`).join("")}<a class="btn" target="_blank" href="https://www.amazon.com/gp/cart/view.html">Open Amazon cart</a>`);
  }
}

function deleteProduct(id){
  const p=prod(id);
  if(!p)return;

  const usedBy=(db.orders||[]).filter(o=>(o.items||[]).some(i=>i.productId===id));
  if(usedBy.length){
    const names=usedBy.map(o=>o.name).join(", ");
    alert(`"${p.name}" can't be deleted yet because it is still used by ${usedBy.length===1?"this order":"these orders"}: ${names}.

Delete those orders first, then delete the product from the Products tab. This protects existing order and inventory calculations.`);
    return;
  }

  if(!confirm(`Delete "${p.name}" from Products?

This permanently removes the product and its BOM from Vetted Resupply. Supplies themselves will not be deleted.`))return;

  db.products=db.products.filter(x=>x.id!==id);
  if(db.shopify?.productMappings)db.shopify.productMappings=db.shopify.productMappings.filter(m=>m.productId!==id);
  save();
  render();
}

function deleteHardware(id){
  const h=hw(id);
  if(!h)return;

  const usedBy=db.products.filter(p=>(p.components||[]).some(c=>c.hardwareId===id));
  if(usedBy.length){
    const names=usedBy.map(p=>p.name).join(", ");
    alert(`"${h.name}" can't be deleted yet because it is still used in: ${names}.\n\nRemove it from those product BOMs first, then delete it from the Supplies tab.`);
    return;
  }

  if(!confirm(`Delete "${h.name}" from Supplies?\n\nThis will permanently remove the item and its supplier/variant information.`))return;

  db.hardware=db.hardware.filter(x=>x.id!==id);
  save();
  render();
}

let currentEditingSupplyId=null;
let supplyAutosaveTimer=null;

function editHardware(id){
  let h=id?hw(id):{id:uid("h"),name:"",minimum:0,fallbackFinish:"",variants:[]};
  currentEditingSupplyId=h.id;
  modal(`<div class="between"><div><h2>Supply</h2><div id="supply-save-status" class="muted" style="font-size:13px">Changes save automatically</div></div><button onclick="closeM()">✕</button></div>
    <div class="grid">
      <div><label>Name</label><input id="hn" value="${esc(h.name)}" placeholder="Belt Buckle"><div class="muted" style="margin-top:4px">Keep the supply name simple. Size, finish and inventory are tracked on each option below.</div></div>
      <div><label>Fallback finish</label><input id="hfallback" list="finish-fallback-options" value="${esc(h.fallbackFinish||"")}" placeholder="None"><datalist id="finish-fallback-options"><option value="Black"><option value="Brass"><option value="Silver"><option value="Copper"><option value="Antiqued Copper">${(h.variants||[]).map(v=>v.finish).filter(Boolean).filter((x,i,a)=>a.findIndex(y=>String(y).toLowerCase()===String(x).toLowerCase())===i).map(x=>`<option value="${esc(x)}">`).join("")}</datalist><div class="muted" style="margin-top:4px">Optional. If an order requests a finish this supply does not have, Vetted Resupply will use this finish instead. Leave blank to require an exact match.</div></div>
    </div>
    <h3 style="margin-top:16px">Colors / finishes / options</h3>
    <div id="vars">${h.variants.map(v=>varRow(v,h.id)).join("")}</div>
    <button onclick="addVar()">+ Add option</button><br><br>
    <button class="primary" onclick="saveHardware('${h.id}')">Save & close</button>`);
  setupSupplyAutosave(h.id);
}

function varRow(v={},hid=currentEditingSupplyId){
  return `<div class="variant" data-vid="${esc(v.id||"")}"><label>Option / finish</label><input class="vn" value="${esc(v.name||"Standard")}" placeholder="Antique Copper"><label>Supplier</label><select class="vs" onchange="syncVariantSupplierFields(this)"><option value="">Unassigned</option>${db.suppliers.map(s=>`<option value="${s.id}" ${v.supplierId==s.id?"selected":""}>${esc(s.name)}</option>`).join("")}</select><div class="grid"><div><label>Pack size</label><input class="vp" type="number" min="1" value="${v.pack||1}" onfocus="this.select()"></div><div><label>Price per pack</label><div class="money-input"><span class="currency-symbol">$</span><input class="vprice" type="text" inputmode="decimal" value="${Number(v.price||0).toFixed(2)}" placeholder="0.00" onfocus="this.select()" onblur="formatMoneyInput(this)"></div></div></div><div class="grid"><div><label>Source status</label><select class="vstatus"><option ${v.status==="Primary"||!v.status?"selected":""}>Primary</option><option ${v.status==="Backup"?"selected":""}>Backup</option><option ${v.status==="Inactive"?"selected":""}>Inactive</option></select></div><div><label>SKU</label><input class="vsku" value="${esc(v.sku||"")}"></div></div><div class="grid"><div><label>Hardware finish</label><input class="vfinish" value="${esc(v.finish||"")}" placeholder="Black, Brass, Antiqued Copper, Copper..."></div><div><label>Size</label><input class="vsize" value="${esc(v.size||"")}" placeholder="Example: 3/8 inch"></div><div><label>On hand</label><input class="vonhand" type="number" min="0" step="1" value="${v.id?getOnHand(hid,v.id):(Number(v.onHand)||0)}" placeholder="0" onfocus="this.select()"></div></div><div class="grid"><div>
    <div class="cartid-wrap" style="${v.supplierId==="amazon"?"display:none":""}"><label>Supplier Cart Variant ID</label><input class="vcartid" value="${esc(v.cartVariantId||"")}" placeholder="Example: 40929206370444"><div class="muted" style="margin-top:4px">Usually the number after ?variant= in the exact supplier URL.</div></div>
    <div class="asin-wrap" style="${v.supplierId==="amazon"?"":"display:none"}"><label>Amazon ASIN</label><input class="vasin" value="${esc(v.asin||"")}" placeholder="Example: B0XXXXXXXX"><div class="muted" style="margin-top:4px">The 10-character Amazon product ID. Vetted Resupply can extract it automatically from many full Amazon product URLs.</div></div>
  </div><div><label>Supplier product link</label><input class="vu" value="${esc(v.url||"")}" placeholder="https://..." oninput="syncOpenSupplyLink(this)"><div class="row" style="margin-top:8px"><a class="btn open-supply-link" target="_blank" rel="noopener noreferrer" href="${esc(v.url||"#")}" style="${v.url?"":"display:none"}">Open supplier link ↗</a></div></div></div><br>
  <div class="option-actions"><button onclick="duplicateVar(this)">Duplicate option</button><button class="danger" onclick="this.closest('.variant').remove();queueSupplyAutosave()">Remove option</button></div></div>`;
}

function formatMoneyInput(input){
  if(!input)return;
  let raw=String(input.value||"").replace(/[^0-9.]/g,"");
  const firstDot=raw.indexOf(".");
  if(firstDot>=0)raw=raw.slice(0,firstDot+1)+raw.slice(firstDot+1).replace(/\./g,"");
  const n=Math.max(0,Number(raw)||0);
  input.value=n.toFixed(2);
  queueSupplyAutosave();
}

function duplicateVar(btn){
  const row=btn.closest(".variant");
  if(!row)return;
  const copy={
    name:row.querySelector(".vn")?.value.trim()||"Standard",
    supplierId:row.querySelector(".vs")?.value||"",
    pack:Math.max(1,Number(row.querySelector(".vp")?.value)||1),
    price:Math.max(0,Number(String(row.querySelector(".vprice")?.value||"0").replace(/[^0-9.]/g,""))||0),
    status:row.querySelector(".vstatus")?.value||"Primary",
    finish:row.querySelector(".vfinish")?.value.trim()||"",
    size:row.querySelector(".vsize")?.value.trim()||"",
    onHand:Math.max(0,Number(row.querySelector(".vonhand")?.value)||0),
    asin:row.querySelector(".vasin")?.value.trim().toUpperCase()||"",
    cartVariantId:row.querySelector(".vcartid")?.value.trim()||"",
    sku:row.querySelector(".vsku")?.value.trim()||"",
    url:row.querySelector(".vu")?.value.trim()||""
  };
  row.insertAdjacentHTML("afterend",varRow(copy,currentEditingSupplyId));
  queueSupplyAutosave();
}

function addVar(){
  $("vars").insertAdjacentHTML("beforeend",varRow({},currentEditingSupplyId));
  queueSupplyAutosave();
}

function collectSupplyFromEditor(id){
  const old=hw(id);
  const rows=[...document.querySelectorAll("#vars .variant")];
  const vs=rows.map(v=>{
    if(!v.dataset.vid)v.dataset.vid=uid("v");
    const url=v.querySelector(".vu").value.trim();
    let asin=v.querySelector(".vasin")?.value.trim().toUpperCase()||"";
    if(!asin && v.querySelector(".vs").value==="amazon")asin=extractAmazonAsin(url);
    return {
      id:v.dataset.vid,
      name:v.querySelector(".vn").value.trim()||"Standard",
      supplierId:v.querySelector(".vs").value,
      pack:+v.querySelector(".vp").value||1,
      price:Math.max(0,Number(String(v.querySelector(".vprice").value||"0").replace(/[^0-9.]/g,""))||0),
      status:v.querySelector(".vstatus").value||"Primary",
      finish:v.querySelector(".vfinish").value.trim(),
      size:v.querySelector(".vsize")?.value.trim()||"",
      onHand:Math.max(0,Number(v.querySelector(".vonhand")?.value)||0),
      asin,
      cartVariantId:v.querySelector(".vcartid")?.value.trim()||"",
      sku:v.querySelector(".vsku").value.trim(),
      url
    };
  });
  return {
    id,
    name:$("hn").value.trim(),
    createdAt:old?.createdAt||new Date().toISOString(),
    category:old?.category||"Hardware",
    minimum:+old?.minimum||0,
    fallbackFinish:$("hfallback")?.value.trim()||"",
    variants:vs.length?vs:[{id:"std",name:"Standard",size:"",onHand:0,supplierId:"",pack:1,price:0,status:"Primary",url:"",sku:"",asin:"",cartVariantId:""}]
  };
}

function persistSupplyEditor(id,{renderBehind=false}={}){
  if(!$("hn"))return false;
  const o=collectSupplyFromEditor(id);
  // For a brand-new supply, wait until a name exists before creating it in the catalog.
  const existingIndex=db.hardware.findIndex(x=>x.id===id);
  if(existingIndex<0 && !o.name)return false;
  if(existingIndex>=0)db.hardware[existingIndex]=o;
  else db.hardware.push(o);
  o.variants.forEach(v=>setOnHand(id,v.id,v.onHand));
  save();
  if(renderBehind)render();
  return true;
}

function setupSupplyAutosave(id){
  const box=$("box");
  const handler=e=>{
    if(!e.target.closest("input,select"))return;
    queueSupplyAutosave(id);
  };
  box.addEventListener("input",handler);
  box.addEventListener("change",handler);
}

function queueSupplyAutosave(id=currentEditingSupplyId){
  clearTimeout(supplyAutosaveTimer);
  const status=$("supply-save-status");
  if(status)status.textContent="Saving…";
  supplyAutosaveTimer=setTimeout(()=>{
    const saved=persistSupplyEditor(id,{renderBehind:true});
    const s=$("supply-save-status");
    if(s)s.textContent=saved?"Saved automatically":"Enter a supply name to start autosaving";
  },300);
}

function saveHardware(id){
  clearTimeout(supplyAutosaveTimer);
  persistSupplyEditor(id,{renderBehind:false});
  currentEditingSupplyId=null;
  closeM();
  render();
}

function editProduct(id){let p=id?db.products.find(x=>x.id==id):{id:uid("p"),name:"",components:[]};modal(`<div class="between"><h2>Product BOM</h2><button onclick="closeM()">✕</button></div><label>Product name</label><input id="pn" value="${esc(p.name)}"><h3 style="margin-top:16px">Components</h3><div id="comps">${p.components.map(compRow).join("")}</div><button onclick="addComp()">+ Add component</button><br><br><button class="primary" onclick="saveProduct('${p.id}')">Save product</button>`)}
function compRow(c={}){return `<div class="comp"><label>Supply</label><select class="ch" onchange="fillVars(this)"><option value="">Consumable / note</option>${db.hardware.map(h=>`<option value="${h.id}" ${c.hardwareId==h.id?"selected":""}>${esc(h.name)}</option>`).join("")}</select><label>Option</label><select class="cv">${c.hardwareId?(hw(c.hardwareId)?.variants||[]).map(v=>`<option value="${v.id}" ${c.variantId==v.id?"selected":""}>${esc(v.name)}${v.size?` — ${esc(v.size)}`:""}</option>`).join(""):""}</select><label>Quantity</label><input class="cq" type="number" min="0" value="${c.qty||1}"><label>Note (used if no hardware selected)</label><input class="cn" value="${esc(c.note||"")}" placeholder="Thread"><button class="danger" onclick="this.parentElement.remove()">Remove</button></div>`}
function addComp(){$("comps").insertAdjacentHTML("beforeend",compRow())}
function fillVars(s){let v=s.parentElement.querySelector(".cv"),h=hw(s.value);v.innerHTML=(h?.variants||[]).map(x=>`<option value="${x.id}">${esc(x.name)}${x.size?` — ${esc(x.size)}`:""}</option>`).join("")}
function saveProduct(id){let cs=[...document.querySelectorAll(".comp")].map(r=>{let h=r.querySelector(".ch").value;return h?{hardwareId:h,variantId:r.querySelector(".cv").value,qty:+r.querySelector(".cq").value||1}:{note:r.querySelector(".cn").value.trim()||"Material"}});let old=db.products.find(x=>x.id==id),o={id,name:$("pn").value.trim(),createdAt:old?.createdAt||new Date().toISOString(),components:cs},i=db.products.findIndex(x=>x.id==id);i>=0?db.products[i]=o:db.products.push(o);save();closeM();render()}
function newOrder(){
  modal(`<div class="between"><div><h2>New order</h2><div class="muted">${esc(activeLocation().name)}</div></div><button onclick="closeM()">✕</button></div>
    <label>Order # / name</label><input id="on" placeholder="#1001">
    <div id="ois"></div>
    <button onclick="addOI()">+ Add product</button><br><br>
    <button class="primary" onclick="saveOrder()">Generate materials</button>`);
  addOI()
}

function inferFinish(v){
  if(v?.finish)return v.finish;
  const n=String(v?.name||"").toLowerCase();
  if(n.includes("black"))return "Black";
  if(n.includes("brass")||n.includes("gold"))return "Brass";
  if(n.includes("copper"))return "Copper";
  if(n.includes("chrome")||n.includes("stainless")||n.includes("nickel"))return "Silver";
  return "";
}
function availableProductFinishes(productId){
  const p=prod(productId), s=new Set(); if(!p)return ["Default"];
  (p.components||[]).forEach(c=>(hw(c.hardwareId)?.variants||[]).forEach(v=>{const f=inferFinish(v);if(f)s.add(f)}));
  return ["Default",...["Black","Brass","Antiqued Copper","Copper","Silver"].filter(x=>s.has(x)),...[...s].filter(x=>!["Black","Brass","Antiqued Copper","Copper","Silver"].includes(x)).sort()];
}
function matchingVariant(hid,finish,currentId){
  const vars=(hw(hid)?.variants||[]).filter(v=>v.status!=="Inactive");
  if(!finish||finish==="Default")return vars.find(v=>v.id===currentId)||vars[0];
  return vars.find(v=>inferFinish(v).toLowerCase()===finish.toLowerCase())||configuredFallbackVariant(hid)||vars.find(v=>v.id===currentId)||vars[0];
}
function updateSourcePreview(control){
  if(!control)return;
  const row=control.closest(".custom-row"), idx=+row.dataset.componentIndex, item=row.closest(".order-item");
  const c=prod(item.querySelector(".op").value)?.components?.[idx], v=vari(c?.hardwareId,control.value);
  const p=row.querySelector(".source-note"); if(p)p.textContent=v?.sourceNote||"";
}
function applyProductFinish(sel){
  const item=sel.closest(".order-item"), finish=sel.value; let changed=0,unmatched=0;
  item.querySelectorAll(".custom-row").forEach(row=>{
    const idx=+row.dataset.componentIndex,p=prod(item.querySelector(".op").value),c=p?.components?.[idx],control=row.querySelector(".cv-order");
    if(!c?.hardwareId||!control)return;
    const v=matchingVariant(c.hardwareId,finish,control.value||c.variantId); if(!v)return;
    const warn=row.querySelector(".variant-warning");
    if(finish!=="Default"&&inferFinish(v).toLowerCase()!==finish.toLowerCase()){
      const approved=String(hw(c.hardwareId)?.fallbackFinish||"").trim();
      if(approved && inferFinish(v).toLowerCase()===approved.toLowerCase()){warn.textContent=`${finish} unavailable — using ${approved} fallback.`;}
      else{unmatched++;warn.textContent=`No ${finish} source saved — keeping ${v.name}.`;}
    }
    else{warn.textContent="";if(control.value!==v.id){control.value=v.id;changed++}updateSourcePreview(control)}
  });
  item.querySelector(".finish-result").textContent=finish==="Default"?"Using each BOM's default hardware selections.":`${finish} applied to ${changed} selection${changed===1?"":"s"}.${unmatched?` ${unmatched} item${unmatched===1?"":"s"} have no saved ${finish} source yet.`:""}`;
}

function productComponentControls(productId,existing=[]){
  const p=prod(productId); if(!p)return "";
  const rows=(p.components||[]).map((c,idx)=>{
    if(!c.hardwareId)return "";
    const h=hw(c.hardwareId), vars=h?.variants||[];
    const old=existing.find(x=>Number(x.componentIndex)===idx)||{};
    const include=old.include!==false;
    const selected=old.variantId||c.variantId||vars[0]?.id||"";
    return `<div class="custom-row ${include?"":"removed"}" data-component-index="${idx}">
      <div><b>${esc(h?.name||"Component")}</b><div class="muted">${Number(c.qty)||0} per product</div></div>
      <label class="custom-check"><input class="ci" type="checkbox" ${include?"checked":""} onchange="syncHardwareRow(this)"> Include</label>
      <div>${vars.length>1
        ? `<select class="cv-order" onchange="updateSourcePreview(this)">${vars.map(v=>`<option value="${v.id}" ${v.id===selected?"selected":""}>${esc(v.name)}${v.size?` — ${esc(v.size)}`:""}</option>`).join("")}</select>`
        : `<span class="pill">${esc(vars.find(v=>v.id===selected)?.name||vars[0]?.name||"Standard")}</span><input class="cv-order" type="hidden" value="${esc(selected)}">`
      }<div class="source-note">${esc(vars.find(v=>v.id===selected)?.sourceNote||"")}</div><div class="variant-warning"></div></div>
      <div class="custom-actions">
        <button type="button" class="danger hardware-remove-btn" title="Remove this hardware from this order item" onclick="removeHardwareFromOrder(this)">×</button>
        <button type="button" class="restore-hardware-btn" onclick="restoreHardwareToOrder(this)">Restore</button>
      </div>
    </div>`;
  }).filter(Boolean).join("");
  const finishes=availableProductFinishes(productId);
  return rows?`<div class="customization-box"><div class="finish-bar"><div><label>Hardware finish</label><select class="product-finish" onchange="applyProductFinish(this)">${finishes.map(f=>`<option>${esc(f)}</option>`).join("")}</select></div><div class="finish-result">Choose a finish to preselect every compatible hardware item. Individual items can still be adjusted below.</div></div><h4 style="margin-top:14px">Material selections</h4><div class="muted">Review or override the preselected hardware for this specific product.</div>${rows}</div>`:"";
}

function syncHardwareRow(input){
  const row=input.closest(".custom-row");
  row.classList.toggle("removed",!input.checked);
}
function removeHardwareFromOrder(btn){
  const row=btn.closest(".custom-row");
  const cb=row.querySelector(".ci");
  cb.checked=false;
  syncHardwareRow(cb);
}
function restoreHardwareToOrder(btn){
  const row=btn.closest(".custom-row");
  const cb=row.querySelector(".ci");
  cb.checked=true;
  syncHardwareRow(cb);
}

function orderItemRow(productId,qty=1,overrides=[]){
  const pid=productId||db.products[0]?.id||"";
  return `<div class="order-item">
    <div class="order-item-top">
      <div><label>Product</label><select class="op" onchange="refreshOrderItem(this)">${db.products.map(p=>`<option value="${p.id}" ${p.id===pid?"selected":""}>${esc(p.name)}</option>`).join("")}</select></div>
      <div><label>Qty</label><input class="oq" type="number" min="1" value="${qty||1}"></div>
      <button class="danger remove-order-item" title="Remove product" onclick="this.closest('.order-item').remove()">×</button>
    </div>
    <div class="order-customs">${productComponentControls(pid,overrides)}</div>
  </div>`;
}
function addOI(productId,qty=1,overrides=[]){$("ois").insertAdjacentHTML("beforeend",orderItemRow(productId,qty,overrides))}
function refreshOrderItem(sel){
  const row=sel.closest(".order-item");
  row.querySelector(".order-customs").innerHTML=productComponentControls(sel.value,[]);
}
function saveOrder(){
  const items=[...document.querySelectorAll("#ois .order-item")].map(r=>{
    const productId=r.querySelector(".op").value;
    const qty=+r.querySelector(".oq").value||1;
    const componentOverrides=[...r.querySelectorAll(".custom-row")].map(cr=>({
      componentIndex:+cr.dataset.componentIndex,
      include:cr.querySelector(".ci").checked,
      variantId:cr.querySelector(".cv-order")?.value||""
    }));
    return {productId,qty,hardwareFinish:r.querySelector('.product-finish')?.value||'Default',componentOverrides};
  });
  if(!items.length){alert("Add at least one product to the order.");return}
  db.orders.unshift({id:uid("o"),name:$("on").value.trim()||"Manual order",createdAt:new Date().toISOString(),status:"Materials needed",locationId:activeLocationId,items});
  save();closeM();go("orders")
}
function shop(oid,sid){
  let o=db.orders.find(x=>x.id==oid),r=purchaseCalc([o]).filter(x=>x.sid==sid&&x.shortage>0),s=sup(sid);
  modal(`<div class="between"><h2>${esc(s.name)} order list</h2><button onclick="closeM()">✕</button></div>
    ${r.length?r.map(x=>`<div class="card between"><div><b>${x.packs} pack${x.packs===1?"":"s"} × ${esc(x.name)}</b><br>
    <span class="muted">${esc(x.option)} • need ${x.need} • on hand ${x.onHand} • short ${x.shortage} • ${x.pack}/pack${x.price?` • est. ${fmtMoney(x.cost)}`:""}${x.sku?` • SKU ${esc(x.sku)}`:""}</span></div>
    ${x.url?`<a class="btn" href="${esc(x.url)}" target="_blank">Open item</a>`:`<span class="muted">Add product link</span>`}</div>`).join(""):`<div class="card muted">Inventory covers this supplier's items for this order.</div>`}
    ${s.url?`<a class="btn" href="${esc(s.url)}" target="_blank">Open ${esc(s.name)}</a>`:""}`)
}

function ensureFinishSources(){
  db.hardware.forEach(h=>{if(h.fallbackFinish==null)h.fallbackFinish="";(h.variants||[]).forEach(v=>{if(!v.finish)v.finish=inferFinish(v);if(v.sourceNote==null)v.sourceNote=""});});
  const sq=hw("square15");
  if(sq){
    const brass=sq.variants.find(v=>v.id==="primary")||sq.variants[0];
    if(brass){brass.name="Brass — Weaver";brass.finish="Brass";brass.status="Primary";brass.sourceNote='1-1/2" / Solid Brass';}
    const black=sq.variants.find(v=>v.id==="backup");
    if(black){black.name="Black — Ivan";black.finish="Black";black.status="Primary";black.url="https://www.ivan.tw/products/rectangle-center-bar-roller-buckles";black.sku='38mm / MBK';black.sourceNote='Black preselected in Vetted Resupply — on supplier page select 38mm (1-1/2") + MBK (Matte Black)';}
  }
  const sc=hw("scissor1");
  if(sc){
    const brass=sc.variants[0];if(brass){brass.name="Solid Brass — Weaver";brass.finish="Brass";brass.sourceNote='1" / Solid Brass';}
    if(!sc.variants.some(v=>v.id==="stainless"))sc.variants.push({id:"stainless",name:"Stainless Steel — Weaver",finish:"Silver",supplierId:"weaver",url:"https://www.weaverleathersupply.com/products/5015-square-scissor-snap",sku:'1" / SS',pack:1,price:0,status:"Primary",sourceNote:'On supplier page select 1" + Stainless Steel'});
  }
  const studs=hw("buttonstud");if(studs)studs.variants.forEach(v=>{v.finish="Brass";v.sourceNote="Supplier calls this Gold; Vetted Resupply treats it as Brass. Do not purchase Black."});
  save();
}
ensureFinishSources();



function ensureAmazonAsins(){
  const a=sup("amazon");
  if(a){a.cartType="amazon";a.cartBase="https://www.amazon.com";}
  db.hardware.forEach(h=>(h.variants||[]).forEach(v=>{
    if(v.supplierId==="amazon"){
      if(v.asin==null||!v.asin)v.asin=extractAmazonAsin(v.url);
      // Amazon does not use the Shopify cart variant ID field.
      v.cartVariantId="";
    }else if(v.asin==null){
      v.asin="";
    }
  }));
  save();
}
ensureAmazonAsins();

function ensureCartIntegration(){
  db.hardware.forEach(h=>(h.variants||[]).forEach(v=>{
    if(v.cartVariantId==null)v.cartVariantId=extractVariantId(v.url);
  }));
  // These suppliers use variant-style product URLs already stored in Vetted Resupply.
  // The cart integration remains editable in Suppliers.
  const configs={
    weaver:{cartType:"shopify",cartBase:"https://www.weaverleathersupply.com"},
    ivan:{cartType:"shopify",cartBase:"https://www.ivan.tw"},
    rml:{cartType:"shopify",cartBase:"https://www.rmleathersupply.com"}
  };
  Object.entries(configs).forEach(([id,c])=>{
    const s=sup(id); if(s){if(!s.cartType||s.cartType==="links")s.cartType=c.cartType;if(!s.cartBase)s.cartBase=c.cartBase}
  });
  save();
}
ensureCartIntegration();


// ---- VETTED RESUPPLY V2.8 SHOPIFY FOUNDATION ----
function ensureShopifyFoundation(){
  db.shopify=db.shopify||{};
  const s=db.shopify;
  if(s.storeDomain==null)s.storeDomain="";
  if(s.connectionStatus==null)s.connectionStatus="Not connected";
  if(!Array.isArray(s.importedOrderIds))s.importedOrderIds=[];
  if(!Array.isArray(s.productMappings))s.productMappings=[];
  if(!Array.isArray(s.optionMappings))s.optionMappings=[];

  // Seed one confirmed product mapping from the user's Shopify example only if no mapping exists yet.
  if(!s.productMappings.length && prod("radio")){
    s.productMappings.push({
      id:uid("spm"),
      shopifyTitle:"Radio Strap and Bucket Deluxe",
      productId:"radio"
    });
  }

  // Seed reusable Easify property rules. These remain editable.
  const hasRule=name=>s.optionMappings.some(r=>String(r.propertyName||"").toLowerCase()===name.toLowerCase());
  if(!hasRule("Hardware Type")){
    s.optionMappings.push({
      id:uid("som"),
      propertyName:"Hardware Type",
      action:"hardware_finish",
      targetHardwareId:"",
      aliases:[
        {from:"Antiqued copper",to:"Antiqued Copper"},
        {from:"Black",to:"Black"},
        {from:"Brass",to:"Brass"},
        {from:"Silver",to:"Silver"}
      ]
    });
  }
  // V2.9.7 migration: keep Antiqued Copper hardware distinct from solid Copper rivets.
  const hardwareTypeRule=s.optionMappings.find(r=>String(r.propertyName||"").toLowerCase()==="hardware type");
  if(hardwareTypeRule){
    hardwareTypeRule.aliases=hardwareTypeRule.aliases||[];
    const antiqueAlias=hardwareTypeRule.aliases.find(a=>String(a.from||"").trim().toLowerCase()==="antiqued copper");
    if(antiqueAlias && String(antiqueAlias.to||"").trim().toLowerCase()==="copper") antiqueAlias.to="Antiqued Copper";
    else if(!antiqueAlias) hardwareTypeRule.aliases.push({from:"Antiqued copper",to:"Antiqued Copper"});
  }

  if(!hasRule("Rivet type")){
    s.optionMappings.push({
      id:uid("som"),
      propertyName:"Rivet type",
      action:"supply_variant",
      targetHardwareId:"rivetburr",
      aliases:[
        {from:"Copper",to:"Copper"},
        {from:"Brass",to:"Brass"},
        {from:"Black",to:"Black"}
      ]
    });
  }
  ["Size","Color of Leather","Color Of Stitching"].forEach(name=>{
    if(!hasRule(name))s.optionMappings.push({
      id:uid("som"),
      propertyName:name,
      action:"reference",
      targetHardwareId:"",
      aliases:[]
    });
  });
  save();
}
ensureShopifyFoundation();

function normalizedShopifyText(v){return String(v??"").trim().toLowerCase()}
function shopifyProductMapping(title){
  const t=normalizedShopifyText(title);
  return (db.shopify?.productMappings||[]).find(m=>normalizedShopifyText(m.shopifyTitle)===t)
      ||(db.shopify?.productMappings||[]).find(m=>t.includes(normalizedShopifyText(m.shopifyTitle))||normalizedShopifyText(m.shopifyTitle).includes(t));
}
function shopifyPropertyValue(properties,name){
  const key=normalizedShopifyText(name);
  if(Array.isArray(properties)){
    const x=properties.find(p=>normalizedShopifyText(p.name||p.key)===key);
    return x?.value??"";
  }
  const hit=Object.keys(properties||{}).find(k=>normalizedShopifyText(k)===key);
  return hit?properties[hit]:"";
}
function shopifyAliasValue(rule,raw){
  const r=normalizedShopifyText(raw);
  const hit=(rule.aliases||[]).find(a=>normalizedShopifyText(a.from)===r);
  return hit?.to||String(raw||"").trim();
}
function exactVariantForMappedValue(hardwareId,value){
  const h=hw(hardwareId), wanted=normalizedShopifyText(value);
  if(!h||!wanted)return null;
  const vars=(h.variants||[]).filter(v=>v.status!=="Inactive");
  return vars.find(v=>normalizedShopifyText(v.finish)===wanted)
      || vars.find(v=>normalizedShopifyText(v.name)===wanted)
      || null;
}
function configuredFallbackVariant(hardwareId){
  const h=hw(hardwareId);
  const finish=String(h?.fallbackFinish||"").trim();
  if(!finish)return null;
  return exactVariantForMappedValue(hardwareId,finish);
}
function bestVariantForMappedValue(hardwareId,value,currentVariantId){
  const h=hw(hardwareId);
  if(!h)return null;
  const exact=exactVariantForMappedValue(hardwareId,value);
  if(exact)return exact;
  const vars=(h.variants||[]).filter(v=>v.status!=="Inactive");
  return vars.find(v=>v.id===currentVariantId)||vars[0]||null;
}
function mapShopifyLineItem(title,qty,properties={}){
  const pm=shopifyProductMapping(title);
  if(!pm)return {ok:false,error:`No Vetted Resupply product mapping for "${title}".`,title,qty,properties};
  const p=prod(pm.productId);
  if(!p)return {ok:false,error:`Mapped Vetted product no longer exists for "${title}".`,title,qty,properties};

  const overrides=(p.components||[]).map((c,componentIndex)=>({
    componentIndex,
    include:true,
    variantId:c.variantId||hw(c.hardwareId)?.variants?.[0]?.id||""
  }));

  let hardwareFinish="Default";
  const applied=[];
  const supplyIssuesByComponent=new Map();
  const supplyFallbacksByComponent=new Map();
  (db.shopify?.optionMappings||[]).forEach(rule=>{
    const raw=shopifyPropertyValue(properties,rule.propertyName);
    if(raw===""||raw==null)return;
    const mapped=shopifyAliasValue(rule,raw);

    if(rule.action==="hardware_finish"){
      hardwareFinish=mapped||"Default";
      (p.components||[]).forEach((c,idx)=>{
        if(!c.hardwareId)return;
        const current=overrides[idx]?.variantId||c.variantId;
        const exact=exactVariantForMappedValue(c.hardwareId,mapped);
        if(exact){
          overrides[idx].variantId=exact.id;
          supplyIssuesByComponent.delete(idx);
          supplyFallbacksByComponent.delete(idx);
        }else{
          const approvedFallback=configuredFallbackVariant(c.hardwareId);
          if(approvedFallback){
            overrides[idx].variantId=approvedFallback.id;
            supplyIssuesByComponent.delete(idx);
            supplyFallbacksByComponent.set(idx,{
              componentIndex:idx, hardwareId:c.hardwareId, requested:mapped,
              fallbackFinish:inferFinish(approvedFallback)||hw(c.hardwareId)?.fallbackFinish||approvedFallback.name,
              fallbackVariantId:approvedFallback.id, propertyName:rule.propertyName, rawValue:raw
            });
          }else{
            const fallback=bestVariantForMappedValue(c.hardwareId,mapped,current);
            if(fallback)overrides[idx].variantId=fallback.id;
            supplyFallbacksByComponent.delete(idx);
            supplyIssuesByComponent.set(idx,{
              componentIndex:idx,
              hardwareId:c.hardwareId,
              requested:mapped,
              propertyName:rule.propertyName,
              rawValue:raw,
              fallbackVariantId:fallback?.id||current||""
            });
          }
        }
      });
      applied.push(`${rule.propertyName}: ${raw} → hardware finish ${mapped}`);
    }else if(rule.action==="supply_variant" && rule.targetHardwareId){
      (p.components||[]).forEach((c,idx)=>{
        if(c.hardwareId!==rule.targetHardwareId)return;
        const current=overrides[idx]?.variantId||c.variantId;
        const exact=exactVariantForMappedValue(c.hardwareId,mapped);
        if(exact){
          overrides[idx].variantId=exact.id;
          supplyIssuesByComponent.delete(idx);
          supplyFallbacksByComponent.delete(idx);
        }else{
          const approvedFallback=configuredFallbackVariant(c.hardwareId);
          if(approvedFallback){
            overrides[idx].variantId=approvedFallback.id;
            supplyIssuesByComponent.delete(idx);
            supplyFallbacksByComponent.set(idx,{
              componentIndex:idx, hardwareId:c.hardwareId, requested:mapped,
              fallbackFinish:inferFinish(approvedFallback)||hw(c.hardwareId)?.fallbackFinish||approvedFallback.name,
              fallbackVariantId:approvedFallback.id, propertyName:rule.propertyName, rawValue:raw
            });
          }else{
            const fallback=bestVariantForMappedValue(c.hardwareId,mapped,current);
            if(fallback)overrides[idx].variantId=fallback.id;
            supplyFallbacksByComponent.delete(idx);
            supplyIssuesByComponent.set(idx,{
              componentIndex:idx,
              hardwareId:c.hardwareId,
              requested:mapped,
              propertyName:rule.propertyName,
              rawValue:raw,
              fallbackVariantId:fallback?.id||current||""
            });
          }
        }
      });
      applied.push(`${rule.propertyName}: ${raw} → ${hw(rule.targetHardwareId)?.name||"supply"} ${mapped}`);
    }else if(rule.action==="reference"){
      applied.push(`${rule.propertyName}: ${raw} → reference only`);
    }
  });

  const supplyIssues=[...supplyIssuesByComponent.values()];
  const supplyFallbacks=[...supplyFallbacksByComponent.values()];
  return {
    ok:supplyIssues.length===0,
    productMapped:true,
    supplyIssues,
    supplyFallbacks,
    title,
    productId:p.id,
    productName:p.name,
    qty:Number(qty)||1,
    hardwareFinish,
    componentOverrides:overrides,
    properties,
    applied
  };
}

function shopifyRuleLabel(action){
  return ({
    hardware_finish:"Match hardware finish",
    supply_variant:"Choose variant for one supply",
    reference:"Reference only"
  })[action]||action;
}
function saveShopifyDomain(v){
  ensureShopifyFoundation();
  db.shopify.storeDomain=String(v||"").trim();
  save();
}
function addShopifyProductMapping(){
  ensureShopifyFoundation();
  db.shopify.productMappings.push({id:uid("spm"),shopifyTitle:"",productId:db.products[0]?.id||""});
  save();shopifyPage();
}
function updateShopifyProductMapping(id,key,value){
  const m=db.shopify.productMappings.find(x=>x.id===id);if(!m)return;
  m[key]=value;save();
}
function deleteShopifyProductMapping(id){
  db.shopify.productMappings=db.shopify.productMappings.filter(x=>x.id!==id);
  save();shopifyPage();
}
function addShopifyOptionRule(){
  ensureShopifyFoundation();
  db.shopify.optionMappings.push({id:uid("som"),propertyName:"",action:"reference",targetHardwareId:"",aliases:[]});
  save();shopifyPage();
}
function updateShopifyOptionRule(id,key,value){
  const r=db.shopify.optionMappings.find(x=>x.id===id);if(!r)return;
  r[key]=value;
  if(key==="action"&&value!=="supply_variant")r.targetHardwareId="";
  save();shopifyPage();
}
function deleteShopifyOptionRule(id){
  db.shopify.optionMappings=db.shopify.optionMappings.filter(x=>x.id!==id);
  save();shopifyPage();
}
function addShopifyAlias(ruleId){
  const r=db.shopify.optionMappings.find(x=>x.id===ruleId);if(!r)return;
  r.aliases=r.aliases||[];r.aliases.push({from:"",to:""});save();shopifyPage();
}
function updateShopifyAlias(ruleId,index,key,value){
  const r=db.shopify.optionMappings.find(x=>x.id===ruleId);if(!r||!r.aliases?.[index])return;
  r.aliases[index][key]=value;save();
}
function deleteShopifyAlias(ruleId,index){
  const r=db.shopify.optionMappings.find(x=>x.id===ruleId);if(!r)return;
  r.aliases=(r.aliases||[]).filter((_,i)=>i!==index);save();shopifyPage();
}
function shopifyProductMappingRows(){
  const rows=db.shopify.productMappings||[];
  if(!rows.length)return `<div class="muted">No Shopify products mapped yet.</div>`;
  return rows.map(m=>`<div class="mapping-row">
    <div><label>Shopify product title</label><input value="${esc(m.shopifyTitle||"")}" placeholder="Radio Strap and Bucket Deluxe" oninput="updateShopifyProductMapping('${m.id}','shopifyTitle',this.value)"></div>
    <div><label>Vetted Resupply product</label><select onchange="updateShopifyProductMapping('${m.id}','productId',this.value)">${db.products.map(p=>`<option value="${p.id}" ${p.id===m.productId?"selected":""}>${esc(p.name)}</option>`).join("")}</select></div>
    <div class="mapping-actions"><button class="danger" onclick="deleteShopifyProductMapping('${m.id}')">Delete</button></div>
  </div>`).join("");
}
function shopifyOptionRuleRows(){
  const rules=db.shopify.optionMappings||[];
  if(!rules.length)return `<div class="muted">No Easify option rules yet.</div>`;
  return rules.map(r=>`<div class="shopify-rule-card">
    <div class="rule-title"><div><b>${esc(r.propertyName||"New property")}</b><div class="muted">${esc(shopifyRuleLabel(r.action))}</div></div><button class="danger" onclick="deleteShopifyOptionRule('${r.id}')">Delete rule</button></div>
    <div class="grid">
      <div><label>Shopify / Easify property name</label><input value="${esc(r.propertyName||"")}" placeholder="Hardware Type" oninput="updateShopifyOptionRule('${r.id}','propertyName',this.value)"></div>
      <div><label>What should it control?</label><select onchange="updateShopifyOptionRule('${r.id}','action',this.value)">
        <option value="hardware_finish" ${r.action==="hardware_finish"?"selected":""}>Match hardware finish</option>
        <option value="supply_variant" ${r.action==="supply_variant"?"selected":""}>Choose variant for one supply</option>
        <option value="reference" ${r.action==="reference"?"selected":""}>Reference only</option>
      </select></div>
      ${r.action==="supply_variant"?`<div><label>Supply controlled by this property</label><select onchange="updateShopifyOptionRule('${r.id}','targetHardwareId',this.value)"><option value="">Choose supply</option>${db.hardware.map(h=>`<option value="${h.id}" ${h.id===r.targetHardwareId?"selected":""}>${esc(h.name)}</option>`).join("")}</select></div>`:""}
    </div>
    ${r.action!=="reference"?`<div style="margin-top:10px"><b>Value mapping</b><div class="muted">Translate the exact Easify choice into the finish/variant name Vetted Resupply should use.</div>
      ${(r.aliases||[]).map((a,i)=>`<div class="alias-grid">
        <div><label>Easify value</label><input value="${esc(a.from||"")}" placeholder="Antiqued copper" oninput="updateShopifyAlias('${r.id}',${i},'from',this.value)"></div>
        <div><label>Use in Vetted Resupply</label><input value="${esc(a.to||"")}" placeholder="Copper" oninput="updateShopifyAlias('${r.id}',${i},'to',this.value)"></div>
        <button class="danger" onclick="deleteShopifyAlias('${r.id}',${i})">Remove</button>
      </div>`).join("")}
      <button onclick="addShopifyAlias('${r.id}')">+ Add value mapping</button>
    </div>`:""}
  </div>`).join("");
}
function runShopifySamplePreview(){
  const sample={
    title:"Radio Strap and Bucket Deluxe",
    qty:1,
    properties:{
      "Size":'Regular 54" - 64"',
      "Color of Leather":"Brown",
      "Hardware Type":"Antiqued copper",
      "Rivet type":"Copper",
      "Color Of Stitching":"Black",
      "Custom Requests":""
    }
  };
  const mapped=mapShopifyLineItem(sample.title,sample.qty,sample.properties);
  if(!mapped.ok){
    modal(`<div class="between"><h2>Shopify mapping preview</h2><button onclick="closeM()">✕</button></div><div class="notice">${esc(mapped.error)}</div>`);
    return;
  }
  const p=prod(mapped.productId);
  const rows=(p.components||[]).map((c,idx)=>{
    const o=mapped.componentOverrides[idx];
    if(c.note)return `<tr><td>${esc(c.note)}</td><td>Consumable / note</td><td>—</td></tr>`;
    const h=hw(c.hardwareId),v=vari(c.hardwareId,o?.variantId);
    return `<tr><td>${esc(h?.name||"Unknown")}</td><td>${esc(v?.name||"Default")}${v?.size?` • ${esc(v.size)}`:""}${v?.finish?` • ${esc(v.finish)}`:""}</td><td>${Number(c.qty)||0}</td></tr>`;
  }).join("");
  modal(`<div class="between"><div><h2>Shopify mapping preview</h2><div class="muted">Sample based on the Radio Strap order you showed.</div></div><button onclick="closeM()">✕</button></div>
    <div class="card"><b>${esc(sample.title)}</b><div class="muted">Qty ${sample.qty}</div>${Object.entries(sample.properties).filter(([,v])=>v!=="").map(([k,v])=>`<div>${esc(k)}: <b>${esc(v)}</b></div>`).join("")}</div>
    <div class="notice"><b>Rules applied</b><br>${mapped.applied.map(x=>esc(x)).join("<br>")||"No option rules matched."}</div>
    <div class="card scroll shopify-preview"><table><tr><th>Required supply</th><th>Selected option</th><th>Qty per product</th></tr>${rows}</table></div>
    <div class="muted">This is a mapping preview only. It does not create an order or change inventory.</div>`);
}

let shopifyLiveOrders=[];

async function shopifyApi(path,options={}){
  const res=await fetch(path,{
    method:options.method||"GET",
    headers:{"Content-Type":"application/json"},
    body:options.body?JSON.stringify(options.body):undefined
  });
  let data={};
  try{data=await res.json()}catch(e){}
  if(!res.ok)throw new Error(data.error||data.message||`Request failed (${res.status})`);
  return data;
}

function connectShopify(){
  const input=document.querySelector('#app input[placeholder="your-store.myshopify.com"]');
  const shop=(input?.value||db.shopify.storeDomain||"").trim();
  if(!shop)return alert("Enter your Shopify .myshopify.com store domain first.");
  saveShopifyDomain(shop);
  VR_SUPPRESS_WINDOW_CLOSE=true;
  window.location.href="/api/shopify/connect?shop="+encodeURIComponent(shop);
}

async function disconnectShopify(){
  if(!confirm("Disconnect Shopify from Vetted Resupply on this computer?"))return;
  try{await shopifyApi("/api/shopify/disconnect",{method:"POST"});}catch(e){}
  db.shopify.connectionStatus="Not connected";save();render();
}

async function testShopifyConnection(){
  const status=document.getElementById("shopify-live-status");
  const dot=document.getElementById("shopify-live-dot");
  if(status)status.textContent="Checking connection…";
  try{
    const data=await shopifyApi("/api/shopify/status");
    if(!data.connected){
      db.shopify.connectionStatus="Not connected";save();
      if(status)status.textContent=data.error?`Not connected — ${data.error}`:"Not connected — click Connect Shopify";
      if(dot)dot.style.background="#777";
      return;
    }
    db.shopify.connectionStatus="Connected";
    if(data.shop)db.shopify.storeDomain=data.shop;
    save();
    if(status)status.textContent=`Connected to ${data.shop||"Shopify"}`;
    if(dot)dot.style.background="#7ee787";
  }catch(e){
    db.shopify.connectionStatus="Not connected";save();
    if(status)status.textContent="Not connected — "+e.message;
    if(dot)dot.style.background="#777";
  }
}

function shopifyOrderAlreadyImported(orderId){
  return (db.orders||[]).some(o=>String(o.shopifyOrderId||"")===String(orderId));
}

function normalizeLiveShopifyOrder(raw){
  return {
    id:raw.id,
    name:raw.name||raw.id,
    createdAt:raw.createdAt||new Date().toISOString(),
    financialStatus:raw.financialStatus||"",
    lineItems:(raw.lineItems||[]).map(li=>({
      id:li.id,
      title:li.title||li.name||"",
      quantity:Number(li.currentQuantity??li.quantity)||1,
      properties:Object.fromEntries((li.customAttributes||[]).map(a=>[a.key,a.value??""]))
    }))
  };
}

function mappedLiveOrder(raw){
  const o=normalizeLiveShopifyOrder(raw);
  const lines=o.lineItems.map(li=>mapShopifyLineItem(li.title,li.quantity,li.properties));
  const productMapped=lines.length>0&&lines.every(x=>x.productMapped||x.ok);
  const needsSupplySetup=productMapped&&lines.some(x=>(x.supplyIssues||[]).length>0);
  return {...o,lines,productMapped,needsSupplySetup,ok:productMapped&&!needsSupplySetup&&lines.every(x=>x.ok)};
}

async function loadShopifyOrders(){
  const container=document.getElementById("shopify-live-orders");
  if(container)container.innerHTML='<div class="card muted">Loading recent paid Shopify orders…</div>';
  try{
    const data=await shopifyApi("/api/shopify/orders");
    shopifyLiveOrders=(data.orders||[]).map(mappedLiveOrder);
    renderShopifyOrderReview();
  }catch(e){
    if(container)container.innerHTML=`<div class="notice"><b>Could not load Shopify orders.</b><br>${esc(e.message)}</div>`;
  }
}


function shopifyMaterialPreviewRows(mapped){
  if(!mapped?.productMapped&&!mapped?.ok)return [];
  const p=prod(mapped.productId);
  if(!p)return [];
  const overrides=mapped.componentOverrides||[];
  const rows=[];
  (p.components||[]).forEach((c,idx)=>{
    const ov=overrides.find(x=>Number(x.componentIndex)===idx);
    if(ov && ov.include===false)return;
    const qty=(Number(c.qty)||0)*(Number(mapped.qty)||1);
    if(c.hardwareId){
      const h=hw(c.hardwareId);
      const variantId=(ov&&ov.variantId)||c.variantId||'';
      const v=vari(c.hardwareId,variantId);
      const issue=(mapped.supplyIssues||[]).find(x=>Number(x.componentIndex)===idx);
      const fallback=(mapped.supplyFallbacks||[]).find(x=>Number(x.componentIndex)===idx);
      rows.push({
        type:'supply',
        name:h?.name||'Unknown supply',
        qty,
        option:v?.name||'Standard',
        finish:inferFinish(v)||'',
        size:v?.size||'',
        supplier:sup(v?.supplierId)?.name||'Unassigned',
        issue:issue||null,
        fallback:fallback||null
      });
    }else if(c.note){
      rows.push({type:'note',name:c.note,qty,option:'Consumable / note',finish:'',size:'',supplier:''});
    }
  });
  return rows;
}

function toggleShopifyMaterials(orderId){
  const el=document.getElementById('shopify-materials-'+String(orderId).replace(/[^a-zA-Z0-9_-]/g,'_'));
  const btn=document.getElementById('shopify-materials-btn-'+String(orderId).replace(/[^a-zA-Z0-9_-]/g,'_'));
  if(!el)return;
  const opening=el.style.display==='none';
  el.style.display=opening?'block':'none';
  if(btn)btn.textContent=opening?'Hide materials':'View materials';
}

function renderShopifyOrderReview(){
  const container=document.getElementById("shopify-live-orders");
  if(!container)return;
  if(!shopifyLiveOrders.length){
    container.innerHTML='<div class="card muted">No recent paid orders were returned.</div>';
    return;
  }
  container.innerHTML=shopifyLiveOrders.map(o=>{
    const imported=shopifyOrderAlreadyImported(o.id);
    return `<div class="shopify-order-card">
      <div class="shopify-order-head">
        <div><h3 style="margin-bottom:4px">${esc(o.name)}</h3><div class="muted">${esc(new Date(o.createdAt).toLocaleString())} • ${esc(o.financialStatus||"Paid")}</div></div>
        <div class="row">${o.productMapped?`<button id="shopify-materials-btn-${String(o.id).replace(/[^a-zA-Z0-9_-]/g,'_')}" onclick="toggleShopifyMaterials('${esc(o.id)}')">View materials</button>`:''}${imported?'<span class="pill">Already imported</span>':o.ok?`<button class="primary" onclick="importShopifyOrder('${esc(o.id)}')">Import order</button>`:o.needsSupplySetup?'<span class="pill mapping-bad">Needs supply setup</span>':'<span class="pill">Needs mapping</span>'}</div>
      </div>
      ${o.lines.map((m,i)=>{
        const li=o.lineItems[i];
        return `<div class="shopify-line">
          <div class="between"><div><b>${li.quantity} × ${esc(li.title)}</b></div><div class="${m.ok?"mapping-good":"mapping-bad"}">${m.ok?"Mapped":m.productMapped?"Needs supply setup":"Needs mapping"}</div></div>
          ${m.productMapped||m.ok?`<div class="muted">→ ${esc(m.productName)}${m.hardwareFinish&&m.hardwareFinish!=="Default"?` • ${esc(m.hardwareFinish)}`:""}</div>${(m.supplyIssues||[]).length?`<div class="mapping-bad" style="margin-top:6px">⚠ ${m.supplyIssues.length} supply option${m.supplyIssues.length===1?'':'s'} need setup before import.</div>`:''}`:`<div class="mapping-bad">${esc(m.error||"No mapping")}</div>`}
          <div class="shopify-properties">${Object.entries(li.properties||{}).filter(([k,v])=>v!==""&&!String(k).startsWith("_")).map(([k,v])=>`<span class="pill">${esc(k)}: ${esc(v)}</span>`).join("")}</div>
        </div>`;
      }).join("")}
      ${o.productMapped?`<div id="shopify-materials-${String(o.id).replace(/[^a-zA-Z0-9_-]/g,'_')}" style="display:none;margin-top:14px;border-top:1px solid var(--line);padding-top:14px">
        <h4 style="margin:0 0 10px">Materials preview</h4>
        <div class="muted" style="margin-bottom:10px">Exact BOM supplies Vetted Resupply will use if this order is imported. Inventory is not changed by this preview.</div>
        ${o.lines.map((m,i)=>{
          if(!m.productMapped&&!m.ok)return '';
          const rows=shopifyMaterialPreviewRows(m);
          return `<div style="margin-bottom:14px"><div style="font-weight:700;margin-bottom:6px">${esc(o.lineItems[i]?.quantity||m.qty)} × ${esc(m.productName)}</div>
            ${rows.length?rows.map(r=>`<div class="between" style="padding:7px 0;border-bottom:1px solid rgba(255,255,255,.08);gap:12px">
              <div><b>${esc(r.name)}</b>${r.type==='supply'?`${r.issue?`<div class="mapping-bad" style="font-weight:700;margin-top:3px">⚠ ${esc(r.issue.requested)} option not configured</div>`:''}${r.fallback?`<div style="font-weight:700;margin-top:3px">↳ ${esc(r.fallback.requested)} unavailable — using ${esc(r.fallback.fallbackFinish)} fallback</div>`:''}<div class="muted">${r.issue?'Current/default option: ':''}${[r.finish,r.option,r.size].filter(Boolean).filter((x,j,a)=>a.indexOf(x)===j).map(esc).join(' • ')}${r.supplier?` • ${esc(r.supplier)}`:''}</div>`:`<div class="muted">${esc(r.option)}</div>`}</div>
              <div style="font-weight:700;white-space:nowrap">${esc(r.qty)} needed</div>
            </div>`).join(''):'<div class="muted">No BOM supplies found.</div>'}
            ${m.applied?.length?`<div class="muted" style="margin-top:8px;font-size:13px"><b>Mapping rules:</b> ${m.applied.map(esc).join(' · ')}</div>`:''}
          </div>`;
        }).join('')}
      </div>`:''}
    </div>`;
  }).join("");
}

function importShopifyOrder(orderId){
  const live=shopifyLiveOrders.find(o=>String(o.id)===String(orderId));
  if(!live)return alert("Shopify order is no longer loaded. Refresh the Shopify order list.");
  if(shopifyOrderAlreadyImported(orderId))return alert("This Shopify order has already been imported.");
  if(live.needsSupplySetup)return alert("This order needs supply setup before importing. Open View materials and add the missing requested supply options first.");
  if(!live.ok)return alert("This order has unmapped line items. Map every product before importing.");

  const items=live.lines.map((m,i)=>({
    productId:m.productId,
    qty:m.qty,
    hardwareFinish:m.hardwareFinish||"Default",
    componentOverrides:m.componentOverrides||[],
    shopifyLineItemId:live.lineItems[i]?.id||"",
    shopifyProperties:live.lineItems[i]?.properties||{}
  }));

  db.orders.unshift({
    id:uid("o"),
    name:live.name,
    createdAt:live.createdAt||new Date().toISOString(),
    status:"Materials needed",
    locationId:activeLocationId,
    source:"shopify",
    shopifyOrderId:live.id,
    items
  });
  db.shopify.importedOrderIds=db.shopify.importedOrderIds||[];
  if(!db.shopify.importedOrderIds.includes(live.id))db.shopify.importedOrderIds.push(live.id);
  save();
  renderShopifyOrderReview();
  alert(`${live.name} imported into Vetted Resupply.`);
}

window.shopifyPage=function(){
  ensureShopifyFoundation();
  const s=db.shopify;
  $("app").innerHTML=`<div class="between"><div><h1>Shopify</h1><p class="muted">Connect your store, review recent paid orders, and import mapped orders into ${esc(activeLocation().name)}.</p></div><span class="pill">Live bridge</span></div>

    <div class="shopify-grid">
      <div class="card">
        <h3>Store connection</h3>
        <div class="shopify-status"><span id="shopify-live-dot" class="shopify-dot" style="${s.connectionStatus==="Connected"?"background:#7ee787":""}"></span><b id="shopify-live-status">${esc(s.connectionStatus==="Connected"&&s.storeDomain?`Connected to ${s.storeDomain}`:s.connectionStatus||"Not connected")}</b></div>
        <label>Shopify store domain</label>
        <input value="${esc(s.storeDomain||"")}" placeholder="your-store.myshopify.com" oninput="saveShopifyDomain(this.value)">
        <div class="shopify-live-actions">
          <button class="primary" onclick="connectShopify()">Connect Shopify</button>
          <button onclick="testShopifyConnection()">Check connection</button>
          <button onclick="loadShopifyOrders()">Load recent paid orders</button>
          ${s.connectionStatus==="Connected"?'<button onclick="disconnectShopify()">Disconnect</button>':""}
        </div>
        <p class="muted">Connect Shopify opens Shopify's approval screen. Your Client Secret and Shopify access token stay only on this computer and are never stored in the browser.</p>
      </div>
      <div class="card">
        <h3>Live order flow</h3>
        <div>1. Load recent paid Shopify orders</div>
        <div>2. Vetted Resupply maps each product</div>
        <div>3. Easify properties select exact supply variants</div>
        <div>4. Review anything that needs mapping</div>
        <div>5. Import approved orders into Orders & Purchasing</div>
      </div>
    </div>

    <div class="card">
      <div class="between"><div><h2>Recent Shopify orders</h2><p class="muted">Only paid orders are requested. Importing does not deduct inventory until you later complete the order in Vetted Resupply.</p></div><button onclick="loadShopifyOrders()">Refresh orders</button></div>
      <div id="shopify-live-orders"><div class="muted">Use "Load recent paid orders" to begin.</div></div>
    </div>

    <div class="card">
      <div class="between"><div><h2>Product mapping</h2><p class="muted">Match each Shopify leather product to the BOM that already exists in Vetted Resupply.</p></div><button class="primary" onclick="addShopifyProductMapping()">+ Add mapping</button></div>
      ${shopifyProductMappingRows()}
    </div>

    <div class="card">
      <div class="between"><div><h2>Easify option mapping</h2><p class="muted">Only map properties that affect build materials. Other customer choices can remain reference-only.</p></div><button class="primary" onclick="addShopifyOptionRule()">+ Add option rule</button></div>
      ${shopifyOptionRuleRows()}
    </div>

    <div class="card">
      <div class="between"><div><h2>Test the mapping</h2><p class="muted">Preview the Radio Strap example without creating an order or touching inventory.</p></div><button onclick="runShopifySamplePreview()">Preview sample order</button></div>
    </div>

    <div class="notice"><b>Automatic webhooks are the next step after live imports are verified.</b> This version deliberately keeps importing manual so you can confirm several real Shopify orders first.</div>`;
  const qs=new URLSearchParams(location.search);
  if(qs.get("shopify_connected")==="1"){
    history.replaceState({},"",location.pathname);
    setTimeout(testShopifyConnection,50);
  }
};


// ---- VETTED RESUPPLY V2 EXTENSIONS ----
(function(){
  function ensureV2(){
    db.settings = db.settings || {companyName:"Vetted Leather"};
    db.hardware.forEach(h=>{
      h.category = h.category || "Hardware";
      h.minimum = Number.isFinite(Number(h.minimum)) ? Number(h.minimum) : 0;
      (h.variants||[]).forEach((v,i)=>{
        v.onHand = Number.isFinite(Number(v.onHand)) ? Number(v.onHand) : 0;
        v.price = Number.isFinite(Number(v.price)) ? Number(v.price) : 0;
        v.status = v.status || (String(v.name||"").toLowerCase().includes("backup") ? "Backup" : "Primary");
      });
    });
    (db.orders||[]).forEach(o=>o.status=o.status||"New");
    save();
  }
  ensureV2();

  window.v2Export = function(){
    const blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"});
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download="vetted-resupply-backup.json";
    a.click();
    URL.revokeObjectURL(a.href);
  };
  window.v2Import = function(input){
    const f=input.files&&input.files[0]; if(!f)return;
    const r=new FileReader();
    r.onload=()=>{
      try{
        const incoming=JSON.parse(r.result);
        if(!incoming.products||!incoming.hardware||!incoming.suppliers) throw new Error("Not a Vetted Resupply backup.");
        db=incoming; ensureV2(); ensureCreatedDates(); ensureSupplySizeFields(); ensureShopifyFoundation(); ensureLocations(); save(); render(); alert("Backup imported successfully.");
      }catch(e){ alert("Import failed: "+e.message); }
    };
    r.readAsText(f);
  };
  window.v2Inventory = function(){
    ensureV2();
    const stock=fget("inventory","stock","");
    let items=[];
    db.hardware.forEach(h=>(h.variants||[]).forEach(v=>{
      const onHand=getOnHand(h.id,v.id);
      const minimum=getMinimum(h.id);
      const low=onHand<=minimum;
      if(stock==="low"&&!low)return;
      if(stock==="ok"&&low)return;
      items.push({h,v,onHand,minimum,low});
    }));
    const sort=fget("inventory","sort","az");
    if(sort==="lowfirst")items.sort((a,b)=>(a.onHand-a.minimum)-(b.onHand-b.minimum));
    else if(sort==="highstock")items.sort((a,b)=>b.onHand-a.onHand);
    else if(sort==="za")items.sort((a,b)=>b.h.name.localeCompare(a.h.name)||String(b.v.size||"").localeCompare(String(a.v.size||"")));
    else if(sort==="newest")items.sort((a,b)=>String(b.h.createdAt||"").localeCompare(String(a.h.createdAt||"")));
    else if(sort==="oldest")items.sort((a,b)=>String(a.h.createdAt||"").localeCompare(String(b.h.createdAt||"")));
    else items.sort((a,b)=>a.h.name.localeCompare(b.h.name)||String(a.v.size||"").localeCompare(String(b.v.size||"")));

    const rows=items.map(({h,v,onHand,minimum,low})=>`<tr class="search-inventory inventory-row" data-hid="${h.id}" data-vid="${v.id}" data-search="${esc((h.name+" "+(v.size||"")+" "+(v.finish||"")+" "+(v.name||"")+" "+(h.category||"Hardware")).toLowerCase())}">
      <td><b>${esc(h.name)}</b><div class="muted">${v.size?esc(v.size)+" • ":""}${esc(v.name||"Standard")}${v.finish?` • ${esc(v.finish)}`:""}</div></td>
      <td><input class="inv-onhand" type="number" min="0" value="${onHand}" onfocus="this.select()" oninput="v2SetVariantInv('${h.id}','${v.id}',this.value)"></td>
      <td><input class="inv-minimum" type="number" min="0" value="${minimum}" onfocus="this.select()" oninput="v2SetMinimum('${h.id}',this.value)"></td>
      <td><span class="status inv-status ${low?'low':'ok'}">${low?'LOW / REORDER':'OK'}</span></td>
    </tr>`).join("");

    const extra=`<div><label>Stock status</label><select onchange="fset('inventory','stock',this.value)"><option value="">All options</option><option value="low" ${stock==="low"?"selected":""}>Low / reorder only</option><option value="ok" ${stock==="ok"?"selected":""}>In stock only</option></select></div>`;
    $("app").innerHTML=`<div class="between"><div><h1>Inventory</h1><div class="muted">${esc(activeLocation().name)}</div></div></div>
      ${searchBox("Search supplies, sizes, finishes or options…",".search-inventory")}
      ${filterToolbar("inventory",{extra})}
      <div class="card scroll"><table><tr><th>Supply / option</th><th>On hand</th><th>Minimum</th><th>Status</th></tr>${rows}</table></div>`;
  };

  function v2RefreshVariantInventoryStatus(hid,vid){
    const h=hw(hid),v=vari(hid,vid); if(!h||!v)return;
    const row=document.querySelector(`.inventory-row[data-hid="${hid}"][data-vid="${vid}"]`);
    if(row){
      const low=getOnHand(hid,vid)<=getMinimum(hid);
      const badge=row.querySelector(".inv-status");
      if(badge){badge.className="status inv-status "+(low?"low":"ok");badge.textContent=low?"LOW / REORDER":"OK";}
    }
    const lowCount=document.getElementById("inventory-low-count");
    if(lowCount)lowCount.textContent=db.hardware.reduce((n,h)=>n+(h.variants||[]).filter(v=>getOnHand(h.id,v.id)<=getMinimum(h.id)).length,0);
  }

  window.v2SetVariantInv=function(hid,vid,val){
    const v=vari(hid,vid); if(!v)return;
    setOnHand(hid,vid,val); save(); v2RefreshVariantInventoryStatus(hid,vid);
  };

  window.v2SetMinimum=function(hid,val){
    const h=hw(hid); if(!h)return;
    setMinimum(hid,val); save();
    (h.variants||[]).forEach(v=>v2RefreshVariantInventoryStatus(hid,v.id));
  };

  function vrRandomHex(bytes=16){const a=new Uint8Array(bytes);crypto.getRandomValues(a);return [...a].map(x=>x.toString(16).padStart(2,'0')).join('');}
  function vrRefreshSyncBadge(){
    const el=document.getElementById('vr-sync-status'); if(!el)return;
    const configured=!!VR_SYNC_CONFIG?.configured, enabled=!!VR_SYNC_CONFIG?.enabled;
    el.textContent=enabled&&configured?VR_SYNC_STATUS:(configured?'Configured, paused':'Not configured');
    el.className=enabled&&configured&&VR_SYNC_STATUS==='Synced'?'good':(VR_SYNC_STATUS==='Sync error'?'bad':'muted');
  }
  async function vrLoadSyncConfig(){
    try{const r=await fetch('/api/sync/config'),j=await r.json();if(j.ok){VR_SYNC_CONFIG=j.config;VR_SYNC_STATUS=j.config?.enabled?'Synced':'Local only';vrRefreshSyncBadge();}}catch(_){}
  }
  function vrSyncField(id){return String(document.getElementById(id)?.value||'').trim();}
  window.vrGenerateWorkspace=function(){document.getElementById('sync-workspace').value='vr-'+vrRandomHex(8);document.getElementById('sync-secret').value=vrRandomHex(24);};
  window.vrSaveSyncConfig=async function(enabled=true){
    try{
      const body={enabled,projectUrl:vrSyncField('sync-url'),anonKey:vrSyncField('sync-anon'),workspaceId:vrSyncField('sync-workspace'),syncSecret:vrSyncField('sync-secret')};
      const r=await fetch('/api/sync/config',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}),j=await r.json();
      if(!j.ok)throw new Error(j.error||'Could not save sync settings');VR_SYNC_CONFIG=j.config;VR_SYNC_STATUS=enabled?'Ready':'Paused';vrRefreshSyncBadge();return j.config;
    }catch(e){alert(e.message);throw e;}
  };
  window.vrCreateSharedWorkspace=async function(){
    if(!confirm('Create this shared workspace using the data currently on this computer?'))return;
    try{await vrSaveSyncConfig(true);const r=await fetch('/api/sync/create',{method:'POST'}),j=await r.json();if(!j.ok)throw new Error(j.error||'Could not create workspace');VR_SYNC_CONFIG=j.config;VR_SYNC_STATUS='Synced';vrRefreshSyncBadge();alert('Shared workspace created. Use Copy connection code to add another computer.');}catch(e){alert(e.message);}
  };
  window.vrPushNow=async function(){
    try{await vrSaveSyncConfig(true);const r=await fetch('/api/sync/push',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:vrSyncPayload()})}),j=await r.json();if(!j.ok)throw new Error(j.error||'Push failed');VR_SYNC_CONFIG=j.config;VR_SYNC_STATUS='Synced';vrRefreshSyncBadge();alert('Current data pushed to the shared workspace.');}catch(e){alert(e.message);}
  };
  window.vrPullNow=async function(){
    if(!confirm("Replace this computer\'s current working data with the latest shared workspace data? A restore point will be created first."))return;
    try{await vrSaveSyncConfig(true);const r=await fetch('/api/sync/pull-force',{method:'POST'}),j=await r.json();if(!j.ok||!j.data?.db)throw new Error(j.error||'Pull failed');VR_SYNC_APPLYING=true;db=j.data.db;ensureLocations();localStorage.setItem(K,JSON.stringify(db));if(j.data.page)localStorage.setItem(PAGE_KEY,j.data.page);if(j.data.filters)localStorage.setItem(FILTER_KEY,JSON.stringify(j.data.filters));location.reload();}catch(e){VR_SYNC_APPLYING=false;alert(e.message);}
  };
  window.vrPauseSync=async function(){try{const r=await fetch('/api/sync/disable',{method:'POST'}),j=await r.json();if(!j.ok)throw new Error(j.error||'Could not pause sync');VR_SYNC_CONFIG=j.config;VR_SYNC_STATUS='Local only';vrRefreshSyncBadge();alert('Live sync paused on this computer.');}catch(e){alert(e.message);}};
  window.vrCopySyncCode=async function(){
    try{const c=await vrSaveSyncConfig(!!document.getElementById('sync-enabled')?.checked);const code=btoa(unescape(encodeURIComponent(JSON.stringify({v:1,projectUrl:c.projectUrl,anonKey:c.anonKey,workspaceId:c.workspaceId,syncSecret:c.syncSecret}))));await navigator.clipboard.writeText(code);alert('Connection code copied. Send it only to someone you trust with this workspace.');}catch(e){alert(e.message);}
  };
  window.vrUseSyncCode=async function(){
    try{const raw=vrSyncField('sync-code');if(!raw)throw new Error('Paste a connection code first.');const cfg=JSON.parse(decodeURIComponent(escape(atob(raw))));document.getElementById('sync-url').value=cfg.projectUrl||'';document.getElementById('sync-anon').value=cfg.anonKey||'';document.getElementById('sync-workspace').value=cfg.workspaceId||'';document.getElementById('sync-secret').value=cfg.syncSecret||'';await vrSaveSyncConfig(true);alert('Connection loaded. Click Pull latest to copy the shared data onto this computer.');}catch(e){alert('Invalid connection code: '+e.message);}
  };
  async function vrPollSharedWorkspace(){
    if(!VR_SYNC_CONFIG?.enabled||!VR_SYNC_CONFIG?.configured||VR_SYNC_APPLYING)return;
    try{const r=await fetch('/api/sync/pull'),j=await r.json();if(!j.ok)throw new Error(j.error||'Sync failed');if(j.config)VR_SYNC_CONFIG=j.config;if(j.changed&&j.data?.db){VR_SYNC_APPLYING=true;db=j.data.db;ensureLocations();localStorage.setItem(K,JSON.stringify(db));if(j.data.page&&validPages.includes(j.data.page))localStorage.setItem(PAGE_KEY,j.data.page);if(j.data.filters)localStorage.setItem(FILTER_KEY,JSON.stringify(j.data.filters));pageFilters=j.data.filters||pageFilters;tab=validPages.includes(j.data.page)?j.data.page:tab;VR_SYNC_STATUS='Synced';render();VR_SYNC_APPLYING=false;}else{VR_SYNC_STATUS='Synced';}vrRefreshSyncBadge();}catch(e){VR_SYNC_STATUS='Sync error';vrRefreshSyncBadge();}
  }
  function vrStartSyncPolling(){clearInterval(VR_SYNC_POLL_TIMER);VR_SYNC_POLL_TIMER=setInterval(vrPollSharedWorkspace,4000);}

  window.v2Backup=async function(){
    $("app").innerHTML=`<h1>Backup & Data</h1>
      <p class="muted">Your working database is stored outside the App folder and is preserved through updates. Vetted Resupply also keeps automatic restore points.</p>
      <div class="card">
        <h2>Automatic restore points</h2>
        <p>Vetted Resupply creates a restore point when the app starts and periodically while you work. Up to 40 recent restore points are retained.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="primary" onclick="v2CreateRestorePoint()">Create restore point now</button><button onclick="v2LoadRestorePoints()">Refresh list</button></div>
        <div id="restore-points" style="margin-top:14px"><span class="muted">Loading restore points…</span></div>
      </div>
      <div class="card">
        <h2>Export portable backup</h2><p>Downloads your products, BOMs, suppliers, locations, inventory, orders and settings as a JSON file you can keep anywhere.</p>
        <button class="primary" onclick="v2Export()">Export backup</button>
      </div>
      <div class="card">
        <h2>Import portable backup</h2><p class="muted">Importing replaces the current working database. A server restore point is kept so the previous data can be recovered.</p>
        <input type="file" accept=".json,application/json" onchange="v2Import(this)">
      </div>
      <div class="card">
        <div class="between"><div><h2>Live shared workspace</h2><p class="muted">Keep Vetted Resupply synchronized across your computers and your partner's computer. Local backups remain active even while cloud sync is enabled.</p></div><div><b>Status:</b> <span id="vr-sync-status" class="muted">Loading…</span></div></div>
        <div class="grid">
          <div><label>Supabase project URL</label><input id="sync-url" value="${esc(VR_SYNC_CONFIG?.projectUrl||'')}" placeholder="https://xxxx.supabase.co"></div>
          <div><label>Supabase anon / publishable key</label><input id="sync-anon" value="${esc(VR_SYNC_CONFIG?.anonKey||'')}" placeholder="eyJ..."></div>
        </div>
        <div class="grid">
          <div><label>Workspace ID</label><input id="sync-workspace" value="${esc(VR_SYNC_CONFIG?.workspaceId||'')}"></div>
          <div><label>Shared secret</label><input id="sync-secret" type="password" value="${esc(VR_SYNC_CONFIG?.syncSecret||'')}"></div>
        </div>
        <label class="custom-check" style="margin-top:10px"><input id="sync-enabled" type="checkbox" ${VR_SYNC_CONFIG?.enabled?'checked':''}> Live sync enabled on this computer</label>
        <div class="row" style="gap:8px;flex-wrap:wrap;margin-top:12px"><button onclick="vrGenerateWorkspace()">Generate workspace ID & secret</button><button onclick="vrSaveSyncConfig(document.getElementById('sync-enabled').checked)">Save connection</button><button class="primary" onclick="vrCreateSharedWorkspace()">Create / seed workspace</button><button onclick="vrPushNow()">Push current data</button><button onclick="vrPullNow()">Pull latest</button><button onclick="vrPauseSync()">Pause sync</button></div>
        <hr style="margin:18px 0;border:none;border-top:1px solid #4a4a4a">
        <h3>Add another computer</h3><p class="muted">Copy the connection code from the main computer, paste it into the other computer, then choose Pull latest. Treat this code like a password because it grants access to the shared workspace.</p>
        <div class="row" style="gap:8px;flex-wrap:wrap"><button onclick="vrCopySyncCode()">Copy connection code</button><input id="sync-code" style="min-width:300px;flex:1" placeholder="Paste connection code here"><button onclick="vrUseSyncCode()">Use connection code</button></div>
        <p class="muted" style="margin-top:12px"><b>Sync behavior:</b> changes normally appear on other connected computers within about 4 seconds. If two people edit the same record at nearly the same time, the most recent saved version wins. Every computer still keeps local restore points.</p>
      </div>`;
    v2LoadRestorePoints();vrRefreshSyncBadge();
  };
  window.v2LoadRestorePoints=async function(){
    const box=$("restore-points"); if(!box)return;
    try{
      const r=await fetch("/api/data/backups"), j=await r.json();
      if(!j.ok)throw new Error(j.error||"Could not load backups");
      if(!j.backups.length){box.innerHTML='<span class="muted">No historical restore points yet. Create one now or restart the app.</span>';return;}
      box.innerHTML=j.backups.slice(0,20).map(b=>`<div class="row" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0"><div><strong>${esc(new Date(b.savedAt).toLocaleString())}</strong><div class="muted" style="font-size:.88em">${esc(b.name)}</div></div><button onclick="v2RestorePoint('${esc(b.name)}')">Restore</button></div>`).join("");
    }catch(e){box.innerHTML=`<span class="bad">${esc(e.message)}</span>`;}
  };
  window.v2CreateRestorePoint=async function(){
    try{const r=await fetch("/api/data/backups/create",{method:"POST"}),j=await r.json();if(!j.ok)throw new Error(j.error||"Backup failed");await v2LoadRestorePoints();alert("Restore point created.");}catch(e){alert(e.message);}
  };
  window.v2RestorePoint=async function(name){
    if(!confirm("Restore this saved version? Your current database will be saved as a restore point first."))return;
    try{
      const r=await fetch("/api/data/backups/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name})}),j=await r.json();
      if(!j.ok||!j.data?.db)throw new Error(j.error||"Restore failed");
      localStorage.setItem(K,JSON.stringify(j.data.db));
      if(j.data.page)localStorage.setItem(PAGE_KEY,j.data.page);
      if(j.data.filters)localStorage.setItem(FILTER_KEY,JSON.stringify(j.data.filters));
      location.reload();
    }catch(e){alert(e.message);}
  };

})();

// Initial draw happens only after Inventory and Backup functions exist.
// Restore from the permanent server-side backup if browser storage was cleared.
async function restorePermanentBackupIfNeeded(){
  if(INITIAL_LOCAL_DATA_PRESENT)return;
  try{
    const r=await fetch("/api/data/backup");
    const j=await r.json();
    if(j?.ok&&j?.data?.db){
      db=j.data.db;
      localStorage.setItem(K,JSON.stringify(db));
      if(j.data.page&&validPages.includes(j.data.page))localStorage.setItem(PAGE_KEY,j.data.page);
      if(j.data.filters)localStorage.setItem(FILTER_KEY,JSON.stringify(j.data.filters));
      ensureV2();ensureCreatedDates();ensureSupplySizeFields();ensureShopifyFoundation();
    }
  }catch(_){}
}
(async()=>{
  await restorePermanentBackupIfNeeded();
  SERVER_BACKUP_READY=true;
  ensureLocations();save();
  tab=validPages.includes(localStorage.getItem(PAGE_KEY))?localStorage.getItem(PAGE_KEY):"dashboard";
  await vrLoadSyncConfig();
  if(VR_SYNC_CONFIG?.enabled&&VR_SYNC_CONFIG?.configured)await vrPollSharedWorkspace();
  render();
  vrStartSyncPolling();
})();

