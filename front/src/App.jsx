import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NewPostPage from "./pages/NewPostPage";
import PostPage from "./pages/postPage";
import PostsPage from "./pages/PostsPage";
import Header from "./components/Header";
import { UserContext } from "./contexts/UserContext";
import SettingsPage from "./pages/SettingsPage";
import { UpdateProvider } from "./contexts/Update";

function App() {
  const [user, setUser] = useState();
  const [account, setAccount] = useState();
  const [token, setToken] = useState();
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ user, setUser, account, setAccount, token, setToken }}
      >
        <UpdateProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/newPost" element={<NewPostPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/myposts" element={<PostsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </UpdateProvider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
