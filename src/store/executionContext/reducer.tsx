import { ActionType, getType } from "typesafe-actions";

import { selectExecutionContext } from "./actions";

export const stateKey = "executionContext";

export type ExecutionContextState = Readonly<{
  selected: string | undefined;
}>;

export const defaultState: ExecutionContextState = {
  selected: undefined,
};

export type ExecutionContextAction = ActionType<typeof selectExecutionContext>;

export function executionContextReducer(
  state = defaultState,
  action: ExecutionContextAction
): ExecutionContextState {
  switch (action.type) {
    case getType(selectExecutionContext):
      return {
        ...state,
        selected: action.payload,
      };

    default:
      return state;
  }
}
