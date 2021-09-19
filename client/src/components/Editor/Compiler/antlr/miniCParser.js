// Generated from miniC.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var miniCListener = require('./miniCListener').miniCListener;
var grammarFileName = "miniC.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001c\u00e6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0007\u0002\u001e\n\u0002",
    "\f\u0002\u000e\u0002!\u000b\u0002\u0003\u0003\u0003\u0003\u0005\u0003",
    "%\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003*\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u00042\n\u0004\f\u0004\u000e\u00045\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u0005A\n\u0005\f\u0005\u000e\u0005D\u000b",
    "\u0005\u0005\u0005F\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005K\n\u0005\f\u0005\u000e\u0005N\u000b\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005R\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "W\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006\\\n\u0006",
    "\f\u0006\u000e\u0006_\u000b\u0006\u0003\u0007\u0003\u0007\u0005\u0007",
    "c\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\bm\n\b\u0003\b\u0003\b\u0003\b\u0007\br\n\b",
    "\f\b\u000e\bu\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t{\n\t\f",
    "\t\u000e\t~\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0005\n\u0087\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u008d",
    "\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0007\u000b\u0095\n\u000b\f\u000b\u000e\u000b\u0098\u000b\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u009f\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00a3\n\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00a7\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0007\u000b\u00ac\n\u000b\f\u000b\u000e\u000b\u00af\u000b",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00b5",
    "\n\u000b\f\u000b\u000e\u000b\u00b8\u000b\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u00c1\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007",
    "\f\u00c9\n\f\f\f\u000e\f\u00cc\u000b\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0005\r\u00d4\n\r\u0005\r\u00d6\n\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00dd\n\u000e",
    "\f\u000e\u000e\u000e\u00e0\u000b\u000e\u0005\u000e\u00e2\n\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0002\u0003\u000e\u000f\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\u0003\u0004\u0002",
    "\u0017\u0017\u001b\u001b\u0002\u00fd\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0004)\u0003\u0002\u0002\u0002\u0006+\u0003\u0002\u0002\u0002\b8\u0003",
    "\u0002\u0002\u0002\nS\u0003\u0002\u0002\u0002\f`\u0003\u0002\u0002\u0002",
    "\u000el\u0003\u0002\u0002\u0002\u0010v\u0003\u0002\u0002\u0002\u0012",
    "\u008c\u0003\u0002\u0002\u0002\u0014\u00c0\u0003\u0002\u0002\u0002\u0016",
    "\u00c2\u0003\u0002\u0002\u0002\u0018\u00d5\u0003\u0002\u0002\u0002\u001a",
    "\u00d7\u0003\u0002\u0002\u0002\u001c\u001e\u0005\u0004\u0003\u0002\u001d",
    "\u001c\u0003\u0002\u0002\u0002\u001e!\u0003\u0002\u0002\u0002\u001f",
    "\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \u0003",
    "\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002\"%\u0005\n\u0006",
    "\u0002#%\u0005\u0006\u0004\u0002$\"\u0003\u0002\u0002\u0002$#\u0003",
    "\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\'\u0007\u0003\u0002\u0002",
    "\'*\u0003\u0002\u0002\u0002(*\u0005\b\u0005\u0002)$\u0003\u0002\u0002",
    "\u0002)(\u0003\u0002\u0002\u0002*\u0005\u0003\u0002\u0002\u0002+,\u0007",
    "\u0004\u0002\u0002,-\u0007\u001b\u0002\u0002-3\u0007\u0005\u0002\u0002",
    "./\u0005\n\u0006\u0002/0\u0007\u0003\u0002\u000202\u0003\u0002\u0002",
    "\u00021.\u0003\u0002\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002",
    "\u0002\u000234\u0003\u0002\u0002\u000246\u0003\u0002\u0002\u000253\u0003",
    "\u0002\u0002\u000267\u0007\u0006\u0002\u00027\u0007\u0003\u0002\u0002",
    "\u000289\t\u0002\u0002\u00029:\u0007\u001b\u0002\u0002:E\u0007\u0007",
    "\u0002\u0002;<\u0007\u0017\u0002\u0002<B\u0007\u001b\u0002\u0002=>\u0007",
    "\b\u0002\u0002>?\u0007\u0017\u0002\u0002?A\u0007\u001b\u0002\u0002@",
    "=\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002",
    "\u0002BC\u0003\u0002\u0002\u0002CF\u0003\u0002\u0002\u0002DB\u0003\u0002",
    "\u0002\u0002E;\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FG\u0003",
    "\u0002\u0002\u0002GQ\u0007\t\u0002\u0002HL\u0007\u0005\u0002\u0002I",
    "K\u0005\u0012\n\u0002JI\u0003\u0002\u0002\u0002KN\u0003\u0002\u0002",
    "\u0002LJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MO\u0003\u0002",
    "\u0002\u0002NL\u0003\u0002\u0002\u0002OR\u0007\u0006\u0002\u0002PR\u0007",
    "\u0003\u0002\u0002QH\u0003\u0002\u0002\u0002QP\u0003\u0002\u0002\u0002",
    "R\t\u0003\u0002\u0002\u0002SV\u0007\u0017\u0002\u0002TW\u0007\u001b",
    "\u0002\u0002UW\u0005\f\u0007\u0002VT\u0003\u0002\u0002\u0002VU\u0003",
    "\u0002\u0002\u0002W]\u0003\u0002\u0002\u0002XY\u0007\b\u0002\u0002Y",
    "\\\u0007\u001b\u0002\u0002Z\\\u0005\f\u0007\u0002[X\u0003\u0002\u0002",
    "\u0002[Z\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002][\u0003",
    "\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\u000b\u0003\u0002\u0002",
    "\u0002_]\u0003\u0002\u0002\u0002`b\u0007\u001b\u0002\u0002ac\u0007\u0018",
    "\u0002\u0002ba\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cd\u0003",
    "\u0002\u0002\u0002de\u0007\n\u0002\u0002ef\u0005\u000e\b\u0002f\r\u0003",
    "\u0002\u0002\u0002gh\b\b\u0001\u0002hm\u0007\u0014\u0002\u0002im\u0007",
    "\u0015\u0002\u0002jm\u0007\u0016\u0002\u0002km\u0007\u001b\u0002\u0002",
    "lg\u0003\u0002\u0002\u0002li\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002",
    "\u0002lk\u0003\u0002\u0002\u0002ms\u0003\u0002\u0002\u0002no\f\u0003",
    "\u0002\u0002op\u0007\u0018\u0002\u0002pr\u0005\u000e\b\u0004qn\u0003",
    "\u0002\u0002\u0002ru\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002",
    "st\u0003\u0002\u0002\u0002t\u000f\u0003\u0002\u0002\u0002us\u0003\u0002",
    "\u0002\u0002vw\u0007\u000b\u0002\u0002w|\u0005\u000e\b\u0002xy\u0007",
    "\b\u0002\u0002y{\u0005\u000e\b\u0002zx\u0003\u0002\u0002\u0002{~\u0003",
    "\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002",
    "}\u007f\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u0007\f\u0002\u0002\u0080\u0011\u0003\u0002\u0002\u0002\u0081\u0087",
    "\u0005\u000e\b\u0002\u0082\u0087\u0005\n\u0006\u0002\u0083\u0087\u0005",
    "\f\u0007\u0002\u0084\u0087\u0005\u001a\u000e\u0002\u0085\u0087\u0005",
    "\u0018\r\u0002\u0086\u0081\u0003\u0002\u0002\u0002\u0086\u0082\u0003",
    "\u0002\u0002\u0002\u0086\u0083\u0003\u0002\u0002\u0002\u0086\u0084\u0003",
    "\u0002\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0087\u0088\u0003",
    "\u0002\u0002\u0002\u0088\u0089\u0007\u0003\u0002\u0002\u0089\u008d\u0003",
    "\u0002\u0002\u0002\u008a\u008d\u0005\u0016\f\u0002\u008b\u008d\u0005",
    "\u0014\u000b\u0002\u008c\u0086\u0003\u0002\u0002\u0002\u008c\u008a\u0003",
    "\u0002\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u0013\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0007\r\u0002\u0002\u008f\u0090\u0007",
    "\u0007\u0002\u0002\u0090\u0091\u0005\u000e\b\u0002\u0091\u0092\u0007",
    "\t\u0002\u0002\u0092\u0096\u0007\u0005\u0002\u0002\u0093\u0095\u0005",
    "\u0012\n\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0095\u0098\u0003",
    "\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0096\u0097\u0003",
    "\u0002\u0002\u0002\u0097\u0099\u0003\u0002\u0002\u0002\u0098\u0096\u0003",
    "\u0002\u0002\u0002\u0099\u009a\u0007\u0006\u0002\u0002\u009a\u00c1\u0003",
    "\u0002\u0002\u0002\u009b\u009c\u0007\u000e\u0002\u0002\u009c\u009e\u0007",
    "\u0007\u0002\u0002\u009d\u009f\u0005\u000e\b\u0002\u009e\u009d\u0003",
    "\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a0\u0003",
    "\u0002\u0002\u0002\u00a0\u00a2\u0007\u0003\u0002\u0002\u00a1\u00a3\u0005",
    "\u000e\b\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a6\u0007",
    "\u0003\u0002\u0002\u00a5\u00a7\u0005\u000e\b\u0002\u00a6\u00a5\u0003",
    "\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u0007\t\u0002\u0002\u00a9\u00ad\u0007",
    "\u0005\u0002\u0002\u00aa\u00ac\u0005\u0012\n\u0002\u00ab\u00aa\u0003",
    "\u0002\u0002\u0002\u00ac\u00af\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003",
    "\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b0\u0003",
    "\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00b0\u00c1\u0007",
    "\u0006\u0002\u0002\u00b1\u00b2\u0007\u000f\u0002\u0002\u00b2\u00b6\u0007",
    "\u0005\u0002\u0002\u00b3\u00b5\u0005\u0012\n\u0002\u00b4\u00b3\u0003",
    "\u0002\u0002\u0002\u00b5\u00b8\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003",
    "\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b9\u0003",
    "\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007",
    "\u0006\u0002\u0002\u00ba\u00bb\u0007\r\u0002\u0002\u00bb\u00bc\u0007",
    "\u0007\u0002\u0002\u00bc\u00bd\u0005\u000e\b\u0002\u00bd\u00be\u0007",
    "\t\u0002\u0002\u00be\u00bf\u0007\u0003\u0002\u0002\u00bf\u00c1\u0003",
    "\u0002\u0002\u0002\u00c0\u008e\u0003\u0002\u0002\u0002\u00c0\u009b\u0003",
    "\u0002\u0002\u0002\u00c0\u00b1\u0003\u0002\u0002\u0002\u00c1\u0015\u0003",
    "\u0002\u0002\u0002\u00c2\u00c3\u0007\u0010\u0002\u0002\u00c3\u00c4\u0007",
    "\u0007\u0002\u0002\u00c4\u00c5\u0005\u000e\b\u0002\u00c5\u00c6\u0007",
    "\t\u0002\u0002\u00c6\u00ca\u0007\u0005\u0002\u0002\u00c7\u00c9\u0005",
    "\u0012\n\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c9\u00cc\u0003",
    "\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003",
    "\u0002\u0002\u0002\u00cb\u00cd\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003",
    "\u0002\u0002\u0002\u00cd\u00ce\u0007\u0006\u0002\u0002\u00ce\u0017\u0003",
    "\u0002\u0002\u0002\u00cf\u00d6\u0007\u0011\u0002\u0002\u00d0\u00d6\u0007",
    "\u0012\u0002\u0002\u00d1\u00d3\u0007\u0013\u0002\u0002\u00d2\u00d4\u0005",
    "\u000e\b\u0002\u00d3\u00d2\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003",
    "\u0002\u0002\u0002\u00d4\u00d6\u0003\u0002\u0002\u0002\u00d5\u00cf\u0003",
    "\u0002\u0002\u0002\u00d5\u00d0\u0003\u0002\u0002\u0002\u00d5\u00d1\u0003",
    "\u0002\u0002\u0002\u00d6\u0019\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007",
    "\u001b\u0002\u0002\u00d8\u00e1\u0007\u0007\u0002\u0002\u00d9\u00de\u0005",
    "\u000e\b\u0002\u00da\u00db\u0007\b\u0002\u0002\u00db\u00dd\u0005\u000e",
    "\b\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dd\u00e0\u0003\u0002",
    "\u0002\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002",
    "\u0002\u0002\u00df\u00e2\u0003\u0002\u0002\u0002\u00e0\u00de\u0003\u0002",
    "\u0002\u0002\u00e1\u00d9\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003\u0002",
    "\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3\u00e4\u0007\t",
    "\u0002\u0002\u00e4\u001b\u0003\u0002\u0002\u0002\u001f\u001f$)3BELQ",
    "V[]bls|\u0086\u008c\u0096\u009e\u00a2\u00a6\u00ad\u00b6\u00c0\u00ca",
    "\u00d3\u00d5\u00de\u00e1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'struct'", "'{'", "'}'", "'('", "','", 
                     "')'", "'='", "'['", "']'", "'while'", "'for'", "'do'", 
                     "'if'", "'break'", "'continue'", "'return'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "Int", "Float", "Bool", "Type", "Operator", "Whitespace", 
                      "Comment", "NAME", "DIGIT" ];

