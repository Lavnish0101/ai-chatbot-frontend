import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { useAuth } from "./context/AuthContext";
import Footer from "./components/footer/Footer";

function App() {

  const auth = useAuth();
  return <main>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      {auth?.isLoggedIn && auth.user && (
      <Route path="/chat" element={<Chat/>}/>
      )}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </main>
}

export default App