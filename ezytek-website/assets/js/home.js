/* Home page: scroll reveal and header shadow */
(function(){
var d=document,r=d.documentElement;r.classList.add("js");
var els=d.querySelectorAll(".sec .sh,.svc-grid,.erp,.why,.ind,.tri,.vid,.steps,.cs,.cta .wrap");
els.forEach(function(e){e.classList.add("rv")});
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}
else els.forEach(function(e){e.classList.add("in")});
var h=d.getElementById("site-header");
addEventListener("scroll",function(){if(h)h.classList.toggle("sc",scrollY>8)},{passive:true});
})();
