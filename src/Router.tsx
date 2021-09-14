import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import OAuth from './components/OAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/git-oauth">
          <OAuth />
        </Route>
        <Route path="/" exact>
          <Header />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
