"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7506],{1994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(4848),s=n(8453);const c={},o=void 0,i={id:"cpp/type_traits/remove_cvref",title:"remove_cvref",description:"remove_cvref",source:"@site/docs/cpp/type_traits/remove_cvref.md",sourceDirName:"cpp/type_traits",slug:"/cpp/type_traits/remove_cvref",permalink:"/docs/cpp/type_traits/remove_cvref",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/type_traits/remove_cvref.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"enable_if",permalink:"/docs/cpp/type_traits/enable_if"},next:{title:"user-defined-literals",permalink:"/docs/cpp/user-defined-literals"}},d={},l=[{value:"remove_cvref",id:"remove_cvref",level:2},{value:"\u53ef\u80fd\u7684\u5b9e\u73b0",id:"\u53ef\u80fd\u7684\u5b9e\u73b0",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"remove_cvref",children:"remove_cvref"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://en.cppreference.com/w/cpp/types/remove_cvref",children:"cppreference"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u53bb\u9664\u7c7b\u578b\u7684const\uff0c\u5f15\u7528\uff0c\u53f3\u503c"})}),"\n",(0,r.jsx)(t.h3,{id:"\u53ef\u80fd\u7684\u5b9e\u73b0",children:"\u53ef\u80fd\u7684\u5b9e\u73b0"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"template<class T>\nstruct remove_cvref\n{\n    // cv : const and volatile\n    using type = std::remove_cv_t<std::remove_reference_t<T>>;\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"\u6d4b\u8bd5",children:"\u6d4b\u8bd5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"#include <iostream>\n#include <type_traits>\n\nint main() {\n\tstd::cout << std::is_same_v<std::remove_cvref_t<int>, int> << std::endl;\n\tstd::cout << std::is_same_v<std::remove_cvref_t<const int>, int> << std::endl;\n\tstd::cout << std::is_same_v<std::remove_cvref_t<const int &>, int> << std::endl;\n\tstd::cout << std::is_same_v<std::remove_cvref_t<const int &&>, int> << std::endl;\n\treturn 0;\n}\n\n/**\n* output\n* 1\n* 1\n* 1\n* 1\n*/\n"})})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const s={},c=r.createContext(s);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);