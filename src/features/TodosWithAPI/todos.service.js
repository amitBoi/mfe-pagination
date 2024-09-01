import { URLS } from '@app/constants/index';

export const api = () => ({
  TODOS_API: {
    apiDetails: {
      url: URLS.TODOS,
      method: 'GET',
    },
  },
});
