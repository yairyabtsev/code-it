grammar Hello;

code  : object* ;

object : (var_decl | struct | function);

struct : type NAME OBRACE var_decl* CBRACE NAME? COMMANDEND;

type  : INT, FLOAT, BOOL, VOID;
INT   : 'int';
FLOAT : 'float';
VOID  : 'void';
BOOL  : 'bool';

TRUE  : 'true';
FALSE : 'false';

LeftParen : '(';
RightParen : ')';
LeftBracket : '[';
RightBracket : ']';
LeftBrace : '{';
RightBrace : '}';

Less : '<';
LessEqual : '<=';
Greater : '>';
GreaterEqual : '>=';
LeftShift : '<<';
RightShift : '>>';

Plus : '+';
PlusPlus : '++';
Minus : '-';
MinusMinus : '--';
Star : '*';
Div : '/';
Mod : '%';

And : '&';
Or : '|';
AndAnd : '&&';
OrOr : '||';
Caret : '^';
Not : '!';
Tilde : '~';

Question : '?';
Colon : ':';
Semi : ';';
Comma : ',';

Assign : '=';
StarAssign : '*=';
DivAssign : '/=';
ModAssign : '%=';
PlusAssign : '+=';
MinusAssign : '-=';
LeftShiftAssign : '<<=';
RightShiftAssign : '>>=';
AndAssign : '&=';
XorAssign : '^=';
OrAssign : '|=';

Equal : '==';
NotEqual : '!=';

CommandEnd : ';';

Whitespace :   [ \t\r\n]+ -> skip;
Comment : ('//' ~[\r\n]* | '/*' .*? '*/') -> skip;



