import antlr4 from 'antlr4';
import miniCLexer from './antlr/miniCLexer.js';
import miniCParser from './antlr/miniCParser.js';
import miniCListener from './antlr/miniCListener.js';
import {cloneElement} from "react";

class Visitor {
  visitChildren(ctx) {
    if (!ctx || ctx.ruleIndex === 1) {
      return;
    }

    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length !== 0) {
          return {idx: child.ruleIndex, body: child.accept(this)};
        } else {
          return {idx: -1, body: child.getText()};
        }
      });
    }
  }
}

function toBlocks(body) {
  const params = [];
  let i = 0;
  while (body[i].body !== ")") {
    if (body[i].idx !== -1)
      params.push(body[i]);
    i++;
  }
  return [params, body.slice(i + 2)];
}

console.warn = () => {
};

// console.error = (err) => alert(err);//TODO: not alert!!

function Seq(seq, vars) {
  if (seq.body.length === 1 && seq.body[0].idx === -1)
    return Number(seq.body[0].body);
  console.log("seq");//stack
  console.log(seq.body);
  return 0;
}

function Init(body, vars) {
  body.forEach(el => {
    if (el.idx === -1 && el.body === ',') ;
    else if (el.idx === 4) {
      vars[el.body[0].body[0].body] = Seq(el.body[2], vars);
    } else if (el.idx === 12) {
      vars[el.body[0].body] = 0;
    } else {
      console.log("toValue:");
      console.log(el);
    }
  });
  console.log("new line:");
  console.log(vars);
}

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
  // console.log(tree)
  console.log(parser.ruleNames);
  let global = [];
  const funcs = {};
  const myast = tree.accept(new Visitor());
  // console.log("my ast:");
  // console.log(myast);
  myast.forEach(element => {
    if (element.idx === 2) funcs[element.body[1]] = toBlocks(element.body.slice(3, -1));
    else if (element.idx === 3) {
      // console.log("new object:");
      // console.log(element.idx);
      // console.log(element.body);

      Init(element.body.slice(1, -1), global);
      //.forEach(val => global.push(val));
    }

  });
  console.log("global:");
  console.log(global);
  // console.log("funcs:");
  // console.log(funcs);
  // console.log("okok");
}
