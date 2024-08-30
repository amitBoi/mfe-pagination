import { URLS } from '@constants/index';

export const api = () => ({
  TODOS_API: {
    apiDetails: {
      url: URLS.TODOS,
      method: 'GET',
      isFullUrl: true,
    },
  },
});
