import React, { useContext } from 'react';
import {
  Route, Navigate, HashRouter, Routes,
} from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/wrappers/Main/Main';
import PostList from './forms/PostList/PostList';
import { ThemeContext, ThemeContextProvider, ThemeContextState } from './contexts/ThemeContext';
import UserList from './forms/UserList/UserList';
import User from './forms/User/User';
import Authorization from './forms/Authorization/Authorization';
import Registration from './forms/Registration/Registration';

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <HashRouter>
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {(context: Partial<ThemeContextState>) => (
            <div className={`App ${context.darkTheme ? 'AppDark' : ''}`}>
              <Header />
              <Main>
                <Routes>
                  <Route path="/authorization" element={<Authorization />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/users" element={<UserList />} />
                  <Route path="/posts" element={<PostList />} />
                  <Route path="/user/:id" element={<User />} />
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
