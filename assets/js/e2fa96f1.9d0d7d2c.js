"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9635],{6142:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(4848),l=t(8453);const s={},i=void 0,a={id:"cpp/little",title:"little",description:"lambda\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3a\u51fd\u6570\u6307\u9488",source:"@site/docs/cpp/little.md",sourceDirName:"cpp",slug:"/cpp/little",permalink:"/docs/cpp/little",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/little.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"iterator_category",permalink:"/docs/cpp/iterator_category"},next:{title:"mutex",permalink:"/docs/cpp/mutex"}},o={},c=[{value:"lambda\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3a\u51fd\u6570\u6307\u9488",id:"lambda\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3a\u51fd\u6570\u6307\u9488",level:3},{value:"\u524d\u7f6e\u9012\u589e\u8fd0\u7b97\u7b26\u4e0e\u540e\u7f6e\u9012\u589e\u8fd0\u7b97\u7b26",id:"\u524d\u7f6e\u9012\u589e\u8fd0\u7b97\u7b26\u4e0e\u540e\u7f6e\u9012\u589e\u8fd0\u7b97\u7b26",level:3},{value:"cpp\u7a7a\u7c7b\u7684\u5927\u5c0f\u4e3a1\u5b57\u8282\uff0c\u4e3a\u4ec0\u4e48\uff1f",id:"cpp\u7a7a\u7c7b\u7684\u5927\u5c0f\u4e3a1\u5b57\u8282\u4e3a\u4ec0\u4e48",level:3},{value:"\u62f7\u8d1d\u6784\u9020\u51fd\u6570\u4e0eoperator=\u7684\u8c03\u7528\u65f6\u673a",id:"\u62f7\u8d1d\u6784\u9020\u51fd\u6570\u4e0eoperator\u7684\u8c03\u7528\u65f6\u673a",level:3}];function p(n){const e={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h3,{id:"lambda\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3a\u51fd\u6570\u6307\u9488",children:"lambda\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3a\u51fd\u6570\u6307\u9488"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"#include <iostream>\n\nint main() {\n    auto lambda = [](int a, int b) { return a + b; };\n\n    // \u4f7f\u7528 + \u53f7\u5c06 lambda \u8f6c\u6362\u4e3a\u51fd\u6570\u6307\u9488\n    int (*func_ptr)(int, int) = +lambda;\n\n    // \u4f7f\u7528\u51fd\u6570\u6307\u9488\u8c03\u7528\n    std::cout << func_ptr(3, 4) << std::endl;  // Output: 7\n\n    return 0;\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8fd9\u79cd\u8f6c\u6362\u53ea\u6709\u5728lambda\u8868\u8fbe\u5f0f",(0,r.jsx)(e.strong,{children:"\u6ca1\u6709\u6355\u83b7\u5916\u90e8\u53d8\u91cf"}),"\u7684\u60c5\u51b5\u4e0b\u624d\u6709\u6548"]}),"\n",(0,r.jsx)(e.h3,{id:"\u524d\u7f6e\u9012\u589e\u8fd0\u7b97\u7b26\u4e0e\u540e\u7f6e\u9012\u589e\u8fd0\u7b97\u7b26",children:"\u524d\u7f6e\u9012\u589e\u8fd0\u7b97\u7b26\u4e0e\u540e\u7f6e\u9012\u589e\u8fd0\u7b97\u7b26"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'class MyClass {\npublic:\n    MyClass(int v) : value(v) {}\n\n    // \u524d\u7f6e\u9012\u589e\u8fd0\u7b97\u7b26\n    MyClass& operator++() {\n        ++value;\n        return *this;\n    }\n\n    // \u540e\u7f6e\u9012\u589e\u8fd0\u7b97\u7b26\n    MyClass operator++(int) {\n        MyClass temp = *this;\n        ++value;\n        return temp;\n    }\n\n    void print() const {\n        std::cout << "Value: " << value << std::endl;\n    }\n\nprivate:\n    int value;\n};\n\nint main() {\n    MyClass obj(5);\n\n    ++obj; // \u524d\u7f6e\u9012\u589e\n    obj.print(); // \u8f93\u51fa\uff1aValue: 6\n\n    obj++; // \u540e\u7f6e\u9012\u589e\n    obj.print(); // \u8f93\u51fa\uff1aValue: 7\n\n    return 0;\n}\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u524d\u7f6e\u9012\u589e\uff1a\u589e\u52a0\u503c\uff0c\u7136\u540e\u8fd4\u56de\u589e\u52a0\u540e\u7684\u503c\u3002\u901a\u5e38\u5b9e\u73b0\u8fd4\u56de\u5bf9\u8c61\u7684\u5f15\u7528\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u540e\u7f6e\u9012\u589e\uff1a\u8fd4\u56de\u5f53\u524d\u503c\uff0c\u7136\u540e\u589e\u52a0\u503c\u3002\u901a\u5e38\u5b9e\u73b0\u8fd4\u56de\u5bf9\u8c61\u7684\u526f\u672c\uff0c",(0,r.jsx)(e.strong,{children:"\u5e76\u4e14\u9700\u8981\u4e00\u4e2a\u989d\u5916\u7684int\u53c2\u6570\u6765\u533a\u5206"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u4e24\u79cd\u8fd0\u7b97\u7b26\u91cd\u8f7d\u65f6\u901a\u5e38\u4f5c\u4e3a\u6210\u5458\u51fd\u6570"}),"\n",(0,r.jsx)(e.h3,{id:"cpp\u7a7a\u7c7b\u7684\u5927\u5c0f\u4e3a1\u5b57\u8282\u4e3a\u4ec0\u4e48",children:"cpp\u7a7a\u7c7b\u7684\u5927\u5c0f\u4e3a1\u5b57\u8282\uff0c\u4e3a\u4ec0\u4e48\uff1f"}),"\n",(0,r.jsx)(e.p,{children:"\u6bcf\u4e2a\u5bf9\u8c61\u5728\u5185\u5b58\u4e2d\u90fd\u9700\u8981\u4e00\u4e2a\u552f\u4e00\u5730\u5740\u3002\u5982\u679c\u7a7a\u7c7b\u7684\u5927\u5c0f\u4e3a 0\uff0c\u90a3\u4e48\u5728\u5185\u5b58\u4e2d\u521b\u5efa\u4e24\u4e2a\u7a7a\u7c7b\u5bf9\u8c61\u65f6\uff0c\u5b83\u4eec\u5c06\u6709\u76f8\u540c\u7684\u5730\u5740"}),"\n",(0,r.jsx)(e.h3,{id:"\u62f7\u8d1d\u6784\u9020\u51fd\u6570\u4e0eoperator\u7684\u8c03\u7528\u65f6\u673a",children:"\u62f7\u8d1d\u6784\u9020\u51fd\u6570\u4e0eoperator=\u7684\u8c03\u7528\u65f6\u673a"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u7528\u4e00\u4e2a\u5bf9\u8c61\u521d\u59cb\u5316\u53e6\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u8c03\u7528\u62f7\u8d1d\u6784\u9020\u51fd\u6570"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u5c06\u4e00\u4e2a\u5df2\u5b58\u5728\u7684\u5bf9\u8c61\u8d4b\u503c\u7ed9\u4e00\u4e2a\u5df2\u5b58\u5728\u7684\u5bf9\u8c61\u65f6\uff0c\u8c03\u7528",(0,r.jsx)(e.code,{children:"operator="})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"MyClass obj1;\nMyClass obj2 = obj1;    // \u8c03\u7528\u62f7\u8d1d\u6784\u9020\u51fd\u6570\n\nMyClass obj1;\nMyClass obj2;\nobj2 = obj1;            // \u8c03\u7528operator=\n"})})]})}function d(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>a});var r=t(6540);const l={},s=r.createContext(l);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);