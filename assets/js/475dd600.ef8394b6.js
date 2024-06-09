"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8141],{6457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=n(4848),i=n(8453);const s={},r=void 0,c={id:"cpp/coroutines",title:"coroutines",description:"\u534f\u7a0b\u7684\u91cd\u8981\u6982\u5ff5",source:"@site/docs/cpp/coroutines.md",sourceDirName:"cpp",slug:"/cpp/coroutines",permalink:"/docs/cpp/coroutines",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/coroutines.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"promise_type",permalink:"/docs/cpp/coroutines/promise_type"},next:{title:"crtp",permalink:"/docs/cpp/crtp"}},d={},l=[{value:"\u534f\u7a0b\u7684\u91cd\u8981\u6982\u5ff5",id:"\u534f\u7a0b\u7684\u91cd\u8981\u6982\u5ff5",level:2},{value:"promise \u627f\u8bfa\u5bf9\u8c61",id:"promise-\u627f\u8bfa\u5bf9\u8c61",level:3}];function u(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u534f\u7a0b\u7684\u91cd\u8981\u6982\u5ff5",children:"\u534f\u7a0b\u7684\u91cd\u8981\u6982\u5ff5"}),"\n",(0,o.jsx)(t.h3,{id:"promise-\u627f\u8bfa\u5bf9\u8c61",children:"promise \u627f\u8bfa\u5bf9\u8c61"}),"\n",(0,o.jsxs)(t.p,{children:["\u627f\u8bfa\u5bf9\u8c61\u7684\u8868\u73b0\u5f62\u5f0f\u5fc5\u987b\u662f",(0,o.jsx)(t.code,{children:"result::promise_type"}),"\uff0c ",(0,o.jsxs)(t.strong,{children:[(0,o.jsx)(t.code,{children:"result"}),"\u4e3a\u534f\u7a0b\u51fd\u6570\u7684\u8fd4\u56de\u503c"]})]}),"\n",(0,o.jsx)(t.p,{children:"\u627f\u8bfa\u5bf9\u8c61\u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u5176\u5fc5\u987b\u5b9e\u73b0\u4ee5\u4e0b\u51fd\u6570\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"auto get_return_object()"}),"\uff1a"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"auto initial_suspend()"}),"\uff1a"]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"void return_value(T v)"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"void yield_valud(T v)"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"auto final_suspend() noexpect"})}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:'struct Promise {\n\tstruct promise_type {\n\t\tauto get_return_object() {}\n\n\t\tauto initial_suspend() {}\n\n\t\tauto final_suspend() {}\n\n\t\tvoid unhandled_exception() {}\n\n\t\tvoid return_void() {}\n\t};\n};\n\nPromise CoroutineFunc() {\n\tstd::cout << "before co_await" << std::endl;\n\tco_await Awaiter();\n\tstd::cout << "after co_await" << std::endl;\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(6540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);