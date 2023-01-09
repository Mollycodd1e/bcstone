import React from "react";

const StoreContext = React.createContext(undefined);

export function StoreProvider(props) {
    return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
}

export function useMobxStores() {
    return React.useContext(StoreContext);
}