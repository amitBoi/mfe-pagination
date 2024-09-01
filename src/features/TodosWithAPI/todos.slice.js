import { createSelector } from '@app/store/createSelector';
import { callApi } from '@app/services/callApi';
import { api } from './todos.service';

const todoSlice = (set) => ({
  todos: [],
  fetchTodos: async () => {
    const apiObj = api();

    const response = await callApi({ apiDetails: apiObj.TODOS_API.apiDetails });

    set(() => ({ todos: response }));
  },
});

export const useTodos = createSelector(todoSlice);
