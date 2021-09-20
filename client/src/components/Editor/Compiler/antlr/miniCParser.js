// Generated from miniC.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import miniCListener from './miniCListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001c\u00ef\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0007\u0002\u001c\n\u0002\f\u0002\u000e",
    "\u0002\u001f\u000b\u0002\u0003\u0003\u0003\u0003\u0005\u0003#\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003(\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "0\n\u0004\f\u0004\u000e\u00043\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005?\n\u0005\f\u0005\u000e\u0005B\u000b\u0005",
    "\u0005\u0005D\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "I\n\u0005\f\u0005\u000e\u0005L\u000b\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005P\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006U\n\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006Z\n\u0006\f\u0006\u000e",
    "\u0006]\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007d\n\u0007\u0003\u0007\u0005\u0007g\n\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0007\bz\n\b\f\b\u000e\b}\u000b\b\u0003\b\u0003\b\u0005\b\u0081\n",
    "\b\u0003\b\u0003\b\u0003\b\u0007\b\u0086\n\b\f\b\u000e\b\u0089\u000b",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0090\n\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0005\t\u0096\n\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u009e\n\n\f\n\u000e\n\u00a1\u000b\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00a8\n\n\u0003\n\u0003\n",
    "\u0005\n\u00ac\n\n\u0003\n\u0003\n\u0005\n\u00b0\n\n\u0003\n\u0003\n",
    "\u0003\n\u0007\n\u00b5\n\n\f\n\u000e\n\u00b8\u000b\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0007\n\u00be\n\n\f\n\u000e\n\u00c1\u000b\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00ca\n\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007",
    "\u000b\u00d2\n\u000b\f\u000b\u000e\u000b\u00d5\u000b\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00dd\n\f\u0005",
    "\f\u00df\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00e6\n",
    "\r\f\r\u000e\r\u00e9\u000b\r\u0005\r\u00eb\n\r\u0003\r\u0003\r\u0003",
    "\r\u0002\u0003\u000e\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u0002\u0003\u0004\u0002\u0017\u0017\u001b\u001b\u0002",
    "\u010a\u0002\u001d\u0003\u0002\u0002\u0002\u0004\'\u0003\u0002\u0002",
    "\u0002\u0006)\u0003\u0002\u0002\u0002\b6\u0003\u0002\u0002\u0002\nQ",
    "\u0003\u0002\u0002\u0002\f^\u0003\u0002\u0002\u0002\u000e\u0080\u0003",
    "\u0002\u0002\u0002\u0010\u0095\u0003\u0002\u0002\u0002\u0012\u00c9\u0003",
    "\u0002\u0002\u0002\u0014\u00cb\u0003\u0002\u0002\u0002\u0016\u00de\u0003",
    "\u0002\u0002\u0002\u0018\u00e0\u0003\u0002\u0002\u0002\u001a\u001c\u0005",
    "\u0004\u0003\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u001f\u0003",
    "\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003",
    "\u0002\u0002\u0002\u001e\u0003\u0003\u0002\u0002\u0002\u001f\u001d\u0003",
    "\u0002\u0002\u0002 #\u0005\n\u0006\u0002!#\u0005\u0006\u0004\u0002\"",
    " \u0003\u0002\u0002\u0002\"!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002",
    "\u0002$%\u0007\u0003\u0002\u0002%(\u0003\u0002\u0002\u0002&(\u0005\b",
    "\u0005\u0002\'\"\u0003\u0002\u0002\u0002\'&\u0003\u0002\u0002\u0002",
    "(\u0005\u0003\u0002\u0002\u0002)*\u0007\u0004\u0002\u0002*+\u0007\u001b",
    "\u0002\u0002+1\u0007\u0005\u0002\u0002,-\u0005\n\u0006\u0002-.\u0007",
    "\u0003\u0002\u0002.0\u0003\u0002\u0002\u0002/,\u0003\u0002\u0002\u0002",
    "03\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002",
    "\u000224\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000245\u0007\u0006",
    "\u0002\u00025\u0007\u0003\u0002\u0002\u000267\t\u0002\u0002\u000278",
    "\u0007\u001b\u0002\u00028C\u0007\u0007\u0002\u00029:\u0007\u0017\u0002",
    "\u0002:@\u0007\u001b\u0002\u0002;<\u0007\b\u0002\u0002<=\u0007\u0017",
    "\u0002\u0002=?\u0007\u001b\u0002\u0002>;\u0003\u0002\u0002\u0002?B\u0003",
    "\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002",
    "AD\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002C9\u0003\u0002\u0002",
    "\u0002CD\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EO\u0007\t",
    "\u0002\u0002FJ\u0007\u0005\u0002\u0002GI\u0005\u0010\t\u0002HG\u0003",
    "\u0002\u0002\u0002IL\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002",
    "JK\u0003\u0002\u0002\u0002KM\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002",
    "\u0002MP\u0007\u0006\u0002\u0002NP\u0007\u0003\u0002\u0002OF\u0003\u0002",
    "\u0002\u0002ON\u0003\u0002\u0002\u0002P\t\u0003\u0002\u0002\u0002QT",
    "\u0007\u0017\u0002\u0002RU\u0007\u001b\u0002\u0002SU\u0005\f\u0007\u0002",
    "TR\u0003\u0002\u0002\u0002TS\u0003\u0002\u0002\u0002U[\u0003\u0002\u0002",
    "\u0002VW\u0007\b\u0002\u0002WZ\u0007\u001b\u0002\u0002XZ\u0005\f\u0007",
    "\u0002YV\u0003\u0002\u0002\u0002YX\u0003\u0002\u0002\u0002Z]\u0003\u0002",
    "\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\",
    "\u000b\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002^c\u0007\u001b",
    "\u0002\u0002_`\u0007\n\u0002\u0002`a\u0005\u000e\b\u0002ab\u0007\u000b",
    "\u0002\u0002bd\u0003\u0002\u0002\u0002c_\u0003\u0002\u0002\u0002cd\u0003",
    "\u0002\u0002\u0002df\u0003\u0002\u0002\u0002eg\u0007\u0018\u0002\u0002",
    "fe\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002",
    "\u0002hi\u0007\f\u0002\u0002ij\u0005\u000e\b\u0002j\r\u0003\u0002\u0002",
    "\u0002kl\b\b\u0001\u0002l\u0081\u0007\u0014\u0002\u0002m\u0081\u0007",
    "\u0015\u0002\u0002n\u0081\u0007\u0016\u0002\u0002o\u0081\u0007\u001b",
    "\u0002\u0002pq\u0007\u001b\u0002\u0002qr\u0007\n\u0002\u0002rs\u0005",
    "\u000e\b\u0002st\u0007\u000b\u0002\u0002t\u0081\u0003\u0002\u0002\u0002",
    "uv\u0007\u0005\u0002\u0002v{\u0005\u000e\b\u0002wx\u0007\b\u0002\u0002",
    "xz\u0005\u000e\b\u0002yw\u0003\u0002\u0002\u0002z}\u0003\u0002\u0002",
    "\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|~\u0003\u0002",
    "\u0002\u0002}{\u0003\u0002\u0002\u0002~\u007f\u0007\u0006\u0002\u0002",
    "\u007f\u0081\u0003\u0002\u0002\u0002\u0080k\u0003\u0002\u0002\u0002",
    "\u0080m\u0003\u0002\u0002\u0002\u0080n\u0003\u0002\u0002\u0002\u0080",
    "o\u0003\u0002\u0002\u0002\u0080p\u0003\u0002\u0002\u0002\u0080u\u0003",
    "\u0002\u0002\u0002\u0081\u0087\u0003\u0002\u0002\u0002\u0082\u0083\f",
    "\u0003\u0002\u0002\u0083\u0084\u0007\u0018\u0002\u0002\u0084\u0086\u0005",
    "\u000e\b\u0004\u0085\u0082\u0003\u0002\u0002\u0002\u0086\u0089\u0003",
    "\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0087\u0088\u0003",
    "\u0002\u0002\u0002\u0088\u000f\u0003\u0002\u0002\u0002\u0089\u0087\u0003",
    "\u0002\u0002\u0002\u008a\u0090\u0005\u000e\b\u0002\u008b\u0090\u0005",
    "\n\u0006\u0002\u008c\u0090\u0005\f\u0007\u0002\u008d\u0090\u0005\u0018",
    "\r\u0002\u008e\u0090\u0005\u0016\f\u0002\u008f\u008a\u0003\u0002\u0002",
    "\u0002\u008f\u008b\u0003\u0002\u0002\u0002\u008f\u008c\u0003\u0002\u0002",
    "\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002",
    "\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u0003\u0002",
    "\u0002\u0092\u0096\u0003\u0002\u0002\u0002\u0093\u0096\u0005\u0014\u000b",
    "\u0002\u0094\u0096\u0005\u0012\n\u0002\u0095\u008f\u0003\u0002\u0002",
    "\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0094\u0003\u0002\u0002",
    "\u0002\u0096\u0011\u0003\u0002\u0002\u0002\u0097\u0098\u0007\r\u0002",
    "\u0002\u0098\u0099\u0007\u0007\u0002\u0002\u0099\u009a\u0005\u000e\b",
    "\u0002\u009a\u009b\u0007\t\u0002\u0002\u009b\u009f\u0007\u0005\u0002",
    "\u0002\u009c\u009e\u0005\u0010\t\u0002\u009d\u009c\u0003\u0002\u0002",
    "\u0002\u009e\u00a1\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a2\u0003\u0002\u0002",
    "\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007\u0006\u0002",
    "\u0002\u00a3\u00ca\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007\u000e\u0002",
    "\u0002\u00a5\u00a7\u0007\u0007\u0002\u0002\u00a6\u00a8\u0005\u000e\b",
    "\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00ab\u0007\u0003\u0002",
    "\u0002\u00aa\u00ac\u0005\u000e\b\u0002\u00ab\u00aa\u0003\u0002\u0002",
    "\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002",
    "\u0002\u00ad\u00af\u0007\u0003\u0002\u0002\u00ae\u00b0\u0005\u000e\b",
    "\u0002\u00af\u00ae\u0003\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002",
    "\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007\t\u0002",
    "\u0002\u00b2\u00b6\u0007\u0005\u0002\u0002\u00b3\u00b5\u0005\u0010\t",
    "\u0002\u00b4\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b8\u0003\u0002\u0002",
    "\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002",
    "\u0002\u00b7\u00b9\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002",
    "\u0002\u00b9\u00ca\u0007\u0006\u0002\u0002\u00ba\u00bb\u0007\u000f\u0002",
    "\u0002\u00bb\u00bf\u0007\u0005\u0002\u0002\u00bc\u00be\u0005\u0010\t",
    "\u0002\u00bd\u00bc\u0003\u0002\u0002\u0002\u00be\u00c1\u0003\u0002\u0002",
    "\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002",
    "\u0002\u00c0\u00c2\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002",
    "\u0002\u00c2\u00c3\u0007\u0006\u0002\u0002\u00c3\u00c4\u0007\r\u0002",
    "\u0002\u00c4\u00c5\u0007\u0007\u0002\u0002\u00c5\u00c6\u0005\u000e\b",
    "\u0002\u00c6\u00c7\u0007\t\u0002\u0002\u00c7\u00c8\u0007\u0003\u0002",
    "\u0002\u00c8\u00ca\u0003\u0002\u0002\u0002\u00c9\u0097\u0003\u0002\u0002",
    "\u0002\u00c9\u00a4\u0003\u0002\u0002\u0002\u00c9\u00ba\u0003\u0002\u0002",
    "\u0002\u00ca\u0013\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007\u0010\u0002",
    "\u0002\u00cc\u00cd\u0007\u0007\u0002\u0002\u00cd\u00ce\u0005\u000e\b",
    "\u0002\u00ce\u00cf\u0007\t\u0002\u0002\u00cf\u00d3\u0007\u0005\u0002",
    "\u0002\u00d0\u00d2\u0005\u0010\t\u0002\u00d1\u00d0\u0003\u0002\u0002",
    "\u0002\u00d2\u00d5\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002",
    "\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d6\u0003\u0002\u0002",
    "\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007\u0006\u0002",
    "\u0002\u00d7\u0015\u0003\u0002\u0002\u0002\u00d8\u00df\u0007\u0011\u0002",
    "\u0002\u00d9\u00df\u0007\u0012\u0002\u0002\u00da\u00dc\u0007\u0013\u0002",
    "\u0002\u00db\u00dd\u0005\u000e\b\u0002\u00dc\u00db\u0003\u0002\u0002",
    "\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00df\u0003\u0002\u0002",
    "\u0002\u00de\u00d8\u0003\u0002\u0002\u0002\u00de\u00d9\u0003\u0002\u0002",
    "\u0002\u00de\u00da\u0003\u0002\u0002\u0002\u00df\u0017\u0003\u0002\u0002",
    "\u0002\u00e0\u00e1\u0007\u001b\u0002\u0002\u00e1\u00ea\u0007\u0007\u0002",
    "\u0002\u00e2\u00e7\u0005\u000e\b\u0002\u00e3\u00e4\u0007\b\u0002\u0002",
    "\u00e4\u00e6\u0005\u000e\b\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002",
    "\u00e6\u00e9\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002",
    "\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u00eb\u0003\u0002\u0002\u0002",
    "\u00e9\u00e7\u0003\u0002\u0002\u0002\u00ea\u00e2\u0003\u0002\u0002\u0002",
    "\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002",
    "\u00ec\u00ed\u0007\t\u0002\u0002\u00ed\u0019\u0003\u0002\u0002\u0002",
    " \u001d\"\'1@CJOTY[cf{\u0080\u0087\u008f\u0095\u009f\u00a7\u00ab\u00af",
    "\u00b6\u00bf\u00c9\u00d3\u00dc\u00de\u00e7\u00ea"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class miniCParser extends antlr4.Parser {

    static grammarFileName = "miniC.g4";
    static literalNames = [ null, "';'", "'struct'", "'{'", "'}'", "'('", 
                            "','", "')'", "'['", "']'", "'='", "'while'", 
                            "'for'", "'do'", "'if'", "'break'", "'continue'", 
                            "'return'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "Int", "Float", "Bool", "Type", 
                             "Operator", "Whitespace", "Comment", "NAME", 
                             "DIGIT" ];
    static ruleNames = [ "code", "object", "struct", "fun", "var_decl", 
                         "init", "seq", "command", "loop", "cond", "exit", 
                         "jmp" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = miniCParser.ruleNames;
        this.literalNames = miniCParser.literalNames;
        this.symbolicNames = miniCParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
    	    		return this.seq_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    seq_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	code() {
	    let localctx = new CodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, miniCParser.RULE_code);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__1) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	            this.state = 24;
	            this.object();
	            this.state = 29;
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
	}



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, miniCParser.RULE_object);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 32;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case miniCParser.Type:
	                this.state = 30;
	                this.var_decl();
	                break;
	            case miniCParser.T__1:
	                this.state = 31;
	                this.struct();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 34;
	            this.match(miniCParser.T__0);
	            break;

	        case 2:
	            this.state = 36;
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
	}



	struct() {
	    let localctx = new StructContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, miniCParser.RULE_struct);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(miniCParser.T__1);
	        this.state = 40;
	        this.match(miniCParser.NAME);
	        this.state = 41;
	        this.match(miniCParser.T__2);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===miniCParser.Type) {
	            this.state = 42;
	            this.var_decl();
	            this.state = 43;
	            this.match(miniCParser.T__0);
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
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
	}



	fun() {
	    let localctx = new FunContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, miniCParser.RULE_fun);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        _la = this._input.LA(1);
	        if(!(_la===miniCParser.Type || _la===miniCParser.NAME)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 53;
	        this.match(miniCParser.NAME);
	        this.state = 54;
	        this.match(miniCParser.T__4);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===miniCParser.Type) {
	            this.state = 55;
	            this.match(miniCParser.Type);
	            this.state = 56;
	            this.match(miniCParser.NAME);
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniCParser.T__5) {
	                this.state = 57;
	                this.match(miniCParser.T__5);
	                this.state = 58;
	                this.match(miniCParser.Type);
	                this.state = 59;
	                this.match(miniCParser.NAME);
	                this.state = 64;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 67;
	        this.match(miniCParser.T__6);
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.T__2:
	            this.state = 68;
	            this.match(miniCParser.T__2);
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 69;
	                this.command();
	                this.state = 74;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 75;
	            this.match(miniCParser.T__3);
	            break;
	        case miniCParser.T__0:
	            this.state = 76;
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
	}



	var_decl() {
	    let localctx = new Var_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, miniCParser.RULE_var_decl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(miniCParser.Type);
	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 80;
	            this.match(miniCParser.NAME);
	            break;

	        case 2:
	            this.state = 81;
	            this.init();
	            break;

	        }
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===miniCParser.T__5 || _la===miniCParser.NAME) {
	            this.state = 87;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case miniCParser.T__5:
	                this.state = 84;
	                this.match(miniCParser.T__5);
	                this.state = 85;
	                this.match(miniCParser.NAME);
	                break;
	            case miniCParser.NAME:
	                this.state = 86;
	                this.init();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 91;
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
	}



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, miniCParser.RULE_init);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(miniCParser.NAME);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===miniCParser.T__7) {
	            this.state = 93;
	            this.match(miniCParser.T__7);
	            this.state = 94;
	            this.seq(0);
	            this.state = 95;
	            this.match(miniCParser.T__8);
	        }

	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===miniCParser.Operator) {
	            this.state = 99;
	            this.match(miniCParser.Operator);
	        }

	        this.state = 102;
	        this.match(miniCParser.T__9);
	        this.state = 103;
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
	}


	seq(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new SeqContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, miniCParser.RULE_seq, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 106;
	            this.match(miniCParser.Int);
	            break;

	        case 2:
	            this.state = 107;
	            this.match(miniCParser.Float);
	            break;

	        case 3:
	            this.state = 108;
	            this.match(miniCParser.Bool);
	            break;

	        case 4:
	            this.state = 109;
	            this.match(miniCParser.NAME);
	            break;

	        case 5:
	            this.state = 110;
	            this.match(miniCParser.NAME);
	            this.state = 111;
	            this.match(miniCParser.T__7);
	            this.state = 112;
	            this.seq(0);
	            this.state = 113;
	            this.match(miniCParser.T__8);
	            break;

	        case 6:
	            this.state = 115;
	            this.match(miniCParser.T__2);
	            this.state = 116;
	            this.seq(0);
	            this.state = 121;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniCParser.T__5) {
	                this.state = 117;
	                this.match(miniCParser.T__5);
	                this.state = 118;
	                this.seq(0);
	                this.state = 123;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 124;
	            this.match(miniCParser.T__3);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 133;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SeqContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, miniCParser.RULE_seq);
	                this.state = 128;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 129;
	                this.match(miniCParser.Operator);
	                this.state = 130;
	                this.seq(2); 
	            }
	            this.state = 135;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, miniCParser.RULE_command);
	    try {
	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.T__2:
	        case miniCParser.T__14:
	        case miniCParser.T__15:
	        case miniCParser.T__16:
	        case miniCParser.Int:
	        case miniCParser.Float:
	        case miniCParser.Bool:
	        case miniCParser.Type:
	        case miniCParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 141;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 136;
	                this.seq(0);
	                break;

	            case 2:
	                this.state = 137;
	                this.var_decl();
	                break;

	            case 3:
	                this.state = 138;
	                this.init();
	                break;

	            case 4:
	                this.state = 139;
	                this.jmp();
	                break;

	            case 5:
	                this.state = 140;
	                this.exit();
	                break;

	            }
	            this.state = 143;
	            this.match(miniCParser.T__0);
	            break;
	        case miniCParser.T__13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 145;
	            this.cond();
	            break;
	        case miniCParser.T__10:
	        case miniCParser.T__11:
	        case miniCParser.T__12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 146;
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
	}



	loop() {
	    let localctx = new LoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, miniCParser.RULE_loop);
	    var _la = 0; // Token type
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.T__10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 149;
	            this.match(miniCParser.T__10);
	            this.state = 150;
	            this.match(miniCParser.T__4);
	            this.state = 151;
	            this.seq(0);
	            this.state = 152;
	            this.match(miniCParser.T__6);
	            this.state = 153;
	            this.match(miniCParser.T__2);
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 154;
	                this.command();
	                this.state = 159;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 160;
	            this.match(miniCParser.T__3);
	            break;
	        case miniCParser.T__11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 162;
	            this.match(miniCParser.T__11);
	            this.state = 163;
	            this.match(miniCParser.T__4);
	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 164;
	                this.seq(0);
	            }

	            this.state = 167;
	            this.match(miniCParser.T__0);
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 168;
	                this.seq(0);
	            }

	            this.state = 171;
	            this.match(miniCParser.T__0);
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 172;
	                this.seq(0);
	            }

	            this.state = 175;
	            this.match(miniCParser.T__6);
	            this.state = 176;
	            this.match(miniCParser.T__2);
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 177;
	                this.command();
	                this.state = 182;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 183;
	            this.match(miniCParser.T__3);
	            break;
	        case miniCParser.T__12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 184;
	            this.match(miniCParser.T__12);
	            this.state = 185;
	            this.match(miniCParser.T__2);
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 186;
	                this.command();
	                this.state = 191;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 192;
	            this.match(miniCParser.T__3);
	            this.state = 193;
	            this.match(miniCParser.T__10);
	            this.state = 194;
	            this.match(miniCParser.T__4);
	            this.state = 195;
	            this.seq(0);
	            this.state = 196;
	            this.match(miniCParser.T__6);
	            this.state = 197;
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
	}



	cond() {
	    let localctx = new CondContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, miniCParser.RULE_cond);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(miniCParser.T__13);
	        this.state = 202;
	        this.match(miniCParser.T__4);
	        this.state = 203;
	        this.seq(0);
	        this.state = 204;
	        this.match(miniCParser.T__6);
	        this.state = 205;
	        this.match(miniCParser.T__2);
	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	            this.state = 206;
	            this.command();
	            this.state = 211;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 212;
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
	}



	exit() {
	    let localctx = new ExitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, miniCParser.RULE_exit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.T__14:
	            this.state = 214;
	            this.match(miniCParser.T__14);
	            break;
	        case miniCParser.T__15:
	            this.state = 215;
	            this.match(miniCParser.T__15);
	            break;
	        case miniCParser.T__16:
	            this.state = 216;
	            this.match(miniCParser.T__16);
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 217;
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
	}



	jmp() {
	    let localctx = new JmpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, miniCParser.RULE_jmp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(miniCParser.NAME);
	        this.state = 223;
	        this.match(miniCParser.T__4);
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	            this.state = 224;
	            this.seq(0);
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniCParser.T__5) {
	                this.state = 225;
	                this.match(miniCParser.T__5);
	                this.state = 226;
	                this.seq(0);
	                this.state = 231;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 234;
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
	}


}

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
miniCParser.RULE_command = 7;
miniCParser.RULE_loop = 8;
miniCParser.RULE_cond = 9;
miniCParser.RULE_exit = 10;
miniCParser.RULE_jmp = 11;

class CodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_code;
    }

	object = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectContext);
	    } else {
	        return this.getTypedRuleContext(ObjectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterCode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitCode(this);
		}
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_object;
    }

	fun() {
	    return this.getTypedRuleContext(FunContext,0);
	};

	var_decl() {
	    return this.getTypedRuleContext(Var_declContext,0);
	};

	struct() {
	    return this.getTypedRuleContext(StructContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitObject(this);
		}
	}


}



class StructContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_struct;
    }

	NAME() {
	    return this.getToken(miniCParser.NAME, 0);
	};

	var_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Var_declContext);
	    } else {
	        return this.getTypedRuleContext(Var_declContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterStruct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitStruct(this);
		}
	}


}



class FunContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_fun;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(miniCParser.NAME);
	    } else {
	        return this.getToken(miniCParser.NAME, i);
	    }
	};


	Type = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(miniCParser.Type);
	    } else {
	        return this.getToken(miniCParser.Type, i);
	    }
	};


	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterFun(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitFun(this);
		}
	}


}



class Var_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_var_decl;
    }

	Type() {
	    return this.getToken(miniCParser.Type, 0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(miniCParser.NAME);
	    } else {
	        return this.getToken(miniCParser.NAME, i);
	    }
	};


	init = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InitContext);
	    } else {
	        return this.getTypedRuleContext(InitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterVar_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitVar_decl(this);
		}
	}


}



