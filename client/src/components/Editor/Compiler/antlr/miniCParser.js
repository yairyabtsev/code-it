// Generated from miniC.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import miniCListener from './miniCListener.js';
import miniCVisitor from './miniCVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003 \u00fc\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0007\u0002 \n\u0002\f\u0002\u000e\u0002#\u000b\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003+",
    "\n\u0003\f\u0003\u000e\u0003.\u000b\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0005\u00044\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004=",
    "\n\u0004\f\u0004\u000e\u0004@\u000b\u0004\u0005\u0004B\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004G\n\u0004\f\u0004\u000e\u0004",
    "J\u000b\u0004\u0003\u0004\u0003\u0004\u0005\u0004N\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005S\n\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005W\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "\\\n\u0005\u0007\u0005^\n\u0005\f\u0005\u000e\u0005a\u000b\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006l\n\u0006\f\u0006\u000e\u0006",
    "o\u000b\u0006\u0003\u0006\u0005\u0006r\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0007\u0007\u0082\n\u0007\f\u0007\u000e\u0007\u0085\u000b\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u008b\n\u0007",
    "\f\u0007\u000e\u0007\u008e\u000b\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0096\n\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u009b\n\u0007\f\u0007",
    "\u000e\u0007\u009e\u000b\u0007\u0003\b\u0003\b\u0005\b\u00a2\n\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00ab\n\b",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0005",
    "\n\u00b5\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00bb\n\n\f\n\u000e",
    "\n\u00be\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u00c5\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0007\u000b\u00cb\n\u000b\f\u000b\u000e\u000b\u00ce\u000b\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u00d2\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0007\u000b\u00d7\n\u000b\f\u000b\u000e\u000b\u00da",
    "\u000b\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00de\n\u000b\u0005",
    "\u000b\u00e0\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00e6\n",
    "\f\u0005\f\u00e8\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0007\r\u00f1\n\r\f\r\u000e\r\u00f4\u000b\r\u0005\r\u00f6\n",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0002\u0003\f",
    "\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u0002\u0002\u0002\u011b\u0002!\u0003\u0002\u0002\u0002\u0004$\u0003",
    "\u0002\u0002\u0002\u00063\u0003\u0002\u0002\u0002\bR\u0003\u0002\u0002",
    "\u0002\nd\u0003\u0002\u0002\u0002\f\u0095\u0003\u0002\u0002\u0002\u000e",
    "\u00aa\u0003\u0002\u0002\u0002\u0010\u00ac\u0003\u0002\u0002\u0002\u0012",
    "\u00b1\u0003\u0002\u0002\u0002\u0014\u00c1\u0003\u0002\u0002\u0002\u0016",
    "\u00e7\u0003\u0002\u0002\u0002\u0018\u00eb\u0003\u0002\u0002\u0002\u001a",
    "\u00f9\u0003\u0002\u0002\u0002\u001c \u0005\b\u0005\u0002\u001d \u0005",
    "\u0004\u0003\u0002\u001e \u0005\u0006\u0004\u0002\u001f\u001c\u0003",
    "\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f\u001e\u0003",
    "\u0002\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002",
    "\u0002!\"\u0003\u0002\u0002\u0002\"\u0003\u0003\u0002\u0002\u0002#!",
    "\u0003\u0002\u0002\u0002$%\u0007\u0003\u0002\u0002%&\u0005\u001a\u000e",
    "\u0002&,\u0007\u0004\u0002\u0002\'(\u0005\b\u0005\u0002()\u0007\u0005",
    "\u0002\u0002)+\u0003\u0002\u0002\u0002*\'\u0003\u0002\u0002\u0002+.",
    "\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002",
    "\u0002-/\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002/0\u0007\u0006",
    "\u0002\u00020\u0005\u0003\u0002\u0002\u000214\u0007\u001b\u0002\u0002",
    "24\u0005\u001a\u000e\u000231\u0003\u0002\u0002\u000232\u0003\u0002\u0002",
    "\u000245\u0003\u0002\u0002\u000256\u0005\u001a\u000e\u00026A\u0007\u0007",
    "\u0002\u000278\u0007\u001b\u0002\u00028>\u0005\u001a\u000e\u00029:\u0007",
    "\b\u0002\u0002:;\u0007\u001b\u0002\u0002;=\u0005\u001a\u000e\u0002<",
    "9\u0003\u0002\u0002\u0002=@\u0003\u0002\u0002\u0002><\u0003\u0002\u0002",
    "\u0002>?\u0003\u0002\u0002\u0002?B\u0003\u0002\u0002\u0002@>\u0003\u0002",
    "\u0002\u0002A7\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BC\u0003",
    "\u0002\u0002\u0002CM\u0007\t\u0002\u0002DH\u0007\u0004\u0002\u0002E",
    "G\u0005\u000e\b\u0002FE\u0003\u0002\u0002\u0002GJ\u0003\u0002\u0002",
    "\u0002HF\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IK\u0003\u0002",
    "\u0002\u0002JH\u0003\u0002\u0002\u0002KN\u0007\u0006\u0002\u0002LN\u0007",
    "\u0005\u0002\u0002MD\u0003\u0002\u0002\u0002ML\u0003\u0002\u0002\u0002",
    "N\u0007\u0003\u0002\u0002\u0002OS\u0007\u001b\u0002\u0002PS\u0005\u001a",
    "\u000e\u0002QS\u0005\u0010\t\u0002RO\u0003\u0002\u0002\u0002RP\u0003",
    "\u0002\u0002\u0002RQ\u0003\u0002\u0002\u0002SV\u0003\u0002\u0002\u0002",
    "TW\u0005\u001a\u000e\u0002UW\u0005\n\u0006\u0002VT\u0003\u0002\u0002",
    "\u0002VU\u0003\u0002\u0002\u0002W_\u0003\u0002\u0002\u0002X[\u0007\b",
    "\u0002\u0002Y\\\u0005\u001a\u000e\u0002Z\\\u0005\n\u0006\u0002[Y\u0003",
    "\u0002\u0002\u0002[Z\u0003\u0002\u0002\u0002\\^\u0003\u0002\u0002\u0002",
    "]X\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002",
    "\u0002_`\u0003\u0002\u0002\u0002`b\u0003\u0002\u0002\u0002a_\u0003\u0002",
    "\u0002\u0002bc\u0007\u0005\u0002\u0002c\t\u0003\u0002\u0002\u0002dm",
    "\u0005\u001a\u000e\u0002ef\u0007\n\u0002\u0002fg\u0005\f\u0007\u0002",
    "gh\u0007\u000b\u0002\u0002hl\u0003\u0002\u0002\u0002ij\u0007\f\u0002",
    "\u0002jl\u0005\u001a\u000e\u0002ke\u0003\u0002\u0002\u0002ki\u0003\u0002",
    "\u0002\u0002lo\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002mn\u0003",
    "\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002",
    "pr\u0007\u001c\u0002\u0002qp\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002",
    "\u0002rs\u0003\u0002\u0002\u0002st\u0007\r\u0002\u0002tu\u0005\f\u0007",
    "\u0002u\u000b\u0003\u0002\u0002\u0002vw\b\u0007\u0001\u0002w\u0096\u0007",
    "\u0018\u0002\u0002x\u0096\u0007\u0019\u0002\u0002y\u0096\u0007\u001a",
    "\u0002\u0002z\u0083\u0005\u001a\u000e\u0002{|\u0007\n\u0002\u0002|}",
    "\u0005\f\u0007\u0002}~\u0007\u000b\u0002\u0002~\u0082\u0003\u0002\u0002",
    "\u0002\u007f\u0080\u0007\f\u0002\u0002\u0080\u0082\u0005\u001a\u000e",
    "\u0002\u0081{\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002",
    "\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002",
    "\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0096\u0003\u0002\u0002",
    "\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0086\u0087\u0007\u0004\u0002",
    "\u0002\u0087\u008c\u0005\f\u0007\u0002\u0088\u0089\u0007\b\u0002\u0002",
    "\u0089\u008b\u0005\f\u0007\u0002\u008a\u0088\u0003\u0002\u0002\u0002",
    "\u008b\u008e\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008f\u0003\u0002\u0002\u0002",
    "\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0090\u0007\u0006\u0002\u0002",
    "\u0090\u0096\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u0007\u0002\u0002",
    "\u0092\u0093\u0005\f\u0007\u0002\u0093\u0094\u0007\t\u0002\u0002\u0094",
    "\u0096\u0003\u0002\u0002\u0002\u0095v\u0003\u0002\u0002\u0002\u0095",
    "x\u0003\u0002\u0002\u0002\u0095y\u0003\u0002\u0002\u0002\u0095z\u0003",
    "\u0002\u0002\u0002\u0095\u0086\u0003\u0002\u0002\u0002\u0095\u0091\u0003",
    "\u0002\u0002\u0002\u0096\u009c\u0003\u0002\u0002\u0002\u0097\u0098\f",
    "\u0003\u0002\u0002\u0098\u0099\u0007\u001c\u0002\u0002\u0099\u009b\u0005",
    "\f\u0007\u0004\u009a\u0097\u0003\u0002\u0002\u0002\u009b\u009e\u0003",
    "\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003",
    "\u0002\u0002\u0002\u009d\r\u0003\u0002\u0002\u0002\u009e\u009c\u0003",
    "\u0002\u0002\u0002\u009f\u00a2\u0005\f\u0007\u0002\u00a0\u00a2\u0005",
    "\n\u0006\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a1\u00a0\u0003",
    "\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007",
    "\u0005\u0002\u0002\u00a4\u00ab\u0003\u0002\u0002\u0002\u00a5\u00ab\u0005",
    "\b\u0005\u0002\u00a6\u00ab\u0005\u0018\r\u0002\u00a7\u00ab\u0005\u0016",
    "\f\u0002\u00a8\u00ab\u0005\u0014\u000b\u0002\u00a9\u00ab\u0005\u0012",
    "\n\u0002\u00aa\u00a1\u0003\u0002\u0002\u0002\u00aa\u00a5\u0003\u0002",
    "\u0002\u0002\u00aa\u00a6\u0003\u0002\u0002\u0002\u00aa\u00a7\u0003\u0002",
    "\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00a9\u0003\u0002",
    "\u0002\u0002\u00ab\u000f\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\u000e",
    "\u0002\u0002\u00ad\u00ae\u0007\u000f\u0002\u0002\u00ae\u00af\u0007\u001b",
    "\u0002\u0002\u00af\u00b0\u0007\u0010\u0002\u0002\u00b0\u0011\u0003\u0002",
    "\u0002\u0002\u00b1\u00b2\u0007\u0011\u0002\u0002\u00b2\u00b4\u0007\u0007",
    "\u0002\u0002\u00b3\u00b5\u0007\u001c\u0002\u0002\u00b4\u00b3\u0003\u0002",
    "\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002",
    "\u0002\u0002\u00b6\u00b7\u0005\f\u0007\u0002\u00b7\u00b8\u0007\t\u0002",
    "\u0002\u00b8\u00bc\u0007\u0004\u0002\u0002\u00b9\u00bb\u0005\u000e\b",
    "\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00bb\u00be\u0003\u0002\u0002",
    "\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002",
    "\u0002\u00bd\u00bf\u0003\u0002\u0002\u0002\u00be\u00bc\u0003\u0002\u0002",
    "\u0002\u00bf\u00c0\u0007\u0006\u0002\u0002\u00c0\u0013\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u0007\u0012\u0002\u0002\u00c2\u00c4\u0007\u0007\u0002",
    "\u0002\u00c3\u00c5\u0007\u001c\u0002\u0002\u00c4\u00c3\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002",
    "\u0002\u00c6\u00c7\u0005\f\u0007\u0002\u00c7\u00d1\u0007\t\u0002\u0002",
    "\u00c8\u00cc\u0007\u0004\u0002\u0002\u00c9\u00cb\u0005\u000e\b\u0002",
    "\u00ca\u00c9\u0003\u0002\u0002\u0002\u00cb\u00ce\u0003\u0002\u0002\u0002",
    "\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002",
    "\u00cd\u00cf\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002",
    "\u00cf\u00d2\u0007\u0006\u0002\u0002\u00d0\u00d2\u0005\u000e\b\u0002",
    "\u00d1\u00c8\u0003\u0002\u0002\u0002\u00d1\u00d0\u0003\u0002\u0002\u0002",
    "\u00d2\u00df\u0003\u0002\u0002\u0002\u00d3\u00dd\u0007\u0013\u0002\u0002",
    "\u00d4\u00d8\u0007\u0004\u0002\u0002\u00d5\u00d7\u0005\u000e\b\u0002",
    "\u00d6\u00d5\u0003\u0002\u0002\u0002\u00d7\u00da\u0003\u0002\u0002\u0002",
    "\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002",
    "\u00d9\u00db\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002",
    "\u00db\u00de\u0007\u0006\u0002\u0002\u00dc\u00de\u0005\u000e\b\u0002",
    "\u00dd\u00d4\u0003\u0002\u0002\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002",
    "\u00de\u00e0\u0003\u0002\u0002\u0002\u00df\u00d3\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u0015\u0003\u0002\u0002\u0002",
    "\u00e1\u00e8\u0007\u0014\u0002\u0002\u00e2\u00e8\u0007\u0015\u0002\u0002",
    "\u00e3\u00e5\u0007\u0016\u0002\u0002\u00e4\u00e6\u0005\f\u0007\u0002",
    "\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002",
    "\u00e6\u00e8\u0003\u0002\u0002\u0002\u00e7\u00e1\u0003\u0002\u0002\u0002",
    "\u00e7\u00e2\u0003\u0002\u0002\u0002\u00e7\u00e3\u0003\u0002\u0002\u0002",
    "\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9\u00ea\u0007\u0005\u0002\u0002",
    "\u00ea\u0017\u0003\u0002\u0002\u0002\u00eb\u00ec\u0005\u001a\u000e\u0002",
    "\u00ec\u00f5\u0007\u0007\u0002\u0002\u00ed\u00f2\u0005\f\u0007\u0002",
    "\u00ee\u00ef\u0007\b\u0002\u0002\u00ef\u00f1\u0005\f\u0007\u0002\u00f0",
    "\u00ee\u0003\u0002\u0002\u0002\u00f1\u00f4\u0003\u0002\u0002\u0002\u00f2",
    "\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3",
    "\u00f6\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003\u0002\u0002\u0002\u00f5",
    "\u00ed\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6",
    "\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007\u0017\u0002\u0002\u00f8",
    "\u0019\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007\u001f\u0002\u0002\u00fa",
    "\u001b\u0003\u0002\u0002\u0002$\u001f!,3>AHMRV[_kmq\u0081\u0083\u008c",
    "\u0095\u009c\u00a1\u00aa\u00b4\u00bc\u00c4\u00cc\u00d1\u00d8\u00dd\u00df",
    "\u00e5\u00e7\u00f2\u00f5"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class miniCParser extends antlr4.Parser {

    static grammarFileName = "miniC.g4";
    static literalNames = [ null, "'struct'", "'{'", "';'", "'}'", "'('", 
                            "','", "')'", "'['", "']'", "'.'", "'='", "'Array'", 
                            "'<'", "'>'", "'while'", "'if'", "'else'", "'break'", 
                            "'continue'", "'return'", "');'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "Int", 
                             "Float", "Bool", "Type", "Operator", "Whitespace", 
                             "Comment", "NAME", "DIGIT" ];
    static ruleNames = [ "code", "struct", "fun", "var_decl", "init", "seq", 
                         "command", "array", "loop", "cond", "exit", "jmp", 
                         "name" ];

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
    	case 5:
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
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__0) | (1 << miniCParser.T__11) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	            this.state = 29;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 26;
	                this.var_decl();
	                break;

	            case 2:
	                this.state = 27;
	                this.struct();
	                break;

	            case 3:
	                this.state = 28;
	                this.fun();
	                break;

	            }
	            this.state = 33;
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



	struct() {
	    let localctx = new StructContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, miniCParser.RULE_struct);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(miniCParser.T__0);
	        this.state = 35;
	        this.name();
	        this.state = 36;
	        this.match(miniCParser.T__1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__11) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	            this.state = 37;
	            this.var_decl();
	            this.state = 38;
	            this.match(miniCParser.T__2);
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
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
	    this.enterRule(localctx, 4, miniCParser.RULE_fun);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.Type:
	            this.state = 47;
	            this.match(miniCParser.Type);
	            break;
	        case miniCParser.NAME:
	            this.state = 48;
	            this.name();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 51;
	        this.name();
	        this.state = 52;
	        this.match(miniCParser.T__4);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===miniCParser.Type) {
	            this.state = 53;
	            this.match(miniCParser.Type);
	            this.state = 54;
	            this.name();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniCParser.T__5) {
	                this.state = 55;
	                this.match(miniCParser.T__5);
	                this.state = 56;
	                this.match(miniCParser.Type);
	                this.state = 57;
	                this.name();
	                this.state = 62;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 65;
	        this.match(miniCParser.T__6);
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.T__1:
	            this.state = 66;
	            this.match(miniCParser.T__1);
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__1) | (1 << miniCParser.T__4) | (1 << miniCParser.T__11) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__17) | (1 << miniCParser.T__18) | (1 << miniCParser.T__19) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 67;
	                this.command();
	                this.state = 72;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 73;
	            this.match(miniCParser.T__3);
	            break;
	        case miniCParser.T__2:
	            this.state = 74;
	            this.match(miniCParser.T__2);
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
	    this.enterRule(localctx, 6, miniCParser.RULE_var_decl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.Type:
	            this.state = 77;
	            this.match(miniCParser.Type);
	            break;
	        case miniCParser.NAME:
	            this.state = 78;
	            this.name();
	            break;
	        case miniCParser.T__11:
	            this.state = 79;
	            this.array();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 84;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 82;
	            this.name();
	            break;

	        case 2:
	            this.state = 83;
	            this.init();
	            break;

	        }
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===miniCParser.T__5) {
	            this.state = 86;
	            this.match(miniCParser.T__5);
	            this.state = 89;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 87;
	                this.name();
	                break;

	            case 2:
	                this.state = 88;
	                this.init();
	                break;

	            }
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 96;
	        this.match(miniCParser.T__2);
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
	    this.enterRule(localctx, 8, miniCParser.RULE_init);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.name();
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===miniCParser.T__7 || _la===miniCParser.T__9) {
	            this.state = 105;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case miniCParser.T__7:
	                this.state = 99;
	                this.match(miniCParser.T__7);
	                this.state = 100;
	                this.seq(0);
	                this.state = 101;
	                this.match(miniCParser.T__8);
	                break;
	            case miniCParser.T__9:
	                this.state = 103;
	                this.match(miniCParser.T__9);
	                this.state = 104;
	                this.name();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===miniCParser.Operator) {
	            this.state = 110;
	            this.match(miniCParser.Operator);
	        }

	        this.state = 113;
	        this.match(miniCParser.T__10);
	        this.state = 114;
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
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, miniCParser.RULE_seq, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.Int:
	            this.state = 117;
	            this.match(miniCParser.Int);
	            break;
	        case miniCParser.Float:
	            this.state = 118;
	            this.match(miniCParser.Float);
	            break;
	        case miniCParser.Bool:
	            this.state = 119;
	            this.match(miniCParser.Bool);
	            break;
	        case miniCParser.NAME:
	            this.state = 120;
	            this.name();
	            this.state = 129;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 127;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case miniCParser.T__7:
	                        this.state = 121;
	                        this.match(miniCParser.T__7);
	                        this.state = 122;
	                        this.seq(0);
	                        this.state = 123;
	                        this.match(miniCParser.T__8);
	                        break;
	                    case miniCParser.T__9:
	                        this.state = 125;
	                        this.match(miniCParser.T__9);
	                        this.state = 126;
	                        this.name();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 131;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	            }

	            break;
	        case miniCParser.T__1:
	            this.state = 132;
	            this.match(miniCParser.T__1);
	            this.state = 133;
	            this.seq(0);
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniCParser.T__5) {
	                this.state = 134;
	                this.match(miniCParser.T__5);
	                this.state = 135;
	                this.seq(0);
	                this.state = 140;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 141;
	            this.match(miniCParser.T__3);
	            break;
	        case miniCParser.T__4:
	            this.state = 143;
	            this.match(miniCParser.T__4);
	            this.state = 144;
	            this.seq(0);
	            this.state = 145;
	            this.match(miniCParser.T__6);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 154;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SeqContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, miniCParser.RULE_seq);
	                this.state = 149;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 150;
	                this.match(miniCParser.Operator);
	                this.state = 151;
	                this.seq(2); 
	            }
	            this.state = 156;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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
	    this.enterRule(localctx, 12, miniCParser.RULE_command);
	    try {
	        this.state = 168;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 157;
	                this.seq(0);
	                break;

	            case 2:
	                this.state = 158;
	                this.init();
	                break;

	            }
	            this.state = 161;
	            this.match(miniCParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.var_decl();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 164;
	            this.jmp();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 165;
	            this.exit();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 166;
	            this.cond();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 167;
	            this.loop();
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, miniCParser.RULE_array);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(miniCParser.T__11);
	        this.state = 171;
	        this.match(miniCParser.T__12);
	        this.state = 172;
	        this.match(miniCParser.Type);
	        this.state = 173;
	        this.match(miniCParser.T__13);
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(miniCParser.T__14);
	        this.state = 176;
	        this.match(miniCParser.T__4);
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===miniCParser.Operator) {
	            this.state = 177;
	            this.match(miniCParser.Operator);
	        }

	        this.state = 180;
	        this.seq(0);
	        this.state = 181;
	        this.match(miniCParser.T__6);
	        this.state = 182;
	        this.match(miniCParser.T__1);
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__1) | (1 << miniCParser.T__4) | (1 << miniCParser.T__11) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__17) | (1 << miniCParser.T__18) | (1 << miniCParser.T__19) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	            this.state = 183;
	            this.command();
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 189;
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



	cond() {
	    let localctx = new CondContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, miniCParser.RULE_cond);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(miniCParser.T__15);
	        this.state = 192;
	        this.match(miniCParser.T__4);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===miniCParser.Operator) {
	            this.state = 193;
	            this.match(miniCParser.Operator);
	        }

	        this.state = 196;
	        this.seq(0);
	        this.state = 197;
	        this.match(miniCParser.T__6);
	        this.state = 207;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 198;
	            this.match(miniCParser.T__1);
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__1) | (1 << miniCParser.T__4) | (1 << miniCParser.T__11) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__17) | (1 << miniCParser.T__18) | (1 << miniCParser.T__19) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 199;
	                this.command();
	                this.state = 204;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 205;
	            this.match(miniCParser.T__3);
	            break;

	        case 2:
	            this.state = 206;
	            this.command();
	            break;

	        }
	        this.state = 221;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        if(la_===1) {
	            this.state = 209;
	            this.match(miniCParser.T__16);
	            this.state = 219;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 210;
	                this.match(miniCParser.T__1);
	                this.state = 214;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__1) | (1 << miniCParser.T__4) | (1 << miniCParser.T__11) | (1 << miniCParser.T__14) | (1 << miniCParser.T__15) | (1 << miniCParser.T__17) | (1 << miniCParser.T__18) | (1 << miniCParser.T__19) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                    this.state = 211;
	                    this.command();
	                    this.state = 216;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 217;
	                this.match(miniCParser.T__3);
	                break;

	            case 2:
	                this.state = 218;
	                this.command();
	                break;

	            }

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



	exit() {
	    let localctx = new ExitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, miniCParser.RULE_exit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.T__17:
	            this.state = 223;
	            this.match(miniCParser.T__17);
	            break;
	        case miniCParser.T__18:
	            this.state = 224;
	            this.match(miniCParser.T__18);
	            break;
	        case miniCParser.T__19:
	            this.state = 225;
	            this.match(miniCParser.T__19);
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__1) | (1 << miniCParser.T__4) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 226;
	                this.seq(0);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 231;
	        this.match(miniCParser.T__2);
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
	        this.state = 233;
	        this.name();
	        this.state = 234;
	        this.match(miniCParser.T__4);
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__1) | (1 << miniCParser.T__4) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	            this.state = 235;
	            this.seq(0);
	            this.state = 240;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniCParser.T__5) {
	                this.state = 236;
	                this.match(miniCParser.T__5);
	                this.state = 237;
	                this.seq(0);
	                this.state = 242;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 245;
	        this.match(miniCParser.T__20);
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, miniCParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(miniCParser.NAME);
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
miniCParser.T__17 = 18;
miniCParser.T__18 = 19;
miniCParser.T__19 = 20;
miniCParser.T__20 = 21;
miniCParser.Int = 22;
miniCParser.Float = 23;
miniCParser.Bool = 24;
miniCParser.Type = 25;
miniCParser.Operator = 26;
miniCParser.Whitespace = 27;
miniCParser.Comment = 28;
miniCParser.NAME = 29;
miniCParser.DIGIT = 30;

miniCParser.RULE_code = 0;
miniCParser.RULE_struct = 1;
miniCParser.RULE_fun = 2;
miniCParser.RULE_var_decl = 3;
miniCParser.RULE_init = 4;
miniCParser.RULE_seq = 5;
miniCParser.RULE_command = 6;
miniCParser.RULE_array = 7;
miniCParser.RULE_loop = 8;
miniCParser.RULE_cond = 9;
miniCParser.RULE_exit = 10;
miniCParser.RULE_jmp = 11;
miniCParser.RULE_name = 12;

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

	struct = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StructContext);
	    } else {
	        return this.getTypedRuleContext(StructContext,i);
	    }
	};

	fun = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunContext);
	    } else {
	        return this.getTypedRuleContext(FunContext,i);
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitCode(this);
	    } else {
	        return visitor.visitChildren(this);
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

	name() {
	    return this.getTypedRuleContext(NameContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitStruct(this);
	    } else {
	        return visitor.visitChildren(this);
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

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitFun(this);
	    } else {
	        return visitor.visitChildren(this);
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

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitVar_decl(this);
	    } else {
	        return visitor.visitChildren(this);
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

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitInit(this);
	    } else {
	        return visitor.visitChildren(this);
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

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitSeq(this);
	    } else {
	        return visitor.visitChildren(this);
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

	init() {
	    return this.getTypedRuleContext(InitContext,0);
	};

	var_decl() {
	    return this.getTypedRuleContext(Var_declContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_array;
    }

	Type() {
	    return this.getToken(miniCParser.Type, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
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

	seq() {
	    return this.getTypedRuleContext(SeqContext,0);
	};

	Operator() {
	    return this.getToken(miniCParser.Operator, 0);
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitLoop(this);
	    } else {
	        return visitor.visitChildren(this);
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

	Operator() {
	    return this.getToken(miniCParser.Operator, 0);
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitCond(this);
	    } else {
	        return visitor.visitChildren(this);
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitExit(this);
	    } else {
	        return visitor.visitChildren(this);
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

	name() {
	    return this.getTypedRuleContext(NameContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitJmp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniCParser.RULE_name;
    }

	NAME() {
	    return this.getToken(miniCParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniCListener ) {
	        listener.exitName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




miniCParser.CodeContext = CodeContext; 
miniCParser.StructContext = StructContext; 
miniCParser.FunContext = FunContext; 
miniCParser.Var_declContext = Var_declContext; 
miniCParser.InitContext = InitContext; 
miniCParser.SeqContext = SeqContext; 
miniCParser.CommandContext = CommandContext; 
miniCParser.ArrayContext = ArrayContext; 
miniCParser.LoopContext = LoopContext; 
miniCParser.CondContext = CondContext; 
miniCParser.ExitContext = ExitContext; 
miniCParser.JmpContext = JmpContext; 
miniCParser.NameContext = NameContext; 
