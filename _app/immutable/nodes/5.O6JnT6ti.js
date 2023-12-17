import{s as ge,n as fe,r as be,o as ke,f as xe}from"../chunks/scheduler.hlegOhip.js";import{S as _e,i as ve,g as c,m as A,s as w,h as m,j as y,n as V,f as p,c as D,z as pe,k as t,a as ce,A as a,C as j,B,o as me,D as de,r as ye,u as Ee,v as Se,d as Ie,t as we,w as De}from"../chunks/index.E217BK8K.js";import{i as Le}from"../chunks/p5_utils.SFiZr6-1.js";function Pe(s){let r,i,n,E,N,L,f,o,P,d,g,F="Show Graph",T,_,z,S,I,G="Adjust Offset Start",M,e,O,k,h,x,ae,R,ne,se,v,re,$,C,le,q,ie,oe,b,W,U,ue,he;return{c(){r=c("div"),i=c("div"),n=c("label"),E=A("Modifier ("),N=A(s[1]),L=A(")"),f=w(),o=c("input"),P=w(),d=c("div"),g=c("label"),g.textContent=F,T=w(),_=c("input"),z=w(),S=c("div"),I=c("label"),I.textContent=G,M=w(),e=c("input"),O=w(),k=c("div"),h=c("div"),x=c("label"),ae=A("Sample Position ("),R=A(s[0]),ne=A(")"),se=w(),v=c("input"),re=w(),$=c("div"),C=c("label"),le=A("Speed ("),q=A(s[4]),ie=A(")"),oe=w(),b=c("input"),W=w(),U=c("div"),this.h()},l(u){r=m(u,"DIV",{class:!0});var l=y(r);i=m(l,"DIV",{class:!0});var X=y(i);n=m(X,"LABEL",{for:!0,class:!0});var H=y(n);E=V(H,"Modifier ("),N=V(H,s[1]),L=V(H,")"),H.forEach(p),f=D(X),o=m(X,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),X.forEach(p),P=D(l),d=m(l,"DIV",{class:!0});var J=y(d);g=m(J,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),pe(g)!=="svelte-nvo6mh"&&(g.textContent=F),T=D(J),_=m(J,"INPUT",{id:!0,type:!0,class:!0}),J.forEach(p),z=D(l),S=m(l,"DIV",{class:!0});var K=y(S);I=m(K,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),pe(I)!=="svelte-1m4r4pz"&&(I.textContent=G),M=D(K),e=m(K,"INPUT",{id:!0,type:!0,class:!0}),K.forEach(p),O=D(l),k=m(l,"DIV",{class:!0});var Q=y(k);h=m(Q,"DIV",{class:!0});var Y=y(h);x=m(Y,"LABEL",{for:!0,class:!0});var Z=y(x);ae=V(Z,"Sample Position ("),R=V(Z,s[0]),ne=V(Z,")"),Z.forEach(p),se=D(Y),v=m(Y,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),Y.forEach(p),re=D(Q),$=m(Q,"DIV",{class:!0});var ee=y($);C=m(ee,"LABEL",{for:!0,class:!0});var te=y(C);le=V(te,"Speed ("),q=V(te,s[4]),ie=V(te,")"),te.forEach(p),oe=D(ee),b=m(ee,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),ee.forEach(p),Q.forEach(p),l.forEach(p),W=D(u),U=m(u,"DIV",{id:!0}),y(U).forEach(p),this.h()},h(){t(n,"for","minmax-range"),t(n,"class","block mb-2 text-sm font-medium text-gray-900"),t(o,"id","minmax-range "),t(o,"type","range"),t(o,"min","1"),t(o,"max","10"),t(o,"class","w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),t(i,"class",""),t(g,"for","minmax-range"),t(g,"class","block mb-2 text-sm font-medium text-gray-900"),t(_,"id",""),t(_,"type","checkbox"),t(_,"class",""),t(d,"class",""),t(I,"for","minmax-range"),t(I,"class","block mb-2 text-sm font-medium text-gray-900"),t(e,"id",""),t(e,"type","checkbox"),t(e,"class",""),t(S,"class",""),t(x,"for","minmax-range"),t(x,"class","block mb-2 text-sm font-medium text-gray-900"),t(v,"id","minmax-range "),t(v,"type","range"),t(v,"min","1"),t(v,"max","10"),t(v,"class","w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),t(h,"class",""),t(C,"for","minmax-range"),t(C,"class","block mb-2 text-sm font-medium text-gray-900"),t(b,"id","minmax-range "),t(b,"type","range"),t(b,"min","-5"),t(b,"max","5"),t(b,"class","w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),t($,"class",""),t(k,"class","flex flex-col"),t(r,"class","flex gap-5"),t(U,"id","sketch")},m(u,l){ce(u,r,l),a(r,i),a(i,n),a(n,E),a(n,N),a(n,L),a(i,f),a(i,o),j(o,s[1]),a(r,P),a(r,d),a(d,g),a(d,T),a(d,_),_.checked=s[2],a(r,z),a(r,S),a(S,I),a(S,M),a(S,e),e.checked=s[3],a(r,O),a(r,k),a(k,h),a(h,x),a(x,ae),a(x,R),a(x,ne),a(h,se),a(h,v),j(v,s[0]),a(k,re),a(k,$),a($,C),a(C,le),a(C,q),a(C,ie),a($,oe),a($,b),j(b,s[4]),ce(u,W,l),ce(u,U,l),ue||(he=[B(o,"change",s[6]),B(o,"input",s[6]),B(_,"change",s[7]),B(e,"change",s[8]),B(v,"change",s[9]),B(v,"input",s[9]),B(b,"change",s[10]),B(b,"input",s[10])],ue=!0)},p(u,[l]){l&2&&me(N,u[1]),l&2&&j(o,u[1]),l&4&&(_.checked=u[2]),l&8&&(e.checked=u[3]),l&1&&me(R,u[0]),l&1&&j(v,u[0]),l&16&&me(q,u[4]),l&16&&j(b,u[4])},i:fe,o:fe,d(u){u&&(p(r),p(W),p(U)),ue=!1,be(he)}}}function Ce(s){}function Ae(s,r,i){let n=.003,E=0,N=0,L=8,f=4,o=!0,P=!0,d=1,g;function F(e){i(5,g=()=>{T(e)})}function T(e){switch(e.background(200),e.text(e.frameRate().toFixed(0),10,10,50,50),e.text("Sampling 1D Perlin Noise",e.width-300,10,300,50),f){case 1:case 2:case 3:n=e.map(f,1,10,5e-6,2e-4);break;case 4:case 5:case 6:n=e.map(f,1,10,5e-6,.002);break;case 7:n=e.map(f,1,10,.005,.002);break;case 8:n=e.map(f,1,10,.05,.002);break;case 9:n=e.map(f,1,10,.5,.02);break;case 10:n=e.map(f,1,10,.005,.2);break;default:n=0;break}P&&(E=N);const O=e.map(L,1,10,40,e.width-40),k=e.map(e.noise(E+n*O),0,1,0,e.height);e.rect(O-15,k-100,40,40),o&&(e.push(),e.fill(255),e.stroke(255,30,30),e.strokeWeight(8),e.point(O,k),e.pop()),e.push(),e.noFill(),e.beginShape();for(let h=0;h<e.width;h++){if(o){const x=e.map(e.noise(E),0,1,0,e.height);e.vertex(h,x)}E+=n}if(e.endShape(),e.pop(),d!=0){let h=e.map(d,-5,5,-.04,.04);N+=h}d==0?e.noLoop():e.loop()}let _;ke(()=>{_==null&&(_=Le("sketch",F,T,Ce))}),xe(()=>{_=null});function z(){f=de(this.value),i(1,f)}function S(){o=this.checked,i(2,o)}function I(){P=this.checked,i(3,P)}function G(){L=de(this.value),i(0,L)}function M(){d=de(this.value),i(4,d)}return s.$$.update=()=>{s.$$.dirty&63&&`${f}${o}${P}${L}${d}`&&g&&g()},[L,f,o,P,d,g,z,S,I,G,M]}class Ve extends _e{constructor(r){super(),ve(this,r,Ae,Pe,ge,{})}}function $e(s){let r,i;return r=new Ve({}),{c(){ye(r.$$.fragment)},l(n){Ee(r.$$.fragment,n)},m(n,E){Se(r,n,E),i=!0},p:fe,i(n){i||(Ie(r.$$.fragment,n),i=!0)},o(n){we(r.$$.fragment,n),i=!1},d(n){De(r,n)}}}class Te extends _e{constructor(r){super(),ve(this,r,null,$e,ge,{})}}export{Te as component};
