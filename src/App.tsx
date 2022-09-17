import React, { useContext } from 'react';
import {
  Route, Navigate, HashRouter, Routes,
} from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PostList from './components/PostList/PostList';
import { ThemeContext, ThemeContextProvider, ThemeContextState } from './contexts/ThemeContext';
import UserList from './components/UserList/UserList';

function App() {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext.darkTheme);
  return (
    <HashRouter>
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {(context: Partial<ThemeContextState>) => (
            <div className={`App ${context.darkTheme ? 'AppDark' : ''}`}>
              <Header />
              <Main>
                <Routes>
                  <Route path="/users" element={<UserList />} />
                  <Route path="/posts" element={<PostList />} />
                  <Route path="/user/:id" element={<div>post id</div>} />
                  <Route path="/home" element={<div>HOME!</div>} />
                  <Route path="/" element={<Navigate to="/posts" />} />
                </Routes>
              </Main>
              <Footer />
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeContextProvider>

    </HashRouter>

  );
}

export default App;