var ruleNames =  [ "code", "object", "struct", "fun", "var_decl", "init", 
                   "seq", "arr", "command", "loop", "cond", "exit", "jmp" ];

function miniCParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

miniCParser.prototype = Object.create(antlr4.Parser.prototype);
miniCParser.prototype.constructor = miniCParser;

Object.defineProperty(miniCParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

miniCParser.EOF = antlr4.Token.EOF;
miniCParser.T__0 = 1;
miniCParser.T__1 = 2;
miniCParser.T__2 = 3;
miniCParser.T__3 = 4;
miniCParser.T__4 = 5;
miniCParser.T__5 = 6;
miniCParser.T__6 = 7;
miniCParser.T__7 = 8;
miniCParser.T__8 = 9;
miniCParser.T__9 = 10;
miniCParser.T__10 = 11;
miniCParser.T__11 = 12;
miniCParser.T__12 = 13;
miniCParser.T__13 = 14;
miniCParser.T__14 = 15;
miniCParser.T__15 = 16;
miniCParser.T__16 = 17;
miniCParser.Int = 18;
miniCParser.Float = 19;
miniCParser.Bool = 20;
miniCParser.Type = 21;
miniCParser.Operator = 22;
miniCParser.Whitespace = 23;
miniCParser.Comment = 24;
miniCParser.NAME = 25;
miniCParser.DIGIT = 26;

miniCParser.RULE_code = 0;
miniCParser.RULE_object = 1;
miniCParser.RULE_struct = 2;
miniCParser.RULE_fun = 3;
miniCParser.RULE_var_decl = 4;
miniCParser.RULE_init = 5;
miniCParser.RULE_seq = 6;
miniCParser.RULE_arr = 7;
miniCParser.RULE_command = 8;
miniCParser.RULE_loop = 9;
miniCParser.RULE_cond = 10;
miniCParser.RULE_exit = 11;
miniCParser.RULE_jmp = 12;

function CodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.object = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectContext);
    } else {
        return this.getTypedRuleContext(ObjectContext,i);
    }
};

CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitCode(this);
	}
};




miniCParser.CodeContext = CodeContext;

miniCParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, miniCParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__1) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
            this.state = 26;
            this.object();
            this.state = 31;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.fun = function() {
    return this.getTypedRuleContext(FunContext,0);
};

ObjectContext.prototype.var_decl = function() {
    return this.getTypedRuleContext(Var_declContext,0);
};

ObjectContext.prototype.struct = function() {
    return this.getTypedRuleContext(StructContext,0);
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitObject(this);
	}
};




miniCParser.ObjectContext = ObjectContext;

miniCParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, miniCParser.RULE_object);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 34;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case miniCParser.Type:
                this.state = 32;
                this.var_decl();
                break;
            case miniCParser.T__1:
                this.state = 33;
                this.struct();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 36;
            this.match(miniCParser.T__0);
            break;

        case 2:
            this.state = 38;
            this.fun();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StructContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_struct;
    return this;
}

StructContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructContext.prototype.constructor = StructContext;

StructContext.prototype.NAME = function() {
    return this.getToken(miniCParser.NAME, 0);
};

StructContext.prototype.var_decl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Var_declContext);
    } else {
        return this.getTypedRuleContext(Var_declContext,i);
    }
};

StructContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterStruct(this);
	}
};

StructContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitStruct(this);
	}
};




miniCParser.StructContext = StructContext;

miniCParser.prototype.struct = function() {

    var localctx = new StructContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, miniCParser.RULE_struct);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(miniCParser.T__1);
        this.state = 42;
        this.match(miniCParser.NAME);
        this.state = 43;
        this.match(miniCParser.T__2);
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniCParser.Type) {
            this.state = 44;
            this.var_decl();
            this.state = 45;
            this.match(miniCParser.T__0);
            this.state = 51;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 52;
        this.match(miniCParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_fun;
    return this;
}

FunContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunContext.prototype.constructor = FunContext;

FunContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCParser.NAME);
    } else {
        return this.getToken(miniCParser.NAME, i);
    }
};


FunContext.prototype.Type = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCParser.Type);
    } else {
        return this.getToken(miniCParser.Type, i);
    }
};


FunContext.prototype.command = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommandContext);
    } else {
        return this.getTypedRuleContext(CommandContext,i);
    }
};

FunContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterFun(this);
	}
};

FunContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitFun(this);
	}
};




miniCParser.FunContext = FunContext;

miniCParser.prototype.fun = function() {

    var localctx = new FunContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, miniCParser.RULE_fun);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        _la = this._input.LA(1);
        if(!(_la===miniCParser.Type || _la===miniCParser.NAME)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 55;
        this.match(miniCParser.NAME);
        this.state = 56;
        this.match(miniCParser.T__4);
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===miniCParser.Type) {
            this.state = 57;
            this.match(miniCParser.Type);
            this.state = 58;
            this.match(miniCParser.NAME);
            this.state = 64;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===miniCParser.T__5) {
                this.state = 59;
                this.match(miniCParser.T__5);
                this.state = 60;
                this.match(miniCParser.Type);
                this.state = 61;
                this.match(miniCParser.NAME);
                this.state = 66;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 69;
        this.match(miniCParser.T__6);
        this.state = 79;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case miniCParser.T__2:
            this.state = 70;
            this.match(miniCParser.T__2);
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
                this.state = 71;
                this.command();
                this.state = 76;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 77;
            this.match(miniCParser.T__3);
            break;
        case miniCParser.T__0:
            this.state = 78;
            this.match(miniCParser.T__0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Var_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_var_decl;
    return this;
}

Var_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_declContext.prototype.constructor = Var_declContext;

Var_declContext.prototype.Type = function() {
    return this.getToken(miniCParser.Type, 0);
};

Var_declContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCParser.NAME);
    } else {
        return this.getToken(miniCParser.NAME, i);
    }
};


