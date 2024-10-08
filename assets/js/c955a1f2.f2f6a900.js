"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9211],{4689:(o,e,c)=>{c.r(e),c.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=c(4848),t=c(8453);const r={},a=void 0,l={id:"cpp/container_allocator_copy",title:"container_allocator_copy",description:"container's allocator copy",source:"@site/docs/cpp/container_allocator_copy.md",sourceDirName:"cpp",slug:"/cpp/container_allocator_copy",permalink:"/docs/cpp/container_allocator_copy",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/container_allocator_copy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"constexpr",permalink:"/docs/cpp/constexpr"},next:{title:"co_await",permalink:"/docs/cpp/coroutines/co_await"}},s={},i=[{value:"container&#39;s allocator copy",id:"containers-allocator-copy",level:2},{value:"copy constructor",id:"copy-constructor",level:3},{value:"move constructor",id:"move-constructor",level:3},{value:"allocator-extended move constructor",id:"allocator-extended-move-constructor",level:3},{value:"copy assignment operator",id:"copy-assignment-operator",level:3},{value:"move assignment operator",id:"move-assignment-operator",level:3},{value:"swap",id:"swap",level:3}];function d(o){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"containers-allocator-copy",children:"container's allocator copy"}),"\n",(0,n.jsx)(e.h3,{id:"copy-constructor",children:"copy constructor"}),"\n",(0,n.jsxs)(e.p,{children:["allocator\u901a\u8fc7\u8c03\u7528",(0,n.jsx)(e.code,{children:"std::allocator_traits<allocator_type>::select_on_container_copy_construction(other.get_allocator())"}),"\u83b7\u5f97"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"container(const container& other): alloc(std::allocator_traits<allocator_type>::select_on_container_copy_construction(other.get_allocator())) {}\n"})}),"\n",(0,n.jsx)(e.h3,{id:"move-constructor",children:"move constructor"}),"\n",(0,n.jsx)(e.p,{children:"\u901a\u8fc7\u6b63\u5e38\u7684\u79fb\u52a8\u8bed\u4e49\u6784\u9020allocator, \u4e00\u822c\u4e0d\u9700\u8981\u7279\u6b8a\u5904\u7406"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"vector(vector&&) = default;\n"})}),"\n",(0,n.jsx)(e.h3,{id:"allocator-extended-move-constructor",children:"allocator-extended move constructor"}),"\n",(0,n.jsx)(e.p,{children:"example:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"container(container&& other, const Allocator& alloc);\n"})}),"\n",(0,n.jsxs)(e.p,{children:["\u5982\u679c",(0,n.jsx)(e.code,{children:"alloc == other.get_allocator()"}),", \u76f4\u63a5\u79fb\u52a8\u6574\u4e2a\u5bb9\u5668"]}),"\n",(0,n.jsxs)(e.p,{children:["\u5982\u679c",(0,n.jsx)(e.code,{children:"alloc != other.get_allocator()"}),", \u8981\u9010\u4e2a\u5143\u7d20\u79fb\u52a8"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"container(container&& other, const Allocator& alloc) {\n    if (alloc != other.get_allocator()) {\n        // \u9010\u4e2a\u5143\u7d20\u79fb\u52a8\n    }\n    else {\n        // \u76f4\u63a5\u79fb\u52a8\u6574\u4e2a\u5143\u7d20\n    }\n}\n"})}),"\n",(0,n.jsx)(e.h3,{id:"copy-assignment-operator",children:"copy assignment operator"}),"\n",(0,n.jsxs)(e.p,{children:["\u4e0b\u9762\u4f7f\u7528",(0,n.jsx)(e.code,{children:"pocca_v"}),"\u8868\u793a",(0,n.jsx)(e.code,{children:"std::allocator_traits<allocator_type>::propagate_on_container_copy_assignment::value"})]}),"\n",(0,n.jsxs)(e.p,{children:["\u5982\u679c",(0,n.jsx)(e.code,{children:"pocca_v"}),"\u4e3a",(0,n.jsx)(e.code,{children:"true"}),", ",(0,n.jsx)(e.code,{children:"this->allocator"})," \u5e94\u88ab ",(0,n.jsx)(e.code,{children:"other.allocator"})," \u7684\u62f7\u8d1d\u66ff\u6362"]}),"\n",(0,n.jsxs)(e.p,{children:["\u5982\u679c\u66ff\u6362\u540e\u7684",(0,n.jsx)(e.code,{children:"this.allocator"}),"\u7684\u65b0\u503c(",(0,n.jsx)(e.code,{children:"new_allocator"}),")\u4e0e\u65e7\u503c(",(0,n.jsx)(e.code,{children:"old_allocator"}),")\u4e0d\u540c, \u5219\u5e94\u8be5\u4f7f\u7528",(0,n.jsx)(e.code,{children:"old_allocator"}),"\u6790\u6784\u5143\u7d20\u5e76\u91ca\u653e\u5185\u5b58"]}),"\n",(0,n.jsxs)(e.p,{children:["\u7136\u540e\u7531",(0,n.jsx)(e.code,{children:"new_allocator"}),"\u91cd\u65b0\u5206\u914d\u5185\u5b58\u3002\u91cd\u65b0\u5206\u914d\u5185\u5b58\u540e\uff0c\u518d\u6267\u884c\u5143\u7d20\u7684\u590d\u5236\u64cd\u4f5c\u3002"]}),"\n",(0,n.jsxs)(e.p,{children:["\u5982\u679c",(0,n.jsx)(e.code,{children:"pocca_v"}),"\u4e3a",(0,n.jsx)(e.code,{children:"false"}),", ",(0,n.jsx)(e.code,{children:"this->allocator"}),"\u4fdd\u6301\u4e0d\u53d8"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"container& operator(const container& other) {\n    using pocca = std::allocator_traits<allocator_type>::propagate_on_container_copy_assignment;\n    if (std::address_of(other) != this) {\n        if (pocca::value) {\n            if (this->allocator != other.allocator) {\n                // 1. \u4f7f\u7528old_allocator \u6790\u6784\u5143\u7d20\u3001\u91ca\u653e\u5185\u5b58\n                \n                // 2. this->allocator = other.get_allocator()\n\n                // 3. \u4f7f\u7528allocator \u91cd\u65b0\u5206\u914d\u5185\u5b58\uff08\u521a\u597d\u80fd\u591f\u88c5\u4e0bother\u7684\u6240\u6709\u5143\u7d20\uff09\n\n                // 4. \u4eceother\u4e2d\u590d\u5236\u5143\u7d20\n                \n                return *this;\n            }\n            // allocator = other.get_allocator()\n        }\n        /**\n        * \u5982\u679cother.size() == size(), \u9010\u4e2a\u5143\u7d20\u590d\u5236\u5373\u53ef\n        * \u5982\u679cother.size() > size(), \u53ef\u80fd\u9700\u8981\u4f7f\u7528allocator\u6269\u5bb9\uff08\u4e0d\u4e00\u5b9a\uff0c\u53d6\u51b3\u4e8e\u5b9e\u73b0\uff09\n        * \u5982\u679cother.size() < size(), \u5148\u5c06other\u7684\u5143\u7d20\u9010\u4e2a\u590d\u5236\uff0c\u7136\u540e\u5c06\u5269\u4e0b\u7684\u5143\u7d20\u6790\u6784\uff08\u662f\u5426\u56de\u6536\u5185\u5b58\u53d6\u51b3\u4e8e\u5b9e\u73b0\uff09\n        **/\n    }\n    return *this;\n}\n"})}),"\n",(0,n.jsx)(e.h3,{id:"move-assignment-operator",children:"move assignment operator"}),"\n",(0,n.jsxs)(e.p,{children:["\u4e0b\u9762\u4f7f\u7528",(0,n.jsx)(e.code,{children:"pocma_v"}),"\u8868\u793a",(0,n.jsx)(e.code,{children:"std::allocator_traits<allocator_type>::propagate_on_container_move_assignment::value"})]}),"\n",(0,n.jsxs)(e.p,{children:["\u5982\u679c",(0,n.jsx)(e.code,{children:"pocma_v"}),"\u4e3a",(0,n.jsx)(e.code,{children:"true"}),", ",(0,n.jsx)(e.code,{children:"this->allocator"}),"\u5e94\u88ab",(0,n.jsx)(e.code,{children:"other.allocator"}),"\u66ff\u6362"]}),"\n",(0,n.jsxs)(e.p,{children:["\u5982\u679c",(0,n.jsx)(e.code,{children:"pocma_v"}),"\u4e3a",(0,n.jsx)(e.code,{children:"false"}),"\u4e14",(0,n.jsx)(e.code,{children:"this->allocator != other.allocator"}),", \u5219\u5fc5\u987b\u9010\u4e2a\u79fb\u52a8\u5143\u7d20, ",(0,n.jsx)(e.code,{children:"this->allocator"}),"\u4fdd\u6301\u4e0d\u53d8"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"container& operator=(container&& other) {\n    using pocma = std::allocator_traits<allocator_type>::propagate_on_container_move_assignment;\n    if (std::address_of(other) != this) {\n        if (!pocma::value && this.allocator != other.allocator) {\n            // 1. \u9010\u4e2a\u79fb\u52a8\u5143\u7d20\n\n            // 2. \u6e05\u7a7aother\n        }\n        else {\n            // 1. \u5143\u7d20\u6574\u4f53\u79fb\u52a8\n\n            // 2. this->allocator = std::move(other.allocator);\n            \n            // 3. \u6e05\u7a7aother\n        }\n    }\n    return *this;\n}\n"})}),"\n",(0,n.jsx)(e.h3,{id:"swap",children:"swap"}),"\n",(0,n.jsxs)(e.p,{children:["\u4e0b\u9762\u4f7f\u7528",(0,n.jsx)(e.code,{children:"pocsa_v"}),"\u8868\u793a",(0,n.jsx)(e.code,{children:"std::allocator_traits<allocator_type>::propagate_on_container_swap::value"})]}),"\n",(0,n.jsxs)(e.p,{children:["\u5982\u679c",(0,n.jsx)(e.code,{children:"pocs_v"}),"\u4e3a",(0,n.jsx)(e.code,{children:"true"}),", \u4f7f\u7528\u975e\u6210\u5458(non-member)\u7684\u975e\u9650\u5b9a(unqualified)\u7684",(0,n.jsx)(e.code,{children:"swap"}),"\u4ea4\u6362",(0,n.jsx)(e.code,{children:"allocator"})]}),"\n",(0,n.jsxs)(e.p,{children:["\u5982\u679c",(0,n.jsx)(e.code,{children:"pocs_v"}),"\u4e3a",(0,n.jsx)(e.code,{children:"false"}),", \u4e0d\u4ea4\u6362",(0,n.jsx)(e.code,{children:"allocator"}),", \u5982\u679c",(0,n.jsx)(e.code,{children:"this->get_allocator() != other.get_allocator()"}),", \u662f\u4e00\u4e2aub,\n\u6807\u51c6\u5e93\u7684\u5904\u7406\u662f\u76f4\u63a5\u7ec8\u6b62\u7a0b\u5e8f"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"// deque::swap \u793a\u4f8b\nvoid swap(deque& other) {\n    using pocs = T_alloc_traits::propagate_on_container_swap;\n\n    assert(pocs::value || get_T_allocator() == other.get_T_allocator());\n\n    impl.swap_data(other.impl);\n\n    if (pocs::value) {\n        using std::swap;\n        swap(get_T_allocator(), other.get_T_allocator());\n    }\n}\n"})}),"\n",(0,n.jsx)(e.p,{children:"\u4ece\u4e0a\u9762\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\uff0c\u4f7f\u7528unqualified non-member swap\u7684\u65b9\u6cd5\u662f:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"using std::swap\nswap(obj1, obj2);\n"})})]})}function p(o={}){const{wrapper:e}={...(0,t.R)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(d,{...o})}):d(o)}},8453:(o,e,c)=>{c.d(e,{R:()=>a,x:()=>l});var n=c(6540);const t={},r=n.createContext(t);function a(o){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function l(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(t):o.components||t:a(o.components),n.createElement(r.Provider,{value:e},o.children)}}}]);