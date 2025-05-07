import { configureStore } from '@reduxjs/toolkit'

import sort from './sortSlice'
import update from './updateSlice'
import auth from './authSlice'
import themeMode from './themeMode'

import { todosApi } from './todosApi'
import { userApi } from './userApi'

/// Костыль для Onrender-а
import { onrenderApi } from './onrenderApi'

export const store = configureStore({
	reducer: {
		sort,
		update,
		auth,
		themeMode,
		[todosApi.reducerPath]: todosApi.reducer,
		[userApi.reducerPath]: userApi.reducer,

		/// Костыль для Onrender-а
		[onrenderApi.reducerPath]: onrenderApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(userApi.middleware)
			.concat(todosApi.middleware)

			/// Костыль для Onrender-а
			.concat(onrenderApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
