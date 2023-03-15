import { configureStore } from '@reduxjs/toolkit'
import sort from './sortSlice'
import update from './updateSlice'
import auth from './authSlice'

import { todosApi } from './todosApi'
import { userApi } from './userApi'

export const store = configureStore({
	reducer: {
		sort,
		update,
		auth,
		[todosApi.reducerPath]: todosApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: getDefaultMiddlware =>
		getDefaultMiddlware()
			.concat(userApi.middleware)
			.concat(todosApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