class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_init;
    }

	NAME() {
	    return this.getToken(miniCParser.NAME, 0);
	};

	seq = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeqContext);
	    } else {
	        return this.getTypedRuleContext(SeqContext,i);
	    }
	};

	Operator() {
	    return this.getToken(miniCParser.Operator, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitInit(this);
		}
	}


}



class SeqContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_seq;
    }

	Int() {
	    return this.getToken(miniCParser.Int, 0);
	};

	Float() {
	    return this.getToken(miniCParser.Float, 0);
	};

	Bool() {
	    return this.getToken(miniCParser.Bool, 0);
	};

	NAME() {
	    return this.getToken(miniCParser.NAME, 0);
	};

	seq = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeqContext);
	    } else {
	        return this.getTypedRuleContext(SeqContext,i);
	    }
	};

	Operator() {
	    return this.getToken(miniCParser.Operator, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterSeq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitSeq(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_command;
    }

	seq() {
	    return this.getTypedRuleContext(SeqContext,0);
	};

	var_decl() {
	    return this.getTypedRuleContext(Var_declContext,0);
	};

	init() {
	    return this.getTypedRuleContext(InitContext,0);
	};

	jmp() {
	    return this.getTypedRuleContext(JmpContext,0);
	};

	exit() {
	    return this.getTypedRuleContext(ExitContext,0);
	};

	cond() {
	    return this.getTypedRuleContext(CondContext,0);
	};

	loop() {
	    return this.getTypedRuleContext(LoopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitCommand(this);
		}
	}


}



class LoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_loop;
    }

	seq = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeqContext);
	    } else {
	        return this.getTypedRuleContext(SeqContext,i);
	    }
	};

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitLoop(this);
		}
	}


}



class CondContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_cond;
    }

	seq() {
	    return this.getTypedRuleContext(SeqContext,0);
	};

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterCond(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitCond(this);
		}
	}


}



class ExitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_exit;
    }

	seq() {
	    return this.getTypedRuleContext(SeqContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterExit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitExit(this);
		}
	}


}



class JmpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_jmp;
    }

	NAME() {
	    return this.getToken(miniCParser.NAME, 0);
	};

	seq = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeqContext);
	    } else {
	        return this.getTypedRuleContext(SeqContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterJmp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitJmp(this);
		}
	}


}




miniCParser.CodeContext = CodeContext; 
miniCParser.ObjectContext = ObjectContext; 
miniCParser.StructContext = StructContext; 
miniCParser.FunContext = FunContext; 
miniCParser.Var_declContext = Var_declContext; 
miniCParser.InitContext = InitContext; 
miniCParser.SeqContext = SeqContext; 
miniCParser.CommandContext = CommandContext; 
miniCParser.LoopContext = LoopContext; 
miniCParser.CondContext = CondContext; 
miniCParser.ExitContext = ExitContext; 
miniCParser.JmpContext = JmpContext; 
