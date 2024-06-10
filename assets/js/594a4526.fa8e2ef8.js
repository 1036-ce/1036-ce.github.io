"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[921],{2862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=t(4848),r=t(8453);const c={},i=void 0,o={id:"cpp/user-defined-literals",title:"user-defined-literals",description:"\u4ecb\u7ecd",source:"@site/docs/cpp/user-defined-literals.md",sourceDirName:"cpp",slug:"/cpp/user-defined-literals",permalink:"/docs/cpp/user-defined-literals",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/user-defined-literals.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"remove_cvref",permalink:"/docs/cpp/type_traits/remove_cvref"},next:{title:"cron",permalink:"/docs/cron"}},d={},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528s\u540e\u7f00\u751f\u6210string\u5bf9\u8c61",id:"\u4f7f\u7528s\u540e\u7f00\u751f\u6210string\u5bf9\u8c61",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.p,{children:"user-defined literals \u5728c++11\u5f15\u8fdb\uff0c\u5141\u8bb8\u7528\u6237\u81ea\u5b9a\u4e49\u540e\u7f00(\u6574\u6570\u3001\u6d6e\u70b9\u6570\u3001\u5b57\u7b26\u3001\u5b57\u7b26\u4e32)\u5e76\u4ea7\u751f\u76f8\u5e94\u7684Object"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"<chrono>"}),"\u4e2d\u6709\u4f7f\u7528, \u4f8b\u5b50\u5982\u4e0b"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <chrono>\n#include <iostream>\n#include <thread>\n\nusing namespace std::chrono_literals;\n\nint main() {\n\tusing namespace std::chrono;\n\tusing namespace std::this_thread;\n\tusing std::cout;\n\tauto t1 = steady_clock::now();\n\tcout << "sleep for 1.3 seconds\\n";\n\n    // user-defined literals \u7684\u4f7f\u7528\n\tsleep_for(1s + 300ms);\n    \n\tcout << "sleep for 2 seconds\\n";\n\tsleep_until(steady_clock::now() + 2s);\n\tduration<double> dur1 = steady_clock::now() - t1;\n\tcout << "total duration: " + std::to_string(dur1.count()) + " s\\n";\n\treturn 0;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7",(0,s.jsx)(n.code,{children:"using namespace std::chrono_literals"}),"\u5f15\u5165",(0,s.jsx)(n.code,{children:"chrono_literals"}),", ",(0,s.jsx)(n.code,{children:"chrono_literals "}),"\u547d\u540d\u7a7a\u95f4\u5177\u6709\u8868\u793a\u6301\u7eed\u65f6\u95f4\u7684\u7b26\u53f7\uff0c\u4f8b\u5982 1s \u8868\u793a\u4e00\u79d2\uff0c100ms \u8868\u793a 100 \u6beb\u79d2"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528s\u540e\u7f00\u751f\u6210string\u5bf9\u8c61",children:"\u4f7f\u7528s\u540e\u7f00\u751f\u6210string\u5bf9\u8c61"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n\nint main() {\n\tusing namespace std::literals;\n\tauto a = "asdasdasd"s;\n\ta.append("asdasd");\n\tstd::cout << a << std::endl;\n\treturn 0;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u8003\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:["[1] ",(0,s.jsx)(n.a,{href:"https://en.cppreference.com/w/cpp/language/user_literal",children:"https://en.cppreference.com/w/cpp/language/user_literal"})]}),"\n",(0,s.jsxs)(n.p,{children:["[2] ",(0,s.jsx)(n.a,{href:"https://en.cppreference.com/w/cpp/symbol_index/literals",children:"https://en.cppreference.com/w/cpp/symbol_index/literals"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);