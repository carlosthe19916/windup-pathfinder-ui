import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { AppPlaceholder } from "shared/components";
import { Paths } from "./Paths";

const Welcome = lazy(() => import("./pages/welcome"));
const InvalidExecution = lazy(() => import("./pages/invalid-execution"));
const Executions = lazy(() => import("./pages/executions"));

export const AppRoutes = () => {
  const routes = [
    { component: Welcome, path: Paths.welcome, exact: true },
    { component: InvalidExecution, path: Paths.invalidExecution, exact: true },
    { component: Executions, path: Paths.executions, exact: false },
  ];

  return (
    <Suspense fallback={<AppPlaceholder />}>
      <Switch>
        {routes.map(({ path, component, ...rest }, index) => (
          <Route key={index} path={path} component={component} {...rest} />
        ))}
        <Redirect from={Paths.base} to={Paths.welcome} exact />
      </Switch>
    </Suspense>
  );
};
