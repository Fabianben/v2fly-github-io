(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{389:function(t,e,s){"use strict";s.r(e);var a=s(18),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"blackhole"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blackhole"}},[t._v("#")]),t._v(" Blackhole")]),t._v(" "),s("ul",[s("li",[t._v("名称："),s("code",[t._v("blackhole")])]),t._v(" "),s("li",[t._v("类型：出站协议")])]),t._v(" "),s("p",[t._v("Blackhole（黑洞）是一个出站数据协议，它会阻碍所有数据的出站，配合 "),s("RouterLink",{attrs:{to:"/config/routing.html"}},[t._v("路由（Routing）")]),t._v(" 一起使用，可以达到禁止访问某些网站的效果。")],1),t._v(" "),s("h2",{attrs:{id:"outboundconfigurationobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[t._v("#")]),t._v(" OutboundConfigurationObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("response")]),t._v(": "),s("a",{attrs:{href:"#responseobject"}},[t._v("ResponseObject")])])]),t._v(" "),s("p",[t._v("配置黑洞的响应数据。Blackhole 会在收到待转发数据之后，发送指定的响应数据，然后关闭连接。待转发的数据将被丢弃。如不指定此项，Blackhole 将直接关闭连接。")]),t._v(" "),s("h3",{attrs:{id:"responseobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#responseobject"}},[t._v("#")]),t._v(" ResponseObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("type")]),t._v(': "http" | "none"')])]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("type")]),t._v(" 为 "),s("code",[t._v('"none"')]),t._v("（默认值）时，Blackhole 将直接关闭连接。当 "),s("code",[t._v("type")]),t._v(" 为 "),s("code",[t._v('"http"')]),t._v(" 时，Blackhole 会发回一个简单的 HTTP 403 数据包，然后关闭连接。")])])}),[],!1,null,null,null);e.default=n.exports}}]);