import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

import { IAuth } from './../models/IAuth'

const initialState: IAuth = {
	isAuth: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
	},
})

export const selectIsAuth = (state: RootState) => state.auth

export const { setIsAuth } = authSlice.actions

export default authSlice.reducer
