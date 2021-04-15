import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Routes} from './routes';
import DefaultLayout from '../layouts/default-layout/layout';

const RoutesDumb = () => {
  return (
      <BrowserRouter>
        <Switch>
          {/*TODO: Add auth and 404 routes here*/}
          {/*<Route exact path="/404" name="Page 404" render={props => <Login {...props}/>}/>*/}
          <DefaultLayout>
            {Routes.map(route => <Route key={route.key} {...route} />)}
          </DefaultLayout>
        </Switch>
      </BrowserRouter>
  );
};

export default RoutesDumb;