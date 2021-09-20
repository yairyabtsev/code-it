import antlr4 from 'antlr4';
const miniCLexer = require('./antlr/miniCLexer.js');
const miniCParser = require('./antlr/miniCParser.js');
const miniCListener = require('./antlr/miniCListener.js');

export function Compiler(code) {
  const input = code;
  console.log(input);
  const chars = new antlr4.InputStream(input);
  //const lexer = new miniCLexer(chars);
  //const tokens = new antlr4.CommonTokenStream(lexer);
  //const parser = new miniCParser(tokens);
  //parser.buildParseTrees = true;
  //const tree = parser.MyStartRule();

}