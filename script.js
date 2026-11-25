/* ===================== EDIT THIS PART ===================== */
var CFG={
 name:"Sand Bank",
 whatsapp:"94768366810",            /* country code + number, digits only */
 phoneShow:"076 836 6810",
 mapShort:"https://maps.app.goo.gl/RGe6Eyn5PbqWZCk97",
 lat:5.9377017, lng:80.5079196,
 address:"Waraketige Watta, Madiha, Kamburugamuwa, Matara, Sri Lanka",
 hours:"Breakfast 8:00–11:30 am · Lunch 12:00–3:00 pm · Dinner buffet from 7:00 pm",
 checkin:"Check-in from 2:00 pm · Check-out by 12:00 noon",
 currency:"LKR"
};
/* Social media: paste your full links. Empty ones stay hidden. */
var SOCIAL={Instagram:"",Facebook:"",TikTok:"",YouTube:""};
/* Rating shown in the Reviews section */
var RATING={score:"9.2",text:"Rated 9.2 out of 10 by guests",sub:"Based on 28 guest reviews on travel booking sites."};
/* Paste real guest reviews here (copy them from Google Maps). Example format:
   {n:"Guest name",s:5,t:"Their review text"} */
var REVIEWS=[];
var ROOMS=[
 {id:"deluxe",name:"Deluxe room",price:12000,desc:"Large bed, air conditioning, private bathroom with shower, free WiFi.",img:19},
 {id:"twin",name:"Twin room",price:12000,desc:"Two single beds, air conditioning, private bathroom, free WiFi.",img:17},
 {id:"family",name:"Family room",price:18000,desc:"Space for up to 4 guests, air conditioning, private bathroom.",img:2}
];
var MENU={
 "Breakfast":[
  {n:"Avocado toast",d:"Seeded bread, smashed avocado, tomato, fried egg and crispy chips.",p:1400,i:1},
  {n:"Tropical smoothie bowl",d:"Papaya, banana, coconut, granola, pumpkin seeds and mint.",p:1500,i:3}],
 "Mains":[
  {n:"Crunchy slaw tacos",d:"Three tacos with red cabbage, carrot, fresh coriander and a creamy chilli sauce.",p:1800,i:7},
  {n:"Crispy chicken burger",d:"Sesame bun, crispy chicken, egg, cheese, lettuce and battered chips.",p:2200,i:18},
  {n:"Tacos with greens",d:"Slaw tacos served with crisp sautéed greens and a lime wedge.",p:2000,i:15}],
 "Drinks":[
  {n:"Green juice",d:"Fresh blended greens with lime.",p:900,i:4},
  {n:"Pineapple mint cooler",d:"Pineapple and mint with a squeeze of lime.",p:900,i:6},
  {n:"Fresh fruit juices",d:"Papaya and other seasonal juices made to order.",p:800,i:9},
  {n:"Lime mint mojito",d:"Mint, lime and ice over a tall glass.",p:1000,i:14}],
 "Buffet":[
  {n:"Dinner buffet",d:"Served every night. Rice and curries, fresh bread and sides in clay bowls.",p:2800,i:20}]
};
/* ===================== END EDIT ===================== */

var IMG=[];for(var k=0;k<22;k++)IMG.push("images/img-"+(k<10?"0":"")+k+".jpg");
var $=function(s){return document.querySelector(s)};
var fmt=function(n){return CFG.currency+" "+n.toLocaleString("en-US")};
function wa(t){return "https://wa.me/"+CFG.whatsapp+"?text="+encodeURIComponent(t)}
document.querySelectorAll("img[data-i]").forEach(function(e){e.src=IMG[e.dataset.i]});

/* hero slideshow */
var sl=$("#slides");[11,16,17,2].forEach(function(i,n){var im=document.createElement("img");im.src=IMG[i];im.alt="";if(!n)im.className="on";sl.appendChild(im)});
var cur=0,ims=sl.children;
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)setInterval(function(){ims[cur].classList.remove("on");cur=(cur+1)%ims.length;ims[cur].classList.add("on")},5500);

