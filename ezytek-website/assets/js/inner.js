/* Inner pages: header shadow and scroll reveal */
(function(){
var d=document,h=d.getElementById("site-header");
addEventListener("scroll",function(){if(h)h.classList.toggle("sc",scrollY>8)},{passive:true});
if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver" in window))return;
var s=d.createElement("style");s.textContent="html.js .rv{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}html.js .rv.in{opacity:1;transform:none}";d.head.appendChild(s);
d.documentElement.classList.add("js");
var els=d.querySelectorAll(".sec .sh,.g,.gal,.chk,.scroll,.faq,.chat,.note2,.cta .wrap");
var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.1});
els.forEach(function(e){e.classList.add("rv");io.observe(e)});
})();
