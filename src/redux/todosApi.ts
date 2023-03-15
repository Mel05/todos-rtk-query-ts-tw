//@ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ITodo } from './../models/ITodo'
import { ISort } from './../models/ISort'

export const todosApi = createApi({
	reducerPath: 'todosApi',
	tagTypes: ['Todos'],

	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8080/',
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
				url: `/postsId`,
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

		getTodoById: build.query<ITodo[], number>({
			query: _id => ({
				url: `/posts/${_id}`,
				params: {
					_id,
				},
			}),
			providesTags: ['Todos'],
		}),

		addTodo: build.mutation<ITodo, ITodo>({
			query: body => ({
				url: `posts`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Todos'],
		}),

		updateTodo: build.mutation<ITodo, ITodo>({
			query: body => ({
				// url: `posts/`,
				url: `posts/${body._id}`,
				method: 'PUT',
				body,
			}),

			invalidatesTags: ['Todos'],
		}),

		exampleUpdateTodo: build.mutation<ITodo, ITodo>({
			query: body => ({
				url: `posts/${body._id}`,
				method: 'PATCH',
				body,
			}),

			invalidatesTags: ['Todos'],
		}),

		deleteTodo: build.mutation<ITodo, ITodo>({
			query: body => ({
				url: `posts/${body._id}`,
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
