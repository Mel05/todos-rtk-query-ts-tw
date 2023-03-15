import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { selectSort, setCurrentPage } from '../redux/sortSlice'
import { useGetTodosQuery } from '../redux'

import TodoItem from './TodoItem'

interface TodosListProps {
	inputRef: React.RefObject<HTMLInputElement>
}

const TodosList: FC<TodosListProps> = ({ inputRef }) => {
	const dispatch = useAppDispatch()

	const { currentPage, limit, completed } = useAppSelector(selectSort)
	const data = useGetTodosQuery({
		limit,
		currentPage,
		completed,
	})
	console.log(data)
	const { data: todos = [], isLoading } = useGetTodosQuery({
		limit,
		currentPage,
		completed,
	})

	console.log('Длинна', todos.length)
	console.log('currentPage', currentPage)

	const minusPage = () => {
		dispatch(setCurrentPage(currentPage - 1))
	}
	// if (todos.length === 0) {
	// 	minusPage()
	// }

	if (isLoading)
		return (
			<>
				<h1 className='text-center text-2xl mt-20'> Loading... </h1>
			</>
		)

	return (
		<ul className='-todosList px-5 flex-auto mx-auto'>
			{todos?.map(todo => (
				<TodoItem key={todo._id} todo={todo} inputRef={inputRef} />
			))}
		</ul>
	)
}

export default TodosList
