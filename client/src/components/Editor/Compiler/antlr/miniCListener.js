// Generated from miniC.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/src/antlr4/index');

// This class defines a complete listener for a parse tree produced by miniCParser.
function miniCListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

miniCListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
miniCListener.prototype.constructor = miniCListener;

// Enter a parse tree produced by miniCParser#code.
miniCListener.prototype.enterCode = function(ctx) {
};

// Exit a parse tree produced by miniCParser#code.
miniCListener.prototype.exitCode = function(ctx) {
};


// Enter a parse tree produced by miniCParser#object.
miniCListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by miniCParser#object.
miniCListener.prototype.exitObject = function(ctx) {
};


// Enter a parse tree produced by miniCParser#struct.
miniCListener.prototype.enterStruct = function(ctx) {
};

// Exit a parse tree produced by miniCParser#struct.
miniCListener.prototype.exitStruct = function(ctx) {
};


// Enter a parse tree produced by miniCParser#fun.
miniCListener.prototype.enterFun = function(ctx) {
};

// Exit a parse tree produced by miniCParser#fun.
miniCListener.prototype.exitFun = function(ctx) {
};


// Enter a parse tree produced by miniCParser#var_decl.
miniCListener.prototype.enterVar_decl = function(ctx) {
};

// Exit a parse tree produced by miniCParser#var_decl.
miniCListener.prototype.exitVar_decl = function(ctx) {
};


// Enter a parse tree produced by miniCParser#init.
miniCListener.prototype.enterInit = function(ctx) {
};

// Exit a parse tree produced by miniCParser#init.
miniCListener.prototype.exitInit = function(ctx) {
};


// Enter a parse tree produced by miniCParser#seq.
miniCListener.prototype.enterSeq = function(ctx) {
};

// Exit a parse tree produced by miniCParser#seq.
miniCListener.prototype.exitSeq = function(ctx) {
};


// Enter a parse tree produced by miniCParser#arr.
miniCListener.prototype.enterArr = function(ctx) {
};

// Exit a parse tree produced by miniCParser#arr.
miniCListener.prototype.exitArr = function(ctx) {
};


// Enter a parse tree produced by miniCParser#command.
miniCListener.prototype.enterCommand = function(ctx) {
};

// Exit a parse tree produced by miniCParser#command.
miniCListener.prototype.exitCommand = function(ctx) {
};


// Enter a parse tree produced by miniCParser#loop.
miniCListener.prototype.enterLoop = function(ctx) {
};

// Exit a parse tree produced by miniCParser#loop.
miniCListener.prototype.exitLoop = function(ctx) {
};


// Enter a parse tree produced by miniCParser#cond.
miniCListener.prototype.enterCond = function(ctx) {
};

// Exit a parse tree produced by miniCParser#cond.
miniCListener.prototype.exitCond = function(ctx) {
};


// Enter a parse tree produced by miniCParser#exit.
miniCListener.prototype.enterExit = function(ctx) {
};

// Exit a parse tree produced by miniCParser#exit.
miniCListener.prototype.exitExit = function(ctx) {
};


// Enter a parse tree produced by miniCParser#jmp.
miniCListener.prototype.enterJmp = function(ctx) {
};

// Exit a parse tree produced by miniCParser#jmp.
miniCListener.prototype.exitJmp = function(ctx) {
};



exports.miniCListener = miniCListener;