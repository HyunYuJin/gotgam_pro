webpackJsonp([1],{"4bXY":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("gsu9")},null,null).exports,a=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movies"},[n("h1",[t._v("영화 목록")]),t._v(" "),t._l(t.movies,function(e){return n("div",{key:e.id,staticClass:"movie"},[n("img",{staticClass:"poster",attrs:{src:e.poster}}),t._v(" "),n("div",[n("strong"),t._v(", "),n("i"),t._v(" []\n      "),n("router-link",{attrs:{to:{name:"show",params:{id:e.id}}}},[t._v("더보기")])],1)])})],2)},staticRenderFns:[]},c=n("VU/8")({created:function(){var t=this;this.$http.get("/api/movies").then(function(e){t.movies=e.data})},data:function(){return{movies:[]}}},o,!1,null,null,null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("상세 내용")]),this._v("\n  "+this._s(this.movie)+"\n")])},staticRenderFns:[]};var l=n("VU/8")({created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/"+e).then(function(e){t.movie=e.data})},data:function(){return{movie:{}}}},u,!1,function(t){n("4bXY")},null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login_wrapper"},[e("div",{staticClass:"login_inner_wrapper"})])}]};var v=n("VU/8")({},p,!1,function(t){n("dlm/")},null,null).exports;i.a.use(a.a);var d=new a.a({routes:[{path:"/",name:"index",component:c},{path:"/:id",name:"show",component:l},{path:"/login",name:"Login",component:v}]}),m=n("mtWM"),h=n.n(m);i.a.config.productionTip=!1,i.a.prototype.$http=h.a,new i.a({el:"#app",router:d,components:{App:s},template:"<App/>"})},"dlm/":function(t,e){},gsu9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3fec6268996a206f0588.js.map