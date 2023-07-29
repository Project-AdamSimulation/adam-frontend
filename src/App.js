import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { MainMenu, conversationalForm } from './views/main-menu';
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { UserForm } from './views/person-form';

registerCoreBlocks();
function App() {
  return (
    <div className="App">
      {/* <MainMenu></MainMenu> */}
      <UserForm></UserForm>
    </div>
  );
}

export default App;