"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9444],{9661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(4848),i=n(8453);const r={},d=void 0,c={id:"cpp/shuffle",title:"shuffle",description:"shuffle",source:"@site/docs/cpp/shuffle.md",sourceDirName:"cpp",slug:"/cpp/shuffle",permalink:"/docs/cpp/shuffle",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/shuffle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"adaptors",permalink:"/docs/cpp/ranges/adaptors"},next:{title:"spaceship_operator",permalink:"/docs/cpp/spaceship_operator"}},a={},o=[{value:"shuffle",id:"shuffle",level:2},{value:"usage",id:"usage",level:3},{value:"implement",id:"implement",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"shuffle",children:"shuffle"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"std::shuffle"}),"\u968f\u673a\u6392\u5e8f\u7ed9\u5b9a\u8303\u56f4\u5185\u7684\u5143\u7d20, \u65f6\u95f4\u590d\u6742\u5ea6O(N)"]}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#include <algorithm>\n#include <iostream>\n#include <iterator>\n#include <random>\n#include <vector>\n \nint main()\n{\n    std::vector<int> v{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n \n    std::random_device rd;\n    std::mt19937 g(rd());\n \n    std::shuffle(v.begin(), v.end(), g);\n \n    std::copy(v.begin(), v.end(), std::ostream_iterator<int>(std::cout, \" \"));\n    std::cout << '\\n';\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"implement",children:"implement"}),"\n",(0,s.jsx)(t.p,{children:"\u5185\u90e8\u5b9e\u73b0\u4f7f\u7528Fisher-Yates\u6d17\u724c\u7b97\u6cd5"}),"\n",(0,s.jsx)(t.p,{children:"Fisher-Yates\u7b97\u6cd5\uff1a"}),"\n",(0,s.jsx)(t.p,{children:"\u6bcf\u6b21\u4ece\u672a\u5904\u7406\u7684\u6570\u636e\u4e2d\u968f\u5373\u9009\u51fa\u4e00\u4e2a\u6570\u5b57\uff0c\u5c06\u8be5\u6570\u5b57\u653e\u5728\u5df2\u5904\u7406\u7684\u6570\u636e\u7684\u5c3e\u90e8"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"template<class RandomIt, class URBG>\nvoid shuffle(RandomIt first, RandomIt last, URBG&& g)\n{\n    typedef typename std::iterator_traits<RandomIt>::difference_type diff_t;\n    typedef std::uniform_int_distribution<diff_t> distr_t;\n    typedef typename distr_t::param_type param_t;\n \n    distr_t D;\n    for (diff_t i = last - first - 1; i > 0; --i)\n    {\n        using std::swap;\n        swap(first[i], first[D(g, param_t(0, i))]);\n    }\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);