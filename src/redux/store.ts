import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './todosApi'

export const store = configureStore({
	reducer: {
		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: getDefaultMiddlware =>
		getDefaultMiddlware().concat(todosApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
