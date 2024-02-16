"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[189],{5821:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=n(4848),s=n(8453);const a={},c="cmake and gtest",i={id:"cmake/cmake_and_gtest",title:"cmake and gtest",description:"\u5728cmake\u9879\u76ee\u4e2d\u96c6\u6210gtest\u7684\u793a\u4f8b",source:"@site/docs/cmake/cmake_and_gtest.md",sourceDirName:"cmake",slug:"/cmake/cmake_and_gtest",permalink:"/docs/cmake/cmake_and_gtest",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cmake/cmake_and_gtest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"intro",permalink:"/docs/intro"}},r={},u=[{value:"\u5728cmake\u9879\u76ee\u4e2d\u96c6\u6210gtest\u7684\u793a\u4f8b",id:"\u5728cmake\u9879\u76ee\u4e2d\u96c6\u6210gtest\u7684\u793a\u4f8b",level:2},{value:"\u9879\u76ee\u7ed3\u6784\u5982\u4e0b\uff1a",id:"\u9879\u76ee\u7ed3\u6784\u5982\u4e0b",level:3},{value:"\u6839\u76ee\u5f55\u4e0b\u7684CMakeLists.txt",id:"\u6839\u76ee\u5f55\u4e0b\u7684cmakeliststxt",level:3},{value:"src\u76ee\u5f55\u4e0b\u7684CMakeLists.txt",id:"src\u76ee\u5f55\u4e0b\u7684cmakeliststxt",level:3},{value:"src/multiply/multiply.h",id:"srcmultiplymultiplyh",level:3},{value:"src/multiply/multiply.cpp",id:"srcmultiplymultiplycpp",level:3},{value:"src/multiply\u76ee\u5f55\u4e0b\u7684CMakeLists.txt",id:"srcmultiply\u76ee\u5f55\u4e0b\u7684cmakeliststxt",level:3},{value:"test\u76ee\u5f55\u4e0b\u7684CMakeLists.txt",id:"test\u76ee\u5f55\u4e0b\u7684cmakeliststxt",level:3},{value:"test/multiply_test.cpp",id:"testmultiply_testcpp",level:3}];function d(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,s.R)(),...t.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"cmake-and-gtest",children:"cmake and gtest"}),"\n",(0,l.jsx)(e.h2,{id:"\u5728cmake\u9879\u76ee\u4e2d\u96c6\u6210gtest\u7684\u793a\u4f8b",children:"\u5728cmake\u9879\u76ee\u4e2d\u96c6\u6210gtest\u7684\u793a\u4f8b"}),"\n",(0,l.jsx)(e.h3,{id:"\u9879\u76ee\u7ed3\u6784\u5982\u4e0b",children:"\u9879\u76ee\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sh",children:"\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 run.sh\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeLists.txt\n\u2502\xa0\xa0 \u2514\u2500\u2500 multiply\n\u2502\xa0\xa0     \u251c\u2500\u2500 CMakeLists.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 multiply.cpp\n\u2502\xa0\xa0     \u2514\u2500\u2500 multiply.h\n\u2514\u2500\u2500 test\n    \u251c\u2500\u2500 CMakeLists.txt\n    \u2514\u2500\u2500 multiply_test.cpp\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u6839\u76ee\u5f55\u4e0b\u7684cmakeliststxt",children:"\u6839\u76ee\u5f55\u4e0b\u7684CMakeLists.txt"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cmake",children:"cmake_minimum_required(VERSION 3.26)\nproject(MultiplyTest LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\nenable_testing()\n\nadd_subdirectory(src)\nadd_subdirectory(test)\n"})}),"\n",(0,l.jsx)(e.h3,{id:"src\u76ee\u5f55\u4e0b\u7684cmakeliststxt",children:"src\u76ee\u5f55\u4e0b\u7684CMakeLists.txt"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cmake",children:"add_subdirectory(multiply)\n"})}),"\n",(0,l.jsx)(e.h3,{id:"srcmultiplymultiplyh",children:"src/multiply/multiply.h"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"int multiply(int a, int b);\n\nfloat multiply(float a, float b);\n\ndouble multiply(double a, double b);\n"})}),"\n",(0,l.jsx)(e.h3,{id:"srcmultiplymultiplycpp",children:"src/multiply/multiply.cpp"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:'#include "multiply.h"\n\nint multiply(int a, int b)\n{\n    return a*b;\n}\n\nfloat multiply(float a, float b)\n{\n    return a*b;\n}\n\ndouble multiply(double a, double b)\n{\n    return a*b;\n}\n\n'})}),"\n",(0,l.jsx)(e.h3,{id:"srcmultiply\u76ee\u5f55\u4e0b\u7684cmakeliststxt",children:"src/multiply\u76ee\u5f55\u4e0b\u7684CMakeLists.txt"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cmake",children:"add_library(multiply multiply.cpp)\n"})}),"\n",(0,l.jsx)(e.h3,{id:"test\u76ee\u5f55\u4e0b\u7684cmakeliststxt",children:"test\u76ee\u5f55\u4e0b\u7684CMakeLists.txt"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cmake",children:'find_package(GTest REQUIRED)\n\nif (!GTest_FOUND)\n\tmessage(FATAL "GTest not found")\nendif()\n\n# \u5c06\u6211\u4eec\u5199\u7684tests\u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6\nadd_executable(multiply_test multiply_test.cpp)\n\n# \u628aGTest\u548c\u88ab\u6d4b\u51fd\u6570\u90fd\u94fe\u63a5\u5230 \u53ef\u6267\u884c\u6587\u4ef6 \u4e0a\ntarget_link_libraries(multiply_test\n PRIVATE\n  GTest::GTest\n  multiply)\n\n# \u589e\u52a0\u6d4b\u8bd5\nadd_test(multiply_gtests multiply_test)\n\n'})}),"\n",(0,l.jsx)(e.h3,{id:"testmultiply_testcpp",children:"test/multiply_test.cpp"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:'#include "../src/multiply/multiply.h"\n#include <gtest/gtest.h>\n\nTEST(MultiplyTests, TestIntegerOne_One)\n{\n    const auto expected = 1;\n    const auto actual = multiply(1, 1);\n    ASSERT_EQ(expected, actual);\n}\n\nTEST(MultiplyTests, TestIntegerZero_Zero)\n{\n    const auto expected = 0;\n    const auto actual = multiply(0, 0);\n    ASSERT_EQ(expected, actual);\n}\n\nTEST(MultiplyTests, TestIntegerZero_One)\n{\n    const auto expected = 0;\n    const auto actual = multiply(0, 1);\n    ASSERT_EQ(actual, expected);\n}\n\nint main(int argc, char** argv)\n{\n    ::testing::InitGoogleTest(&argc, argv);\n    return RUN_ALL_TESTS();\n}\n\n'})})]})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(d,{...t})}):d(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>i});var l=n(6540);const s={},a=l.createContext(s);function c(t){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),l.createElement(a.Provider,{value:e},t.children)}}}]);