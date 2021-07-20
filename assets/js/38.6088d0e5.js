(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{613:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。")]),s._v(" "),e("h2",{attrs:{id:"什么是类型推论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是类型推论"}},[s._v("#")]),s._v(" 什么是类型推论")]),s._v(" "),e("p",[s._v("以下代码虽然没有指定类型，但是会在编译的时候报错：")]),s._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" myFavoriteNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'seven'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmyFavoriteNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("事实上，它等价于：")]),s._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" myFavoriteNumber"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'seven'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmyFavoriteNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。")]),s._v(" "),e("p",[e("strong",[s._v("如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 "),e("code",[s._v("any")]),s._v(" 类型而完全不被类型检查")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" myFavoriteNumber"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmyFavoriteNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'seven'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmyFavoriteNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.typescriptlang.org/docs/handbook/type-inference.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Type Inference"),e("OutboundLink")],1),s._v("（"),e("a",{attrs:{href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("中文版"),e("OutboundLink")],1),s._v("）")])])])}),[],!1,null,null,null);t.default=n.exports}}]);