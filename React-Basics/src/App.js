import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Header from './Header';
import Posts from './Posts';
import Artical from './Artical';
import HookState from './Hooks/HookState';
import MyInput from './MyInput';
import MyForm from './MyForm';
import Scoreboard from "./Hooks/challengState";
import ArrayState from "./Hooks/ArrayState";
import './App.css';
function App() {
  return (
    <Router>
      <div className="app-container">
        <aside className="sidebar">
          <div className="sidebar-header">
            React Router Play
          </div>
          <nav className="sidebar-menu">
            <NavLink 
              to="/form" 
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            >
              My Form
            </NavLink>
            <NavLink 
              to="/scoreboard" 
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            >
              Score Board
            </NavLink>
            <NavLink 
              to="/devices-list" 
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            >
              Devices List
            </NavLink>
            <NavLink 
              to="/hook-state" 
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            >
              Hook State
            </NavLink>
            <NavLink 
              to="/my-input" 
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            >
              My Input
            </NavLink>
            <NavLink 
              to="/posts" 
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            >
              Posts
            </NavLink>
            <NavLink 
              to="/articles" 
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            >
              Articles
            </NavLink>
          </nav>
        </aside>

      
        <main className="main-content">
          <div className="page-card-container">
            <Routes>
              <Route path="/" element={<Navigate to="/form" replace />} />
              
              <Route 
                path="/form" 
                element={
                  <div style={{ width: '100%' }}>
                    <Header />
                    <MyForm />
                  </div>
                } 
              />
              
              <Route 
                path="/scoreboard" 
                element={
                  <div style={{ width: '100%' }}>
                    <h1 className="page-title">Score Board (Object State)</h1>
                    <Scoreboard />
                  </div>
                } 
              />
              
              <Route 
                path="/devices-list" 
                element={
                  <div style={{ width: '100%' }}>
                    <h1 className="page-title">Devices List (Array State)</h1>
                    <ArrayState />
                  </div>
                } 
              />
              
              <Route 
                path="/hook-state" 
                element={
                  <div style={{ width: '100%' }}>
                    <h1 className="page-title">Hook State Practice</h1>
                    <HookState />
                  </div>
                } 
              />
              
              <Route 
                path="/my-input" 
                element={
                  <div style={{ width: '100%' }}>
                    <h1 className="page-title">Input Binding Practice</h1>
                    <MyInput />
                  </div>
                } 
              />
              
              <Route 
                path="/posts" 
                element={
                  <div style={{ width: '100%' }}>
                    <h1 className="page-title">All Posts</h1>
                    <div className="container" style={{ width: '100%', margin: '0' }}>
                      <div className="posts" style={{ flex: 1 }}>
                        <Posts />
                      </div>
                    </div>
                  </div>
                } 
              />
              
              <Route 
                path="/articles" 
                element={
                  <div style={{ width: '100%' }}>
                    <h1 className="page-title">Articles & Children Props</h1>
                    <div className="container" style={{ width: '100%', margin: '0' }}>
                      <div className="articles" style={{ flex: 1 }}>
                        <Artical name="ahmed" email="ahmedzs@gmail.coom" />
                        <Artical>
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                              style={{
                                background: "teal",
                                width: "120px",
                                height: "120px",
                                fontSize: "20px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px",
                                padding: "5px"
                              }}
                            >
                              click
                              <img
                                style={{ width: "60px", height: "auto" }}
                                src="https://firefox-settings-attachments.cdn.mozilla.net/main-workspace/newtab-wallpapers-v2/af6073d2-cbb2-4e28-b642-3327d14808b2.avif"
                                alt="Wallpaper"
                              />
                            </button>
                          </div>
                        </Artical>
                        <Artical />
                      </div>
                    </div>
                  </div>
                } 
              />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;