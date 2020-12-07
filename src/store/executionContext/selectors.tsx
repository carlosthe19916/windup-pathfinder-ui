import { RootState } from "../rootReducer";
import { stateKey } from "./reducer";

export const executionContextState = (state: RootState) => state[stateKey];

export const selectedExecution = (state: RootState) =>
  executionContextState(state).selected;
