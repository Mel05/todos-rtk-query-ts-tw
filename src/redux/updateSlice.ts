import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

import { IUpdate } from './../models/IUpdate'

const initialState: IUpdate = {
	newTodo: '',
	edit: false,
	todoObj: {},
}

export const updateSlice = createSlice({
	name: 'update',
	initialState,
	reducers: {
		setNewTodo: (state, action: PayloadAction<string>) => {
			state.newTodo = action.payload
		},

		setEdit: (state, action: PayloadAction<boolean>) => {
			state.edit = action.payload
		},

		setTodoObj: (state, action: PayloadAction<object>) => {
			state.todoObj = action.payload
		},
	},
})

export const selectUpdate = (state: RootState) => state.update

export const { setNewTodo, setEdit, setTodoObj } = updateSlice.actions

export default updateSlice.reducer
