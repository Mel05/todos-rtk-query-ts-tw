import { getRequestPath } from '../utils/getRequestPath'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { requestPath } = getRequestPath()

export const onrenderApi = createApi({
	reducerPath: 'onrenderApi',
	tagTypes: ['Onrender'],
	baseQuery: fetchBaseQuery({
		baseUrl: requestPath,
	}),

	endpoints: builder => ({
		getCounter: builder.query({
			query: () => `onrender`,

			providesTags: ['Onrender'],
		}),
	}),
})

export const { useGetCounterQuery } = onrenderApi
