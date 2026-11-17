/* Contact page: preselect service from ?topic= and handle submit. Set data-endpoint on the form to send to Formspree, a CRM or an API. */
(function(){
var m={consultation:"Implementation",support:"Support / AMC",report:"Reports",bi:"BI",ai:"AI",customization:"Customization",integration:"Integration",training:"Training",partnership:"Partnership enquiry"};
var p=new URLSearchParams(location.search).get("topic"),s=document.getElementById("service");
if(p&&m[p]&&s)s.value=m[p];
var f=document.getElementById("enq"),ok=document.getElementById("ok");
f.addEventListener("submit",function(e){e.preventDefault();
if(!f.checkValidity()){f.reportValidity();return}
var done=function(){ok.hidden=false;ok.scrollIntoView({behavior:"smooth",block:"center"});f.reset()},ep=f.dataset.endpoint;
if(ep){fetch(ep,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"}}).then(function(r){r.ok?done():alert("Could not send. Please try again.")}).catch(function(){alert("Network error. Please try again.")})}else done()});
})();
