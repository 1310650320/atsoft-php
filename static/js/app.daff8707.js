(function(e){function t(t){for(var o,s,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="../vendor/at-soft/php/static/doc/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticStyle:{height:"100vh"}},[n("el-aside",{attrs:{width:"300px"}},[n("h2",{staticStyle:{"padding-left":"32px"}},[e._v("RestFul Api")]),n("el-menu",{on:{select:e.select}},e._l(e.route,(function(t,o,r){return n("el-menu-item",{key:o,attrs:{index:t.route}},[n("div",{staticStyle:{height:"32px","padding-top":"8px"},attrs:{slot:"title"},slot:"title"},[n("span",{staticStyle:{display:"block","line-height":"18px",height:"18px","font-size":"14px","font-weight":"bolder"}},[e._v(e._s(r+1)+"."+e._s(t.desc))]),n("small",{staticStyle:{display:"block","line-height":"14px",color:"#666666"}},[e._v(e._s(t.route))])])])})),1)],1),n("el-main",[n("el-row",{staticStyle:{height:"100%",overflow:"hidden"},attrs:{gutter:32,id:"col"}},[n("el-col",{staticStyle:{height:"100%",overflow:"auto"},attrs:{span:6}},[n("el-card",{attrs:{shadow:"never",id:"form"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("URL："),e.index?n("small",{attrs:{id:"urldiv"}},[e._v(e._s(e.index.route))]):e._e()]),n("el-button",{staticStyle:{float:"right",padding:"3px 0","margin-right":"10px"},attrs:{type:"text"},on:{click:e.copyJs}},[e._v("复制 ")]),e.index?n("div",{staticStyle:{display:"none"},attrs:{id:"jsdiv"}},[e._v(" export const "+e._s(e.index.routeName)+" = { url: '"+e._s(e.index.route)+"', method: 'POST' }; ")]):e._e()],1),n("el-form",{ref:"form",staticStyle:{"padding-bottom":"50px"},attrs:{model:e.form,"label-width":"120px"}},[e._l(e.detail,(function(t,o){return n("el-form-item",{key:o,attrs:{label:t.key+":"}},[n("el-input",{attrs:{placeholder:t.description},model:{value:e.form[t.key],callback:function(n){e.$set(e.form,t.key,n)},expression:"form[item.key]"}})],1)})),n("el-form-item",{style:e.buttonStyle},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提交")]),n("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],2)],1)],1),n("el-col",{staticStyle:{height:"100%",overflow:"auto"},attrs:{span:9}},[n("el-card",{attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("React请求代码：")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.copyRequest}},[e._v("复制 ")])],1),n("div",[e.index?n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript",attrs:{id:"requestdiv"}},[e._v("const {loading:"+e._s(e.index.routeName)+"Loading,request:"+e._s(e.index.routeName)+"Request} = useRequest("+e._s(e.index.routeName)+");\nconst get"+e._s(e.index.routeName)+" = async () => {\n    const {error,response} = await "+e._s(e.index.routeName)+"Request({data:{}});\n    if(!error){\n        console.log(response);\n    }\n}")])]):e._e()])]),n("el-card",{staticStyle:{"margin-top":"16px"},attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("请求结果：")])]),e.response?n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"json"},[e._v(e._s(e.response))])]):e._e()])],1),n("el-col",{staticStyle:{height:"100%",overflow:"auto"},attrs:{span:9}},[n("el-card",{attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("数据结构：")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.copyText}},[e._v("复制")])],1),n("div",[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"javascript",attrs:{id:"keydiv"}})])])])],1)],1)],1)],1)},a=[],s=(n("a4d3"),n("e01a"),n("fb6a"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),i=n("bc3a"),l=n.n(i),c="production";console.log(c);var d="development"===c?"http://10.255.255.16/":"./",u={name:"App",data:function(){return{route:[],doc:[],detail:{},index:"",textarea:"",form:{},response:"",formDom:0,colDom:0}},components:{},computed:{sourcecode:function(){var e="export default {";for(var t in this.detail)e+="\n\t// ".concat(this.detail[t].description),e+="\n\t".concat(this.detail[t].key,':""');return e+="\n}",e},buttonStyle:function(){return this.formDom>this.colDom?{position:"absolute",bottom:0}:{}}},methods:{getData:function(){var e=this;l()({baseURL:d,url:"doc/rest"}).then((function(t){e.route=t.data.data.route,e.doc=t.data.data.doc}))},select:function(e){var t=this;this.index=null,this.response=null;var n=this.route[e];n.routeName="";var o=n.route.split("/");for(var r in o)n.routeName+=o[r].charAt(0).toUpperCase()+o[r].slice(1);setTimeout((function(){t.index=Object.assign({},n)}),0),this.detail=Object.assign({},this.doc[e]),this.form=Object.assign({}),setTimeout((function(){t.$nextTick((function(){t.formDom=document.getElementById("form").clientHeight,t.colDom=document.getElementById("col").clientHeight}),0)}))},submitForm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.index){t.next=3;break}return e.$message.error("请先选择要测试的接口"),t.abrupt("return");case 3:return e.response=null,t.next=6,l()({baseURL:d,url:e.index.route,method:"POST",data:e.form});case 6:n=t.sent,e.response=Object.assign({},n.data);case 8:case"end":return t.stop()}}),t)})))()},resetForm:function(){this.form=Object.assign({})},copyText:function(){var e=document.getElementById("keydiv").innerText,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.className="oInput",t.style.display="none",this.$message("复制成功")},copyUrl:function(){var e=document.getElementById("urldiv").innerText,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.className="oInput",t.style.display="none",this.$message("复制成功")},copyJs:function(){var e=document.getElementById("jsdiv").innerText,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.className="oInput",t.style.display="none",this.$message("复制成功")},copyRequest:function(){var e=document.getElementById("requestdiv").innerText,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.className="oInput",t.style.display="none",this.$message("复制成功")}},mounted:function(){this.getData()}},p=u,m=(n("7c55"),n("2877")),h=Object(m["a"])(p,r,a,!1,null,null,null),f=h.exports,v=n("5c96"),y=n.n(v),g=n("998c"),x=n.n(g);n("0fae"),n("65b6");o["default"].use(y.a),o["default"].use(x.a),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(f)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var o=n("2395"),r=n.n(o);r.a}});