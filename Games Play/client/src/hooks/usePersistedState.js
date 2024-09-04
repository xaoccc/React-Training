import { useState } from "react";

// This hook is used to persist the state in the local storage and access it when the component is mounted.
// After the component is mounted, the state is accessed from the local storage. 
// !!! In this way, the state is not lost when the component is re-rendered or the page is refreshed !!!
export default function usePersistedState(key, defaultValue) {
    // useState here returns a function that is called only once when the component is mounted.
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);
        return persistedState ? JSON.parse(persistedState) : defaultValue;
    });

    function setPersistedState(value) {

        if (typeof value === 'function') {
            value = value(state);
        }


        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [state, setPersistedState];
}