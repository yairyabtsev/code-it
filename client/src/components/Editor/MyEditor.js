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

import styled from 'styled-components';

import {ResizableBox} from 'react-resizable';
// import '../../../node_modules/react-resizable/css/styles.css';

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
      hash: cookies.get('hash'),
      width: window.innerWidth - 400,
      height: 250,
    };

    this.onChange = this.onChange.bind(this);
    this.runCode = this.runCode.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.downloadContent = this.downloadContent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.turn = this.turn.bind(this);
  }

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange(newValue, e) {
    this.setState({code: newValue});
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async turn(num) {
    const delay = 750;
    const div = (num > 0) ? 1 : -1;
    num = Math.abs(num);
    while (num > 6) {
      this.socketRef.current.emit("turn", {u_id: this.state.id, division: 6 * div});
      num -= 6;
      await this.sleep(delay);
    }
    if (num > 0)
      this.socketRef.current.emit("turn", {u_id: this.state.id, division: num * div});
    await this.sleep(delay / 6 * num);
  }

  async move(num) {
    const delay = 750;
    if (num < 0)
      return;
    const min = 3;
    while (num > min) {
      this.socketRef.current.emit("move", {u_id: this.state.id, distance: min});
      num -= min;
      await this.sleep(delay);
    }
    if (num > 0)
      this.socketRef.current.emit("move", {u_id: this.state.id, distance: num});

    await this.sleep(delay / min * num);
  }

  async runCode() {
    this.socketRef.current.emit("reset score", this.state.id);
    this.socketRef.current.emit("get location", {u_id: this.state.id, hash: this.state.hash});
    this.handleSave();
    while (true) {
      await this.turn(Math.random() * 100 - 50);
      await this.move(Math.random() * 50);
      this.socketRef.current.emit("shot", this.state.id);
      // break;
      await this.sleep(750);
    }
    // Compiler(this.state.code);
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = () => {
      const result = String(reader.result);

      this.setState({code: result});
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
      this.setState({code: '', toastOpen: true});
    }
  }

  handleSave() {
    localStorage.setItem('savedCode', this.state.code);
    this.setState({toastOpen: true});
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
    // console.log('render');
    const code = this.state.code;

    const options = {
      selectOnLineNumbers: true
    };

    return (
      <>
        <Page className="MyEditor">
          <ResizableBox
            width={window.innerWidth - 400}
            height={250}
            style={{position: 'relative'}}
            resizeHandles={['n']}
            minConstraints={[window.innerWidth - 400, 32]}
            maxConstraints={[window.innerWidth - 400, window.innerHeight - 100]}
            handle={<MyHandle/>}
            onResize={this.props.onResize}
          >
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
          </ResizableBox>
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

const MyHandle = React.forwardRef((props, ref) => {
  const {handleAxis, ...restProps} = props;
  return <CustomHandle ref={ref} {...restProps} />;
});

const CustomHandle = styled.div`
  width: 100%;
  height: 10px;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  cursor: row-resize
`;

const DEFAULT_CODE =
  `int a;
int a, b;
int a = 5;
int b = 3.14;
int b = -27;
int a = -42.5;
int a = 5, b = 6;
int a = a + b;
int a = c + a;
Array<int> b = \{1,2\}; 
`;
