"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3284],{4451:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var t=s(4848),a=s(8453);const o={},c=void 0,l={id:"cpp/adl",title:"adl",description:"ADL(Argument Dependent Lookup)",source:"@site/docs/cpp/adl.md",sourceDirName:"cpp",slug:"/cpp/adl",permalink:"/docs/cpp/adl",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/adl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"little",permalink:"/docs/cmake/little"},next:{title:"allocator_traits",permalink:"/docs/cpp/allocator_traits"}},d={},r=[{value:"ADL(Argument Dependent Lookup)",id:"adlargument-dependent-lookup",level:2},{value:"example code",id:"example-code",level:3},{value:"ADL\u7684\u95ee\u9898",id:"adl\u7684\u95ee\u9898",level:3},{value:"refrence",id:"refrence",level:3}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"adlargument-dependent-lookup",children:"ADL(Argument Dependent Lookup)"}),"\n",(0,t.jsx)(n.p,{children:"ADL\uff1a\u53c2\u6570\u76f8\u5173\u67e5\u627e. \u5b83\u5141\u8bb8\u7f16\u8bd1\u5668\u5728\u9047\u5230\u51fd\u6570\u8c03\u7528\u65f6\uff0c\u6839\u636e\u51fd\u6570\u53c2\u6570\u7684\u7c7b\u578b\u53bb\n\u51fd\u6570\u53c2\u6570\u7c7b\u578b\u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u67e5\u627e\u51fd\u6570\u5b9a\u4e49."}),"\n",(0,t.jsx)(n.h3,{id:"example-code",children:"example code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"namespace MyNamespace\n{\n    class MyClass {};\n    void doSomething(MyClass) {}\n}\n\nMyNamespace::MyClass obj; // global object\n\nint main()\n{\n    doSomething(obj); // Works Fine - MyNamespace::doSomething() is called.\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["ADL tells the compiler to not just look at the local scope, but also the ",(0,t.jsx)(n.strong,{children:"namespaces that\ncontain the argument's type"}),". Thus, in the above code, the compiler finds that the object\n",(0,t.jsx)(n.code,{children:"obj"}),", which is the argument of the function ",(0,t.jsx)(n.code,{children:"doSomething()"}),", belongs to the namespace\n",(0,t.jsx)(n.code,{children:"MyNamespace"}),". So, it looks at that namespace to locate the declration of ",(0,t.jsx)(n.code,{children:"doSomething"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"adl\u7684\u95ee\u9898",children:"ADL\u7684\u95ee\u9898"}),"\n",(0,t.jsx)(n.p,{children:"\u8003\u8651\u4ee5\u4e0b\u4e24\u4e2a\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"std::swap(obj1, obj2);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"using std::swap;\nswap(obj1, obj2);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c",(0,t.jsx)(n.code,{children:"obj1"})," ",(0,t.jsx)(n.code,{children:"obj2"}),"\u90fd\u662f",(0,t.jsx)(n.code,{children:"namespace A"}),"\u4e2d",(0,t.jsx)(n.code,{children:"class MyClass"}),"\u7684\u5b9e\u4f8b,\n\u5982\u679c",(0,t.jsx)(n.code,{children:"std::swap(A::MyClass&, A::MyClass&)"}),"\u548c",(0,t.jsx)(n.code,{children:"A::swap(MyClass&, MyClass&)"}),"\u90fd\u88ab\u5b9a\u4e49\uff0c\n\u90a3\u4e48\u7b2c\u4e00\u4e2a\u4f8b\u5b50\u5c06\u4f1a\u4ea7\u751f\u4e00\u4e2a\u5bf9",(0,t.jsx)(n.code,{children:"std::swap()"}),"\u7684\u8c03\u7528\uff0c\u800c\u7b2c\u4e8c\u4e2a\u4f8b\u5b50\u4f1a\u7f16\u8bd1\u5931\u8d25."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'namespace MyNamespace\n{\n    class MyClass {};\n    void doSomething(MyClass) {}\n\tvoid swap(MyClass& lhs, MyClass& rhs) {\n\t\tstd::cout << "aaa" << std::endl;\n\t}\n}\n\nnamespace std {\n\tvoid swap(MyNamespace::MyClass& lhs, MyNamespace::MyClass& rhs) {\n\t\tstd::cout << "aaa" << std::endl;\n\t}\n}\n\n// MyNamespace::MyClass obj; // global object\n\nint main() {\n\tMyNamespace::MyClass a, b;\n\tusing std::swap;\n\tswap(a, b);\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"refrence",children:"refrence"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/8111677/what-is-argument-dependent-lookup-aka-adl-or-koenig-lookup",children:"stackoverflow"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var t=s(6540);const a={},o=t.createContext(a);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);