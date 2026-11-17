/* Shared header, footer, icons. Every page only needs <body data-root="../" data-page="name"> */
(function(){
var R=document.body.dataset.root||"./",P=document.body.dataset.page||"";
var u=function(p){return R+p};
var ICON={
layers:'<path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="m3 13 9 5 9-5"/>',
box:'<path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
report:'<path d="M14 3H6v18h12V7l-4-4z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
chart:'<path d="M3 3v18h18"/><path d="M8 16v-5M13 16V8M18 16v-8"/>',
spark:'<path d="m12 3 2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>',
code:'<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/>',
cap:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>'};
var svg=function(n,c){return '<svg class="'+(c||"")+'" viewBox="0 0 24 24" aria-hidden="true">'+ICON[n]+'</svg>'};
document.querySelectorAll("[data-i]").forEach(function(e){e.innerHTML=svg(e.dataset.i)});
document.querySelectorAll("a[data-arrow]").forEach(function(e){e.insertAdjacentHTML("beforeend",svg("arrow","arrow"))});
var NAV=[["Home","index.html","home"],["About Us","about-us/index.html","about"],
["ERP Solutions","erp-solutions/index.html","erp",[["Sage 300 ERP","erp-solutions/sage-300-erp/index.html"],["Odoo ERP","erp-solutions/odoo-erp/index.html"]]],
["Services","services/index.html","services",[["Reporting Solutions","services/reporting-solutions/index.html"],["Power BI","services/power-bi/index.html"],["AI & Automation","services/ai-automation/index.html"],["System Integration","services/system-integration/index.html"]]],
["Industries","industries/index.html","industries"],["Resources","resources/index.html","resources"],["Contact Us","contact-us/index.html","contact"]];
var li=NAV.map(function(n){var s=n[3]?'<ul class="sub">'+n[3].map(function(x){return '<li><a href="'+u(x[1])+'">'+x[0]+'</a></li>'}).join("")+'</ul>':"";
return '<li><a href="'+u(n[1])+'"'+(n[2]===P?' class="on" aria-current="page"':"")+'>'+n[0]+'</a>'+s+'</li>'}).join("");
var h=document.getElementById("site-header");
if(h){h.className="hd";h.innerHTML='<div class="wrap nv"><a class="logo" href="'+u("index.html")+'">EZY<b>TEK</b></a><button class="tg" aria-expanded="false" aria-controls="mn">Menu</button><ul class="menu" id="mn">'+li+'</ul><a class="btn sm" href="'+u("contact-us/index.html")+'">Request a Consultation</a></div>';
var t=h.querySelector(".tg"),m=h.querySelector(".menu");t.onclick=function(){t.setAttribute("aria-expanded",m.classList.toggle("open"))}}
var f=document.getElementById("site-footer");
if(f){f.className="ft";f.innerHTML='<div class="wrap"><div class="fg"><div><a class="logo" href="'+u("index.html")+'">EZY<b>TEK</b></a><p>ERP and business technology solutions provider delivering Sage 300 implementation, customization, support, financial reporting, Business Intelligence and AI-enabled business solutions.</p></div>'+
'<div><h3>Solutions</h3><a href="'+u("erp-solutions/sage-300-erp/index.html")+'">Sage 300 ERP</a><a href="'+u("erp-solutions/odoo-erp/index.html")+'">Odoo ERP</a><a href="'+u("services/reporting-solutions/index.html")+'">Reporting Solutions</a><a href="'+u("services/power-bi/index.html")+'">Power BI</a><a href="'+u("services/ai-automation/index.html")+'">AI & Automation</a></div>'+
'<div><h3>Company</h3><a href="'+u("about-us/index.html")+'">About Us</a><a href="'+u("industries/index.html")+'">Industries</a><a href="'+u("case-studies/index.html")+'">Case Studies</a><a href="'+u("resources/index.html")+'">Resources</a><a href="'+u("contact-us/index.html")+'">Contact Us</a></div>'+
'<div><h3>Get in touch</h3><p>ezytekbd.com<br>Email, phone and WhatsApp: add approved details here.</p></div></div>'+
'<div class="fb">© 2026 EZYTEK. Product names and trademarks belong to their respective owners. Features depend on product version, configuration and licensing. Privacy and data-handling statement to be linked at launch.</div></div>'}
})();
