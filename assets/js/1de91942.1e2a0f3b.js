"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9830],{9105:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=t(4848),i=t(8453);const r={},l=void 0,c={id:"cpp/ranges/adaptors",title:"adaptors",description:"range adaptors",source:"@site/docs/cpp/ranges/adaptors.md",sourceDirName:"cpp/ranges",slug:"/cpp/ranges/adaptors",permalink:"/docs/cpp/ranges/adaptors",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/ranges/adaptors.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"random",permalink:"/docs/cpp/random"},next:{title:"template_class_friend_template_function",permalink:"/docs/cpp/template_class_friend_template_function"}},d={},o=[{value:"range adaptors",id:"range-adaptors",level:2},{value:"views::all",id:"viewsall",level:3},{value:"views::filter",id:"viewsfilter",level:3},{value:"views::transform",id:"viewstransform",level:3},{value:"views::take",id:"viewstake",level:3},{value:"views::take_while",id:"viewstake_while",level:3},{value:"views::drop",id:"viewsdrop",level:3},{value:"views::drop_while",id:"viewsdrop_while",level:3},{value:"views::join",id:"viewsjoin",level:3},{value:"views::split",id:"viewssplit",level:3},{value:"views::lazy_split",id:"viewslazy_split",level:3},{value:"views::counted",id:"viewscounted",level:3},{value:"views::common",id:"viewscommon",level:3},{value:"views::reverse",id:"viewsreverse",level:3},{value:"views::elements",id:"viewselements",level:3},{value:"views::keys",id:"viewskeys",level:3},{value:"views::values",id:"viewsvalues",level:3}];function a(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"range-adaptors",children:"range adaptors"}),"\n",(0,s.jsx)(e.h3,{id:"viewsall",children:"views::all"}),"\n",(0,s.jsxs)(e.p,{children:["\u5305\u542b\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"range"}),"\u79cd\u7684\u6240\u6709\u5143\u7d20\u7684",(0,s.jsx)(e.code,{children:"view"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n    std::vector<int> vec{1,2,3,4,5};\n\n    // here\n\tfor (auto n: vec | all) {\n\t\tstd::cout << n << " ";\n\t}\n\treturn 0;\n}\n/**\noutput:\n\n1 2 3 4 5\n\n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewsfilter",children:"views::filter"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n    std::vector<int> vec{1,2,3,4,5};\n\n\tauto even = [](int v) { return v % 2 == 0; };\n\n\tfor (auto n: vec | filter(even)) {\n\t\tstd::cout << n << " ";\n\t}\n\treturn 0;\n}\n/**\noutput:\n\n2 4 \n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewstransform",children:"views::transform"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n    std::vector<int> vec{1,2,3,4,5};\n\n\tauto doub = [](int v) { return v * 2; };\n\n\tfor (auto n: vec | transform(doub)) {\n\t\tstd::cout << n << " ";\n\t}\n\treturn 0;\n}\n\n/**\noutput:\n2 4 6 8 10\n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewstake",children:"views::take"}),"\n",(0,s.jsx)(e.p,{children:"\u53d6\u524dN\u4e2a\u5143\u7d20"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n    std::vector<int> vec{1,2,3,4,5};\n    \n\tfor (auto n: vec | take(2)) {\n\t\tstd::cout << n << " ";\n\t}\n\treturn 0;\n}\n\n/**\noutput:\n1 2 \n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewstake_while",children:"views::take_while"}),"\n",(0,s.jsx)(e.p,{children:"\u53d6\u6ee1\u8db3\u6761\u4ef6\u7684\u5143\u7d20\uff0c\u76f4\u5230\u7b2c\u4e00\u6b21\u4e0d\u6ee1\u8db3\u6761\u4ef6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n    std::vector<int> vec{1,2,3,4,5};\n\n\tauto tw = [](int v) { return v < 3; };\n    \n\tfor (auto n: vec | take_while(tw)) {\n\t\tstd::cout << n << " ";\n\t}\n\treturn 0;\n}\n\n/**\noutput:\n1 2 \n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewsdrop",children:"views::drop"}),"\n",(0,s.jsx)(e.p,{children:"\u8df3\u8fc7\u524dN\u4e2a\u5143\u7d20"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n    std::vector<int> vec{1,2,3,4,5};\n\n\tfor (auto n: vec | drop(2)) {\n\t\tstd::cout << n << " ";\n\t}\n\treturn 0;\n}\n\n/**\noutput:\n3 4 5\n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewsdrop_while",children:"views::drop_while"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0e",(0,s.jsx)(e.code,{children:"take_while"}),"\u7c7b\u4f3c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n    std::vector<int> vec{1,2,3,4,5};\n    auto dw = [](int v) { return v < 3; };\n\n    for (auto n: vec | drop_while(dw)) {\n        std::cout << n << " ";\n    }\n    return 0;\n}\n\n/**\noutput:\n3 4 5\n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewsjoin",children:"views::join"}),"\n",(0,s.jsxs)(e.p,{children:["\u5c55\u5e73\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"view"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n\tvector<vector<int>> v1{{1, 2}, {3, 4, 5}, {6}, {7, 8, 9, 10}};\n\n    for (auto n: vec | join) {\n        std::cout << n << " ";\n    }\n    return 0;\n}\n\n/**\noutput:\n1 2 3 4 5 6 7 8 9 10\n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewssplit",children:"views::split"}),"\n",(0,s.jsxs)(e.p,{children:["\u5c06\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"view"}),"\u6309\u7167",(0,s.jsx)(e.code,{children:"delim"}),"\u5212\u5206\u4e3a\u591a\u4e2a\u5b50",(0,s.jsx)(e.code,{children:"view"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n\tauto print = [](const auto& view) {\n\t\tfor (const auto ele : view) {\n\t\t\tstd::cout << ele;\n\t\t}\n\t\tstd::cout << std::endl;\n\t};\n\n\tauto s{"hello cpp 20"sv};\n\tauto delim{" "sv};\n\tfor (auto word : s | split(delim)) {\n        print(word);\n\t}\n}\n/**\noutput:\n\nhello\ncpp\n20\n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewslazy_split",children:"views::lazy_split"}),"\n",(0,s.jsxs)(e.p,{children:["\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u6cd5\u4e0e",(0,s.jsx)(e.code,{children:"split"}),"\u76f8\u540c"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0d\u540c\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"lazy_split"}),"\u53ea\u6709\u5728\u5b9e\u9645\u8bbf\u95ee\u5143\u7d20\u65f6\u624d\u6267\u884c\u5206\u5272\u64cd\u4f5c"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u8f93\u5165\u8303\u56f4\u8f83\u5c0f\u4e14\u9700\u8981\u9891\u7e41\u8bbf\u95ee\u5212\u5206\u51fa\u7684\u5b50",(0,s.jsx)(e.code,{children:"view"}),"\uff0c\u4f7f\u7528",(0,s.jsx)(e.code,{children:"split"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u8f93\u5165\u8303\u56f4\u8f83\u5927\u4e14\u4e0d\u9700\u8981\u9891\u7e41\u8bbf\u95ee\uff0c\u4f7f\u7528",(0,s.jsx)(e.code,{children:"lazy_split"})]}),"\n",(0,s.jsx)(e.h3,{id:"viewscounted",children:"views::counted"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n    std::vector<int> vec{1,2,3,4,5};\n\n    for (auto n: counted(vec.begin() + 1, 3)) {\n        std::cout << n << " ";\n    }\n    return 0;\n}\n\n/**\noutput:\n2 3 4\n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewscommon",children:"views::common"}),"\n",(0,s.jsx)(e.h3,{id:"viewsreverse",children:"views::reverse"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n    std::vector<int> vec{1,2,3,4,5};\n\n    for (auto n: vec | reverse)) {\n        std::cout << n << " ";\n    }\n    return 0;\n}\n\n/**\noutput:\n5 4 3 2 1\n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewselements",children:"views::elements"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n\tstd::vector<std::tuple<int, char, std::string>> vt {\n\t\t{1, \',\', "11"},\n\t\t{2, \'.\', "22"},\n\t\t{3, \'-\', "33"},\n\t\t{4, \'[\', "44"},\n\t};\n\n\tfor (auto n : vt | elements<0>) {\n\t\tstd::cout << n << " ";\n\t}\n    std::cout << std::endl;\n\tfor (auto n : vt | elements<1>) {\n\t\tstd::cout << n << " ";\n\t}\n    std::cout << std::endl;\n\tfor (auto n : vt | elements<2>) {\n\t\tstd::cout << n << " ";\n\t}\n    std::cout << std::endl;\n\n\treturn 0;\n}\n\n/**\noutput:\n1 2 3 4\n, . - [\n11 22 33 44\n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewskeys",children:"views::keys"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n\tstd::map<int, std::string> mp{\n\t\t{1,"11"},\n\t\t{2,"22"},\n\t\t{3,"33"},\n\t\t{4,"44"},\n\t};\n\n\tfor (auto n : mp | keys) {\n\t\tstd::cout << n << " ";\n\t}\n\n    return 0;\n}\n\n/**\noutput:\n1 2 3 4\n*/\n'})}),"\n",(0,s.jsx)(e.h3,{id:"viewsvalues",children:"views::values"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'int main() {\n\tstd::map<int, std::string> mp{\n\t\t{1,"11"},\n\t\t{2,"22"},\n\t\t{3,"33"},\n\t\t{4,"44"},\n\t};\n\n\tfor (auto n : mp | values) {\n\t\tstd::cout << n << " ";\n\t}\n\n    return 0;\n}\n\n/**\noutput:\n11 22 33 44\n*/\n'})})]})}function v(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var s=t(6540);const i={},r=s.createContext(i);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);