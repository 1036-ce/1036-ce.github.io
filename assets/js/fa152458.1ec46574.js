"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5043],{4612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=n(4848),c=n(8453);const r={},i=void 0,o={id:"yacc",title:"yacc",description:"yacc",source:"@site/docs/yacc.md",sourceDirName:".",slug:"/yacc",permalink:"/docs/yacc",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/yacc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rbtree",permalink:"/docs/rbtree"}},d={},a=[{value:"yacc",id:"yacc",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"yacc",children:"yacc"}),"\n",(0,s.jsx)(t.h3,{id:""}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yacc",children:"%token <number> NUMBER\n%token <floats> FLOAT\n%token <string> ID\n%token <string> SSS\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"NUMBER"}),"\u7684\u7c7b\u578b\u4e0e",(0,s.jsx)(t.code,{children:"number"}),"\u76f8\u540c"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yacc",children:"%type <number>              type\n%type <condition>           condition\n%type <value>               value\n%type <number>              number\n%type <string>              relation\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"type"}),"\u7684\u7c7b\u578b\u4e0e",(0,s.jsx)(t.code,{children:"number"}),"\u76f8\u540c\n",(0,s.jsx)(t.code,{children:"condition"}),"\u7684\u7c7b\u578b\u4e0e",(0,s.jsx)(t.code,{children:"condition"}),"\u76f8\u540c\n",(0,s.jsx)(t.code,{children:"value"}),"\u7684\u7c7b\u578b\u4e0e",(0,s.jsx)(t.code,{children:"value"}),"\u76f8\u540c"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"keyword"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"%left"}),(0,s.jsx)(t.td,{children:"Identifies tokens that are left-associative with other tokens."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"%nonassoc"}),(0,s.jsx)(t.td,{children:"Identifies tokens that are not associative with other tokens."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"%right"}),(0,s.jsx)(t.td,{children:"Identifies tokens that are right-associative with other tokens."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"%start"}),(0,s.jsx)(t.td,{children:"Identifies a nonterminal name for the start symbol."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"%token"}),(0,s.jsx)(t.td,{children:"Identifies the token names that the yacc command accepts. Declares all token names in the declarations section."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"%type"}),(0,s.jsx)(t.td,{children:"Identifies the type of nonterminals. Type-checking is performed when this construct is present."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"%union"}),(0,s.jsx)(t.td,{children:"Identifies the yacc value stack as the union of the various type of values desired. By default, the values returned are integers. The effect of this construct is to provide the declaration of YYSTYPE directly from the input."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The %token, %left, %right, and %nonassoc keywords optionally support the name of a C union member (as defined by %union) called a ",(0,s.jsx)(t.code,{children:"<Tag>"}),"\nThe %type keyword requires a ",(0,s.jsx)(t.code,{children:"<Tag>"}),". The use of ",(0,s.jsx)(t.code,{children:"<Tag>"})," specifies that the tokens named on the line are to be of the same C type as the union member referenced by ",(0,s.jsx)(t.code,{children:"<Tag>"}),"."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.ibm.com/docs/en/aix/7.2?topic=information-yacc-grammar-file-declarations",children:"yacc grammar file declarations"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const c={},r=s.createContext(c);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);