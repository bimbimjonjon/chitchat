import './App.css';
import Login from './components/login/Login';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ChatRoom from './components/chatroom/ChatRoom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import AddRoomModal from './components/modals/AddRoomModal';
import InviteMemberModal from './components/modals/InviteMember';



function App() {
  return (
    <BrowserRouter >
      <AuthProvider>
        <AppProvider>

          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<ChatRoom />} />
          </Routes>
          <AddRoomModal />
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
