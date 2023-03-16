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
		<div className='-main w-full mx-auto mt-5 px-10 z-10 md:max-w-[800px] md:w-3/4 md:mt-20 md:px-28'>
			<TextField inputRef={inputRef} />

			<SelectorField />

			<TodosList inputRef={inputRef} />
		</div>
	)
}

export default Main
