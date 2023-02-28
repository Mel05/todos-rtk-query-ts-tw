import { useRef } from 'react'

import TextField from '../components/common/TextField'
import SelectorField from '../components/common/SelectorField'
import TodosList from '../components/TodosList'

const Main = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<div className='-main w-full mx-auto mt-5 px-10 z-10 md:max-w-[800px] md:w-3/4 md:mt-20 md:px-28'>
			<TextField inputRef={inputRef} />

			<SelectorField />

			<TodosList inputRef={inputRef} />
		</div>
	)
}

export default Main
