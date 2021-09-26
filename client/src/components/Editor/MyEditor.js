import {Page} from "../Chat/Chat";
import React from "react";
import MonacoEditor from '@monaco-editor/react';
import {Button} from "../Welcome/Welcome"

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import './MyEditor.css';
import {Compiler} from "./Compiler/Compiler"
import uploadIcon from '../../assets/upload.svg';
import {cookies} from "../../App";
import io from "socket.io-client";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.socketRef = React.createRef();
    this.socketRef.current = io.connect('/'); // TODO :??

    this.state = {
      editorLanguage: 'c',
      code: localStorage.getItem('./Compiler/antlr/Examples/test.1c') ?? DEFAULT_CODE,
      toastOpen: false,
      id: cookies.get('id'),
      width: window.innerWidth - 400,
      height: 250,
    };

    this.onChange = this.onChange.bind(this);
    this.runCode = this.runCode.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.downloadContent = this.downloadContent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange(newValue, e) {
    this.setState({ code: newValue });
  }

  runCode() {
    this.socketRef.current.emit("reset score", this.id);
    this.handleSave();
    Compiler(this.state.code);
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = () => {
      const result = String(reader.result);

      this.setState({ code: result });
    };

    reader.onerror = () => {
      console.error(reader.error);
    };
  }

  downloadContent() {
    const content = this.state.code;
    const atag = document.createElement("a");
    const file = new Blob([content], {type: 'text/plain'});
    atag.href = URL.createObjectURL(file);
    atag.download = "code.c";
    atag.click();
  }

  handleDelete() {
    const clear = window.confirm('Are you sure you want to delete this code from local storage?');

    if (clear) {
      localStorage.removeItem('savedCode');
      this.setState({ code: '', toastOpen: true });
    }
  }

  handleSave() {
    localStorage.setItem('savedCode', this.state.code);
    this.setState({ toastOpen: true });
  }

  changeEditorLanguage = type => {
    this.setState({editorLanguage: type});
    console.log(type);
  }

  handleToastClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({toastOpen: false});
  };

  render() {
    console.log('render');
    const code = this.state.code;

    const options = {
      selectOnLineNumbers: true
    };

    return (
      <>
        <Page className="MyEditor">
          <div className="MyEditor__MonacoEditor">
            <div className="MyEditor__MonacoEditorTabs">
              <span onClick={() => this.changeEditorLanguage('c')}>mini-C</span>
            </div>
            <MonacoEditor
              theme="vs-dark"
              defaultLanguage={this.state.editorLanguage}
              value={code}
              options={options}
              onChange={this.onChange}
              editorDidMount={this.editorDidMount}
            />
          </div>
          <div className="MyEditor__ButtonsContainer">
            <label className="MyEditor__UploadButton">
              <input
                type="file"
                name="myFile"
                onChange={this.uploadFile}
              />
              <span className="MyEditor__UploadButtonText">Upload your file</span>
              <img src={uploadIcon} alt="upload"/>
            </label>
            <div className="MyEditor__ButtonsGroup">
              <Button>Random</Button>
              <Button onClick={this.runCode}>Run</Button>
              <Button onClick={this.downloadContent}>Download</Button>
              <Button onClick={this.handleSave}>Save</Button>
              <Button onClick={this.handleDelete}>Delete</Button>
            </div>
          </div>
        </Page>
        <Snackbar
          open={this.state.toastOpen}
          onClose={this.handleToastClose}
          autoHideDuration={3000}
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        >
          <Alert onClose={this.handleToastClose} severity="success" sx={{width: '100%'}}>
            Your code has successfully been saved to local storage!
          </Alert>
        </Snackbar>
      </>
    );
  }
};

export default MyEditor;

const DEFAULT_CODE = `
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

int count_enemies(); // not a const

//
// ....
//

void play() {
  // put your code here;
  // it doesn't have to use infinite loop,
  // because upon exiting this function,
  // it will continue to work from the entry point.
}
}`;
