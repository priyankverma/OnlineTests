import React from "react";

export default function usePersistedState(key, defaultValue) {
  // stores the values in local storage so that refreshing doesn't leads to state losing
  const [state, setState] = React.useState(() => {
    const persistedState = localStorage.getItem(key);
    return persistedState ? JSON.parse(persistedState) : defaultValue;
  });
  if (key === "questionSet") {
    window.localStorage.setItem(key, JSON.stringify(state));
  } // bypassing the comparison as shallow comparison won't catch the change
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
}
