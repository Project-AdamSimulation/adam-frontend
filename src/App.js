
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { MainMenu } from './views/main-menu';
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { ChatWindow } from './views/chat-window';

registerCoreBlocks();
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainMenu></MainMenu>}></Route>
          <Route path='/chat' element={<ChatWindow></ChatWindow>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
      
    
  );
}

export default App;