Var_declContext.prototype.init = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InitContext);
    } else {
        return this.getTypedRuleContext(InitContext,i);
    }
};

Var_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterVar_decl(this);
	}
};

Var_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitVar_decl(this);
	}
};




miniCParser.Var_declContext = Var_declContext;

miniCParser.prototype.var_decl = function() {

    var localctx = new Var_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, miniCParser.RULE_var_decl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(miniCParser.Type);
        this.state = 84;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.state = 82;
            this.match(miniCParser.NAME);
            break;

        case 2:
            this.state = 83;
            this.init();
            break;

        }
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniCParser.T__5 || _la===miniCParser.NAME) {
            this.state = 89;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case miniCParser.T__5:
                this.state = 86;
                this.match(miniCParser.T__5);
                this.state = 87;
                this.match(miniCParser.NAME);
                break;
            case miniCParser.NAME:
                this.state = 88;
                this.init();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_init;
    return this;
}

InitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitContext.prototype.constructor = InitContext;

InitContext.prototype.NAME = function() {
    return this.getToken(miniCParser.NAME, 0);
};

InitContext.prototype.seq = function() {
    return this.getTypedRuleContext(SeqContext,0);
};

InitContext.prototype.Operator = function() {
    return this.getToken(miniCParser.Operator, 0);
};

InitContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterInit(this);
	}
};

InitContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitInit(this);
	}
};




miniCParser.InitContext = InitContext;

miniCParser.prototype.init = function() {

    var localctx = new InitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, miniCParser.RULE_init);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(miniCParser.NAME);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===miniCParser.Operator) {
            this.state = 95;
            this.match(miniCParser.Operator);
        }

        this.state = 98;
        this.match(miniCParser.T__7);
        this.state = 99;
        this.seq(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SeqContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_seq;
    return this;
}

SeqContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SeqContext.prototype.constructor = SeqContext;

SeqContext.prototype.Int = function() {
    return this.getToken(miniCParser.Int, 0);
};

SeqContext.prototype.Float = function() {
    return this.getToken(miniCParser.Float, 0);
};

SeqContext.prototype.Bool = function() {
    return this.getToken(miniCParser.Bool, 0);
};

SeqContext.prototype.NAME = function() {
    return this.getToken(miniCParser.NAME, 0);
};

SeqContext.prototype.seq = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SeqContext);
    } else {
        return this.getTypedRuleContext(SeqContext,i);
    }
};

SeqContext.prototype.Operator = function() {
    return this.getToken(miniCParser.Operator, 0);
};

SeqContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterSeq(this);
	}
};

SeqContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitSeq(this);
	}
};



miniCParser.prototype.seq = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SeqContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, miniCParser.RULE_seq, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case miniCParser.Int:
            this.state = 102;
            this.match(miniCParser.Int);
            break;
        case miniCParser.Float:
            this.state = 103;
            this.match(miniCParser.Float);
            break;
        case miniCParser.Bool:
            this.state = 104;
            this.match(miniCParser.Bool);
            break;
        case miniCParser.NAME:
            this.state = 105;
            this.match(miniCParser.NAME);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 113;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new SeqContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, miniCParser.RULE_seq);
                this.state = 108;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 109;
                this.match(miniCParser.Operator);
                this.state = 110;
                this.seq(2); 
            }
            this.state = 115;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ArrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_arr;
    return this;
}

ArrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrContext.prototype.constructor = ArrContext;

ArrContext.prototype.seq = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SeqContext);
    } else {
        return this.getTypedRuleContext(SeqContext,i);
    }
};

ArrContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterArr(this);
	}
};

ArrContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitArr(this);
	}
};




miniCParser.ArrContext = ArrContext;

