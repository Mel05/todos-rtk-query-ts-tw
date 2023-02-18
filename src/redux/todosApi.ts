import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITodo } from './../models/ITodo'

export const todosApi = createApi({
	reducerPath: 'todosApi',
	tagTypes: ['Todos'],

	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),

	endpoints: build => ({
		getTodos: build.query<ITodo[], string>({
			query: (limit: string = '') => ({
				url: `/todos`,
				params: {
					_limit: limit,
				},
			}),
			providesTags: ['Todos'],
		}),

		addTodo: build.mutation<ITodo, ITodo>({
			query: body => ({
				url: `todos`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Todos'],
		}),

		updateTodo: build.mutation<ITodo, ITodo>({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body,
			}),

			invalidatesTags: ['Todos'],
		}),

		deleteTodo: build.mutation<ITodo, ITodo>({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Todos'],
		}),
	}),
})

export const {
	useGetTodosQuery,
	useAddTodoMutation,
	useDeleteTodoMutation,
	useUpdateTodoMutation,
} = todosApi
