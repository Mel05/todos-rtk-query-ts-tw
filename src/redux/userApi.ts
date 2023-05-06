import { getRequestPath } from '../utils/getRequestPath'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IUser } from './../models/IUser'

const { requestPath } = getRequestPath()

export const userApi = createApi({
	reducerPath: 'user',
	tagTypes: ['User'],

	baseQuery: fetchBaseQuery({
		baseUrl: requestPath,
		prepareHeaders: headers => {
			const token = window.localStorage.getItem('token')

			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}

			return headers
		},
	}),

	endpoints: build => ({
		addUser: build.mutation<unknown, IUser>({
			query: body => ({
				url: `auth/register`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['User'],
		}),

		getById: build.query<IUser, unknown>({
			query: () => ({
				url: `/auth/me`,
			}),
			providesTags: ['User'],
		}),

		// loginByName: build.mutation<unknown, IUser>({
		// 	query: body => ({
		// 		url: `auth/login`,
		// 		method: 'POST',
		// 		body,
		// 	}),
		// 	invalidatesTags: ['User'],
		// }),
	}),
})

export const { useAddUserMutation, useGetByIdQuery } = userApi
