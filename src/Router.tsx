import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth"></Route>
        <Route path="/" exact>
          <Header />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
