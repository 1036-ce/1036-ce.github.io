"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7995],{6352:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(4848),c=r(8453);const o={},s=void 0,a={id:"cron",title:"cron",description:"Cron \u662f\u4e00\u79cd\u57fa\u4e8e\u65f6\u95f4\u7684\u4efb\u52a1\u8c03\u5ea6\u5de5\u5177\uff0c\u5e7f\u6cdb\u7528\u4e8e\u7c7b Unix \u64cd\u4f5c\u7cfb\u7edf\uff08\u5982 Linux \u548c macOS\uff09\u3002\u5b83\u5141\u8bb8\u7528\u6237\u5728\u7279\u5b9a\u65f6\u95f4\u6216\u5468\u671f\u6027\u5730\u81ea\u52a8\u6267\u884c\u6307\u5b9a\u7684\u4efb\u52a1\u6216\u811a\u672c\u3002Cron \u670d\u52a1\u7531 crond \u5b88\u62a4\u8fdb\u7a0b\u7ba1\u7406\uff0c\u4efb\u52a1\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6 crontab\uff08cron table\uff09\u6765\u6307\u5b9a\u3002",source:"@site/docs/cron.md",sourceDirName:".",slug:"/cron",permalink:"/docs/cron",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cron.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"user-defined-literals",permalink:"/docs/cpp/user-defined-literals"},next:{title:"intro",permalink:"/docs/intro"}},i={},l=[{value:"Cron \u7684\u57fa\u672c\u7ec4\u6210\u90e8\u5206",id:"cron-\u7684\u57fa\u672c\u7ec4\u6210\u90e8\u5206",level:3}];function d(n){const e={code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Cron \u662f\u4e00\u79cd\u57fa\u4e8e\u65f6\u95f4\u7684\u4efb\u52a1\u8c03\u5ea6\u5de5\u5177\uff0c\u5e7f\u6cdb\u7528\u4e8e\u7c7b Unix \u64cd\u4f5c\u7cfb\u7edf\uff08\u5982 Linux \u548c macOS\uff09\u3002\u5b83\u5141\u8bb8\u7528\u6237\u5728\u7279\u5b9a\u65f6\u95f4\u6216\u5468\u671f\u6027\u5730\u81ea\u52a8\u6267\u884c\u6307\u5b9a\u7684\u4efb\u52a1\u6216\u811a\u672c\u3002Cron \u670d\u52a1\u7531 crond \u5b88\u62a4\u8fdb\u7a0b\u7ba1\u7406\uff0c\u4efb\u52a1\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6 crontab\uff08cron table\uff09\u6765\u6307\u5b9a\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"cron-\u7684\u57fa\u672c\u7ec4\u6210\u90e8\u5206",children:"Cron \u7684\u57fa\u672c\u7ec4\u6210\u90e8\u5206"}),"\n",(0,t.jsx)(e.p,{children:"\u6bcf\u4e2a cron \u4efb\u52a1\u90fd\u7531\u4e00\u884c\u6784\u6210\uff0c\u5305\u542b\u516d\u4e2a\u5b57\u6bb5\uff1a"}),"\n",(0,t.jsx)(e.p,{children:"\u5206\u949f\uff080 - 59\uff09\n\u5c0f\u65f6\uff080 - 23\uff09\n\u65e5\uff081 - 31\uff09\n\u6708\uff081 - 12\uff09\n\u661f\u671f\u51e0\uff080 - 7\uff0c\u5176\u4e2d0\u548c7\u90fd\u8868\u793a\u661f\u671f\u65e5\uff09\n\u8981\u6267\u884c\u7684\u547d\u4ee4\n\u5b57\u6bb5\u4e4b\u95f4\u7528\u7a7a\u683c\u6216\u5236\u8868\u7b26\u5206\u9694\u3002\u4e0b\u9762\u662f\u4e00\u4e2a crontab \u6587\u4ef6\u7684\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# \u5206\u949f \u5c0f\u65f6 \u65e5 \u6708 \u661f\u671f \u547d\u4ee4\n  0    2   *   *   *    /path/to/backup.sh\n 30    4   1   *   *    /path/to/report.sh\n 45   23   *   *   6    /path/to/cleanup.sh\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4e0a\u9762\u7684 crontab \u6587\u4ef6\u5b9a\u4e49\u4e86\u4ee5\u4e0b\u4efb\u52a1\uff1a"}),"\n",(0,t.jsx)(e.p,{children:"\u6bcf\u5929\u51cc\u66682\u70b9\u6267\u884c /path/to/backup.sh\n\u6bcf\u67081\u65e5\u4e0a\u53484\u70b930\u5206\u6267\u884c /path/to/report.sh\n\u6bcf\u5468\u516d\u665a\u4e0a11\u70b945\u5206\u6267\u884c /path/to/cleanup.sh\n\u793a\u4f8b\n\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u811a\u672c backup.sh\uff0c\u5176\u8def\u5f84\u4e3a /home/user/backup.sh\uff0c\u4f60\u5e0c\u671b\u6bcf\u5929\u51cc\u66683\u70b9\u81ea\u52a8\u8fd0\u884c\u8fd9\u4e2a\u811a\u672c\uff0c\u53ef\u4ee5\u6309\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"}),"\n",(0,t.jsx)(e.p,{children:"\u6253\u5f00\u7ec8\u7aef\uff0c\u8f93\u5165 crontab -e \u4ee5\u7f16\u8f91\u5f53\u524d\u7528\u6237\u7684 crontab \u6587\u4ef6\u3002\u5982\u679c\u662f\u9996\u6b21\u4f7f\u7528\uff0c\u4f1a\u8ba9\u4f60\u9009\u62e9\u4e00\u4e2a\u7f16\u8f91\u5668\uff08\u5982 nano\u3001vim \u7b49\uff09\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5728 crontab \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e00\u884c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"0 3 * * * /home/user/backup.sh\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u884c\u8868\u793a\u6bcf\u5929\u51cc\u66683\u70b9\uff080\u52063\u65f6\uff09\u8fd0\u884c /home/user/backup.sh\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4fdd\u5b58\u5e76\u9000\u51fa\u7f16\u8f91\u5668\u3002\u65b0\u7684 crontab \u8bbe\u7f6e\u5c06\u81ea\u52a8\u751f\u6548\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5e38\u7528\u7b26\u53f7\n",(0,t.jsx)(e.em,{children:"\uff1a\u8868\u793a\u4efb\u4f55\u503c\u3002\u4f8b\u5982\uff0c"})," \u5728\u5c0f\u65f6\u5b57\u6bb5\u8868\u793a\u6bcf\u5c0f\u65f6\u90fd\u6267\u884c\u3002\n,\uff1a\u8868\u793a\u5217\u51fa\u591a\u4e2a\u503c\u3002\u4f8b\u5982\uff0c1,15 \u5728\u5206\u949f\u5b57\u6bb5\u8868\u793a\u6bcf\u5c0f\u65f6\u7684\u7b2c1\u548c\u7b2c15\u5206\u949f\u6267\u884c\u3002\n-\uff1a\u8868\u793a\u4e00\u4e2a\u8303\u56f4\u3002\u4f8b\u5982\uff0c1-5 \u5728\u5c0f\u65f6\u5b57\u6bb5\u8868\u793a\u4ece\u51cc\u66681\u70b9\u52305\u70b9\u6bcf\u5c0f\u65f6\u90fd\u6267\u884c\u3002\n/\uff1a\u8868\u793a\u6b65\u8fdb\u503c\u3002\u4f8b\u5982\uff0c*/15 \u5728\u5206\u949f\u5b57\u6bb5\u8868\u793a\u6bcf15\u5206\u949f\u6267\u884c\u4e00\u6b21\u3002\n\u9a8c\u8bc1 Cron \u4efb\u52a1\n\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u5f53\u524d\u7528\u6237\u7684 crontab \u8bbe\u7f6e\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"crontab -l\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd8\u53ef\u4ee5\u67e5\u770b cron \u670d\u52a1\u65e5\u5fd7\u4ee5\u786e\u4fdd\u4efb\u52a1\u5df2\u6267\u884c\u3002\u65e5\u5fd7\u6587\u4ef6\u901a\u5e38\u4f4d\u4e8e /var/log/cron \u6216 /var/log/syslog\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6ce8\u610f\u4e8b\u9879\n\u786e\u4fdd\u811a\u672c\u5177\u6709\u6267\u884c\u6743\u9650\uff0c\u53ef\u4ee5\u4f7f\u7528 chmod +x /path/to/script.sh \u6765\u8bbe\u7f6e\u3002\n\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\u4ee5\u907f\u514d\u8def\u5f84\u95ee\u9898\u3002"})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>a});var t=r(6540);const c={},o=t.createContext(c);function s(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);