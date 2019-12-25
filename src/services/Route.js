import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const BaseLayout = props => {
   const {component: Component, ...rest} = props;
   return <Component {...rest} />;
};

const PublicRoute = ({component: Component, ...rest}) => {
   return (
      <Route
         {...rest}
         render={props => (
            <BaseLayout {...props} component={Component} withPanel={false} />
         )}
      />
   );
};
const PrivateRoute = props => {
   const {component: Component, ...rest} = props;
   let isAuth = false;
   return (
      <Route
         {...rest}
         render={matchProps => {
            return isAuth ? (
               <BaseLayout {...matchProps} component={Component} />
            ) : (
               <Redirect to="/" />
            );
         }}
      />
   );
};

// Extend layout
const PanelRoute = ({component: Component, ...rest}) => {
   return (
      <PrivateRoute
         {...rest}
         withPanel={true}
         component={matchProps => <Component {...matchProps} />}
      />
   );
};

export {PrivateRoute, PublicRoute, PanelRoute};
