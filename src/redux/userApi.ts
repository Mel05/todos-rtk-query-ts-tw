import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
	reducerPath: 'user',
	tagTypes: ['User'],

	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),

	endpoints: build => ({
		addUser: build.mutation<any, any>({
			query: body => ({
				url: `auth/register`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['User'],
		}),

		loginByName: build.mutation<any, any>({
			query: body => ({
				url: `auth/login`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['User'],
		}),
	}),
})

export const { useAddUserMutation, useLoginByNameMutation } = userApi
