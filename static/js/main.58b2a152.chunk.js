(this["webpackJsonpreact-redux_pixabay"]=this["webpackJsonpreact-redux_pixabay"]||[]).push([[0],{67:function(e,c,t){},69:function(e,c,t){},70:function(e,c,t){},71:function(e,c,t){},72:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t.n(a),n=t(18),i=t.n(n),r=t(8),j=t(9),l=t(2),d=t(5),b=t(33),o=t.n(b),u=t(22),O=t.n(u),m=t(34),h=t(35),x=t.n(h),g=t(13),f=t(36),p=t(37),v=t(12),N="SET_IMAGES",k="CHANGE_IMAGE_TAGS",y={images:[]},_=Object(g.combineReducers)({allImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,c=arguments.length>1?arguments[1]:void 0,t=c.type,a=c.payload;switch(t){case N:return Object(v.a)(Object(v.a)({},e),{},{images:a.hits});case k:return Object(v.a)(Object(v.a)({},e),{},{images:e.images.map((function(e){return e.id!==a.id?e:Object(v.a)(Object(v.a)({},e),{},{tags:a.tags})}))});default:return e}}}),S=function(e){return e.allImages.images},I=Object(g.createStore)(_,Object(f.composeWithDevTools)(Object(g.applyMiddleware)(p.a))),w=t(11),C=t(10),E=(t(67),t(1)),L=function(e){var c=e.image,t=Object(a.useState)(c.tags),s=Object(d.a)(t,2),n=s[0],i=s[1],j=Object(a.useState)(!1),l=Object(d.a)(j,2),b=l[0],o=l[1],u=Object(r.b)();return Object(E.jsxs)("div",{onDoubleClick:function(e){return o(!0)},style:{cursor:"pointer"},children:[b&&Object(E.jsxs)("form",{children:[Object(E.jsx)("input",{type:"text",value:n,onChange:function(e){i(e.target.value)}}),Object(E.jsx)("button",{onClick:function(e){var t;u((t=c.id,{type:k,payload:{id:t,tags:n}})),o(!1)},children:"Save"}),Object(E.jsx)("button",{onClick:function(e){i(c.tags),o(!1)},children:"Cancel"})]}),!b&&Object(E.jsx)("ul",{className:"tags",title:"double-click to edit tags",children:n.split(",").map((function(e){return Object(E.jsx)("li",{className:"tag",children:e},e+c.user_id)}))})]})},T=s.a.memo((function(e){var c=e.image;return Object(E.jsxs)("div",{className:"card",children:[Object(E.jsx)("div",{className:"card__img",children:Object(E.jsx)(j.b,{to:"/image/".concat(c.id),children:Object(E.jsx)("img",{className:"image",src:c.webformatURL,alt:c.tags})})}),Object(E.jsxs)("div",{className:"card__content",children:[Object(E.jsx)(L,{image:c},c.id),Object(E.jsxs)("div",{className:"card__info",children:[Object(E.jsxs)("div",{className:"info",children:[Object(E.jsx)(C.a,{icon:w.d}),Object(E.jsx)("span",{children:c.likes})]}),Object(E.jsxs)("div",{className:"info",children:[Object(E.jsx)(C.a,{icon:w.b}),Object(E.jsx)("span",{children:c.comments})]})]})]})]})})),A=(t(69),function(){var e=Object(r.c)(S),c=Object(a.useState)(""),t=Object(d.a)(c,2),s=t[0],n=t[1],i=Object(a.useState)(""),j=Object(d.a)(i,2),l=j[0],b=j[1],u=Object(a.useState)(!1),O=Object(d.a)(u,2),m=O[0],h=O[1],x=Object(a.useState)("default"),g=Object(d.a)(x,2),f=g[0],p=g[1],v=Object(a.useMemo)((function(){return e.filter((function(e){return e.tags.includes(l)}))}),[e,l]),N=Object(a.useCallback)(o()(b,300),[]);return v.sort((function(e,c){switch(f){case"likes":case"comments":return e[f]-c[f];default:return 0}})),m&&v.reverse(),Object(E.jsxs)("div",{className:"imagesList",children:[Object(E.jsxs)("header",{className:"header",children:[Object(E.jsx)("form",{action:"#",className:"header__search",children:Object(E.jsx)("input",{className:"header__input",type:"search",placeholder:"Search","aria-label":"Search",value:s,onChange:function(e){n(e.target.value),N(e.target.value)}})}),Object(E.jsxs)("div",{className:"sortButtons",children:[Object(E.jsxs)("button",{onClick:function(){p("likes"),h(!m)},children:["Sort by like","likes"===f&&(m?"\u25b2":"\u25bc")]}),Object(E.jsxs)("button",{onClick:function(){p("comments"),h(!m)},children:["Sort by comment","comments"===f&&(m?"\u25b2":"\u25bc")]})]})]}),Object(E.jsx)("div",{className:"cards",children:v.map((function(e){return Object(E.jsx)(T,{image:e},e.id)}))})]})}),M=(t(70),function(){var e,c=Object(l.g)().imageId,t=Object(r.c)((e=+c,function(c){return S(c).find((function(c){return c.id===e}))}));return t?Object(E.jsxs)("div",{className:"imageDetails",children:[Object(E.jsx)("div",{className:"backLink",children:Object(E.jsx)(j.b,{to:"/",className:"link",children:"\u1438 Back To All images"})}),Object(E.jsxs)("div",{className:"details__card",children:[Object(E.jsx)("div",{className:"cardImage",children:Object(E.jsx)("img",{className:"photo",src:t.webformatURL,alt:t.tags})}),Object(E.jsxs)("div",{className:"description",children:[Object(E.jsx)("div",{children:Object(E.jsx)("img",{src:t.userImageURL,className:"round-img",alt:t.user,style:{width:"150px"}})}),Object(E.jsx)("h2",{className:"name",children:t.user}),Object(E.jsxs)("h3",{className:"cardTags",children:["Tags: ",t.tags]}),Object(E.jsxs)("div",{className:"cardInfo",children:[Object(E.jsx)(C.a,{icon:w.d}),Object(E.jsx)("span",{children:t.likes})]}),Object(E.jsxs)("div",{className:"cardInfo",children:[Object(E.jsx)(C.a,{icon:w.b}),Object(E.jsx)("span",{children:t.comments})]}),Object(E.jsxs)("div",{className:"cardInfo",children:[Object(E.jsx)(C.a,{icon:w.c}),Object(E.jsx)("span",{children:t.views})]}),Object(E.jsxs)("div",{className:"cardInfo",children:[Object(E.jsx)(C.a,{icon:w.a}),Object(E.jsx)("span",{children:t.downloads})]})]})]})]}):Object(E.jsx)("div",{children:"Loading..."})}),B=(t(71),function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"backLink",children:Object(E.jsx)(j.b,{to:"/",className:"link",children:"\u1438 Back To All images"})}),Object(E.jsx)("h1",{children:"Ooops... Page not found!"})]})});var G=function(){var e=Object(r.b)();return Object(a.useEffect)((function(){e(function(){var e=Object(m.a)(O.a.mark((function e(c){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://pixabay.com/api/?key=24739471-dde7400cd3ecc0d52c1f047aa&q=cats&image_type=all&per_page=100").catch((function(e){console.log("Err",e)}));case 2:t=e.sent,c((a=t.data,{type:N,payload:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(c){return e.apply(this,arguments)}}())}),[e]),Object(E.jsx)(j.a,{children:Object(E.jsxs)(l.c,{children:[Object(E.jsx)(l.a,{path:"/",element:Object(E.jsx)(A,{})}),Object(E.jsx)(l.a,{path:"/image/:imageId",element:Object(E.jsx)(M,{})}),Object(E.jsx)(l.a,{path:"*",element:Object(E.jsx)(B,{})})]})})};i.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(r.a,{store:I,children:Object(E.jsx)(G,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.58b2a152.chunk.js.map