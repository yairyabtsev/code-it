// Generated from miniC.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import miniCListener from './miniCListener.js';
import miniCVisitor from './miniCVisitor.js';




const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001d\u0109\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0007\u0002\u001c\n\u0002\f\u0002\u000e",
    "\u0002\u001f\u000b\u0002\u0003\u0003\u0003\u0003\u0005\u0003#\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "*\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u00042\n\u0004\f\u0004\u000e\u00045\u000b\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005D\n\u0005\f\u0005\u000e\u0005G\u000b\u0005\u0005\u0005",
    "I\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0007\u0005P\n\u0005\f\u0005\u000e\u0005S\u000b\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006[",
    "\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006`\n\u0006\f",
    "\u0006\u000e\u0006c\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007j\n\u0007\u0003\u0007\u0005\u0007",
    "m\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0007\b\u0080\n\b\f\b\u000e\b\u0083\u000b\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u008b\n\b\u0003\b",
    "\u0003\b\u0003\b\u0007\b\u0090\n\b\f\b\u000e\b\u0093\u000b\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u009a\n\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u00a0\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0007\n\u00a8\n\n\f\n\u000e\n\u00ab\u000b\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0005\n\u00b2\n\n\u0003\n\u0003\n\u0005\n\u00b6",
    "\n\n\u0003\n\u0003\n\u0005\n\u00ba\n\n\u0003\n\u0003\n\u0003\n\u0007",
    "\n\u00bf\n\n\f\n\u000e\n\u00c2\u000b\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0007\n\u00c8\n\n\f\n\u000e\n\u00cb\u000b\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00d4\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00dc",
    "\n\u000b\f\u000b\u000e\u000b\u00df\u000b\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u00e3\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007",
    "\u000b\u00e8\n\u000b\f\u000b\u000e\u000b\u00eb\u000b\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u00ef\n\u000b\u0005\u000b\u00f1\n\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\f\u00f7\n\f\u0005\f\u00f9\n\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u0100\n\r\f\r\u000e\r\u0103",
    "\u000b\r\u0005\r\u0105\n\r\u0003\r\u0003\r\u0003\r\u0002\u0003\u000e",
    "\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002",
    "\u0003\u0004\u0002\u0018\u0018\u001c\u001c\u0002\u0128\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0004)\u0003\u0002\u0002\u0002\u0006+\u0003\u0002",
    "\u0002\u0002\b8\u0003\u0002\u0002\u0002\nW\u0003\u0002\u0002\u0002\f",
    "d\u0003\u0002\u0002\u0002\u000e\u008a\u0003\u0002\u0002\u0002\u0010",
    "\u009f\u0003\u0002\u0002\u0002\u0012\u00d3\u0003\u0002\u0002\u0002\u0014",
    "\u00d5\u0003\u0002\u0002\u0002\u0016\u00f8\u0003\u0002\u0002\u0002\u0018",
    "\u00fa\u0003\u0002\u0002\u0002\u001a\u001c\u0005\u0004\u0003\u0002\u001b",
    "\u001a\u0003\u0002\u0002\u0002\u001c\u001f\u0003\u0002\u0002\u0002\u001d",
    "\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e",
    "\u0003\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002 ",
    "#\u0005\n\u0006\u0002!#\u0005\u0006\u0004\u0002\" \u0003\u0002\u0002",
    "\u0002\"!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$%\u0007",
    "\u0003\u0002\u0002%*\u0003\u0002\u0002\u0002&\'\u0005\b\u0005\u0002",
    "\'(\b\u0003\u0001\u0002(*\u0003\u0002\u0002\u0002)\"\u0003\u0002\u0002",
    "\u0002)&\u0003\u0002\u0002\u0002*\u0005\u0003\u0002\u0002\u0002+,\u0007",
    "\u0004\u0002\u0002,-\u0007\u001c\u0002\u0002-3\u0007\u0005\u0002\u0002",
    "./\u0005\n\u0006\u0002/0\u0007\u0003\u0002\u000202\u0003\u0002\u0002",
    "\u00021.\u0003\u0002\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002",
    "\u0002\u000234\u0003\u0002\u0002\u000246\u0003\u0002\u0002\u000253\u0003",
    "\u0002\u0002\u000267\u0007\u0006\u0002\u00027\u0007\u0003\u0002\u0002",
    "\u000289\t\u0002\u0002\u00029:\b\u0005\u0001\u0002:;\u0007\u001c\u0002",
    "\u0002;<\b\u0005\u0001\u0002<=\u0007\u0007\u0002\u0002=H\b\u0005\u0001",
    "\u0002>?\u0007\u0018\u0002\u0002?E\u0007\u001c\u0002\u0002@A\u0007\b",
    "\u0002\u0002AB\u0007\u0018\u0002\u0002BD\u0007\u001c\u0002\u0002C@\u0003",
    "\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002",
    "EF\u0003\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002",
    "\u0002H>\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IJ\u0003\u0002",
    "\u0002\u0002JK\u0007\t\u0002\u0002KL\b\u0005\u0001\u0002LM\u0007\u0005",
    "\u0002\u0002MQ\b\u0005\u0001\u0002NP\u0005\u0010\t\u0002ON\u0003\u0002",
    "\u0002\u0002PS\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003",
    "\u0002\u0002\u0002RT\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002",
    "TU\u0007\u0006\u0002\u0002UV\b\u0005\u0001\u0002V\t\u0003\u0002\u0002",
    "\u0002WZ\u0007\u0018\u0002\u0002X[\u0007\u001c\u0002\u0002Y[\u0005\f",
    "\u0007\u0002ZX\u0003\u0002\u0002\u0002ZY\u0003\u0002\u0002\u0002[a\u0003",
    "\u0002\u0002\u0002\\]\u0007\b\u0002\u0002]`\u0007\u001c\u0002\u0002",
    "^`\u0005\f\u0007\u0002_\\\u0003\u0002\u0002\u0002_^\u0003\u0002\u0002",
    "\u0002`c\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002ab\u0003\u0002",
    "\u0002\u0002b\u000b\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002",
    "di\u0007\u001c\u0002\u0002ef\u0007\n\u0002\u0002fg\u0005\u000e\b\u0002",
    "gh\u0007\u000b\u0002\u0002hj\u0003\u0002\u0002\u0002ie\u0003\u0002\u0002",
    "\u0002ij\u0003\u0002\u0002\u0002jl\u0003\u0002\u0002\u0002km\u0007\u0019",
    "\u0002\u0002lk\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0003",
    "\u0002\u0002\u0002no\u0007\f\u0002\u0002op\u0005\u000e\b\u0002p\r\u0003",
    "\u0002\u0002\u0002qr\b\b\u0001\u0002r\u008b\u0007\u0015\u0002\u0002",
    "s\u008b\u0007\u0016\u0002\u0002t\u008b\u0007\u0017\u0002\u0002u\u008b",
    "\u0007\u001c\u0002\u0002vw\u0007\u001c\u0002\u0002wx\u0007\n\u0002\u0002",
    "xy\u0005\u000e\b\u0002yz\u0007\u000b\u0002\u0002z\u008b\u0003\u0002",
    "\u0002\u0002{|\u0007\u0005\u0002\u0002|\u0081\u0005\u000e\b\u0002}~",
    "\u0007\b\u0002\u0002~\u0080\u0005\u000e\b\u0002\u007f}\u0003\u0002\u0002",
    "\u0002\u0080\u0083\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0084\u0003\u0002\u0002",
    "\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u0006\u0002",
    "\u0002\u0085\u008b\u0003\u0002\u0002\u0002\u0086\u0087\u0007\u0007\u0002",
    "\u0002\u0087\u0088\u0005\u000e\b\u0002\u0088\u0089\u0007\t\u0002\u0002",
    "\u0089\u008b\u0003\u0002\u0002\u0002\u008aq\u0003\u0002\u0002\u0002",
    "\u008as\u0003\u0002\u0002\u0002\u008at\u0003\u0002\u0002\u0002\u008a",
    "u\u0003\u0002\u0002\u0002\u008av\u0003\u0002\u0002\u0002\u008a{\u0003",
    "\u0002\u0002\u0002\u008a\u0086\u0003\u0002\u0002\u0002\u008b\u0091\u0003",
    "\u0002\u0002\u0002\u008c\u008d\f\u0003\u0002\u0002\u008d\u008e\u0007",
    "\u0019\u0002\u0002\u008e\u0090\u0005\u000e\b\u0004\u008f\u008c\u0003",
    "\u0002\u0002\u0002\u0090\u0093\u0003\u0002\u0002\u0002\u0091\u008f\u0003",
    "\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u000f\u0003",
    "\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u009a\u0005",
    "\u000e\b\u0002\u0095\u009a\u0005\n\u0006\u0002\u0096\u009a\u0005\f\u0007",
    "\u0002\u0097\u009a\u0005\u0018\r\u0002\u0098\u009a\u0005\u0016\f\u0002",
    "\u0099\u0094\u0003\u0002\u0002\u0002\u0099\u0095\u0003\u0002\u0002\u0002",
    "\u0099\u0096\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002",
    "\u0099\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002",
    "\u009b\u009c\u0007\u0003\u0002\u0002\u009c\u00a0\u0003\u0002\u0002\u0002",
    "\u009d\u00a0\u0005\u0014\u000b\u0002\u009e\u00a0\u0005\u0012\n\u0002",
    "\u009f\u0099\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002",
    "\u009f\u009e\u0003\u0002\u0002\u0002\u00a0\u0011\u0003\u0002\u0002\u0002",
    "\u00a1\u00a2\u0007\r\u0002\u0002\u00a2\u00a3\u0007\u0007\u0002\u0002",
    "\u00a3\u00a4\u0005\u000e\b\u0002\u00a4\u00a5\u0007\t\u0002\u0002\u00a5",
    "\u00a9\u0007\u0005\u0002\u0002\u00a6\u00a8\u0005\u0010\t\u0002\u00a7",
    "\u00a6\u0003\u0002\u0002\u0002\u00a8\u00ab\u0003\u0002\u0002\u0002\u00a9",
    "\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa",
    "\u00ac\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ac",
    "\u00ad\u0007\u0006\u0002\u0002\u00ad\u00d4\u0003\u0002\u0002\u0002\u00ae",
    "\u00af\u0007\u000e\u0002\u0002\u00af\u00b1\u0007\u0007\u0002\u0002\u00b0",
    "\u00b2\u0005\u000e\b\u0002\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b1",
    "\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3",
    "\u00b5\u0007\u0003\u0002\u0002\u00b4\u00b6\u0005\u000e\b\u0002\u00b5",
    "\u00b4\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6",
    "\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b9\u0007\u0003\u0002\u0002\u00b8",
    "\u00ba\u0005\u000e\b\u0002\u00b9\u00b8\u0003\u0002\u0002\u0002\u00b9",
    "\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb",
    "\u00bc\u0007\t\u0002\u0002\u00bc\u00c0\u0007\u0005\u0002\u0002\u00bd",
    "\u00bf\u0005\u0010\t\u0002\u00be\u00bd\u0003\u0002\u0002\u0002\u00bf",
    "\u00c2\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0",
    "\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c3\u0003\u0002\u0002\u0002\u00c2",
    "\u00c0\u0003\u0002\u0002\u0002\u00c3\u00d4\u0007\u0006\u0002\u0002\u00c4",
    "\u00c5\u0007\u000f\u0002\u0002\u00c5\u00c9\u0007\u0005\u0002\u0002\u00c6",
    "\u00c8\u0005\u0010\t\u0002\u00c7\u00c6\u0003\u0002\u0002\u0002\u00c8",
    "\u00cb\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9",
    "\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cc\u0003\u0002\u0002\u0002\u00cb",
    "\u00c9\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007\u0006\u0002\u0002\u00cd",
    "\u00ce\u0007\r\u0002\u0002\u00ce\u00cf\u0007\u0007\u0002\u0002\u00cf",
    "\u00d0\u0005\u000e\b\u0002\u00d0\u00d1\u0007\t\u0002\u0002\u00d1\u00d2",
    "\u0007\u0003\u0002\u0002\u00d2\u00d4\u0003\u0002\u0002\u0002\u00d3\u00a1",
    "\u0003\u0002\u0002\u0002\u00d3\u00ae\u0003\u0002\u0002\u0002\u00d3\u00c4",
    "\u0003\u0002\u0002\u0002\u00d4\u0013\u0003\u0002\u0002\u0002\u00d5\u00d6",
    "\u0007\u0010\u0002\u0002\u00d6\u00d7\u0007\u0007\u0002\u0002\u00d7\u00d8",
    "\u0005\u000e\b\u0002\u00d8\u00e2\u0007\t\u0002\u0002\u00d9\u00dd\u0007",
    "\u0005\u0002\u0002\u00da\u00dc\u0005\u0010\t\u0002\u00db\u00da\u0003",
    "\u0002\u0002\u0002\u00dc\u00df\u0003\u0002\u0002\u0002\u00dd\u00db\u0003",
    "\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00e0\u0003",
    "\u0002\u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00e0\u00e3\u0007",
    "\u0006\u0002\u0002\u00e1\u00e3\u0005\u0010\t\u0002\u00e2\u00d9\u0003",
    "\u0002\u0002\u0002\u00e2\u00e1\u0003\u0002\u0002\u0002\u00e3\u00f0\u0003",
    "\u0002\u0002\u0002\u00e4\u00ee\u0007\u0011\u0002\u0002\u00e5\u00e9\u0007",
    "\u0005\u0002\u0002\u00e6\u00e8\u0005\u0010\t\u0002\u00e7\u00e6\u0003",
    "\u0002\u0002\u0002\u00e8\u00eb\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003",
    "\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\u00ec\u0003",
    "\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00ec\u00ef\u0007",
    "\u0006\u0002\u0002\u00ed\u00ef\u0005\u0010\t\u0002\u00ee\u00e5\u0003",
    "\u0002\u0002\u0002\u00ee\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f1\u0003",
    "\u0002\u0002\u0002\u00f0\u00e4\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003",
    "\u0002\u0002\u0002\u00f1\u0015\u0003\u0002\u0002\u0002\u00f2\u00f9\u0007",
    "\u0012\u0002\u0002\u00f3\u00f9\u0007\u0013\u0002\u0002\u00f4\u00f6\u0007",
    "\u0014\u0002\u0002\u00f5\u00f7\u0005\u000e\b\u0002\u00f6\u00f5\u0003",
    "\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f9\u0003",
    "\u0002\u0002\u0002\u00f8\u00f2\u0003\u0002\u0002\u0002\u00f8\u00f3\u0003",
    "\u0002\u0002\u0002\u00f8\u00f4\u0003\u0002\u0002\u0002\u00f9\u0017\u0003",
    "\u0002\u0002\u0002\u00fa\u00fb\u0007\u001c\u0002\u0002\u00fb\u0104\u0007",
    "\u0007\u0002\u0002\u00fc\u0101\u0005\u000e\b\u0002\u00fd\u00fe\u0007",
    "\b\u0002\u0002\u00fe\u0100\u0005\u000e\b\u0002\u00ff\u00fd\u0003\u0002",
    "\u0002\u0002\u0100\u0103\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002",
    "\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0105\u0003\u0002",
    "\u0002\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0104\u00fc\u0003\u0002",
    "\u0002\u0002\u0104\u0105\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002",
    "\u0002\u0002\u0106\u0107\u0007\t\u0002\u0002\u0107\u0019\u0003\u0002",
    "\u0002\u0002#\u001d\")3EHQZ_ail\u0081\u008a\u0091\u0099\u009f\u00a9",
    "\u00b1\u00b5\u00b9\u00c0\u00c9\u00d3\u00dd\u00e2\u00e9\u00ee\u00f0\u00f6",
    "\u00f8\u0101\u0104"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class miniCParser extends antlr4.Parser {

    static grammarFileName = "miniC.g4";
    static literalNames = [ null, "';'", "'struct'", "'{'", "'}'", "'('", 
                            "','", "')'", "'['", "']'", "'='", "'while'", 
                            "'for'", "'do'", "'if'", "'else'", "'break'", 
                            "'continue'", "'return'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "Int", "Float", "Bool", "Type", 
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
	        this.state = 39;
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
	            localctx._fun = this.fun();
	            localctx.txt = (localctx._fun===null ? null : this._input.getText(new antlr4.Interval(localctx._fun.start,localctx._fun.stop)))
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
	}



	fun() {
	    let localctx = new FunContext(this, this._ctx, this.state);
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
	        localctx.txt+="function ";
	        this.state = 56;
	        localctx._NAME = this.match(miniCParser.NAME);
	        localctx.txt+=(localctx._NAME===null ? null : localctx._NAME.text);
	        this.state = 58;
	        this.match(miniCParser.T__4);
	        localctx.txt+="(";
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===miniCParser.Type) {
	            this.state = 60;
	            this.match(miniCParser.Type);
	            this.state = 61;
	            localctx._NAME = this.match(miniCParser.NAME);
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniCParser.T__5) {
	                this.state = 62;
	                this.match(miniCParser.T__5);
	                this.state = 63;
	                this.match(miniCParser.Type);
	                this.state = 64;
	                localctx._NAME = this.match(miniCParser.NAME);
	                this.state = 69;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 72;
	        this.match(miniCParser.T__6);
	        localctx.txt+=")";
	        this.state = 74;
	        this.match(miniCParser.T__2);
	        localctx.txt+="{";
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__4) | (1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.T__17) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	            this.state = 76;
	            this.command();
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 82;
	        this.match(miniCParser.T__3);
	        localctx.txt+="}";
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
	        this.state = 85;
	        this.match(miniCParser.Type);
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 86;
	            this.match(miniCParser.NAME);
	            break;

	        case 2:
	            this.state = 87;
	            this.init();
	            break;

	        }
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===miniCParser.T__5 || _la===miniCParser.NAME) {
	            this.state = 93;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case miniCParser.T__5:
	                this.state = 90;
	                this.match(miniCParser.T__5);
	                this.state = 91;
	                this.match(miniCParser.NAME);
	                break;
	            case miniCParser.NAME:
	                this.state = 92;
	                this.init();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 97;
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
	        this.state = 98;
	        this.match(miniCParser.NAME);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===miniCParser.T__7) {
	            this.state = 99;
	            this.match(miniCParser.T__7);
	            this.state = 100;
	            this.seq(0);
	            this.state = 101;
	            this.match(miniCParser.T__8);
	        }

	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===miniCParser.Operator) {
	            this.state = 105;
	            this.match(miniCParser.Operator);
	        }

	        this.state = 108;
	        this.match(miniCParser.T__9);
	        this.state = 109;
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
	        this.state = 136;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 112;
	            this.match(miniCParser.Int);
	            break;

	        case 2:
	            this.state = 113;
	            this.match(miniCParser.Float);
	            break;

	        case 3:
	            this.state = 114;
	            this.match(miniCParser.Bool);
	            break;

	        case 4:
	            this.state = 115;
	            this.match(miniCParser.NAME);
	            break;

	        case 5:
	            this.state = 116;
	            this.match(miniCParser.NAME);
	            this.state = 117;
	            this.match(miniCParser.T__7);
	            this.state = 118;
	            this.seq(0);
	            this.state = 119;
	            this.match(miniCParser.T__8);
	            break;

	        case 6:
	            this.state = 121;
	            this.match(miniCParser.T__2);
	            this.state = 122;
	            this.seq(0);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniCParser.T__5) {
	                this.state = 123;
	                this.match(miniCParser.T__5);
	                this.state = 124;
	                this.seq(0);
	                this.state = 129;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 130;
	            this.match(miniCParser.T__3);
	            break;

	        case 7:
	            this.state = 132;
	            this.match(miniCParser.T__4);
	            this.state = 133;
	            this.seq(0);
	            this.state = 134;
	            this.match(miniCParser.T__6);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 143;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SeqContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, miniCParser.RULE_seq);
	                this.state = 138;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 139;
	                this.match(miniCParser.Operator);
	                this.state = 140;
	                this.seq(2); 
	            }
	            this.state = 145;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
	        this.state = 157;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.T__2:
	        case miniCParser.T__4:
	        case miniCParser.T__15:
	        case miniCParser.T__16:
	        case miniCParser.T__17:
	        case miniCParser.Int:
	        case miniCParser.Float:
	        case miniCParser.Bool:
	        case miniCParser.Type:
	        case miniCParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 146;
	                this.seq(0);
	                break;

	            case 2:
	                this.state = 147;
	                this.var_decl();
	                break;

	            case 3:
	                this.state = 148;
	                this.init();
	                break;

	            case 4:
	                this.state = 149;
	                this.jmp();
	                break;

	            case 5:
	                this.state = 150;
	                this.exit();
	                break;

	            }
	            this.state = 153;
	            this.match(miniCParser.T__0);
	            break;
	        case miniCParser.T__13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 155;
	            this.cond();
	            break;
	        case miniCParser.T__10:
	        case miniCParser.T__11:
	        case miniCParser.T__12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 156;
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
	        this.state = 209;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.T__10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.match(miniCParser.T__10);
	            this.state = 160;
	            this.match(miniCParser.T__4);
	            this.state = 161;
	            this.seq(0);
	            this.state = 162;
	            this.match(miniCParser.T__6);
	            this.state = 163;
	            this.match(miniCParser.T__2);
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__4) | (1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.T__17) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 164;
	                this.command();
	                this.state = 169;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 170;
	            this.match(miniCParser.T__3);
	            break;
	        case miniCParser.T__11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 172;
	            this.match(miniCParser.T__11);
	            this.state = 173;
	            this.match(miniCParser.T__4);
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__4) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 174;
	                this.seq(0);
	            }

	            this.state = 177;
	            this.match(miniCParser.T__0);
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__4) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 178;
	                this.seq(0);
	            }

	            this.state = 181;
	            this.match(miniCParser.T__0);
	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__4) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 182;
	                this.seq(0);
	            }

	            this.state = 185;
	            this.match(miniCParser.T__6);
	            this.state = 186;
	            this.match(miniCParser.T__2);
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__4) | (1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.T__17) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 187;
	                this.command();
	                this.state = 192;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 193;
	            this.match(miniCParser.T__3);
	            break;
	        case miniCParser.T__12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 194;
	            this.match(miniCParser.T__12);
	            this.state = 195;
	            this.match(miniCParser.T__2);
	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__4) | (1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.T__17) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 196;
	                this.command();
	                this.state = 201;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 202;
	            this.match(miniCParser.T__3);
	            this.state = 203;
	            this.match(miniCParser.T__10);
	            this.state = 204;
	            this.match(miniCParser.T__4);
	            this.state = 205;
	            this.seq(0);
	            this.state = 206;
	            this.match(miniCParser.T__6);
	            this.state = 207;
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
	        this.state = 211;
	        this.match(miniCParser.T__13);
	        this.state = 212;
	        this.match(miniCParser.T__4);
	        this.state = 213;
	        this.seq(0);
	        this.state = 214;
	        this.match(miniCParser.T__6);
	        this.state = 224;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 215;
	            this.match(miniCParser.T__2);
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__4) | (1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.T__17) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 216;
	                this.command();
	                this.state = 221;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 222;
	            this.match(miniCParser.T__3);
	            break;

	        case 2:
	            this.state = 223;
	            this.command();
	            break;

	        }
	        this.state = 238;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        if(la_===1) {
	            this.state = 226;
	            this.match(miniCParser.T__14);
	            this.state = 236;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 227;
	                this.match(miniCParser.T__2);
	                this.state = 231;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__4) | (1 << miniCParser.T__10) | (1 << miniCParser.T__11) | (1 << miniCParser.T__12) | (1 << miniCParser.T__13) | (1 << miniCParser.T__15) | (1 << miniCParser.T__16) | (1 << miniCParser.T__17) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.Type) | (1 << miniCParser.NAME))) !== 0)) {
	                    this.state = 228;
	                    this.command();
	                    this.state = 233;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 234;
	                this.match(miniCParser.T__3);
	                break;

	            case 2:
	                this.state = 235;
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
	        this.state = 246;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniCParser.T__15:
	            this.state = 240;
	            this.match(miniCParser.T__15);
	            break;
	        case miniCParser.T__16:
	            this.state = 241;
	            this.match(miniCParser.T__16);
	            break;
	        case miniCParser.T__17:
	            this.state = 242;
	            this.match(miniCParser.T__17);
	            this.state = 244;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__4) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	                this.state = 243;
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
	        this.state = 248;
	        this.match(miniCParser.NAME);
	        this.state = 249;
	        this.match(miniCParser.T__4);
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCParser.T__2) | (1 << miniCParser.T__4) | (1 << miniCParser.Int) | (1 << miniCParser.Float) | (1 << miniCParser.Bool) | (1 << miniCParser.NAME))) !== 0)) {
	            this.state = 250;
	            this.seq(0);
	            this.state = 255;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniCParser.T__5) {
	                this.state = 251;
	                this.match(miniCParser.T__5);
	                this.state = 252;
	                this.seq(0);
	                this.state = 257;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 260;
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
miniCParser.T__17 = 18;
miniCParser.Int = 19;
miniCParser.Float = 20;
miniCParser.Bool = 21;
miniCParser.Type = 22;
miniCParser.Operator = 23;
miniCParser.Whitespace = 24;
miniCParser.Comment = 25;
miniCParser.NAME = 26;
miniCParser.DIGIT = 27;

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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitCode(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.txt = ""
        this._fun = null; // FunContext
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitObject(this);
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
        this.txt = ""
        this._NAME = null; // Token
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitCommand(this);
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

	accept(visitor) {
	    if ( visitor instanceof miniCVisitor ) {
	        return visitor.visitJmp(this);
	    } else {
	        return visitor.visitChildren(this);
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
