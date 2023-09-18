import{p as D,s as F}from"./audio.utils.0bcde9ed.js";import{c as S,a as L,s as q,b as p,i as B}from"./hoisted.0a78b458.js";const R=[{command:"Bienvenid@",output:["Bienvenido a mi portfolio!! 🎉"]},{command:"Quien soy...",output:["Soy Kiri86...","Desarrollador Web","Diseñador Web","Me gusta la montaña","Resido en Madrid (España)"]},{command:"Diviertite",output:["Explorando mi stio web!","🥳🥳🥳"]}],j='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M216.49 168.49a12 12 0 0 1-17 0L128 97l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0l80 80a12 12 0 0 1 0 17Z"/></svg>';function I(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function E(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t,i,e){return i&&E(t.prototype,i),e&&E(t,e),t}function A(t){return+t.replace(/px/,"")}function z(t){var i=window.devicePixelRatio,e=getComputedStyle(t),n=A(e.getPropertyValue("width")),o=A(e.getPropertyValue("height"));t.setAttribute("width",(n*i).toString()),t.setAttribute("height",(o*i).toString())}function d(t,i){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=Math.random()*(i-t)+t;return Math.floor(n*Math.pow(10,e))/Math.pow(10,e)}function N(t){return t[d(0,t.length)]}var k=.00125,U=5e-4,W=9e-4,H=1e-5,X=6,V=80,G=.9,Y=1.7,$=.2,J=.6,K=.03,Z=.07,T=15,b=82,Q=150,tt=100,et=250,it=40,nt=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function P(t){var i=1920;return Math.log(t)/Math.log(i)}var w=function(){function t(i){I(this,t);var e=i.initialPosition,n=i.direction,o=i.confettiRadius,a=i.confettiColors,s=i.emojis,u=i.emojiSize,l=i.canvasWidth,c=d(G,Y,3),r=c*P(l);this.confettiSpeed={x:r,y:r},this.finalConfettiSpeedX=d($,J,3),this.rotationSpeed=s.length?.01:d(K,Z,3)*P(l),this.dragForceCoefficient=d(U,W,6),this.radius={x:o,y:o},this.initialRadius=o,this.rotationAngle=n==="left"?d(0,.2,3):d(-.2,0,3),this.emojiSize=u,this.emojiRotationAngle=d(0,2*Math.PI),this.radiusYUpdateDirection="down";var h=n==="left"?d(b,T)*Math.PI/180:d(-T,-b)*Math.PI/180;this.absCos=Math.abs(Math.cos(h)),this.absSin=Math.abs(Math.sin(h));var f=d(-Q,0),m={x:e.x+(n==="left"?-f:f)*this.absCos,y:e.y-f*this.absSin};this.currentPosition=Object.assign({},m),this.initialPosition=Object.assign({},m),this.color=s.length?null:N(a),this.emoji=s.length?N(s):null,this.createdAt=new Date().getTime(),this.direction=n}return y(t,[{key:"draw",value:function(e){var n=this.currentPosition,o=this.radius,a=this.color,s=this.emoji,u=this.rotationAngle,l=this.emojiRotationAngle,c=this.emojiSize,r=window.devicePixelRatio;a?(e.fillStyle=a,e.beginPath(),e.ellipse(n.x*r,n.y*r,o.x*r,o.y*r,u,0,2*Math.PI),e.fill()):s&&(e.font="".concat(c,"px serif"),e.save(),e.translate(r*n.x,r*n.y),e.rotate(l),e.textAlign="center",e.fillText(s,0,0),e.restore())}},{key:"updatePosition",value:function(e,n){var o=this.confettiSpeed,a=this.dragForceCoefficient,s=this.finalConfettiSpeedX,u=this.radiusYUpdateDirection,l=this.rotationSpeed,c=this.createdAt,r=this.direction,h=n-c;if(o.x>s&&(this.confettiSpeed.x-=a*e),this.currentPosition.x+=o.x*(r==="left"?-this.absCos:this.absCos)*e,this.currentPosition.y=this.initialPosition.y-o.y*this.absSin*h+k*Math.pow(h,2)/2,this.rotationSpeed-=this.emoji?1e-4:H*e,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*e%(2*Math.PI);return}u==="down"?(this.radius.y-=e*l,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=e*l,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(e){return this.currentPosition.y<e+tt}}]),t}();function ot(){var t=document.createElement("canvas");return t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.left="0",t.style.zIndex="1000",t.style.pointerEvents="none",document.body.appendChild(t),t}function at(t){var i=t.confettiRadius,e=i===void 0?X:i,n=t.confettiNumber,o=n===void 0?t.confettiesNumber||(t.emojis?it:et):n,a=t.confettiColors,s=a===void 0?nt:a,u=t.emojis,l=u===void 0?t.emojies||[]:u,c=t.emojiSize,r=c===void 0?V:c;return t.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),t.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:e,confettiNumber:o,confettiColors:s,emojis:l,emojiSize:r}}var st=function(){function t(i){var e=this;I(this,t),this.canvasContext=i,this.shapes=[],this.promise=new Promise(function(n){return e.resolvePromise=n})}return y(t,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var e;(e=this.shapes).push.apply(e,arguments)}},{key:"complete",value:function(){var e;return this.shapes.length?!1:((e=this.resolvePromise)===null||e===void 0||e.call(this),!0)}},{key:"processShapes",value:function(e,n,o){var a=this,s=e.timeDelta,u=e.currentTime;this.shapes=this.shapes.filter(function(l){return l.updatePosition(s,u),l.draw(a.canvasContext),o?l.getIsVisibleOnCanvas(n):!0})}}]),t}(),rt=function(){function t(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};I(this,t),this.activeConfettiBatches=[],this.canvas=i.canvas||ot(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return y(t,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,z(this.canvas);var e=new Date().getTime(),n=e-this.lastUpdated,o=this.canvas.offsetHeight,a=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(s){return s.processShapes({timeDelta:n,currentTime:e},o,a),a?!s.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(e)}},{key:"queueAnimationFrameIfNeeded",value:function(e){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=e||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=at(e),o=n.confettiRadius,a=n.confettiNumber,s=n.confettiColors,u=n.emojis,l=n.emojiSize,c=this.canvas.getBoundingClientRect(),r=c.width,h=c.height,f=h*5/7,m={x:0,y:f},M={x:r,y:f},g=new st(this.canvasContext),_=0;_<a/2;_++){var O=new w({initialPosition:m,direction:"right",confettiRadius:o,confettiColors:s,confettiNumber:a,emojis:u,emojiSize:l,canvasWidth:r}),x=new w({initialPosition:M,direction:"left",confettiRadius:o,confettiColors:s,confettiNumber:a,emojis:u,emojiSize:l,canvasWidth:r});g.addShapes(O,x)}return this.activeConfettiBatches.push(g),this.queueAnimationFrameIfNeeded(),g.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}}]),t}();const v=document.querySelectorAll(".keyboard-sound"),C=document.querySelector("#blip"),ut=200,lt=100,ct=1500,dt=t=>{if(t&&v[t]){v[t].play();return}const i=Math.floor(Math.random()*v.length);v[i].play()},ht=async t=>{const i=document.querySelector("#terminal-input"),e=document.querySelector("#terminal-output");if(!(!i||!e)){for(let n of R){for(let o=0;o<n.command.length;o++){if(!S.get())return;t&&dt(o),i.textContent+=n.command[o],o%4===0?await p(ut):await p(lt)}for(let o of n.output){if(!S.get())return;t&&C&&D(C);const a=document.createElement("li");a.className="flex text-xs md:text-base font-semibold items-center gap-2 fade-in";const s=document.createElement("div");s.className="w-4 h-4 rotate-90",s.innerHTML=j;const u=document.createElement("div");u.textContent=o,a.appendChild(s),a.appendChild(u),e.appendChild(a),await p(200),C&&F(C)}i.textContent==="Divertirse"&&new rt().addConfetti(),await p(ct),i.textContent!=="Divertirse"&&(i.textContent="")}B.set(!0)}},ft=()=>{const t=document.querySelector("#terminal-input"),i=document.querySelector("#terminal-output");if(!(!t||!i)){t.textContent="Divertirse";for(let e of R)for(let n of e.output){const o=document.createElement("li");o.className="flex items-center gap-2 fade-in";const a=document.createElement("div");a.className="w-4 h-4 rotate-90",a.innerHTML=j;const s=document.createElement("div");s.textContent=n,o.appendChild(a),o.appendChild(s),i.appendChild(o)}}};document.addEventListener("astro:page-load",()=>{L.listen(t=>{t&&ht(q.get()==="true")}),S.get()||ft()});my_modal_2.showModal();