import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ITodo } from './../models/ITodo'
import { ISort } from './../models/ISort'

export const todosApi = createApi({
	reducerPath: 'todosApi',
	tagTypes: ['Todos'],
	// http://localhost:8080 //'https://todos-server-supermadmel.onrender.com'
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://todos-server-supermadmel.onrender.com',
		prepareHeaders: (headers, { getState }) => {
			// const token = (getState() as RootState).auth.token
			const token = window.localStorage.getItem('token')

			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}

			return headers
		},
	}),

	endpoints: build => ({
		getTodos: build.query<ITodo[], ISort>({
			query: ({ limit, currentPage, completed }) => ({
				url: `/todosId`,
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
				url: `/lengthId`,
				params: {
					completed_like: completed,
				},
			}),
			providesTags: ['Todos'],
		}),

		addTodo: build.mutation<ITodo, ITodo>({
			query: body => ({
				url: `todo`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Todos'],
		}),

		updateTodo: build.mutation<ITodo, ITodo>({
			query: body => ({
				url: `todo/${body._id}`,
				method: 'PUT',
				body,
			}),

			invalidatesTags: ['Todos'],
		}),

		deleteTodo: build.mutation<ITodo, ITodo>({
			query: body => ({
				url: `todo/${body._id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Todos'],
		}),

		// getTodoById: build.query<ITodo[], number>({
		// 	query: _id => ({
		// 		url: `/posts/${_id}`,
		// 		params: {
		// 			_id,
		// 		},
		// 	}),
		// 	providesTags: ['Todos'],
		// }),
	}),
})

export const {
	useGetTodosQuery,
	useGetLengthTodosQuery,
	useAddTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation,
} = todosApi
