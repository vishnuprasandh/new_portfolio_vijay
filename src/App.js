// App.js
import React, { useState, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import './App.css'
import index from './components/Experience';

// Import components using code splitting
const Single = React.lazy(() => import('./components/Single'));
const Workshop = React.lazy(() => import('./components/Workshop'));
const { darkTheme, lightTheme } = require('./utils/Themes');

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Layout>
          <Body>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Single} />
                <Route path="/workshop" component={Workshop} />
              </Switch>
            </Suspense>
          </Body>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
