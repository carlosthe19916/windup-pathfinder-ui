import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { AppPlaceholder } from "shared/components";
import { Paths } from "Paths";

const ApplicationList = lazy(() => import("./application-list"));

export const Applications: React.FC = () => {
  return (
    <Suspense fallback={<AppPlaceholder />}>
      <Switch>
        <Route path={Paths.applications} component={ApplicationList} exact />
      </Switch>
    </Suspense>
  );
};