/* contact + map */
$("#waFab").href=wa("Hello Sand Bank!");
$("#wl").href=wa("Hello Sand Bank!");$("#wl").textContent="+"+CFG.whatsapp;
$("#tl").href="tel:+"+CFG.whatsapp;$("#tl").textContent=CFG.phoneShow;
$("#callLink").href="tel:+"+CFG.whatsapp;$("#callLink").textContent="Or call "+CFG.phoneShow;
$("#addr").textContent=CFG.address;$("#fa").textContent=CFG.address;$("#hrs").textContent=CFG.hours;$("#cin").textContent=CFG.checkin;
$("#gm").href=CFG.mapShort;$("#rvRead").href=CFG.mapShort;$("#rvWrite").href=CFG.mapShort;
$("#dir").href="https://www.google.com/maps/dir/?api=1&destination="+CFG.lat+","+CFG.lng;
$("#map").src="https://www.google.com/maps?q="+CFG.lat+","+CFG.lng+"&z=16&output=embed";
$("#yr").textContent=new Date().getFullYear();

/* social */
var so=$("#social"),has=false;
Object.keys(SOCIAL).forEach(function(k){if(SOCIAL[k]){has=true;var a=document.createElement("a");a.href=SOCIAL[k];a.target="_blank";a.rel="noopener";a.textContent=k;so.appendChild(a)}});
var w=document.createElement("a");w.href=wa("Hello Sand Bank!");w.target="_blank";w.rel="noopener";w.textContent="WhatsApp";so.appendChild(w);
var g=document.createElement("a");g.href=CFG.mapShort;g.target="_blank";g.rel="noopener";g.textContent="Google Maps";so.appendChild(g);

/* reviews */
$("#score").textContent=RATING.score;$("#scoreTxt").textContent=RATING.text;$("#scoreSub").textContent=RATING.sub;
$("#revList").innerHTML=REVIEWS.map(function(r){return '<figure class="rev" style="margin:0"><div class="st">'+"★".repeat(r.s||5)+'</div><p>“'+r.t+'”</p><b>'+r.n+'</b></figure>'}).join("");

/* menu */
var tabs=$("#tabs"),grid=$("#menuGrid");
function show(cat){
 tabs.querySelectorAll("button").forEach(function(b){b.setAttribute("aria-selected",b.textContent===cat)});
 grid.innerHTML=MENU[cat].map(function(x){return '<article class="dish"><img src="'+IMG[x.i]+'" alt="'+x.n+'" loading="lazy"><div><h3>'+x.n+'</h3><p>'+x.d+'</p><div class="pr">'+fmt(x.p)+(cat==="Buffet"?" per person":"")+'</div></div></article>'}).join("")}
Object.keys(MENU).forEach(function(c){var b=document.createElement("button");b.textContent=c;b.setAttribute("role","tab");b.onclick=function(){show(c)};tabs.appendChild(b)});show("Breakfast");

/* gallery + lightbox */
var GAL=[[2,"t"],[5,""],[10,"t"],[16,"w"],[21,""],[11,"w"],[17,"w"],[0,"t"],[20,""],[12,""],[15,""],[3,""]],gi=0;
$("#gal").innerHTML=GAL.map(function(g,n){return '<img class="'+g[1]+'" data-g="'+n+'" src="'+IMG[g[0]]+'" alt="Photo of Sand Bank" loading="lazy">'}).join("");
function lb(n){gi=(n+GAL.length)%GAL.length;$("#lb img").src=IMG[GAL[gi][0]];$("#lb").classList.add("on")}
document.addEventListener("click",function(e){var t=e.target;
 if(t.closest("#gal img"))lb(+t.dataset.g);
 else if(t.matches("#lb .pv"))lb(gi-1);else if(t.matches("#lb .nx"))lb(gi+1);
 else if(t.matches("#lb")||t.matches("#lb .x"))$("#lb").classList.remove("on")});
document.addEventListener("keydown",function(e){if(!$("#lb").classList.contains("on"))return;
 if(e.key==="Escape")$("#lb").classList.remove("on");if(e.key==="ArrowLeft")lb(gi-1);if(e.key==="ArrowRight")lb(gi+1)});

