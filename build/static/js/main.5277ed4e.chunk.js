(this["webpackJsonptranslate-extension"]=this["webpackJsonptranslate-extension"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),l=n.n(a),i=n(4),s=n.n(i),c=(n(13),n(5)),h=n(6),o=n(2),r=n(8),u=n(7),d=(n(14),n(0)),g=function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={text:t.data.text,lang:t.data.lang},a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.handleTextChange=a.handleTextChange.bind(Object(o.a)(a)),a.handleLangChange=a.handleLangChange.bind(Object(o.a)(a)),a}return Object(h.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Main-Container",children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("input",{id:"new-todo",value:this.state.text,onChange:this.handleTextChange}),Object(d.jsx)("button",{children:"Translate"}),Object(d.jsxs)("label",{children:["Language",Object(d.jsxs)("select",{value:this.state.lang,onChange:this.handleLangChange,children:[Object(d.jsx)("option",{value:"en",children:"English"}),Object(d.jsx)("option",{value:"ko",children:"Korean"}),Object(d.jsx)("option",{value:"zh",children:"Chinese (Simplified)"})]})]}),Object(d.jsx)("h3",{children:this.state.translated})]})})}},{key:"handleTextChange",value:function(t){this.setState({text:t.target.value}),chrome.storage.local.set({text:t.target.value})}},{key:"handleLangChange",value:function(t){this.setState({lang:t.target.value}),chrome.storage.local.set({lang:t.target.value})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var n="https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl="+this.state.lang+"&dt=t&q="+encodeURI(this.state.text);fetch(n).then((function(t){return t.json()})).then((function(t){for(var n="",a=0;a<t[0].length;a++)n+=t[0][a][0],e.setState({translated:n})}))}}]),n}(l.a.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,l=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),l(t),i(t),s(t)}))};chrome.storage.local.get(null,(function(t){s.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(g,{data:t})}),document.getElementById("root"))})),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.5277ed4e.chunk.js.map