"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8636],{8402:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var t=o(4848),s=o(8453);const r={},a=void 0,c={id:"cpp/template_class_friend_template_function",title:"template_class_friend_template_function",description:"\u6a21\u677f\u7c7b\u7684\u6a21\u677f\u53cb\u5143\u51fd\u6570",source:"@site/docs/cpp/template_class_friend_template_function.md",sourceDirName:"cpp",slug:"/cpp/template_class_friend_template_function",permalink:"/docs/cpp/template_class_friend_template_function",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/template_class_friend_template_function.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"adaptors",permalink:"/docs/cpp/ranges/adaptors"},next:{title:"thread",permalink:"/docs/cpp/thread"}},l={},p=[{value:"\u6a21\u677f\u7c7b\u7684\u6a21\u677f\u53cb\u5143\u51fd\u6570",id:"\u6a21\u677f\u7c7b\u7684\u6a21\u677f\u53cb\u5143\u51fd\u6570",level:2}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u6a21\u677f\u7c7b\u7684\u6a21\u677f\u53cb\u5143\u51fd\u6570",children:"\u6a21\u677f\u7c7b\u7684\u6a21\u677f\u53cb\u5143\u51fd\u6570"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://isocpp.org/wiki/faq/templates#template-friends",children:"reference"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u5e38\u9700\u8981\u5728\u6a21\u677f\u7c7b\u5185\u58f0\u660e\u6a21\u677f\u53cb\u5143\u51fd\u6570\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"\n#include <iostream>\ntemplate<typename T>\nclass Foo {\n    public:\n        Foo(const T& value = T());\n        friend Foo<T> operator+ (const Foo<T>& lhs, const Foo<T>& rhs);\n        friend std::ostream& operator<< (std::ostream& o, const Foo<T>& x);\n    private:\n        T value_;\n};\n\n    template<typename T>\nFoo<T>::Foo(const T& value = T())\n    : value_(value)\n{ }\n    template<typename T>\nFoo<T> operator+ (const Foo<T>& lhs, const Foo<T>& rhs)\n{ return Foo<T>(lhs.value_ + rhs.value_); }\n    template<typename T>\nstd::ostream& operator<< (std::ostream& o, const Foo<T>& x)\n{ return o << x.value_; }\n\nint main()\n{\n    Foo<int> lhs(1);\n    Foo<int> rhs(2);\n    Foo<int> result = lhs + rhs;\n    std::cout << result;\n    // ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u800c\uff0c\u5728\u7f16\u8bd1\u4e0a\u8ff0\u4ee3\u7801\u65f6\u4f1a\u9047\u5230\u94fe\u63a5\u9519\u8bef:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"undefined reference to `operator+(Foo<int> const&, Foo<int> const&)'\nundefined reference to `operator<<(std::ostream&, Foo<int> const&)'\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u662f\u56e0\u4e3a\u7f16\u8bd1\u5668\u5728\u5904\u7406\u7c7b\u5b9a\u4e49\u4e2d\u7684\u53cb\u5143\u51fd\u6570\u65f6\uff0c\u5e76\u4e0d\u77e5\u9053\u8fd9\u4e9b\u53cb\u5143\u51fd\u6570\u662f\u6a21\u677f\uff0c\u6240\u4ee5\u7f16\u8bd1\u5668\u5047\u5b9a\u5b83\u4eec\u4e3a\u975e\u6a21\u7248, \u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"Foo<int> operator+ (const Foo<int>& lhs, const Foo<int>& rhs)\nstd::ostream& operator<< (std::ostream& o, const Foo<int>& x)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u800c\u5bfc\u81f4\u5728\u94fe\u63a5\u65f6\u627e\u4e0d\u5230\u8fd9\u4e9b\u51fd\u6570\u7684\u5b9e\u73b0\uff0c\u51fa\u73b0\u94fe\u63a5\u9519\u8bef"}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u4e86\u8ba9\u7f16\u8bd1\u5668\u6b63\u786e\u8bc6\u522b\u8fd9\u4e9b\u53cb\u5143\u51fd\u6570\u4e3a\u6a21\u677f\u51fd\u6570\uff0c\u6709\u4e24\u79cd\u65b9\u6cd5\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u65b9\u6cd5\u4e00"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u7c7b\u5b9a\u4e49\u4e4b\u524d\u5148\u58f0\u660e\u8fd9\u4e9b\u51fd\u6570\uff0c\u5e76\u4e14\u5728\u7c7b\u5b9a\u4e49\u4e2d\u58f0\u660e\u53cb\u5143\u51fd\u6570\u65f6\u6dfb\u52a0",(0,t.jsx)(n.code,{children:"<>"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"template<typename T> class Foo;  // pre-declare the template class itself\ntemplate<typename T> Foo<T> operator+ (const Foo<T>& lhs, const Foo<T>& rhs);\ntemplate<typename T> std::ostream& operator<< (std::ostream& o, const Foo<T>& x);\n\n#include <iostream>\n    template<typename T>\n    class Foo {\n        public:\n            Foo(const T& value = T());\n            friend Foo<T> operator+ <> (const Foo<T>& lhs, const Foo<T>& rhs);\n            friend std::ostream& operator<< <> (std::ostream& o, const Foo<T>& x);\n        private:\n            T value_;\n    };\n\ntemplate<typename T>\nFoo<T>::Foo(const T& value = T())\n    : value_(value) {}\n\ntemplate<typename T>\nFoo<T> operator+ (const Foo<T>& lhs, const Foo<T>& rhs) { \n    return Foo<T>(lhs.value_ + rhs.value_); \n}\n\ntemplate<typename T>\nstd::ostream& operator<< (std::ostream& o, const Foo<T>& x) {\n    return o << x.value_; \n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u65b9\u6cd5\u4e8c"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u76f4\u63a5\u5728\u7c7b\u5185\u90e8\u5b9a\u4e49\u53cb\u5143\u51fd\u6570"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"\n#include <iostream> template<typename T>\nclass Foo {\n    public:\n        Foo(const T& value = T());\n        friend Foo<T> operator+ (const Foo<T>& lhs, const Foo<T>& rhs)\n        {\n            return Foo<T>(lhs.value_ + rhs.value_); \n        }\n        friend std::ostream& operator<< (std::ostream& o, const Foo<T>& x)\n        {\n            return o << x.value_; \n        }\n    private:\n        T value_;\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var t=o(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);