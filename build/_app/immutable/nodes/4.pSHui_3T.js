import{s as B,n as S,r as j,o as q}from"../chunks/scheduler.hlegOhip.js";import{S as N,i as T,g as _,s as D,h as x,j as E,z as V,c as W,f as b,k as a,a as P,A as g,C as z,B as L,D as A}from"../chunks/index.E217BK8K.js";import{i as U}from"../chunks/p5_utils.SFiZr6-1.js";function $(l){let i,o,t,f="Weight: Dot",h,n,y,c,m,w="Weight: Curves",k,e,p,v,r,u;return{c(){i=_("div"),o=_("div"),t=_("label"),t.textContent=f,h=D(),n=_("input"),y=D(),c=_("div"),m=_("label"),m.textContent=w,k=D(),e=_("input"),p=D(),v=_("div"),this.h()},l(s){i=x(s,"DIV",{class:!0});var d=E(i);o=x(d,"DIV",{class:!0});var C=E(o);t=x(C,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),V(t)!=="svelte-1h84gvq"&&(t.textContent=f),h=W(C),n=x(C,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),C.forEach(b),y=W(d),c=x(d,"DIV",{class:!0});var I=E(c);m=x(I,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),V(m)!=="svelte-15iga0x"&&(m.textContent=w),k=W(I),e=x(I,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),I.forEach(b),d.forEach(b),p=W(s),v=x(s,"DIV",{id:!0}),E(v).forEach(b),this.h()},h(){a(t,"for","minmax-range"),a(t,"class","block mb-2 text-sm font-medium text-gray-900"),a(n,"id","minmax-range "),a(n,"type","range"),a(n,"min","1"),a(n,"max","10"),a(n,"class","w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),a(o,"class",""),a(m,"for","minmax-range"),a(m,"class","block mb-2 text-sm font-medium text-gray-900"),a(e,"id","minmax-range "),a(e,"type","range"),a(e,"min","1"),a(e,"max","10"),a(e,"class","w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),a(c,"class",""),a(i,"class","flex gap-5"),a(v,"id","sketch")},m(s,d){P(s,i,d),g(i,o),g(o,t),g(o,h),g(o,n),z(n,l[0]),g(i,y),g(i,c),g(c,m),g(c,k),g(c,e),z(e,l[1]),P(s,p,d),P(s,v,d),r||(u=[L(n,"change",l[3]),L(n,"input",l[3]),L(e,"change",l[4]),L(e,"input",l[4])],r=!0)},p(s,[d]){d&1&&z(n,s[0]),d&2&&z(e,s[1])},i:S,o:S,d(s){s&&(b(i),b(p),b(v)),r=!1,j(u)}}}function F(l){}function M(l,i,o){let t,f=1,h=1,n;function y(e){e.background(255);let p=e.map(f,1,10,5,30),v=e.map(h,1,10,0,6);for(let r=0;r<t.width;r+=10)for(let u=0;u<t.height;u+=10){let s=t.get(r,u);e.noFill(),e.stroke(e.color(s)),e.push(),e.strokeWeight(e.random(p)),e.point(r,u),e.pop(),e.push(),e.strokeWeight(e.random(v)),e.translate(r,u),e.rotate(e.radians(e.random(360))),e.curve(r,u,e.sin(r)*e.random(60),e.cos(r)*e.sin(r)*e.random(90),e.random(10),e.random(80),e.cos(u)*e.sin(u)*e.random(140),e.cos(r)*e.sin(r)*50),e.pop()}}function c(e){o(2,n=()=>{t&&y(e)}),e.loadImage("https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",p=>{t=p,t.resize(t.width/1.2,t.height/1.2),y(e)})}function m(e){t&&y(e)}q(()=>{U("sketch",c,F,m)});function w(){f=A(this.value),o(0,f)}function k(){h=A(this.value),o(1,h)}return l.$$.update=()=>{l.$$.dirty&7&&`${f}${h}`&&n&&n()},[f,h,n,w,k]}class J extends N{constructor(i){super(),T(this,i,M,$,B,{})}}export{J as component};
