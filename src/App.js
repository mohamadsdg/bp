import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {PublicRoute} from './services/Route';
import WEB from './constants/web';

///////////// Pages
const Home = lazy(() => import('./views/home'));

const App = () => (
   <Router>
      <Suspense fallback={<div>Loading...</div>}>
         <Switch>
            <PublicRoute exact path={WEB.ROOT} component={Home} />
         </Switch>
      </Suspense>
   </Router>
);

export default App;
