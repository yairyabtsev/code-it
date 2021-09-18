grammar miniC;

code : object*;

object : (((var_decl | struct) '}') | fun);

struct : 'struct' NAME '{' var_decl* '}';
fun : Type NAME '(' (Type NAME (',' Type NAME)*)? ')' ('{' command* '}' | ';');
var_decl : Type ( NAME | init) (',' NAME | init)*;
init : NAME '=' value;

seq   : Int | Float
       | seq Operator seq
       ;

value : seq Operator seq ;

Int : DIGIT+;
Float : Int ('.' | ',') Int;
Bool : ('true' | 'false');
arr : '[' value (',' value)* ']';

command : ((var_decl | init) ';');
/* | loop | cond | exit | jmp;*/
Type  : 'Int' | 'Float' | 'void' | 'Bool';

Operator : '+' | '-' | '*' | '%' | '/';

/*
loop :;
cond :;
exit :;
jmp :;
*/

Whitespace :   [ \t\r\n]+ -> skip;
Comment : (('//' ~[\r\n]*) | ('/*' .*? '*/')) -> skip;

NAME : [a-zA-Z0-9_]+;
DIGIT : [0-9]+;