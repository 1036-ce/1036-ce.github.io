"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[983],{6428:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var l=s(4848),c=s(8453);const i={},r=void 0,d={id:"rbtree",title:"rbtree",description:"[toc]",source:"@site/docs/rbtree.md",sourceDirName:".",slug:"/rbtree",permalink:"/docs/rbtree",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/rbtree.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"little",permalink:"/docs/python/little"}},a={},h=[{value:"\u7ea2\u9ed1\u6811\u7684\u89c4\u5219",id:"\u7ea2\u9ed1\u6811\u7684\u89c4\u5219",level:2},{value:"\u7ea2\u9ed1\u6811\u7684\u63d2\u5165",id:"\u7ea2\u9ed1\u6811\u7684\u63d2\u5165",level:2},{value:"case 1",id:"case-1",level:3},{value:"case 2",id:"case-2",level:3},{value:"case 3",id:"case-3",level:3},{value:"Case 4",id:"case-4",level:3},{value:"case 5",id:"case-5",level:3},{value:"\u7ea2\u9ed1\u6811\u7684\u5220\u9664",id:"\u7ea2\u9ed1\u6811\u7684\u5220\u9664",level:2},{value:"Case 1",id:"case-1-1",level:3},{value:"Case 2",id:"case-2-1",level:3},{value:"Case 3",id:"case-3-1",level:3},{value:"\u540e\u7ee7\u8282\u70b9\u6709\u53f3\u5b50\u7ed3\u70b9",id:"\u540e\u7ee7\u8282\u70b9\u6709\u53f3\u5b50\u7ed3\u70b9",level:4},{value:"\u540e\u7ee7\u8282\u70b9\u65e0\u53f3\u5b50\u7ed3\u70b9",id:"\u540e\u7ee7\u8282\u70b9\u65e0\u53f3\u5b50\u7ed3\u70b9",level:4},{value:"\u7ea2\u9ed1\u6811\u5220\u9664\u540e\u7684\u7ef4\u62a4",id:"\u7ea2\u9ed1\u6811\u5220\u9664\u540e\u7684\u7ef4\u62a4",level:2},{value:"Case 1",id:"case-1-2",level:3},{value:"Case 2",id:"case-2-2",level:3},{value:"Case 3",id:"case-3-2",level:3},{value:"Case 4",id:"case-4-1",level:3},{value:"Case 5",id:"case-5-1",level:3}];function x(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"[toc]"}),"\n",(0,l.jsx)(e.h2,{id:"\u7ea2\u9ed1\u6811\u7684\u89c4\u5219",children:"\u7ea2\u9ed1\u6811\u7684\u89c4\u5219"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8282\u70b9\u4e3a\u7ea2\u8272\u6216\u9ed1\u8272"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u6839\u8282\u70b9\u5fc5\u987b\u4e3a\u9ed1\u8272"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"NIL \u8282\u70b9\uff08\u7a7a\u53f6\u5b50\u8282\u70b9\uff09\u4e3a\u9ed1\u8272"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u7ea2\u8272\u8282\u70b9\u7684\u5b50\u8282\u70b9\u4e3a\u9ed1\u8272"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4ece\u6839\u8282\u70b9\u5230 NIL \u8282\u70b9\u7684\u6bcf\u6761\u8def\u5f84\u4e0a\u7684\u9ed1\u8272\u8282\u70b9\u6570\u91cf\u76f8\u540c"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"A node is either red or black"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"The root is black"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"All leaves (NULL) are black"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Both children of every red node are black"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Every simple path from root to leaves contains the same number of black nodes."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7ea2\u9ed1\u6811\u7684\u63d2\u5165",children:"\u7ea2\u9ed1\u6811\u7684\u63d2\u5165"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u5c0f\u5199\u5b57\u6bcd\u4e3a\u7ea2\u8272\uff0c\u5927\u5199\u5b57\u6bcd\u4e3a\u9ed1\u8272"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"case-1",children:"case 1"}),"\n",(0,l.jsx)(e.p,{children:"\u6811\u4e3a\u7a7a\uff0c\u76f4\u63a5\u63d2\u5165\u4f5c\u4e3a\u6839\u8282\u70b9"}),"\n",(0,l.jsx)(e.h3,{id:"case-2",children:"case 2"}),"\n",(0,l.jsx)(e.p,{children:"\u63d2\u5165\u8282\u70b9\u7684\u7236\u8282\u70b9\u4e3a\u9ed1\u8272\uff0c\u76f4\u63a5\u63d2\u5165\uff0c\u65e0\u9700\u8c03\u6574"}),"\n",(0,l.jsx)(e.h3,{id:"case-3",children:"case 3"}),"\n",(0,l.jsx)(e.p,{children:"\u63d2\u5165\u8282\u70b9\u7684\u7236\u8282\u70b9\u548c\u53d4\u8282\u70b9\u5747\u4e3a\u7ea2\u8272"}),"\n",(0,l.jsx)(e.p,{children:"\u6b64\u79cd\u60c5\u51b5\u7956\u7236\u8282\u70b9\u4e00\u5b9a\u4e3a\u9ed1\u8272\n\u5c06\u7236\u8282\u70b9\u548c\u53d4\u8282\u70b9\u67d3\u6210\u9ed1\u8272\uff0c\u7956\u7236\u8282\u70b9\u67d3\u6210\u7ea2\u8272\uff0c\u9012\u5f52\u7ef4\u62a4\u7956\u7236\u8282\u70b9"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"/**\n      G             g\n     / \\           / \\\n    p   u  --\x3e    P   U\n     \\             \\ \n      n             n\n\n      G             g\n     / \\           / \\\n    p   u  --\x3e    P   U\n   /             /\n  n             n\n\n      G             g\n     / \\           / \\\n    u   p  --\x3e    U   p\n         \\             \\ \n          n             n\n\n      G             g\n     / \\           / \\\n    u   p  --\x3e    U   P\n       /             /\n      n             n\n**/\n"})}),"\n",(0,l.jsx)(e.h3,{id:"case-4",children:"Case 4"}),"\n",(0,l.jsx)(e.p,{children:"(Case4\u603b\u662f\u4eceCase3\u8f6c\u6765\u7684\uff0c\u6b63\u5e38\u63d2\u5165\u4e0d\u4f1a\u51fa\u73b0Case4\u7684\u60c5\u51b5)"}),"\n",(0,l.jsx)(e.p,{children:"\u63d2\u5165\u8282\u70b9\u7684\u7236\u8282\u70b9\u548c\u53d4\u8282\u70b9\u5747\u4e3a\u9ed1\u8272"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u7236\u8282\u70b9\u4e3a\u7956\u7236\u8282\u70b9\u7684\u5de6\u5b50\u7ed3\u70b9\uff0c\u63d2\u5165\u8282\u70b9\u4e3a\u7236\u8282\u70b9\u7684\u53f3\u5b50\u8282\u70b9(LR\u5f62\u5f0f)"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5148\u5de6\u65cb"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"/**\n      G             G\n     / \\           / \\\n    p   U  --\x3e    n   U\n     \\           /\n      n         p\n**/\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u518d\u53f3\u65cb"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"/**\n        G           P\n       / \\         / \\\n      p   U  --\x3e  n   g\n     /                 \\\n    n                   U\n**/\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"\u7236\u8282\u70b9\u4e3a\u7956\u7236\u8282\u70b9\u7684\u53f3\u5b50\u7ed3\u70b9\uff0c\u63d2\u5165\u8282\u70b9\u4e3a\u7236\u8282\u70b9\u7684\u5de6\u5b50\u8282\u70b9(RL\u5f62\u5f0f)"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5148\u53f3\u65cb"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"/**\n      G             G\n     / \\           / \\\n    U   p  --\x3e    U   p\n       /              \\ \n      n                n \n**/\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u518d\u5de6\u65cb"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"/**\n        G           P\n       / \\         / \\\n      U   p  --\x3e  g   n\n          \\      /      \n           n    U\n**/\n"})}),"\n",(0,l.jsx)(e.h3,{id:"case-5",children:"case 5"}),"\n",(0,l.jsx)(e.p,{children:"(Case5\u603b\u662f\u4eceCase3\u6216Case4\u8f6c\u6765\u7684\uff0c\u6b63\u5e38\u63d2\u5165\u4e0d\u4f1a\u51fa\u73b0Case5\u7684\u60c5\u51b5)"}),"\n",(0,l.jsx)(e.p,{children:"\u63d2\u5165\u8282\u70b9\u7684\u7236\u8282\u70b9\u548c\u53d4\u8282\u70b9\u5747\u4e3a\u9ed1\u8272"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u7236\u8282\u70b9\u4e3a\u7956\u7236\u8282\u70b9\u7684\u5de6\u5b50\u7ed3\u70b9\uff0c\u63d2\u5165\u8282\u70b9\u4e3a\u7236\u8282\u70b9\u7684\u5de6\u5b50\u8282\u70b9(LL\u5f62\u5f0f)"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u53f3\u65cb"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"/**\n          G             P\n         / \\           / \\\n        p   U  --\x3e    n   g\n       /                  \\ \n      n                    U \n**/\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"\u7236\u8282\u70b9\u4e3a\u7956\u7236\u8282\u70b9\u7684\u53f3\u5b50\u7ed3\u70b9\uff0c\u63d2\u5165\u8282\u70b9\u4e3a\u7236\u8282\u70b9\u7684\u53f3\u5b50\u8282\u70b9(RR\u5f62\u5f0f)"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5de6\u65cb"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"/**\n        G           P\n       / \\         / \\\n      U   p  --\x3e  g   n\n          \\      /      \n           n    U\n**/\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u7ea2\u9ed1\u6811\u7684\u5220\u9664",children:"\u7ea2\u9ed1\u6811\u7684\u5220\u9664"}),"\n",(0,l.jsx)(e.h3,{id:"case-1-1",children:"Case 1"}),"\n",(0,l.jsx)(e.p,{children:"\u5f85\u5220\u9664\u7684\u8282\u70b9\u4e3a\u53f6\u5b50\u8282\u70b9(node->left == NULL && node->right == NULL)"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u4e3a\u7ea2\u8272\uff0c\u76f4\u63a5\u5220\u9664\uff0c\u540e\u7eed\u4e0d\u9700\u8981\u7ef4\u62a4"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u4e3a\u9ed1\u8272\uff0c\u76f4\u63a5\u5220\u9664\uff0c\u540e\u7eed\u9700\u8981\u7ef4\u62a4"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"case-2-1",children:"Case 2"}),"\n",(0,l.jsx)(e.p,{children:"\u5f85\u5220\u9664\u7684\u8282\u70b9\u6709\u4e00\u4e2a\u5b50\u8282\u70b9\uff0c\u53e6\u4e00\u4e2a\u5b50\u7ed3\u70b9\u4e3a\u7a7a"}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636e\u89c4\u52194),5)\uff0c\u8be5\u8282\u70b9\u4e00\u5b9a\u4e3a\u9ed1\u8272,\u5176\u5b50\u7ed3\u70b9\u4e00\u5b9a\u4e3a\u7ea2\u8272"}),"\n",(0,l.jsx)(e.p,{children:"\u5220\u9664\u65f6\uff0c\u4f7f\u7528\u5b50\u7ed3\u70b9\u66ff\u6362\u5f85\u5220\u9664\u8282\u70b9\uff0c\u5e76\u5c06\u5b50\u7ed3\u70b9\u67d3\u9ed1\uff0c\u65e0\u9700\u7ef4\u62a4(\u5c06\u5b50\u7ed3\u70b9\u67d3\u9ed1\u4e5f\u662f\u4e00\u79cd\u7ef4\u62a4\uff0c\u53ea\u662f\u4e0d\u9700\u8981\u5ef6\u540e\u7ef4\u62a4)"}),"\n",(0,l.jsx)(e.h3,{id:"case-3-1",children:"Case 3"}),"\n",(0,l.jsx)(e.p,{children:"\u5f85\u5220\u9664\u7684\u8282\u70b9\u6709\u4e24\u4e2a\u5b50\u7ed3\u70b9"}),"\n",(0,l.jsxs)(e.p,{children:["\u5c06\u8be5\u8282\u70b9\u4e0e\u5176\u540e\u7ee7\u8282\u70b9(successor)\u4ea4\u6362\uff0c\u4ea4\u6362\u540e\u5220\u9664\u8be5\u8282\u70b9, ",(0,l.jsx)(e.strong,{children:"successor\u7ee7\u627f\u5f85\u5220\u9664\u8282\u70b9\u7684\u989c\u8272"}),"(\u76f8\u5f53\u4e8e\u53ea\u4ea4\u6362\u8282\u70b9\u4e2d\u4fdd\u5b58\u7684\u503c)\n(\u540e\u7ee7\u8282\u70b9\uff1a\u8282\u70b9\u7684\u53f3\u5b50\u6811\u4e0a\u7684\u6700\u5de6\u8282\u70b9\uff0c\u540e\u7ee7\u8282\u70b9\u65e0\u5de6\u5b50\u7ed3\u70b9\uff0c\u53ef\u80fd\u6709\u53f3\u5b50\u7ed3\u70b9)"]}),"\n",(0,l.jsx)(e.h4,{id:"\u540e\u7ee7\u8282\u70b9\u6709\u53f3\u5b50\u7ed3\u70b9",children:"\u540e\u7ee7\u8282\u70b9\u6709\u53f3\u5b50\u7ed3\u70b9"}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u540e\u7ee7\u8282\u70b9\u6709\u53f3\u5b50\u7ed3\u70b9\uff0c",(0,l.jsx)(e.strong,{children:"\u53ea\u9700\u5c06\u5176\u53f3\u5b50\u7ed3\u70b9\u67d3\u9ed1"}),"\uff0c\n\u65e0\u9700\u7ef4\u62a4\uff08\u5c06\u53f3\u5b50\u7ed3\u70b9\u67d3\u9ed1\u4e5f\u662f\u4e00\u79cd\u7ef4\u62a4\uff0c\u4e0d\u8fc7\u56e0\u4e3a\u7b80\u5355\uff0c\u4e0d\u5fc5\u5ef6\u540e\u81f3\u7ef4\u62a4\u9636\u6bb5\uff09\n\u539f\u56e0\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"// \u4f7f\u7528\u6700\u7b80\u5355\u7684\u60c5\u51b5(\u5f85\u5220\u9664\u8282\u70b9\u7684\u540e\u7ee7\u8282\u70b9\u5c31\u662f\u5176\u53f3\u5b50\u7ed3\u70b9)\u8bf4\u660e\u539f\u56e0,\n// \u5176\u4ed6\u60c5\u51b5\u540c\u7406\n\n/**\n    n/N : \u5f85\u5220\u9664\u8282\u70b9\n    l/L : \u5f85\u5220\u9664\u8282\u70b9\u7684\u5de6\u5b50\u7ed3\u70b9\n    s/S : \u540e\u7ee7\u8282\u70b9\n    c/C : \u540e\u7ee7\u8282\u70b9\u7684\u53f3\u5b50\u7ed3\u70b9\n*/\n\n// 1. n\u4e3a\u7ea2\u8272\uff0c\u5219L\u548cS\u5fc5\u987b\u4e3a\u9ed1\u8272\uff0cc\u5fc5\u987b\u4e3a\u7ea2\u8272(\u5982\u56fe(1)\u6240\u793a)\n// \u5220\u9664n\u540e\u53d8\u4e3a\u56fe(2),\u6b64\u65f6\u53ea\u9700\u5c06c\u67d3\u9ed1\u5373\u53ef\u6ee1\u8db3\u89c4\u5219(\u56fe(3))\n/**\n        n           S           S\n       / \\         / \\         / \\\n      L   S  --\x3e  L   c  --\x3e  L   C\n           \\            \n            c    \n       (1)          (2)         (3)\n*/\n\n/*\n2. n\u4e3a\u9ed1\u8272, \u6839\u636e\u89c4\u52194), 5), s,c\u4e2d\u4e00\u5b9a\u4e00\u7ea2\u4e00\u9ed1,\u6240\u4ee5L\u4e00\u5b9a\u4e3a\u9ed1\u8272(\u5982\u56fe(1))\n\u5219\u53ef\u5206\u4e3a\u4e24\u79cd\u60c5\u51b5\uff1aS\u9ed1c\u7ea2(\u56fe(2))\uff0cs\u7ea2C\u9ed1(\u56fe(3))\nS\u9ed1c\u7ea2\uff1a\n    \u5220\u9664N\u540e\uff0c\u7531(2)->(4), \u6b64\u65f6c\u4e3a\u7ea2\uff0c\u8fdd\u53cd\u89c4\u52195), \u53ea\u9700\u5c06c\u67d3\u9ed1\u5373\u53ef\u6ee1\u8db3\u89c4\u5219\ns\u7ea2C\u9ed1\uff1a\n    \u5220\u9664N\u540e\uff0c\u7531(2)->(6), \u56fe(6)\u5df2\u7ecf\u6ee1\u8db3\u89c4\u5219\uff0c\u65e0\u9700\u4efb\u4f55\u64cd\u4f5c\n*/\n/**\n        N           N           N\n       / \\         / \\         / \\\n      L  (s)      L   S       L   s\n           \\           \\           \\\n           (c)          c           C\n       (1)          (2)         (3)\n\n        N           S           S\n       / \\         / \\         / \\\n      L   S  --\x3e  L   c  --\x3e  L   C\n           \\            \n            c            \n        (2)         (4)        (5)\n\n        N           s  \n       / \\         / \\ \n      L   s  --\x3e  L   C\n           \\           \n            C          \n        (3)         (6)\n\n*/\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u7efc\u4e0a\u6240\u8ff0\uff0c\u5f85\u5220\u9664\u8282\u70b9\u6709\u4e24\u4e2a\u5b50\u7ed3\u70b9\u65f6\uff0c\u5982\u679c\u540e\u7ee7\u8282\u70b9\u6709\u53f3\u5b50\u7ed3\u70b9\uff0c",(0,l.jsx)(e.strong,{children:"\u53ea\u9700\u5c06\u5176\u53f3\u5b50\u7ed3\u70b9\u67d3\u9ed1"}),"\uff0c"]}),"\n",(0,l.jsx)(e.h4,{id:"\u540e\u7ee7\u8282\u70b9\u65e0\u53f3\u5b50\u7ed3\u70b9",children:"\u540e\u7ee7\u8282\u70b9\u65e0\u53f3\u5b50\u7ed3\u70b9"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u540e\u7ee7\u8282\u70b9\u65e0\u53f3\u5b50\u8282\u70b9\uff0c\u6839\u636e\u5f85\u5220\u9664\u8282\u70b9\u7684\u989c\u8272\u51b3\u5b9a\u662f\u5426\u9700\u8981\u7ef4\u62a4"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u82e5\u5f85\u5220\u9664\u8282\u70b9\u4e3a\u7ea2\u8272\uff0c\u4e0d\u9700\u8981\u7ef4\u62a4\uff0c"}),"\n",(0,l.jsx)(e.li,{children:"\u82e5\u5f85\u5220\u9664\u8282\u70b9\u4e3a\u9ed1\u8272\uff0c\u9700\u8981\u7ef4\u62a4\uff0c"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7ea2\u9ed1\u6811\u5220\u9664\u540e\u7684\u7ef4\u62a4",children:"\u7ea2\u9ed1\u6811\u5220\u9664\u540e\u7684\u7ef4\u62a4"}),"\n",(0,l.jsx)(e.p,{children:"\u7531\u4e0a\u8ff0\u7ea2\u9ed1\u6811\u7684\u8282\u70b9\u5220\u9664\u64cd\u4f5c\u53ef\u77e5\uff0c\u53ea\u6709\u5728\u5220\u9664\u9ed1\u8272\u8282\u70b9\u540e\u9700\u8981\u7ef4\u62a4\n\u5220\u9664\u4e00\u4e2a\u9ed1\u8272\u8282\u70b9\uff0c\u4f1a\u5bfc\u81f4\u5220\u9664\u8282\u70b9\u7684\u5de6\u53f3\u5b50\u6811\u4e0a\u7684\u8282\u70b9\u7684\u9ed1\u6df1\u5ea6\u51cf\u4e00,\u4e0d\u6ee1\u8db3\u6027\u8d285)"}),"\n",(0,l.jsx)(e.p,{children:"N \u8282\u70b9\uff0c\u5f85\u5220\u9664\u8282\u70b9\nP \u8282\u70b9\uff0c\u7236\u4eb2\u8282\u70b9\nS \u8282\u70b9\uff0c\u5144\u5f1f\u8282\u70b9\nC \u8282\u70b9\uff0c\u8fd1\u4f84\u5b50\u8282\u70b9\nD \u8282\u70b9\uff0c\u8fdc\u4f84\u5b50\u8282\u70b9"}),"\n",(0,l.jsx)(e.p,{children:"\u82e5N\u4e3aP\u7684\u5de6\u5b50\u7ed3\u70b9\uff0c\u5220\u9664N\u8282\u70b9\u540e\uff0c\u9700\u8981\u6839\u636eP\u3001S\u3001C\u3001D\u8282\u70b9\u7684\u989c\u8272\u60c5\u51b5\u8fdb\u884c\u7ef4\u62a4\uff0c\n\u8003\u8651\u7ea2\u9ed1\u6811\u7684\u6027\u8d28\u540e\uff0c\u53ef\u8ba1\u7b97\u5f97\u51fa\u5171\u67099\u79cd\u60c5\u51b5\nN\u4e3a\u53f3\u5b50\u7ed3\u70b9\u65f6\u540c\u4e0a"}),"\n",(0,l.jsx)(e.h3,{id:"case-1-2",children:"Case 1"}),"\n",(0,l.jsx)(e.p,{children:"(1\u79cd)\nP\u4e3a\u9ed1\u8272\nS\u4e3a\u7ea2\u8272\nC\u4e3a\u9ed1\u8272\nD\u4e3a\u9ed1\u8272"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"\n/**\n        P           s          S  \n       / \\         / \\        / \\ \n      N   s  --\x3e  P   D --\x3e  p   D\n         / \\     / \\        / \\   \n        C   D   N   C      N   C  \n**/\n\n"})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u5148\u5de6\u65cbP\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u5c06S\u67d3\u9ed1, P \u67d3\u7ea2"}),"\n",(0,l.jsx)(e.li,{children:"\u6b64\u65f6\uff0c\u4ee5P\u4e3a\u6839\u8282\u70b9\u7684\u5b50\u6811\u5728\u5220\u9664N\u540e\u4ecd\u4e0d\u6ee1\u8db3\u6027\u8d285)\uff0c\u5728\u4ee5P\u4e3a\u6839\u7684\u5b50\u6811\u4e2d\n\u7ee7\u7eed\u7ef4\u62a4N\u8282\u70b9"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"case-2-2",children:"Case 2"}),"\n",(0,l.jsx)(e.p,{children:"(1\u79cd)\nP\u4e3a\u7ea2\u8272\nS\u4e3a\u9ed1\u8272\nC\u4e3a\u9ed1\u8272\nD\u4e3a\u9ed1\u8272"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"\n/**\n        p           P    \n       / \\         / \\   \n      N   S  --\x3e  N   s \n         / \\         / \\   \n        C   D       C   D  \n**/\n\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6700\u7b80\u5355\u7684\u60c5\u51b5\n\u53ea\u9700\u5c06p\u67d3\u9ed1\uff0cS\u67d3\u7ea2\uff0c\u5373\u53ef\u6ee1\u8db3\u6027\u8d285)"}),"\n",(0,l.jsx)(e.h3,{id:"case-3-2",children:"Case 3"}),"\n",(0,l.jsx)(e.p,{children:"(1\u79cd)\nP\u4e3a\u9ed1\u8272\nS\u4e3a\u9ed1\u8272\nC\u4e3a\u9ed1\u8272\nD\u4e3a\u9ed1\u8272"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"\n/**\n        P           P    \n       / \\         / \\   \n      N   S  --\x3e  N   s \n         / \\         / \\   \n        C   D       C   D  \n**/\n\n"})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u5c06S\u8282\u70b9\u67d3\u7ea2\uff0c\n\u6b64\u65f6\u4ee5P\u4e3a\u6839\u7684\u5b50\u6811\u5df2\u7ecf\u6ee1\u8db3\u6027\u8d285\uff0c\u4f46\u662f\u8fd9\u9897\u5b50\u6811\u4e0a\u7684\u8282\u70b9\u7684\u9ed1\u6df1\u5ea6\u90fd\u51cf\u5c0f1\uff0c\n\u6240\u4ee5\u4ee5P\u7684\u7236\u8282\u70b9\u4e3a\u6839\u7684\u5b50\u6811\u53ef\u80fd\u8fdd\u80cc\u6027\u8d285, \u6240\u4ee5\u5c06P\u8282\u70b9\u4f5c\u4e3aN\u8282\u70b9\u9012\u5f52\u7ef4\u62a4,\n\u5982\u679cP\u662f\u6839\u8282\u70b9\u5219\u4e0d\u9700\u8981\u9012\u5f52\u7ef4\u62a4"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"case-4-1",children:"Case 4"}),"\n",(0,l.jsx)(e.p,{children:"(Case4\u603b\u662f\u4eceCase3\u8f6c\u6765\u7684)"}),"\n",(0,l.jsx)(e.p,{children:"(2\u79cd)\nP\u4e3a\u7ea2\u8272\u6216\u9ed1\u8272\nS\u4e3a\u9ed1\u8272\nC\u4e3a\u7ea2\u8272\nD\u4e3a\u9ed1\u8272"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"\n/**\n       (p)         (p)              (p)       \n       / \\         / \\              / \\       \n      N   S  --\x3e  N   c      --\x3e   N   C      \n         / \\           \\                \\     \n        c   D           S                s    \n                         \\                \\   \n                          D                D  \n**/                                           \n\n"})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u53f3\u65cbS\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u5c06c\u67d3\u9ed1\uff0cS\u67d3\u7ea2"}),"\n",(0,l.jsx)(e.li,{children:"\u6b64\u65f6\u4ecd\u4e0d\u6ee1\u8db3\u6027\u8d285, \u4e0d\u8fc7\u5f53\u524d\u60c5\u51b5\u7b26\u5408Case5,\u53ef\u4ee5\u8f6c\u5230Case5\u5904\u7406"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"case-5-1",children:"Case 5"}),"\n",(0,l.jsx)(e.p,{children:"(4\u79cd)\nP\u4e3a\u7ea2\u8272\u6216\u9ed1\u8272\nS\u4e3a\u9ed1\u8272\nC\u4e3a\u7ea2\u8272\u6216\u9ed1\u8272\nD\u4e3a\u7ea2\u8272"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"\n/**\n       (p)          S           (s)       \n       / \\         / \\          / \\       \n      N   S  --\x3e (p)  d  --\x3e   P   D\n         / \\     / \\          / \\      \n       (c)  d   N  (c)       N  (c)    \n                                       \n                                       \n**/                                           \n\n"})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u5de6\u65cb(p)                      (N\u5b50\u6811\u9ed1\u6df1\u5ea6+1,   (c)\u5b50\u6811\u9ed1\u6df1\u5ea6\u4e0d\u53d8\uff0cd\u5b50\u6811\u9ed1\u6df1\u5ea6-1)"}),"\n",(0,l.jsx)(e.li,{children:"\u4ea4\u6362(p)\u548cS\u7684\u989c\u8272\uff0c\u5c06d\u67d3\u9ed1    (N\u5b50\u6811\u9ed1\u6df1\u5ea6\u4e0d\u53d8\uff0c(c)\u5b50\u6811\u9ed1\u6df1\u5ea6\u4e0d\u53d8\uff0cD\u5b50\u6811\u9ed1\u6df1\u5ea6+1)"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6709\u4e0a\u53ef\u77e5\uff0c\u5c06N\u5220\u9664\u540e\uff0cN\u3001C\u3001D\u5b50\u6811\u9ed1\u6df1\u5ea6\u4e0e\u539f\u6765\u76f8\u540c"})]})}function j(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(x,{...n})}):x(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>d});var l=s(6540);const c={},i=l.createContext(c);function r(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);