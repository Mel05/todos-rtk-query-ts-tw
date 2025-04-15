import { useEffect, useRef } from 'react'

import { useAppDispatch } from '../hooks/redux'
import { setIsAuth } from '../redux/authSlice'

import TextField from '../components/common/TextField'
import SelectorField from '../components/common/SelectorField'
import TodosList from '../components/TodosList'

const Main = () => {
	const dispatch = useAppDispatch()
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputRef.current?.focus()
		dispatch(setIsAuth(true))
	}, [])

	return (
		<div className='-main w-full flex flex-col pb-20 mt-1  mb-auto mx-auto px-3  md:max-w-2xl md:mt-8 overflow-hidden z-10'>
			<TextField inputRef={inputRef} />

			<SelectorField />

			<TodosList inputRef={inputRef} />
		</div>
	)
}

export default Main
