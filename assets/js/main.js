(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var M=[['Mint &amp; coriander','Green, sharp and cooling against the crisp fried pastry.',[15,55,60,95,10],'Add a second spoon of tamarind chutney for the classic street-stall pairing.','#2F8F5B'],
['Coconut','Fresh coconut ground with green chilli and tempered with mustard seeds.',[30,20,45,40,70],'Serve with a tomato chutney too, so every bite of dosa gets a different partner.','#F4EEDC'],
['Tamarind &amp; date','Dark, sweet and sticky to balance a salty, crunchy batter.',[85,75,30,5,10],'Thin it with a little warm water so it drizzles easily.','#7A3B1F'],
['Green garlic','A punchy herb and garlic chutney that cuts through smoky char.',[10,60,70,85,15],'Brush a little on the fish in the last minute of cooking.','#4E9F5F'],
['Sweet mango','Soft, sweet and lightly spiced, it loves melted cheese.',[90,40,25,5,5],'Spread it thinly under the cheese before it goes under the grill.','#F2A21B'],
['Tomato &amp; onion','Tangy and warming, a gentle partner for everyday rice and lentils.',[40,65,45,25,10],'Make a big batch: it keeps for a week in the fridge.','#D9412B']];
var db=[].slice.call(document.querySelectorAll('#mt-d button'));function mt(i){var m=M[i];db.forEach(function(b,k){b.classList.toggle('on',k===i);b.setAttribute('aria-pressed',k===i);});$('mt-t').innerHTML=m[0];$('mt-w').textContent=m[1];$('mt-n').textContent=m[3];m[2].forEach(function(v,k){$('mf-'+k).style.width=v+'%';});
 [].forEach.call(document.querySelectorAll('.ch-mj .fill,.ch-mj .wv'),function(e){e.style.fill=m[4];});}
if(db.length){db.forEach(function(b,k){b.addEventListener('click',function(){mt(k);});});mt(0);}
var R=[['Mint &amp; coriander','Fresh &middot; keeps 3 days',[['Coriander leaves',1,'packed cups'],['Mint leaves',.5,'packed cup'],['Lemon juice',2,'tbsp'],['Ginger',1,'inch piece'],['Salt',.5,'tsp'],['Roasted peanuts',2,'tbsp']],'Blend with a splash of iced water until smooth.',1],
['Tamarind &amp; date','Cooked &middot; keeps 4 weeks',[['Tamarind pulp',.5,'cup'],['Pitted dates',.75,'cup'],['Jaggery',.33,'cup'],['Roasted cumin',1,'tsp'],['Dried ginger',.5,'tsp'],['Salt',.5,'tsp']],'Simmer 15 minutes, blend and strain.',.4],
['Sweet mango','Cooked &middot; keeps 6 weeks',[['Diced mango',2,'cups'],['Sugar',.75,'cup'],['Cider vinegar',.33,'cup'],['Nigella seeds',.5,'tsp'],['Fennel seeds',.5,'tsp'],['Salt',.5,'tsp']],'Simmer 30 to 40 minutes until glossy and thick.',.6],
['Tomato &amp; onion','Cooked &middot; keeps 1 week',[['Ripe tomatoes',2,'cups chopped'],['Onion',.5,'cup chopped'],['Garlic',3,'cloves'],['Mustard seeds',.5,'tsp'],['Sugar',1,'tbsp'],['Salt',.5,'tsp']],'Cook down 20 minutes until jammy.',.8]],ri=0;
var H=['Mild','Gentle','Medium','Hot','Fiery'];function f(n){if(n>=10)return Math.round(n);var w=Math.floor(n),r=n-w,fr=r<.13?'':r<.29?'¼':r<.42?'⅓':r<.58?'½':r<.71?'⅔':r<.88?'¾':'';if(r>=.88){w++;fr='';}return (w?w:'')+(w&&fr?' ':'')+(fr||(w?'':'0'));}
function bt(){var r=R[ri],j=+$('bt-j').value,h=+$('bt-h').value;$('bt-jv').textContent=j;$('bt-hv').textContent=H[h];$('bt-t').innerHTML=r[0];$('bt-k').innerHTML=r[1];var c=Math.max(0,Math.round(h*r[4]*j*.75+(h?.5:0)));
 $('bt-i').innerHTML=r[2].map(function(x,i){return '<li style="animation-delay:'+i*.05+'s"><span>'+x[0]+'</span><b>'+f(x[1]*j)+' '+x[2]+'</b></li>';}).join('')+'<li style="animation-delay:.3s"><span>Green chillies</span><b>'+(c?c:'none')+'</b></li>';$('bt-m').textContent=r[3];
 var ch='';for(var i=0;i<=h;i++)ch+='<i style="animation-delay:'+i*.06+'s"></i>';$('bt-c').innerHTML=h?ch:'';}
var rb=[].slice.call(document.querySelectorAll('#bt-r button'));if(rb.length){rb.forEach(function(b,k){b.setAttribute('aria-pressed',k===0);b.addEventListener('click',function(){ri=k;rb.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});bt();});});$('bt-j').addEventListener('input',bt);$('bt-h').addEventListener('input',bt);bt();}
})();
