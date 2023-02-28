import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

import { ISort } from './../models/ISort'

const initialState: ISort = {
	currentPage: 1,
	limit: '4',
	completed: '',
}

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload
		},

		setLimit: (state, action: PayloadAction<string>) => {
			state.limit = action.payload
		},

		setCompleted: (state, action: PayloadAction<string>) => {
			state.completed = action.payload
		},
	},
})

export const selectSort = (state: RootState) => state.sort

export const { setCurrentPage, setLimit, setCompleted } = sortSlice.actions

export default sortSlice.reducer
