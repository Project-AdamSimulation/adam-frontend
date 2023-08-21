import './App.css';
import { HashRouter } from "react-router-dom";
import { Routes, Route, } from "react-router-dom"
import { MainMenu } from './views/main-menu';
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { ChatWindow } from './views/chat-window';

registerCoreBlocks();
function App() {
  return (
    <div className='App'>
      <HashRouter base = '/'>
        <Routes>
          <Route path='/' element={<MainMenu></MainMenu>}></Route>
          <Route path='/chat' element={<ChatWindow></ChatWindow>}></Route>
        </Routes>
      </HashRouter>
    </div>
      
    
  );
}

export default App;