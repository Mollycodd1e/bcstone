import {createContext, useContext} from "react";

const StoreContext = createContext(undefined);

export function StoreProvider(props) {
    return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
}

export function useMobxStores() {
    return useContext(StoreContext);
}