import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import './App.scss';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import {ConfigProvider} from "antd";
import enUS from "antd/lib/locale/en_US";
import Profile from "./components/Profile/Profile";
import Bookmark from "./components/Bookmarks/Bookmark";
import Tweet from "./components/Tweet/Tweet";
import HomePage from "./components/HomePage/HomePage";
import {LogoutOutlined} from "@ant-design/icons";

function App() {
  return (
      <ConfigProvider locale={enUS}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/bookmarks" element={<Bookmark/>}/>
              <Route path="/tweet" element={<Tweet/>}/>
              <Route path="*" element={<PageNotFound/>}/>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/" element={<LogoutOutlined/>}/>
            </Routes>
          </Router>
        </div>
      </ConfigProvider>
  );
}

export default App;
