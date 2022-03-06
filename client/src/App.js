import React from 'react';
import Container from '@mui/material/Container';
// import Button from '@material-ui/core/Button';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

// DELTE IT IF BUG FOUND----------
import { makeStyles } from '@mui/styles';
import { ThemeProvider,createTheme } from '@mui/material/styles';

const theme = createTheme();

const useStyles = makeStyles((theme) => {
  root: {
    // some CSS that access to theme
  }
});
// Delete abouve if bug found---------

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
      </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
