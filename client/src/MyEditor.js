import {Page} from "./Chat";
import React from "react";
import MonacoEditor from '@monaco-editor/react';
import {Button} from "./Welcome"

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "void play() {\
            \n\t// put your code here;\
            \n\t// it doesn't necessary to use the infinite loop,\
            \n\t// because after exiting from this function -\
            \n\t// it will continue to work from the entry point.\
            \n\
          \n}",
    }
    this.downloadContent = this.downloadContent.bind(this);
    this.runCode = this.runCode.bind(this);
  }

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  runCode() {
    var code = this.state.code;
  }

  downloadContent() {
    var content = this.state.code;
    var atag = document.createElement("a");
    var file = new Blob([content], {type: 'text/plain'});
    atag.href = URL.createObjectURL(file);
    atag.download = "code.c";
    atag.click();
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <Page>
        <MonacoEditor
          width="90vh"
          height="90vh"
          theme="vs-dark"
          defaultLanguage="c"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
        <Button
          onClick={this.runCode}
        >Run</Button>
        <Button
          onClick={this.downloadContent}
        >Download</Button>
        <Button>Upload</Button>
        {
          //"we need to inform the user that the code will be stored on our server and ask if he is against it."
        }
        <Button>Save</Button>
        <Button>Delete</Button>
      </Page>
    );
  }
};

export default MyEditor;