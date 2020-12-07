import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  executionContextActions,
  executionContextSelectors,
} from "store/executionContext";
import { RootState } from "store/rootReducer";

import {
  AppPlaceholder,
  ConditionalRender,
  EmptyContent,
} from "shared/components";

import { ExecutionRoute, Paths } from "Paths";
import { isNullOrUndefined } from "utils/utils";

const Applications = lazy(() => import("./applications"));
const Technologies = lazy(() => import("./technologies"));

export interface ExecutionsProps extends RouteComponentProps<ExecutionRoute> {}

export const Executions: React.FC<ExecutionsProps> = ({ match }) => {
  const dispatch = useDispatch();

  const selectedExecution = useSelector((state: RootState) =>
    executionContextSelectors.selectedExecution(state)
  );

  useEffect(() => {
    if (selectedExecution !== match.params.execution) {
      dispatch(
        executionContextActions.selectExecutionContext(match.params.execution)
      );
    }
  }, [match, selectedExecution, dispatch]);

  return (
    <>
      <ConditionalRender
        when={isNullOrUndefined(match.params.execution)}
        then={<EmptyContent />}
      >
        <Suspense fallback={<AppPlaceholder />}>
          <Switch>
            <Route path={Paths.applications} component={Applications} false />
            <Route path={Paths.technologies} component={Technologies} false />
          </Switch>
        </Suspense>
      </ConditionalRender>
    </>
  );
};
