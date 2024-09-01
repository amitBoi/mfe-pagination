import { create } from 'zustand';

export const createSelector = (slice) => {
  const store = create(slice);
  store.use = {};

  for (let k in store.getState()) {
    store.use[k] = () => store((s) => s[k]);
  }

  return store;
};
