import {Page} from "../Chat/Chat";
import React from "react";
import MonacoEditor from '@monaco-editor/react';
import {Button} from "../Welcome/Welcome"

import './MyEditor.css';
import {Compiler} from "./Compiler/Compiler"

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: read from file!?
      code: `
//
// ....
//

struct location{
  float x;
  float y;
};

location get_position(int index);
location get_self_position();

int get_health(int index); 
int get_self_health();

void hit();
void shoot();

void turn(float angle); 
void turn_percent(float angle) {
  turn(angle * 3,6);
}
void turn_rad(float angle) {
  angle %= 2*Pi;
  turn(angle * 360 / 2*Pi);
}

int count_enemys(); // not a const

//
// ....
//


void play() {
  // put your code here;
  // it doesn't necessary to use the infinite loop,
  // because after exiting from this function -
  // it will continue to work from the entry point.
}
}`,
    }
    this.downloadContent = this.downloadContent.bind(this);
    this.runCode = this.runCode.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
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
    Compiler(code)
  }

  uploadFile(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
      console.log(reader.result.toString());
      // TODO: this.setState({ code: reader.result.toString() });
    };

    reader.onerror = function() {
      console.log(reader.error);
    };


    /*if (file) {
      let data = new FormData();
      data.append('file', file);
      console.log(data);
      // axios.post('/files', data)...
    }*/
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
      <Page className="MyEditor">
        <MonacoEditor
          className="MyEditor__MonacoEditor"
          width="90vh"
          height="90vh"
          theme="vs-dark"
          defaultLanguage="c"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
        <div className="MyEditor__ButtonsContainer">
          <input
            className="MyEditor__UploadButton"
            ariaLabel="Upload your file"
            type="file"
            name="myFile"
            onChange={this.uploadFile}
          />
          {
            // TODO: "we need to inform the user that the code will be stored on our server and ask if he is against it."
          }
          <div className="MyEditor__ButtonsGroup">
            <Button onClick={this.runCode}>Run</Button>
            <Button onClick={this.downloadContent}>Download</Button>
            <Button>Save</Button>
            <Button>Delete</Button>
          </div>
        </div>
      </Page>
    );
  }
};

export default MyEditor;