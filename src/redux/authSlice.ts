import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

import { IUpdate } from './../models/IUpdate'

const initialState = {
	data: null,
	token: '',
	status: 'loading',
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload
		},
	},
})

export const selectIsAuth = (state: RootState) => state.auth

export const { setToken } = authSlice.actions

export default authSlice.reducer
