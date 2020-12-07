import { createAction } from "typesafe-actions";

export const selectExecutionContext = createAction(
  "context/execution/select"
)<string>();
