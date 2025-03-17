"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8593],{1027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=t(4848),s=t(8453);const d={},o=void 0,c={id:"cpp/spaceship_operator",title:"spaceship_operator",description:"operator: spaceship operator",source:"@site/docs/cpp/spaceship_operator.md",sourceDirName:"cpp",slug:"/cpp/spaceship_operator",permalink:"/docs/cpp/spaceship_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/spaceship_operator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"shuffle",permalink:"/docs/cpp/shuffle"},next:{title:"template_class_friend_template_function",permalink:"/docs/cpp/template_class_friend_template_function"}},i={},l=[{value:"<code>operator&lt;=&gt;</code>: spaceship operator",id:"operator-spaceship-operator",level:2},{value:"\u8fd4\u56de\u503c\u7c7b\u578b",id:"\u8fd4\u56de\u503c\u7c7b\u578b",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"operator-spaceship-operator",children:[(0,r.jsx)(n.code,{children:"operator<=>"}),": spaceship operator"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8fd4\u56de\u503c\u7c7b\u578b",children:"\u8fd4\u56de\u503c\u7c7b\u578b"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"operator<=>"}),"\u6709\u4e09\u79cd\u8fd4\u56de\u7c7b\u578b\uff08\u5728\u8bbe\u8ba1\u4e4b\u521d\u67095\u79cd\uff0c",(0,r.jsx)(n.code,{children:"std::strong_equality"}),"\u548c",(0,r.jsx)(n.code,{children:"std::weak_equality"}),"\u88ab\u5220\u9664)"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"std::strong_ordering"}),"\n\u4e0d\u5141\u8bb8\u4e0d\u53ef\u6bd4\u8f83\u7684\u503c\uff0c\u5373",(0,r.jsx)(n.code,{children:"a<b"}),", ",(0,r.jsx)(n.code,{children:"a>b"}),", ",(0,r.jsx)(n.code,{children:"a == b"}),"\u4e2d\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u4e3a\u771f"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"std::strong_ordering::less"}),": \u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570\u5c0f\u4e8e\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6570"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"std::strong_ordering::equal"}),": \u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570",(0,r.jsx)(n.strong,{children:"\u7b49\u4e8e"}),"\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6570,\n\u5177\u6709\u53ef\u66ff\u4ee3\u6027\uff0c\u5373\u5982\u679c",(0,r.jsx)(n.code,{children:"a==b"}),"\u4e00\u5b9a\u610f\u5473\u7740",(0,r.jsx)(n.code,{children:"f(a)"}),"\u7b49\u4e8e",(0,r.jsx)(n.code,{children:"f(b)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"std::strong_ordering::equivalent"}),": \u4e0e",(0,r.jsx)(n.code,{children:"equal"}),"\u76f8\u540c"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"std::strong_ordering::greater"}),": \u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570\u5927\u4e8e\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6570"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"std::weak_ordering"}),"\n\u4e0d\u5141\u8bb8\u4e0d\u53ef\u6bd4\u8f83\u7684\u503c\uff0c\u5373",(0,r.jsx)(n.code,{children:"a<b"}),", ",(0,r.jsx)(n.code,{children:"a>b"}),", ",(0,r.jsx)(n.code,{children:"a == b"}),"\u4e2d\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u4e3a\u771f"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"std::weak_ordering::less"}),": \u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570\u5c0f\u4e8e\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6570"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"std::weak_ordering::equivalent"}),": \u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570",(0,r.jsx)(n.strong,{children:"\u7b49\u4ef7\u4e8e"}),"\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6570,\n\u4e0d\u5177\u6709\u53ef\u66ff\u4ee3\u6027,\u5373\u5982\u679c",(0,r.jsx)(n.code,{children:"a==b"}),"\u5e76\u4e0d\u610f\u5473\u7740",(0,r.jsx)(n.code,{children:"f(a)"}),"\u4e00\u5b9a\u7b49\u4e8e ",(0,r.jsx)(n.code,{children:" f(b)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"std::weak_ordering::greater"}),": \u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570\u5927\u4e8e\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6570"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"std::partial_ordering"}),"\n\u5141\u8bb8\u4e0d\u53ef\u6bd4\u8f83\u7684\u503c\uff0c\u5373",(0,r.jsx)(n.code,{children:"a<b"}),",",(0,r.jsx)(n.code,{children:"a>b"}),",",(0,r.jsx)(n.code,{children:"a == b"}),"\u53ef\u4ee5\u5747\u4e3a\u5047"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"std::partial_ordering::less"}),": \u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570\u4e25\u683c\u5c0f\u4e8e\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6570"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"std::partial_ordering::equivalent"}),"\uff1a\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570",(0,r.jsx)(n.strong,{children:"\u7b49\u4ef7\u4e8e"}),"\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6570, \u4e0d\u5177\u6709\u53ef\u66ff\u4ee3\u6027\uff0c\u5373\u5982\u679c",(0,r.jsx)(n.code,{children:"a==b"}),"\u5e76\u4e0d\u610f\u5473\u7740",(0,r.jsx)(n.code,{children:"f(a)"}),"\u4e00\u5b9a\u7b49\u4e8e",(0,r.jsx)(n.code,{children:"f(b)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"std::partial_ordering::greater"}),": \u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570\u4e25\u683c\u5927\u4e8e\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6570"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"std::partial_ordering::unordered"}),": \u4e24\u4e2a\u64cd\u4f5c\u6570\u4e4b\u95f4\u4e0d\u5177\u6709\u786e\u5b9a\u7684\u5927\u5c0f\u5173\u7cfb"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["\u5f53\u4e0d\u4f7f\u7528",(0,r.jsx)(n.code,{children:"operator<=>"}),"\u7684",(0,r.jsx)(n.code,{children:"=default"}),"\u5b9e\u73b0\uff0c\u800c\u662f\u81ea\u5b9a\u4e49\u65f6\uff0c",(0,r.jsx)(n.code,{children:"operator<=>"}),"\u53ea\u751f\u6210\u56db\u4e2a\u6bd4\u8f83\u64cd\u4f5c\u7b26(",(0,r.jsx)(n.code,{children:"<=, <, >, >="}),"), \u6240\u4ee5\u9700\u8981\u624b\u52a8\u6dfb\u52a0",(0,r.jsx)(n.code,{children:"operator=="}),"\u51fd\u6570\uff0c\u624d\u80fd\u591f\u751f\u6210\u5b8c\u6574\u76846\u4e2a\u6bd4\u8f83\u64cd\u4f5c\u7b26"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'// Wrong example\nstruct Data {\n\tint a;\n\tint b;\n\tstd::strong_ordering operator<=>(const Data& other) const {\n        // custom implementation\n\t}\n};\n\nint main() {\n\tData t1{.a = 1, .b = 2};\n\tData t2{.a = 3, .b = 4};\n\n\tif (t1 < t2) {\n\t\tstd::cout << "t1 < t2" << std::endl;\n\t}\n\telse if (t1 == t2) {    // error! \n\t\tstd::cout << "t1 == t2" << std::endl;\n\t}\n\telse if (t1 > t2){\n\t\tstd::cout << "t1 > t2" << std::endl;\n\t}\n\telse {\n\t\tstd::cout << "error" << std::endl;\n\t}\n\treturn 0;\n}\n\n// Right example\nstruct Data {\n\tint a;\n\tint b;\n\tstd::strong_ordering operator<=>(const Data& other) const {\n        // custom implementation\n\t}\n\n    bool operator==(const Data& other) const {\n        // \n    }\n};\n\nint main() {\n\tData t1{.a = 1, .b = 2};\n\tData t2{.a = 3, .b = 4};\n\n\tif (t1 < t2) {\n\t\tstd::cout << "t1 < t2" << std::endl;\n\t}\n\telse if (t1 == t2) {    // error! \n\t\tstd::cout << "t1 == t2" << std::endl;\n\t}\n\telse if (t1 > t2){\n\t\tstd::cout << "t1 > t2" << std::endl;\n\t}\n    else if (t1 != t2) {\n\t\tstd::cout << "t1 != t2" << std::endl;\n    }\n\telse {\n\t\tstd::cout << "error" << std::endl;\n\t}\n\treturn 0;\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(6540);const s={},d=r.createContext(s);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);