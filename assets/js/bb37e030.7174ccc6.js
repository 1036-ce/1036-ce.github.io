"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3475],{8978:(n,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var e=s(4848),a=s(8453);const d={},r=void 0,c={id:"cpp/any",title:"any",description:"std::any",source:"@site/docs/cpp/any.md",sourceDirName:"cpp",slug:"/cpp/any",permalink:"/docs/cpp/any",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/any.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"little",permalink:"/docs/cmake/little"},next:{title:"asio",permalink:"/docs/cpp/asio"}},i={},l=[{value:"std::any",id:"stdany",level:2},{value:"\u6210\u5458\u51fd\u6570",id:"\u6210\u5458\u51fd\u6570",level:3},{value:"\u975e\u6210\u5458\u51fd\u6570",id:"\u975e\u6210\u5458\u51fd\u6570",level:3}];function o(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h2,{id:"stdany",children:"std::any"}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.code,{children:"std::any"}),"\u662f\u4e00\u4e2a\u53ef\u4ee5\u88c5\u5165\u6240\u6709",(0,e.jsx)(t.code,{children:"copyable"}),"\u7c7b\u578b\u7684\u5bb9\u5668"]}),"\n",(0,e.jsx)(t.h3,{id:"\u6210\u5458\u51fd\u6570",children:"\u6210\u5458\u51fd\u6570"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-cpp",children:'// emplace\nstd::any a;\na.emplace<std::string>("123123");\nassert(std::any_cast<std::string>(a) == std::string("123123"));\n\n// reset\nstd::any a;\na.emplace<std::string>("123123");\na.reset();\nassert(a.has_value() == false);\n\n// swap\nstd::any a = std::make_any<std::string>("123123");\nstd::any b = std::make_any<int>(8);\na.swap(b);\nassert(std::any_cast<int>(a) == 8);\nassert(std::any_cast<std::string>(b) == std::string("123123"));\n\n// has_value\nstd::any a;\na.emplace<std::string>("123123");\nassert(a.has_value() == true);\na.reset();\nassert(a.has_value() == false);\n\n// type\nstd::any a = std::make_any<std::string>("123123");\nassert(a.type() == typeid(std::string));\n'})}),"\n",(0,e.jsx)(t.h3,{id:"\u975e\u6210\u5458\u51fd\u6570",children:"\u975e\u6210\u5458\u51fd\u6570"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-cpp",children:'// std::swap\n// \u4e0e\u6210\u5458\u51fd\u6570`swap`\u529f\u80fd\u76f8\u540c\n\n// std::any_cast\nstd::any a = std::make_any<std::string>("123123");\nassert(std::any_cast<std::string>(b) == std::string("123123"));\n\n// std::make_any\nstd::any a = std::make_any<std::string>("123123");\nassert(std::any_cast<std::string>(b) == std::string("123123"));\n'})})]})}function p(n={}){const{wrapper:t}={...(0,a.R)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(o,{...n})}):o(n)}},8453:(n,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var e=s(6540);const a={},d=e.createContext(a);function r(n){const t=e.useContext(d);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),e.createElement(d.Provider,{value:t},n.children)}}}]);