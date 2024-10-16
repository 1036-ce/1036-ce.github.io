## yacc

### 


```yacc
%token <number> NUMBER
%token <floats> FLOAT
%token <string> ID
%token <string> SSS
```

`NUMBER`的类型与`number`相同

```yacc
%type <number>              type
%type <condition>           condition
%type <value>               value
%type <number>              number
%type <string>              relation
```

`type`的类型与`number`相同
`condition`的类型与`condition`相同
`value`的类型与`value`相同

|keyword | description |
|---|----------------------------------------------------------------------|
| %left|Identifies tokens that are left-associative with other tokens.|
|%nonassoc	|Identifies tokens that are not associative with other tokens.|
|%right | Identifies tokens that are right-associative with other tokens.|
|%start	| Identifies a nonterminal name for the start symbol.|
|%token	|Identifies the token names that the yacc command accepts. Declares all token names in the declarations section.|
|%type	|Identifies the type of nonterminals. Type-checking is performed when this construct is present.|
|%union	|   Identifies the yacc value stack as the union of the various type of values desired. By default, the values returned are integers. The effect of this construct is to provide the declaration of YYSTYPE directly from the input. |

The %token, %left, %right, and %nonassoc keywords optionally support the name of a C union member (as defined by %union) called a `<Tag>`
The %type keyword requires a `<Tag>`. The use of `<Tag>` specifies that the tokens named on the line are to be of the same C type as the union member referenced by `<Tag>`. 

> [yacc grammar file declarations](https://www.ibm.com/docs/en/aix/7.2?topic=information-yacc-grammar-file-declarations)
