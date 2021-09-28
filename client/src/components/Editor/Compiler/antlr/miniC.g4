grammar miniC;

options {
	language=JavaScript;
}

code : (var_decl | struct | fun)*;

struct : 'struct' name '{' (var_decl ';')* '}';
fun : (Type| name) name '(' (Type name (',' Type name)*)? ')' ('{' command* '}' | ';');
var_decl : (Type| name | array) ( name | init) (',' (name | init))* ';';
init : name (('[' seq ']') | ( '.' name ))* Operator? '=' seq;

seq   : Int | Float | Bool | name (('[' seq ']') | ( '.' name ))* | '{' seq (',' seq)* '}' | '(' seq ')'
       | seq Operator seq
       ;


Int : ('-'|'+')? DIGIT+;
Float : Int '.' DIGIT+;
Bool : ('true' | 'false');

command : ((seq | init) ';') | var_decl  | jmp | exit | cond | loop;

array : 'Array' '<' Type '>';
Type : 'int' | 'float' | 'void' | 'bool';

Operator : '+' | '-' | '*' | '%' | '/' | '<<' | '>>'
         | '&&' | '||' | '<' | '>' | '==' | '>=' | '<=' | '!='
         | '|' | '&' | '!';


loop : ('while' '('Operator? seq ')' '{' command* '}');
cond : 'if' '(' Operator? seq ')' ('{' command* '}'| command) ('else' ('{' command* '}'| command))?;
exit : ('break' | 'continue' | ( 'return' (seq)?)) ';';
jmp : name '(' (seq (',' seq)*)? ');';


Whitespace :   [ \t\r\n]+ -> skip;
Comment : (('//' ~[\r\n]*) | ('/*' .*? '*/')) -> skip;

name : NAME;
NAME : [a-zA-Z0-9_]+;
DIGIT : [0-9]+;