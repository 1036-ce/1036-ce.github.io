"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[935],{5445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var o=t(4848),c=t(8453);const r={},s=void 0,a={id:"cpp/allocator_traits",title:"allocator_traits",description:"allocator_traits",source:"@site/docs/cpp/allocator_traits.md",sourceDirName:"cpp",slug:"/cpp/allocator_traits",permalink:"/docs/cpp/allocator_traits",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/allocator_traits.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"adl",permalink:"/docs/cpp/adl"},next:{title:"any",permalink:"/docs/cpp/any"}},l={},i=[{value:"allocator_traits",id:"allocator_traits",level:2},{value:"member types",id:"member-types",level:3},{value:"propagate_on_container_copy_assignment",id:"propagate_on_container_copy_assignment",level:4},{value:"propagate_on_container_move_assignment",id:"propagate_on_container_move_assignment",level:4},{value:"propagate_on_container_swap",id:"propagate_on_container_swap",level:4},{value:"member functions",id:"member-functions",level:3},{value:"select_on_container_copy_construction",id:"select_on_container_copy_construction",level:4}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"allocator_traits",children:"allocator_traits"}),"\n",(0,o.jsx)(n.h3,{id:"member-types",children:"member types"}),"\n",(0,o.jsx)(n.h4,{id:"propagate_on_container_copy_assignment",children:"propagate_on_container_copy_assignment"}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c",(0,o.jsx)(n.code,{children:"Alloc::propagate_on_container_copy_assignment"}),"\u5b58\u5728\uff0c\u5219\u7b49\u4e8e\u5b83,\n\u5426\u5219\u4e3a",(0,o.jsx)(n.code,{children:"std::false_type"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u8868\u793a\u5728",(0,o.jsx)(n.strong,{children:"\u5bb9\u5668"}),"\u7684**\u62f7\u8d1d\u8d4b\u503c(\u4e0d\u662f\u62f7\u8d1d\u6784\u9020)**\u64cd\u4f5c\u4e2d\uff0c\u5206\u914d\u5668\u662f\u5426\u5e94\u8be5\u4ece\u4e00\u4e2a\u5bb9\u5668\u4f20\u64ad\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668,\n\u5982\u679c\u4e3a",(0,o.jsx)(n.code,{children:"true_type"}),",\u5219\u5728\u6267\u884c\u62f7\u8d1d\u64cd\u4f5c\u65f6\uff0c\u4f1a\u5c06\u5206\u914d\u5668\u4ece\u8d4b\u503c\u6e90\u5bb9\u5668\u4f20\u9012\u7ed9\u76ee\u6807\u5bb9\u5668\u3002\n\u5982\u679c\u4e3a",(0,o.jsx)(n.code,{children:"false_type"}),"\uff0c\u5219\u5728\u6267\u884c\u62f7\u8d1d\u64cd\u4f5c\u65f6\uff0c\u4e0d\u4f1a\u5c06\u5206\u914d\u5668\u4ece\u8d4b\u503c\u6e90\u5bb9\u5668\u4f20\u9012\u7ed9\u76ee\u6807\u5bb9\u5668\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"propagate_on_container_move_assignment",children:"propagate_on_container_move_assignment"}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c",(0,o.jsx)(n.code,{children:"Alloc::propagate_on_container_move_assignment"}),"\u5b58\u5728\uff0c\u5219\u7b49\u4e8e\u5b83,\n\u5426\u5219\u4e3a",(0,o.jsx)(n.code,{children:"std::false_type"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u8868\u793a\u5728",(0,o.jsx)(n.strong,{children:"\u5bb9\u5668"}),"\u7684",(0,o.jsx)(n.strong,{children:"\u79fb\u52a8\u8d4b\u503c"}),"\u64cd\u4f5c\u4e2d\uff0c\u5206\u914d\u5668\u662f\u5426\u5e94\u8be5\u4ece\u4e00\u4e2a\u5bb9\u5668\u4f20\u64ad\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668,\n\u5982\u679c\u4e3a",(0,o.jsx)(n.code,{children:"true_type"}),",\u5219\u5728\u6267\u884c\u79fb\u52a8\u64cd\u4f5c\u65f6\uff0c\u4f1a\u5c06\u5206\u914d\u5668\u4ece\u8d4b\u503c\u6e90\u5bb9\u5668\u4f20\u9012\u7ed9\u76ee\u6807\u5bb9\u5668\u3002\n\u5982\u679c\u4e3a",(0,o.jsx)(n.code,{children:"false_type"}),"\uff0c\u5219\u5728\u6267\u884c\u79fb\u52a8\u64cd\u4f5c\u65f6\uff0c\u4e0d\u4f1a\u5c06\u5206\u914d\u5668\u4ece\u8d4b\u503c\u6e90\u5bb9\u5668\u4f20\u9012\u7ed9\u76ee\u6807\u5bb9\u5668\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"propagate_on_container_swap",children:"propagate_on_container_swap"}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c",(0,o.jsx)(n.code,{children:"Alloc::propagate_on_container_swap"}),"\u5b58\u5728\uff0c\u5219\u7b49\u4e8e\u5b83,\n\u5426\u5219\u4e3a",(0,o.jsx)(n.code,{children:"std::false_type"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u8868\u793a\u5728",(0,o.jsx)(n.strong,{children:"\u5bb9\u5668"}),"\u7684",(0,o.jsx)(n.strong,{children:"\u4ea4\u6362"}),"\u64cd\u4f5c\u4e2d\uff0c\u5206\u914d\u5668\u662f\u5426\u5e94\u8be5\u4ece\u4e00\u4e2a\u5bb9\u5668\u4f20\u64ad\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668,\n\u5982\u679c\u4e3a",(0,o.jsx)(n.code,{children:"true_type"}),",\u5219\u5728\u6267\u884c\u4ea4\u6362\u64cd\u4f5c\u65f6\uff0c\u5206\u914d\u5668\u4f1a\u88ab\u4ea4\u6362\n\u5982\u679c\u4e3a",(0,o.jsx)(n.code,{children:"false_type"}),"\uff0c\u5219\u5728\u6267\u884c\u4ea4\u6362\u64cd\u4f5c\u65f6\uff0c\u5206\u914d\u5668\u4e0d\u4f1a\u88ab\u4ea4\u6362\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"\n// \u53ef\u80fd\u7684std::vector::swap()\u5b9e\u73b0\nvoid swap(vector& other) {\n    std::swap(data, other.data);\n    std::swap(sz, other.sz);\n    std::swap(cap, other.cap);\n\n    if (std::allocator_traits<Alloc>::propagate_on_container_swap::value) {\n        // by ADL to find swap\n        swap(alloc, other.alloc);\n    }\n}\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"member-functions",children:"member functions"}),"\n",(0,o.jsx)(n.h4,{id:"select_on_container_copy_construction",children:"select_on_container_copy_construction"}),"\n",(0,o.jsx)(n.p,{children:"\u51fd\u6570\u539f\u578b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"static Alloc select_on_container_copy_construction(const Alloc& a);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6240\u6709\u7684\u6807\u51c6\u5e93\u5bb9\u5668\u5728\u62f7\u8d1d\u6784\u9020\u51fd\u6570\u4e2d\u9700\u8981\u590d\u5236",(0,o.jsx)(n.code,{children:"Allocator"}),"\u65f6\u90fd\u8c03\u7528\u4e86\u8be5\u51fd\u6570\uff0c\n",(0,o.jsxs)(n.strong,{children:["\u8be5\u51fd\u6570\u5141\u8bb8",(0,o.jsx)(n.code,{children:"Allocator"}),"\u7c7b\u578b\u610f\u8bc6\u5230\u5bb9\u5668\u5728\u88ab\u590d\u5236\uff0c\u5e76\u5728\u9700\u8981\u65f6\u4fee\u6539\u81ea\u8eab\u7684\u72b6\u6001\u3002"]})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c",(0,o.jsx)(n.code,{children:"Allocator"}),"\u7c7b\u578b\u5b9e\u73b0\u4e86\u8be5\u51fd\u6570\uff0c\u5219\u8c03\u7528\u8be5\u51fd\u6570\u5f97\u5230",(0,o.jsx)(n.code,{children:"a"}),"\u7684\u62f7\u8d1d\u6784\u9020\u7248\u672c\u3002\n\u5426\u5219\uff0c\u76f4\u63a5\u8fd4\u56de",(0,o.jsx)(n.code,{children:"a"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://en.cppreference.com/w/cpp/memory/allocator_traits/select_on_container_copy_construction",children:"cppreference"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const c={},r=o.createContext(c);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);