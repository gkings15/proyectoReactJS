import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Common/Header/Header.component';
import Footer from './components/Common/Footer/Footer.component';
import NotFound from './components/NotFound/notfound.component';
import TeamsContextProvider from './contexts/TeamsContext';
import DetailContextProvider from './contexts/DetailContext';
import PlayersContextProvider from './contexts/PlayersContext';
import Teams from './pages/Teams/Teams.component';
import TeamsDetail from './pages/TeamsDetail/TeamsDetail.component';
import Loader from './components/Common/ProgressBar/ProgressBar.component';
import "./../src/assets/css/styles.css";
const HomePage = lazy(() => import('./pages/Home/HomePage.component'));
const HomeTeams = lazy(() => import('./pages/HomeTeams/HomeTeams.component'));
const HomePlayers = lazy(() => import('./pages/HomePlayers/HomePlayers.component'));

const App = () => (
  <BrowserRouter>
    <Header />
    <Container maxWidth="lg" className="main-container">
      <Suspense fallback={
        <div>
          <Loader />
        </div>
      }>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/conference/:conf'>
            <TeamsContextProvider>
              <Teams />
            </TeamsContextProvider>
          </Route>
          <Route path='/team/:teamid'>
            <DetailContextProvider>
              <TeamsDetail />
            </DetailContextProvider>
          </Route>
          <Route path='/teams'>
            <TeamsContextProvider>
              <HomeTeams />
            </TeamsContextProvider>
          </Route>
          <Route path='/players'>
            <PlayersContextProvider>
              <HomePlayers />
            </PlayersContextProvider>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Container>
    <Footer />
  </BrowserRouter>
)

export default App;
