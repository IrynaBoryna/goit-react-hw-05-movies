(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[110],{1110:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(5861),a=r(9439),c=r(7757),o=r.n(c),s="movies_moviesList__izc96",u="movies_list__+aHcv",i=r(2791),p=r(7689),l=r(1087),f=r(9323),h=r(6206),m={SearchForm:"searchbar_SearchForm__s5QkV",SearchButton:"searchbar_SearchButton__lpFer",SearchFormInput:"searchbar_SearchFormInput__0k1XT"},v=r(2007),y=r.n(v),d=r(184),_=function(e){var t=e.onSubmit,r=(0,i.useState)(""),n=(0,a.Z)(r,2),c=n[0],o=n[1];return(0,d.jsxs)("form",{className:m.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return alert("Enter your request");t(c),o("")},children:[(0,d.jsx)("input",{className:m.SearchFormInput,type:"text",placeholder:"",name:"query",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}}),(0,d.jsx)("button",{type:"submit",className:m.SearchButton,children:(0,d.jsx)("span",{className:m.SearchButtonText,children:" Search"})})]})},b=_;_.prototype={query:y().string};var x=function(){var e,t=(0,i.useState)(""),r=(0,a.Z)(t,2),c=r[0],m=r[1],v=(0,i.useState)([]),y=(0,a.Z)(v,2),_=y[0],x=y[1],S=(0,i.useState)(null),g=(0,a.Z)(S,2),k=g[0],j=g[1],w=(0,i.useState)(!1),T=(0,a.Z)(w,2),Z=T[0],O=T[1],F=(0,p.TH)(),q=(0,l.lr)(""),C=(0,a.Z)(q,2),N=C[0],E=C[1],I=null!==(e=N.get("query"))&&void 0!==e?e:"";(0,i.useEffect)((function(){if(""!==I){var e=function(){var e=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,(0,h.Z)("search/movie",I);case 4:t=e.sent,x(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),j({error:e.t0});case 11:return e.prev=11,O(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[I]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b,{value:c,onSubmit:function(e){var t=""!==e?{query:e}:{};E(t),m(Object.values(t))}}),k&&(0,d.jsx)("p",{children:"something went wrong..."}),Z?(0,d.jsx)(f.a,{}):(0,d.jsx)("ul",{className:s,children:_.map((function(e){var t=e.id,r=e.title;return(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{className:u,to:"".concat(t),state:{from:F},children:r})},t)}))})]})},S=x;x.prototype={title:y().string,id:y().number,moviesSearch:y().array,query:y().string,isLoading:y().bool,error:y().string}},6206:function(e,t,r){"use strict";var n=r(5861),a=r(7757),c=r.n(a),o=r(1243),s=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat("https://api.themoviedb.org/3/").concat(t,"?api_key=").concat("1e9768f515bbeb1d217569014504939a","&query=").concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();t.Z=s},9323:function(e,t,r){"use strict";r.d(t,{a:function(){return c}});var n=r(4691),a=r(184),c=function(){return(0,a.jsx)(n.Nx,{width:"200",color:"#4fa94d"})}},888:function(e,t,r){"use strict";var n=r(9047);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,c,o){if(o!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=110.2a43535e.chunk.js.map