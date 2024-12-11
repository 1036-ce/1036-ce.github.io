## 字体类型

- 衬线字体(Serif Font)
    - Times New Roman
    特点：衬线字体的特点是在字母的笔画末端带有装饰性的线条或小脚，这些细节被称为“衬线”。
    latex中使用`\rmfamily`
- 无衬线字体(Sans Serif Font)
    - Arial
    - Helvetica
    特点：无衬线字体没有笔画末端的装饰线条，整体设计简洁平滑。
    latex中使用`\sffamily`
- 等宽字体(MonoSpace Font)
    - Consolas
    - Fira Code
    特点：等宽字体中的每个字符（无论宽窄）都占用相同的水平空间。
    latex中使用`\ttfamily`

## fontspec包

使用fontspec中的`\setmainfont{font name}[font feature]`更改英文衬线字体
使用fontspec中的`\setsansfont{font name}[font feature]`更改英文无衬线字体
使用fontspec中的`\setmonofont{font name}[font feature]`更改英文等宽字体

## ctex宏包

latex中使用`ctex`宏包输入中文

使用fontspec中的`\setCJKmainfont{font name}[font feature]`更改中文衬线字体
使用fontspec中的`\setCJKsansfont{font name}[font feature]`更改中文无衬线字体
使用fontspec中的`\setCJKmonofont{font name}[font feature]`更改中文等宽字体

