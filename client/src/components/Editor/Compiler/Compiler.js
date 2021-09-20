import antlr4 from 'antlr4';
import miniCLexer  from './antlr/miniCLexer.js';
import miniCParser  from './antlr/miniCParser.js';
import miniCListener  from './antlr/miniCListener.js';

export function Compiler(code) {
  const input = code;
  console.log(input);
  const chars = new antlr4.InputStream(input);
  const lexer = new miniCLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new miniCParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.code();
  console.log(tree.toStringTree(parser.ruleNames));

}