/* rooms + booking */
$("#roomList").innerHTML=ROOMS.map(function(r){return '<article class="room"><img src="'+IMG[r.img]+'" alt="'+r.name+'" loading="lazy"><div><h3>'+r.name+'</h3><p>'+r.desc+'</p><div class="pr">'+fmt(r.price)+' <small>per night</small></div></div></article>'}).join("");
$("#rt").innerHTML=ROOMS.map(function(r){return '<option value="'+r.id+'">'+r.name+' – '+fmt(r.price)+'</option>'}).join("");
var today=new Date().toISOString().slice(0,10);$("#ci").min=today;$("#co").min=today;
function nights(){var a=new Date($("#ci").value),b=new Date($("#co").value);return b>a?Math.round((b-a)/864e5):0}
function room(){return ROOMS.filter(function(x){return x.id===$("#rt").value})[0]}
function est(){var n=nights();$("#est").textContent=n?n+" night"+(n>1?"s":"")+" · estimated "+fmt(n*room().price):""}
["#ci","#co","#rt"].forEach(function(s){$(s).addEventListener("change",function(){if(s==="#ci"&&$("#co").value<=$("#ci").value)$("#co").value="";$("#co").min=$("#ci").value||today;est()})});
$("#bf2").onsubmit=function(e){e.preventDefault();var n=nights();if(!n){$("#est").textContent="Choose a check-out date after check-in.";return}
 var r=room();
 var t="Hello Sand Bank, I would like to book a room.\nName: "+$("#nm").value+"\nRoom: "+r.name+"\nCheck-in: "+$("#ci").value+"\nCheck-out: "+$("#co").value+" ("+n+" nights)\nGuests: "+$("#gs").value+"\nEstimate: "+fmt(n*r.price)+($("#nt").value?"\nNotes: "+$("#nt").value:"");
 window.open(wa(t),"_blank","noopener")};

/* chatbot (rule-based; edit answers below) */
var min=Math.min.apply(null,ROOMS.map(function(r){return r.price}));
var FAQ=[
 [/room|stay|sleep|bed|accommodation/,"We have "+ROOMS.map(function(r){return r.name+" ("+fmt(r.price)+"/night)"}).join(", ")+". Use the booking form on this page and we will confirm on WhatsApp."],
 [/book|reserve|availab/,"Use the “Book by WhatsApp” form. Choose your dates and tap send, and we will confirm availability."],
 [/price|cost|how much|rate/,"Rooms start at "+fmt(min)+" per night. The dinner buffet is "+fmt(MENU.Buffet[0].p)+" per person. See the Menu section for dishes."],
 [/buffet|dinner/,"The dinner buffet runs every night from 7:00 pm, "+fmt(MENU.Buffet[0].p)+" per person."],
 [/menu|food|eat|burger|taco|breakfast|vegan|vegetarian|drink|juice/,"We serve avocado toast, smoothie bowls, tacos, burgers, fresh juices and a nightly buffet. Open the Menu section for photos and prices. Tell us about vegetarian or vegan needs."],
 [/where|location|address|map|direction|find|beach/,"We are at "+CFG.address+", about 900 m from Madiha Beach. Tap “Get directions” in the Find us section."],
 [/check.?in|check.?out|time|open|hour/,CFG.checkin+". "+CFG.hours+"."],
 [/wifi|internet|ac|air.?con|parking|reception/,"Rooms have air conditioning and free WiFi. We have parking and a 24-hour reception."],
 [/phone|call|number|contact|whatsapp/,"Call or WhatsApp us on "+CFG.phoneShow+"."],
 [/^(hi|hello|hey|ayubowan)/,"Hi! Ask me about rooms, food, prices, check-in or directions."]
];
var log=$("#log"),chips=$("#chips");
function say(t,c){var d=document.createElement("div");d.className="m "+c;d.textContent=t;log.appendChild(d);log.scrollTop=log.scrollHeight}
function ask(q){say(q,"u");var l=q.toLowerCase(),a=null;for(var i=0;i<FAQ.length;i++){if(FAQ[i][0].test(l)){a=FAQ[i][1];break}}
 setTimeout(function(){say(a||"I’m not sure about that. Tap “Chat on WhatsApp” and our team will answer.","b")},300)}
["Room prices","Dinner buffet","Check-in time","Where are you?"].forEach(function(q){var b=document.createElement("button");b.textContent=q;b.onclick=function(){ask(q)};chips.appendChild(b)});
var wb=document.createElement("button");wb.textContent="Chat on WhatsApp";wb.onclick=function(){window.open(wa("Hello Sand Bank!"),"_blank","noopener")};chips.appendChild(wb);
say("Hi! I can help with rooms, food, prices and directions.","b");
$("#fab").onclick=function(){$("#bot").classList.toggle("on")};
$("#bf").onsubmit=function(e){e.preventDefault();var v=$("#bi").value.trim();if(v){$("#bi").value="";ask(v)}};
