/* Banner de cookies + Google Analytics (só carrega depois do aceite).
   Para ativar as estatísticas, troque o valor de GA_ID pelo ID de métricas do Google Analytics (começa com G-). */
(function(){
var GA_ID="G-XXXXXXXXXX",KEY="cookie-consent-v1",bar=document.getElementById("ck");
function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
function valid(){return /^G-[A-Z0-9]{6,}$/.test(GA_ID)}
function load(){
 if(!valid()||window.__gaOn)return;window.__gaOn=1;
 window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};
 gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied"});
 gtag("consent","update",{analytics_storage:"granted"});
 gtag("js",new Date());gtag("config",GA_ID);
 var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+GA_ID;document.head.appendChild(s);
}
function clear(){
 if(valid())window["ga-disable-"+GA_ID]=true;
 document.cookie.split(";").forEach(function(c){var n=c.split("=")[0].trim();
  if(n.indexOf("_ga")===0)["",".jessikaadvogada.com.br"].forEach(function(d){document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"+(d?";domain="+d:"")})});
}
function show(){bar.hidden=false}
function hide(){bar.hidden=true}
document.getElementById("ck-yes").onclick=function(){set("yes");hide();load()};
document.getElementById("ck-no").onclick=function(){set("no");hide();clear()};
var o=document.getElementById("ck-open");if(o)o.onclick=function(e){e.preventDefault();show()};
var c=get();if(c==="yes")load();else if(c!=="no")show();
})();
