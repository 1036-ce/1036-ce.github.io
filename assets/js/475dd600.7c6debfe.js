"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[141],{6457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(4848),i=t(8453);const o={},r=void 0,c={id:"cpp/coroutines",title:"coroutines",description:"\u534f\u7a0b\u7684\u91cd\u8981\u6982\u5ff5",source:"@site/docs/cpp/coroutines.md",sourceDirName:"cpp",slug:"/cpp/coroutines",permalink:"/docs/cpp/coroutines",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/coroutines.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cmake and gtest",permalink:"/docs/cmake/cmake_and_gtest"},next:{title:"user-defined-literals",permalink:"/docs/cpp/user-defined-literals"}},d={},l=[{value:"\u534f\u7a0b\u7684\u91cd\u8981\u6982\u5ff5",id:"\u534f\u7a0b\u7684\u91cd\u8981\u6982\u5ff5",level:2},{value:"promise \u627f\u8bfa\u5bf9\u8c61",id:"promise-\u627f\u8bfa\u5bf9\u8c61",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u534f\u7a0b\u7684\u91cd\u8981\u6982\u5ff5",children:"\u534f\u7a0b\u7684\u91cd\u8981\u6982\u5ff5"}),"\n",(0,s.jsx)(n.h3,{id:"promise-\u627f\u8bfa\u5bf9\u8c61",children:"promise \u627f\u8bfa\u5bf9\u8c61"}),"\n",(0,s.jsxs)(n.p,{children:["\u627f\u8bfa\u5bf9\u8c61\u7684\u8868\u73b0\u5f62\u5f0f\u5fc5\u987b\u662f",(0,s.jsx)(n.code,{children:"result::promise_type"}),"\uff0c ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"result"}),"\u4e3a\u534f\u7a0b\u51fd\u6570\u7684\u8fd4\u56de\u503c"]})]}),"\n",(0,s.jsx)(n.p,{children:"\u627f\u8bfa\u5bf9\u8c61\u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u5176\u5fc5\u987b\u5b9e\u73b0\u4ee5\u4e0b\u51fd\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"auto get_return_object()"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"auto initial_suspend()"}),"\uff1a"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"void return_value(T v)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"void yield_valud(T v)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"auto final_suspend() noexpect"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'struct Promise {\n\tstruct promise_type {\n\t\tauto get_return_object() {}\n\n\t\tauto initial_suspend() {}\n\n\t\tauto final_suspend() {}\n\n\t\tvoid unhandled_exception() {}\n\n\t\tvoid return_void() {}\n\t};\n};\n\nPromise CoroutineFunc() {\n\tstd::cout << "before co_await" << std::endl;\n\tco_await Awaiter();\n\tstd::cout << "after co_await" << std::endl;\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);