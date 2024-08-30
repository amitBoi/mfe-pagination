import { createSelector } from '@utils/createSelector';

const genericLoaderSlice = (set) => ({
  loadingCount: 0,
  loading: false,

  showLoader: () => {
    set((state) => {
      const newCount = state.loadingCount + 1;
      return { loadingCount: newCount, loading: true };
    });
  },

  hideLoader: () => {
    set((state) => {
      const newCount = state.loadingCount - 1;
      return { loadingCount: newCount, loading: newCount > 0 };
    });
  },
});

export const useGenericLoader = createSelector(genericLoaderSlice);
