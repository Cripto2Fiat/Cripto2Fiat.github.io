(this.webpackJsonpcripto2fiat=this.webpackJsonpcripto2fiat||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(41),l=n.n(r),a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),i(e),r(e),l(e)}))},o=n(64),j=n(66),s=n(6),b=n(13),d=n(32),x=n(7),f=n(4),h=function(e){var t=e.left,n=e.right;return Object(f.jsxs)(x.c,{alignItems:"center",children:[t,Object(f.jsx)(x.d,{}),n]})},u=n(8),O=n(30),g=n(25),p=n(65),m=n(34);function v(e){return Object(f.jsx)(x.a,{as:"button",transition:"all 0.2s cubic-bezier(.08,.52,.52,1)",borderRadius:"2px",fontSize:"14px",fontWeight:"semibold",bg:"white",color:"gray",textAlign:"left",p:5,_hover:{bg:"#ebedf0"},onClick:e.onClick,children:e.value})}var C=function(e){var t=e.label,n=e.modalLabel,i=e.isSearch,r=e.handler,l=e.allowedCurrencies,a=Object(b.a)(r,6),o=a[0],j=a[1],s=a[2],h=a[3],C=a[4],S=a[5],W=Object(u.c)({defaultValue:o.toString()}),z=Object(b.a)(W,2),A=z[0],k=z[1],w=Object(u.d)(),E=w.isOpen,L=w.onOpen,y=w.onClose,I=Object(c.useCallback)((function(e){k(e.target.value);var t=parseFloat(e.target.value);isNaN(t)||j(t)}),[]),R=Object(c.useCallback)((function(e){return function(){h(e),S(""),y()}}),[h,S,y]),B=Object(c.useCallback)((function(){S("")}),[S]);Object(c.useEffect)((function(){k(o.toString())}),[o]);var F=Object(f.jsxs)(x.a,{maxW:"sm",background:"white",borderRadius:25,p:5,mb:5,children:[Object(f.jsx)(x.e,{fontSize:"13px",fontWeight:"300",children:t}),Object(f.jsxs)(x.a,{display:"flex",children:[Object(f.jsx)(O.a,{type:"number",variant:"unstyled",borderWidth:0,fontSize:24,fontWeight:300,onChange:I,value:A}),Object(f.jsx)(d.a,{rightIcon:Object(f.jsx)(p.a,{}),background:"inherit",onClick:L,children:s})]})]}),T=Object(f.jsxs)(g.a,{isOpen:E,onClose:y,isCentered:!0,children:[Object(f.jsx)(g.f,{}),Object(f.jsxs)(g.d,{rounded:25,pb:25,minH:"50vh",children:[Object(f.jsx)(g.e,{alignItems:"center",children:n}),Object(f.jsx)(g.c,{}),Object(f.jsxs)(g.b,{children:[i&&Object(f.jsxs)(O.b,{size:"md",mb:8,children:[Object(f.jsx)(O.a,{placeholder:"Search",value:C,onChange:function(e){return S(e.target.value)},borderRadius:25}),Object(f.jsx)(O.c,{width:"4.5rem",children:Object(f.jsx)(m.a,{onClick:B})})]}),Object(f.jsx)(x.c,{direction:"column",children:l.map((function(e){return Object(f.jsx)(v,{value:e,onClick:R(e)})}))})]})]})]});return Object(f.jsxs)(c.Fragment,{children:[F,T]})},S=function(e,t){var n=Object(u.c)({defaultValue:e}),c=Object(b.a)(n,2),i=c[0],r=c[1],l=Object(u.c)({defaultValue:t}),a=Object(b.a)(l,2),o=a[0],j=a[1],s=Object(u.c)({defaultValue:""}),d=Object(b.a)(s,2);return[i,r,o,j,d[0],d[1]]},W=n(63),z=["EUR","CHF"];function A(){var e,t=S(0,"BTC"),n=S(200,"EUR"),c=Object(b.a)(t,5),i=c[0],r=c[1],l=c[2],a=(c[3],c[4]),o=Object(b.a)(n,3),j=o[0],s=o[1],u=o[2];return Object(f.jsx)(x.c,{height:"100vh",justifyContent:"center",alignItems:"flex-start",borderWidth:"1px",children:Object(f.jsxs)(x.c,{direction:"column",background:"gray.100",rounded:25,pt:10,pb:10,pr:5,pl:5,m:5,mt:"11vh",minWidth:300,children:[Object(f.jsx)(C,{handler:t,label:"From",modalLabel:"Select crypto",isSearch:!0,allowedCurrencies:(e=a,Object(W.filter)(["BTC","ETH","SOL","CHIA","SHIB","MATIC","BEG","BMA","BAM"],(function(t){return t.toLocaleLowerCase().includes(e.toLocaleLowerCase())})))}),Object(f.jsx)(C,{handler:n,label:"To",modalLabel:"Select currency",allowedCurrencies:z}),Object(f.jsx)(d.a,{colorScheme:"teal",rounded:25,mb:5,onClick:function(){s(400),r(200)},children:"Exchange"}),Object(f.jsxs)(x.a,{background:"gray.200",maxW:"sm",borderRadius:25,p:5,children:[Object(f.jsx)(h,{left:Object(f.jsx)(x.e,{fontSize:"12px",fontWeight:"400",textAlign:"left",children:"Rate"}),right:Object(f.jsxs)(x.e,{fontSize:"12px",fontWeight:"300",textAlign:"left",children:["~0.8458236 ",l,"/",u]})}),Object(f.jsx)(h,{left:Object(f.jsx)(x.e,{fontSize:"12px",fontWeight:"400",textAlign:"left",children:"Exchange fee"}),right:Object(f.jsxs)(x.e,{fontSize:"12px",fontWeight:"300",textAlign:"left",children:["20 ",l]})}),Object(f.jsx)(h,{left:Object(f.jsx)(x.e,{fontSize:"12px",fontWeight:"400",textAlign:"left",children:"Slippage tolerance"}),right:Object(f.jsx)(x.e,{fontSize:"12px",fontWeight:"300",textAlign:"left",children:"1%"})}),Object(f.jsx)(x.e,{fontSize:"12px",fontWeight:"300",textAlign:"center",mt:3,p:3,children:"ORDER ROUTING"}),Object(f.jsx)(h,{left:Object(f.jsxs)(x.e,{fontSize:"12px",fontWeight:"400",textAlign:"left",children:[i," ",l," > ",j," ",u]}),right:Object(f.jsx)(x.e,{fontSize:"10px",fontWeight:"300",textAlign:"left",children:"via"})}),Object(f.jsx)(x.b,{borderColor:"gray.400",mt:2,mb:2}),Object(f.jsx)(h,{left:Object(f.jsxs)(x.e,{fontSize:"12px",fontWeight:"400",textAlign:"left",children:["0.03036954 ",l," > 100 ",u]}),right:Object(f.jsx)(x.e,{fontSize:"10px",fontWeight:"300",textAlign:"left",children:"via"})})]})]})})}var k=function(){return Object(f.jsx)(j.a,{children:Object(f.jsxs)(s.d,{children:[Object(f.jsx)(s.b,{path:"/exchange",element:Object(f.jsx)(A,{})}),Object(f.jsx)(s.b,{path:"*",element:Object(f.jsx)(w,{})})]})})},w=function(){return Object(f.jsx)(s.a,{to:"exchange"})},E=function(){var e=function(e){e.preventDefault(),alert("page refresh?")};return Object(c.useEffect)((function(){return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[]),Object(f.jsx)(o.a,{children:Object(f.jsx)(k,{})})};l.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root")),a()}},[[109,1,2]]]);
//# sourceMappingURL=main.88accdb4.chunk.js.map