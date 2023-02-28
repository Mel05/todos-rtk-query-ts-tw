import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ITodo } from './../models/ITodo'
import { ISort } from './../models/ISort'

export const todosApi = createApi({
	reducerPath: 'todosApi',
	tagTypes: ['Todos'],

	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3010/' }),

	endpoints: build => ({
		getTodos: build.query<ITodo[], ISort>({
			query: ({ limit, currentPage, completed }) => ({
				url: `/todos`,
				params: {
					_limit: limit,
					_page: currentPage,
					completed_like: completed,
				},
			}),
			providesTags: ['Todos'],
		}),

		getLengthTodos: build.query<ITodo[], string>({
			query: completed => ({
				url: `/todos`,
				params: {
					completed_like: completed,
				},
			}),
			providesTags: ['Todos'],
		}),

		getTodoById: build.query<ITodo[], number>({
			query: id => ({
				url: `/todos/${id}`,
				params: {
					id,
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
	useGetLengthTodosQuery,
	useGetTodoByIdQuery,
	useAddTodoMutation,
	useDeleteTodoMutation,
	useUpdateTodoMutation,
} = todosApi
