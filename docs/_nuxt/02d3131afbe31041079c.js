(window.webpackJsonp=window.webpackJsonp||[]).push([[6,10],{175:function(t,e,n){"use strict";e.a=function(t){var title=t.title,e=t.desc,desc=void 0===e?"每-个人博客":e,n=t.script,script=void 0===n?[]:n;return{head:{title:"".concat(title,"-").concat(desc),script:script}}}},176:function(t,e){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[n("img",{attrs:{src:"https://gitee.com/chinesee/images/raw/master/img/img_029.png",alt:"微信图片_20200426174628.png",loading:"lazy"}})]),t._v(" "),n("h3",[t._v("1. if多条件判断")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v("// 冗余\nif (x === 'abc' || x === 'def' || x === 'ghi' || x ==='jkl') {}\n\n// 简洁\nif (['abc', 'def', 'ghi', 'jkl'].includes(x)) {}\n")])]),t._v(" "),n("h3",[t._v("2. if...else...")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v("// 冗余\nlet test: boolean;\nif (x > 100) {\n    test = true;\n} else {\n    test = false;\n}\n\n// 简洁\nlet test = x > 10;\n")])]),t._v(" "),n("h3",[t._v("3. Null, Undefined, 空值检查")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v("// 冗余\nif (first !== null || first !== undefined || first !== '') {\n    let second = first;\n}\n\n// 简洁\nlet second = first || '';\n")])]),t._v(" "),n("h3",[t._v("4.  foreach循环")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v("// 冗余\nfor (var i = 0; i < testData.length; i++)\n    \n// 简洁\nfor (let i in testData)\n// 或\nfor (let i of testData)\n")])]),t._v(" "),n("h3",[t._v("5. 函数条件调用")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v("// 冗余\nfunction test1() {\n  console.log('test1');\n};\nfunction test2() {\n  console.log('test2');\n};\nvar test3 = 1;\nif (test3 == 1) {\n  test1();\n} else {\n  test2();\n}\n\n// 简单\n(test3 === 1? test1:test2)();\n")])]),t._v(" "),n("h3",[t._v("6. switch条件")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v("// 冗余\nswitch (data) {\n  case 1:\n    test1();\n  break;\n\n  case 2:\n    test2();\n  break;\n\n  case 3:\n    test();\n  break;\n  // so on...\n}\n\n// 简洁\nvar data = {\n  1: test1,\n  2: test2,\n  3: test\n};\n\ndata[anything] && data[anything]();\n")])]),t._v(" "),n("h3",[t._v("7. 多行字符串")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v("// 冗余\nconst data = 'abc abc abc abc abc abc\\n\\t'\n    + 'test test,test test test test\\n\\t'\n\n// 简洁\nconst data = `abc abc abc abc abc abc\n         test test,test test test test`\n复制代码\n### 8.  隐式返回\n// 冗余\nfunction getArea(diameter) {\n  return Math.PI * diameter\n}\n\n// 简洁\ngetArea = diameter => (\n  Math.PI * diameter;\n)\n")])]),t._v(" "),n("h3",[t._v("9. 重复字符串多次")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v("// 冗余\nlet test = ''; \nfor(let i = 0; i < 5; i ++) { \n  test += 'test '; \n} \n\n// 简洁\n'test '.repeat(5);\n")])]),t._v(" "),n("h3",[t._v("10. 幂乘")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v("// 冗余\nMath.pow(2,3);\n\n// 简洁而\n2**3 // 8\n")])]),t._v(" "),n("p",[t._v("部分有问题，仅供参考")])])}]};t.exports={attributes:{name:"jQuery",title:"10个JS优化小技巧",time:"2021年2月4日",id:"bacon-ipsum",description:"10个JS优化小技巧",type:"reprint",author:"Jimmy",from:"掘金",status:1,cover:null},meta:{resourcePath:"C:\\Users\\Administrator\\Desktop\\webbaike.github.io\\contents\\articles\\10个JS优化小技巧.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},181:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("53261c1e",content,!0,{sourceMap:!1})},194:function(t,e,n){t.exports=n.p+"img/73b44a4.png"},195:function(t,e,n){var map={"./articles/10个JS优化小技巧.md":176};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=195},196:function(t,e,n){"use strict";var r=n(181);n.n(r).a},197:function(t,e,n){(e=n(10)(!1)).push([t.i,"[data-v-36d8c954]:root{--ns-primary:47,88,255;--ns-success:70,201,58;--ns-warning:255,186,0;--ns-danger:255,71,87;--ns-dark:30,30,30}.index[data-v-36d8c954]{padding-top:1.5rem;width:90%;max-width:1240px;margin:0 auto}.cover[data-v-36d8c954]{-webkit-transition:all .3s;transition:all .3s;padding-top:100px}@media (max-width:820px){.cover[data-v-36d8c954]{display:none}}@media (min-width:821px){.cover[data-v-36d8c954]{width:45%}}@media (min-width:1040px){.cover[data-v-36d8c954]{width:50%}}@media (min-width:1160px){.cover[data-v-36d8c954]{width:60%}}@media (min-width:1280px){.cover[data-v-36d8c954]{width:700px}}.conact[data-v-36d8c954]{padding-top:150px;text-align:center}",""]),t.exports=e},202:function(t,e,n){"use strict";n.r(e);n(78),n(103),n(18),n(12);var head=n(175),r={mixins:[Object(head.a)({title:"首页"})],asyncData:function(){var t=n(195);return{filterArticles:t.keys().reduce((function(e,n){var r=t(n),c=r.attributes,title=c.title,o=c.description,time=c.time,d=r.meta.resourcePath;if(title){var l=d.split("\\"),path=l.slice(l.indexOf("".concat("contents"))+1).join("/").replace(".md",""),v=new Date(time.replace(/[(年)|(月)|(日)]/g,"/")).getTime();return e.push({path:path,title:title,description:o,time:time,timestamp:v}),e}}),[]).sort((function(a,b){return a.timestamp>b.timestamp?-1:1})).slice(0,4)}},data:function(){return{}}},c=(n(196),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index"},[r("div",{staticClass:"py-10 flex justify-between items-center"},[r("div",{staticClass:"flex flex-col justify-center xs:items-center sm:items-start"},[r("p",{staticClass:"text-gray-700 xs:text-xl sm:text-2xl md:text-3xl font-bold xs:text-center sm:text-left whitespace-pre-line"},[t._v("\n        写代码累到的时候，\n        加班疲惫的时候，\n        家是你最好的归宿！\n      ")]),t._v(" "),r("p",{staticClass:"mt-4 mb-10 text-gray-600 text-sm xs:text-center sm:text-left sm:whitespace-pre-line"},[t._v("\n        人们赞美流星，是因为它燃烧着走完自己的全部路程!\n      ")]),t._v(" "),r("div",[r("ns-button",{attrs:{size:"large"},on:{click:function(e){return t.$router.push("/articles")}}},[t._v("\n          查看文章\n        ")])],1)]),t._v(" "),r("img",{staticClass:"cover",attrs:{src:n(194),alt:"首页图片"}})]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-10 pt-8 conact"},[e("p",{staticClass:"text-xc text-gray-400"},[this._v("联系我 微信：new588088 QQ：1182798549 邮箱：1182798549@qq.com")])])}],!1,null,"36d8c954",null);e.default=component.exports}}]);