miniCParser.prototype.arr = function() {

    var localctx = new ArrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, miniCParser.RULE_arr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.match(miniCParser.T__8);
        this.state = 117;
        this.seq(0);
        this.state = 122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniCParser.T__5) {
            this.state = 118;
            this.match(miniCParser.T__5);
            this.state = 119;
            this.seq(0);
            this.state = 124;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 125;
        this.match(miniCParser.T__9);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_command;
    return this;
}

CommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommandContext.prototype.constructor = CommandContext;

CommandContext.prototype.seq = function() {
    return this.getTypedRuleContext(SeqContext,0);
};

CommandContext.prototype.var_decl = function() {
    return this.getTypedRuleContext(Var_declContext,0);
};

CommandContext.prototype.init = function() {
    return this.getTypedRuleContext(InitContext,0);
};

CommandContext.prototype.jmp = function() {
    return this.getTypedRuleContext(JmpContext,0);
};

CommandContext.prototype.exit = function() {
    return this.getTypedRuleContext(ExitContext,0);
};

CommandContext.prototype.cond = function() {
    return this.getTypedRuleContext(CondContext,0);
};

CommandContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

CommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterCommand(this);
	}
};

CommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitCommand(this);
	}
};




miniCParser.CommandContext = CommandContext;

miniCParser.prototype.command = function() {

    var localctx = new CommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, miniCParser.RULE_command);
    try {
        this.state = 138;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case miniCParser.T__14:
        case miniCParser.T__15:
        case miniCParser.T__16:
        case miniCParser.Int:
        case miniCParser.Float:
        case miniCParser.Bool:
        case miniCParser.Type:
        case miniCParser.NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 132;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
            switch(la_) {
            case 1:
                this.state = 127;
                this.seq(0);
                break;

            case 2:
                this.state = 128;
                this.var_decl();
                break;

            case 3:
                this.state = 129;
                this.init();
                break;

            case 4:
                this.state = 130;
                this.jmp();
                break;

            case 5:
                this.state = 131;
                this.exit();
                break;

            }
            this.state = 134;
            this.match(miniCParser.T__0);
            break;
        case miniCParser.T__13:
            this.enterOuterAlt(localctx, 2);
            this.state = 136;
            this.cond();
            break;
        case miniCParser.T__10:
        case miniCParser.T__11:
        case miniCParser.T__12:
            this.enterOuterAlt(localctx, 3);
            this.state = 137;
            this.loop();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.seq = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SeqContext);
    } else {
        return this.getTypedRuleContext(SeqContext,i);
    }
};

LoopContext.prototype.command = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommandContext);
    } else {
        return this.getTypedRuleContext(CommandContext,i);
    }
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitLoop(this);
	}
};




miniCParser.LoopContext = LoopContext;

miniCParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, miniCParser.RULE_loop);
    var _la = 0; // Token type
    try {
        this.state = 190;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case miniCParser.T__10:
            this.enterOuterAlt(localctx, 1);
            this.state = 140;
            this.match(miniCParser.T__10);
            this.state = 141;
            this.match(miniCParser.T__4);
            this.state = 142;
            this.seq(0);
            this.state = 143;
            this.match(miniCParser.T__6);
            this.state = 144;
            this.match(miniCParser.T__2);
            this.state = 148;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
                this.state = 145;
                this.command();
                this.state = 150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 151;
            this.match(miniCParser.T__3);
            break;
        case miniCParser.T__11:
            this.enterOuterAlt(localctx, 2);
            this.state = 153;
            this.match(miniCParser.T__11);
            this.state = 154;
            this.match(miniCParser.T__4);
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
                this.state = 155;
                this.seq(0);
            }

            this.state = 158;
            this.match(miniCParser.T__0);
            this.state = 160;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
                this.state = 159;
                this.seq(0);
            }

            this.state = 162;
            this.match(miniCParser.T__0);
            this.state = 164;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
                this.state = 163;
                this.seq(0);
            }

            this.state = 166;
            this.match(miniCParser.T__6);
            this.state = 167;
            this.match(miniCParser.T__2);
            this.state = 171;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
                this.state = 168;
                this.command();
                this.state = 173;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 174;
            this.match(miniCParser.T__3);
            break;
        case miniCParser.T__12:
            this.enterOuterAlt(localctx, 3);
            this.state = 175;
            this.match(miniCParser.T__12);
            this.state = 176;
            this.match(miniCParser.T__2);
            this.state = 180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
                this.state = 177;
                this.command();
                this.state = 182;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 183;
            this.match(miniCParser.T__3);
            this.state = 184;
            this.match(miniCParser.T__10);
            this.state = 185;
            this.match(miniCParser.T__4);
            this.state = 186;
            this.seq(0);
            this.state = 187;
            this.match(miniCParser.T__6);
            this.state = 188;
            this.match(miniCParser.T__0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_cond;
    return this;
}

CondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondContext.prototype.constructor = CondContext;

CondContext.prototype.seq = function() {
    return this.getTypedRuleContext(SeqContext,0);
};

CondContext.prototype.command = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommandContext);
    } else {
        return this.getTypedRuleContext(CommandContext,i);
    }
};

CondContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterCond(this);
	}
};

CondContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitCond(this);
	}
};




miniCParser.CondContext = CondContext;

miniCParser.prototype.cond = function() {

    var localctx = new CondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, miniCParser.RULE_cond);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.match(miniCParser.T__13);
        this.state = 193;
        this.match(miniCParser.T__4);
        this.state = 194;
        this.seq(0);
        this.state = 195;
        this.match(miniCParser.T__6);
        this.state = 196;
        this.match(miniCParser.T__2);
        this.state = 200;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
            this.state = 197;
            this.command();
            this.state = 202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 203;
        this.match(miniCParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_exit;
    return this;
}

ExitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExitContext.prototype.constructor = ExitContext;

ExitContext.prototype.seq = function() {
    return this.getTypedRuleContext(SeqContext,0);
};

ExitContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterExit(this);
	}
};

ExitContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitExit(this);
	}
};




miniCParser.ExitContext = ExitContext;

miniCParser.prototype.exit = function() {

    var localctx = new ExitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, miniCParser.RULE_exit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case miniCParser.T__14:
            this.state = 205;
            this.match(miniCParser.T__14);
            break;
        case miniCParser.T__15:
            this.state = 206;
            this.match(miniCParser.T__15);
            break;
        case miniCParser.T__16:
            this.state = 207;
            this.match(miniCParser.T__16);
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
                this.state = 208;
                this.seq(0);
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JmpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCParser.RULE_jmp;
    return this;
}

JmpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JmpContext.prototype.constructor = JmpContext;

JmpContext.prototype.NAME = function() {
    return this.getToken(miniCParser.NAME, 0);
};

JmpContext.prototype.seq = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SeqContext);
    } else {
        return this.getTypedRuleContext(SeqContext,i);
    }
};

JmpContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.enterJmp(this);
	}
};

JmpContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniCListener ) {
        listener.exitJmp(this);
	}
};




miniCParser.JmpContext = JmpContext;

miniCParser.prototype.jmp = function() {

    var localctx = new JmpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, miniCParser.RULE_jmp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.match(miniCParser.NAME);
        this.state = 214;
        this.match(miniCParser.T__4);
        this.state = 223;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
            this.state = 215;
            this.seq(0);
            this.state = 220;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===miniCParser.T__5) {
                this.state = 216;
                this.match(miniCParser.T__5);
                this.state = 217;
                this.seq(0);
                this.state = 222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 225;
        this.match(miniCParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


miniCParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 6:
			return this.seq_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

miniCParser.prototype.seq_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.miniCParser = miniCParser;
