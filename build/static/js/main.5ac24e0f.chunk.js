(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/shopping-cart-solid.701d6d1d.svg"},31:function(e,t,a){e.exports=a.p+"static/media/food-bg.698e5e80.jpg"},32:function(e,t,a){e.exports=a(48)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),u=a.n(c),s=a(18),l=a(11),o=a(8),i=a(9),m=a(10),p=a(19),d=a(17),E=a(20),f=(a(41),function(e){var t=e.menuItem,a=t.title,n=t.price,c=t.url,u=t.category;return r.a.createElement("li",{className:"menu__item"},r.a.createElement("div",{className:"menu__title"},a),r.a.createElement("img",{className:"menu__img",src:c,alt:"Cesar salad"}),r.a.createElement("div",{className:"menu__category"},"Category: ",r.a.createElement("span",null,u)),r.a.createElement("div",{className:"menu__price"},"Price: ",r.a.createElement("span",null,n,"$")),r.a.createElement("button",{className:"menu__btn"},"Add to cart"))}),h=r.a.createContext(),_=function(){return function(e){return function(t){return r.a.createElement(h.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{RestoService:a}))})}}},v=(a(42),function(){return r.a.createElement("div",{className:"spinner"},"loading...")}),g=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.menuRequested(),this.props.RestoService.getMenuItems().then(function(t){return e.props.menuLoaded(t)})}},{key:"render",value:function(){var e=this.props,t=e.menuItems;return e.loading?r.a.createElement(v,null):r.a.createElement("ul",{className:"menu__list"},t.map(function(e){return r.a.createElement(f,{key:e.id,menuItem:e})}),";")}}]),t}(n.Component),b={menuLoaded:function(e){return{type:"MENU_LOADED",payload:e}},menuRequested:function(){return{type:"MENU_REQUESTED"}}},N=_()(Object(s.b)(function(e){return{menuItems:e.menu,loading:e.loading}},b)(g)),y=function(){return r.a.createElement(N,null)},j=(a(43),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cart__title"},"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437:"),r.a.createElement("div",{className:"cart__list"},r.a.createElement("div",{className:"cart__item"},r.a.createElement("img",{src:"https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",className:"cart__item-img",alt:"Cesar salad"}),r.a.createElement("div",{className:"cart__item-title"},"Cesar salad"),r.a.createElement("div",{className:"cart__item-price"},"12$"),r.a.createElement("div",{className:"cart__close"},"\xd7"))))}),k=function(){return r.a.createElement("div",{className:"cart"},r.a.createElement(j,null))},O=a(29),w=a.n(O),x=(a(44),function(e){var t=e.total;return r.a.createElement("header",{className:"header"},r.a.createElement(l.b,{to:"/",className:"header__link"},"Menu"),r.a.createElement(l.b,{to:"/cart",className:"header__link",href:"#"},r.a.createElement("img",{className:"header__cart",src:w.a,alt:"cart"}),"Total: ",t," $"))}),C=a(31),D=a.n(C),M=function(){return r.a.createElement("div",{style:{background:"url(".concat(D.a,") center center/cover no-repeat")},className:"app"},r.a.createElement(x,{total:50}),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:y}),r.a.createElement(o.a,{path:"/cart",component:k}),r.a.createElement(o.a,{exact:!0,component:y})))},R=function(){return r.a.createElement("div",{className:"error"},"Error")},I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?r.a.createElement(R,null):this.props.children}}]),t}(n.Component),U=a(13),S=a.n(U),A=a(26),L=function(){function e(){Object(i.a)(this,e),this._apiBase="http://localhost:3000"}return Object(m.a)(e,[{key:"getResource",value:function(){var e=Object(A.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t)+", received ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getMenuItems",value:function(){var e=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/menu/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),z=a(16),B={menu:[],loading:!0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENU_LOADED":return{menu:t.payload,loading:!1};case"MENU_REQUESTED":return{menu:e.menu,loading:!0};default:return e}},$=Object(z.b)(T),q=(a(47),new L);u.a.render(r.a.createElement(s.a,{store:$},r.a.createElement(I,null,r.a.createElement(h.Provider,{value:q},r.a.createElement(l.a,null,r.a.createElement(M,null))))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5ac24e0f.chunk.js.map