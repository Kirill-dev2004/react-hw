import { createContext } from "react";
import { Action } from "./store/reducer";
import { initialState } from "./store/state";

const initialContext = {
    state: initialState,
    dispatch:  (a:Action) => {},
}
export const MyContext = createContext(initialContext)