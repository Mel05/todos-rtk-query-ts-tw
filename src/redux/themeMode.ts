import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface DarkMode {
	themeNow: string | null
}

const initialState: DarkMode = {
	themeNow: 'light',
}

export const themeModeSlice = createSlice({
	name: 'themeMode',
	initialState,
	reducers: {
		setThemeNow: (state, action: PayloadAction<string>) => {
			state.themeNow = action.payload
		},
	},
})

export const selectThemeMode = (state: RootState) => state.themeMode

export const { setThemeNow } = themeModeSlice.actions

export default themeModeSlice.reducer
