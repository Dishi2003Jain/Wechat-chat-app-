import './App.css';
import MainForm from './component/MainForm'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ChatRoom from './component/ChatRoom';
function App() {
  return (
    <div className="container-fluid bg-light text dark d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainForm/>}/>
          <Route path="/chat/:roomName" element={<ChatRoom/>}/>
          <Route path="*" element={<h1>404 not found!</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
