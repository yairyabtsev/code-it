grammar miniC;

code : object*;

object : (((var_decl | struct) ';') | fun);

struct : 'struct' NAME '{' (var_decl ';')* '}';
fun : (Type| NAME) NAME '(' (Type NAME (',' Type NAME)*)? ')' ('{' command* '}' | ';');
var_decl : Type ( NAME | init) (',' NAME | init)*;
init : NAME Operator? '=' seq;

seq   : Int | Float | Bool | NAME
       | seq Operator seq
       ;


Int : DIGIT+;
Float : Int ('.' | ',') Int;
Bool : ('true' | 'false');
arr : '[' seq (',' seq)* ']';

command : ((seq | var_decl | init | jmp | exit) ';') | cond | loop;
/* | loop | cond;*/
Type  : 'int' | 'float' | 'void' | 'bool';

Operator : '+' | '-' | '*' | '%' | '/' | '<<' | '>>' | '&&' | '||' | '|' | '&';


loop : ('while' '('seq ')' '{' command* '}')
    | ('for' '('seq? ';'seq? ';'seq? ')' '{' command* '}')
    | ('do' '{'command* '}' 'while' '('seq ')' ';');
cond : 'if' '('seq ')' '{' command* '}';
exit : ('break' | 'continue' | ( 'return' (seq)?));
jmp : NAME '(' (seq (',' seq)*)? ')';


Whitespace :   [ \t\r\n]+ -> skip;
Comment : (('//' ~[\r\n]*) | ('/*' .*? '*/')) -> skip;

NAME : [a-zA-Z0-9_]+;
DIGIT : [0-9]+;