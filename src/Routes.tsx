import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { AppPlaceholder } from "shared/components";
import { Paths } from "./Paths";

const Applications = lazy(() => import("./pages/applications"));
const Welcome = lazy(() => import("./pages/welcome"));

export const AppRoutes = () => {
  const routes = [
    { component: Welcome, path: Paths.base, exact: false },
    { component: Applications, path: Paths.applicationList, exact: false },
  ];

  return (
    <Suspense fallback={<AppPlaceholder />}>
      <Switch>
        {routes.map(({ path, component, ...rest }, index) => (
          <Route key={index} path={path} component={component} {...rest} />
        ))}
      </Switch>
    </Suspense>
  );
};
