import { createSelector } from '@utils/createSelector';
import { callApi } from '@utils/callApi';
import { api } from '@services/todos';

const todoSlice = (set) => ({
  todos: [],
  fetchTodos: async () => {
    const apiObj = api();

    const response = await callApi({ apiDetails: apiObj.TODOS_API.apiDetails });

    set(() => ({ todos: response }));
  },
});

export const useTodos = createSelector(todoSlice);
