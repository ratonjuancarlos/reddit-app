(this["webpackJsonpredux-essentials-example"]=this["webpackJsonpredux-essentials-example"]||[]).push([[0],{125:function(e,t,a){e.exports=a(244)},130:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=(a(130),a(10)),c=a(16),s=a(3),d=a(37),m=a(275),u=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}},p=a(14),f=a(292),g=a(289),b=a(290),E=a(291),h=a(54),v=a(293),w=a(282),x=a(108),y=a.n(x),j=a(109),O=a.n(j),N=a(247),C=a(295),P=a(285),S=a(277),k=a(279),I=a(107),B=a.n(I),T=a(281),D=a(280),A=a(278),R=a(283),W=a(294),z=a(284),J=a(105),L=a.n(J),F=a(106),G=a.n(F),H=a(68),M=a.n(H),_=a(100),$=a(40),q=a(69),K=a.n(q),Q=a(101),U=a.n(Q),V=a(102),X=a.n(V),Y=Object($.b)("app/fetchTop",Object(_.a)(M.a.mark((function e(){var t,a,n,r=arguments;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:void 0,e.next=3,X.a.get("https://www.reddit.com/top.json?limit=25&after=".concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))),Z=Object($.c)({name:"app",initialState:u()?Object(d.a)({},u()):{readingPost:void 0,allPosts:void 0,pagination:{limit:25,after:void 0}},reducers:{dismiss:function(e,t){e.allPosts=U()(e.allPosts,(function(e){return e.data.id!==t.payload.id}))},dismissAll:function(e){e.allPosts=[]},read:function(e,t){e.allPosts.map((function(e){return e.data.id===t.payload.id?K()(e,"data.visited",!0):e})),e.readingPost=e.allPosts.find((function(e){return e.data.id===t.payload.id})).data},changePost:function(e,t){var a="next"===t.payload.direction?1:-1;e.allPosts.forEach((function(n,r){if(n.data.id===t.payload.id){var i=e.allPosts[r+a],o=i?i.data:n.data;e.readingPost=o,e.allPosts.map((function(e){return e.data.id===o.id?K()(e,"data.visited",!0):e}))}}))}},extraReducers:Object(l.a)({},Y.fulfilled,(function(e,t){e.allPosts=t.payload.data.children}))}),ee=Z.actions,te=ee.read,ae=ee.dismiss,ne=ee.dismissAll,re=(ee.load,ee.changePost),ie=(ee.loadMore,Z.reducer),oe=a(52),le=a.n(oe),ce=a(103),se=a.n(ce),de=a(104),me=a.n(de);le.a.extend(se.a),le.a.extend(me.a);var ue=Object(m.a)((function(e){return{root:{minWidth:275,margin:10},subtitle:{display:"flex",flexDirection:"row"},title:{flexGrow:1},rowContent:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",cursor:"pointer",marginLeft:16},media:{height:"6rem"},actions:{justifyContent:"space-between"},skeleton:{margin:10}}}));function pe(e){var t=e.id,a=e.visited,i=e.title,o=e.author,l=e.num_comments,s=e.thumbnail,d=e.created_utc,m=ue(),u=Object(p.b)(),f=function(e){return le()(1e3*e).fromNow()},g=Object(n.useState)(!0),b=Object(c.a)(g,2),E=b[0],v=b[1],x=function(){return u(te({id:t}))};return r.a.createElement(N.a,{direction:"left",in:E,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(S.a,{className:m.root,variant:"outlined"},r.a.createElement(A.a,{title:o,subheader:r.a.createElement("span",{className:m.subtitle},f(d),!a&&r.a.createElement(L.a,{color:"secondary",style:{fontSize:25}})),titleTypographyProps:{variant:"h6",align:"left"},subheaderTypographyProps:{align:"left"}}),r.a.createElement("div",{className:m.rowContent,onClick:x},r.a.createElement(k.a,{container:!0,alignItems:"center"},""!==s&&r.a.createElement(k.a,{item:!0,xs:3},r.a.createElement(D.a,{className:m.media,image:s,title:i})),r.a.createElement(k.a,{item:!0,xs:7},r.a.createElement(T.a,{className:m.title},r.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},i))),r.a.createElement(k.a,{item:!0,xs:2},r.a.createElement(w.a,{"aria-label":"goto",onClick:x},r.a.createElement(G.a,null))))),r.a.createElement(R.a,{className:m.actions},r.a.createElement(z.a,{onClick:function(){v(!1),setTimeout((function(){u(ae({id:t}))}),1e3)},variant:"outlined",color:"secondary",className:m.button,startIcon:r.a.createElement(B.a,null)},"Dismiss post"),r.a.createElement(W.a,{label:"".concat(l," comments")}))))}var fe=Object(m.a)((function(e){return{list:{paddingTop:80},progress:{marginTop:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}}}));var ge=function(){var e=fe(),t=Object(p.c)((function(e){return e.app.allPosts})),a=Object(p.b)();return Object(n.useEffect)((function(){a(Y())}),[a]),r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement("div",{className:e.progress},r.a.createElement(P.a,null)),t&&r.a.createElement(N.a,{direction:"right",in:!0},r.a.createElement(C.a,{className:e.list},t&&t.map((function(e){return r.a.createElement(pe,Object.assign({key:e.data.id},e.data))})))))},be=a(287),Ee=a(286),he=Object(m.a)((function(e){return{modalImage:{height:1200},root:{maxWidth:"35%",margin:"0 auto",marginTop:100},media:{height:300},actions:{display:"flex",flexDirection:"row",justifyContent:"space-between"}}}));function ve(){var e=he(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],o=a[1],l=Object(p.b)(),s=Object(p.c)((function(e){return e.app.readingPost}));if(void 0===s)return r.a.createElement(r.a.Fragment,null);var d=s.title,m=s.thumbnail,u=s.id,f=s.author,g=function(e){return l(re({direction:e,id:u}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{className:e.root},r.a.createElement(A.a,{title:f}),r.a.createElement(Ee.a,null,""!==m&&r.a.createElement(D.a,{onClick:function(){return o(!0)},className:e.media,image:m,title:d}),r.a.createElement(T.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},d))),r.a.createElement(R.a,{className:e.actions},r.a.createElement(z.a,{variant:"outlined",onClick:function(){return g("prev")},size:"small"},"Read Previous"),r.a.createElement(z.a,{variant:"outlined",onClick:function(){return g("next")},size:"small"},"Read Next"))),""!==m&&r.a.createElement(be.a,{onClose:function(){return o(!1)},"aria-labelledby":"simple-dialog-title",open:i},r.a.createElement("img",{alt:"modal",className:e.modalImage,src:m})))}var we=a(288),xe=Object(m.a)((function(e){return{root:{display:"flex"},drawer:{width:350,flexShrink:0},drawerPaper:{width:350},drawerHeader:Object(d.a)(Object(d.a)({},e.mixins.toolbar),{},{display:"flex",alignItems:"center",justifyContent:"space-between",top:0,position:"fixed",backgroundColor:"white",padding:"1rem",width:350,borderBottom:"1px solid grey",zIndex:1}),appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(350,"px)"),marginLeft:350,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},dismissAll:{bottom:0,display:"flex",position:"fixed",justifyContent:"center",backgroundColor:"white",padding:"1rem",width:350,borderTop:"1px solid grey"},loadMore:{bottom:0,display:"flex",justifyContent:"center",backgroundColor:"white",padding:"1rem",width:"100%",borderTop:"1px solid grey"},content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-350},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},title:{flexGrow:1},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function ye(){var e=xe(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],o=a[1],d=Object(we.a)("(min-width:1280px)"),m=Object(we.a)("(orientation: landscape)"),u=Object(p.b)();Object(n.useEffect)((function(){o(m||d)}),[m,d]);return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,null),r.a.createElement(b.a,{position:"fixed",className:Object(s.a)(e.appBar,Object(l.a)({},e.appBarShift,i))},r.a.createElement(E.a,null,r.a.createElement(w.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return o(!0)},edge:"start",className:Object(s.a)(e.menuButton,i&&e.hide)},r.a.createElement(y.a,null)),r.a.createElement(h.a,{variant:"h6",noWrap:!0,className:e.title},"Deviget"),r.a.createElement(z.a,{color:"secondary",onClick:function(){localStorage.removeItem("state"),window.location.reload()},variant:"contained"},"Clean App state-preservation"))),r.a.createElement(f.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(h.a,{component:"h5",variant:"h5"},"Reddit Posts"),r.a.createElement(w.a,{onClick:function(){return o(!1)}},r.a.createElement(O.a,null))),r.a.createElement(v.a,null),r.a.createElement(ge,null),r.a.createElement("div",{className:e.dismissAll},r.a.createElement(z.a,{color:"secondary",onClick:function(){u(ne())}},"Dismiss All"))),r.a.createElement("main",{className:Object(s.a)(e.content,Object(l.a)({},e.contentShift,i))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(ve,null)))}var je=Object($.a)({reducer:{app:ie}});je.subscribe((function(){return function(e){var t=JSON.stringify(e);localStorage.setItem("state",t)}(je.getState().app)}));var Oe=je;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:Oe},r.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[125,1,2]]]);
//# sourceMappingURL=main.97d7b811.chunk.js.map