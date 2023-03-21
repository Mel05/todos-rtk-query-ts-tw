import { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { selectSort, setCurrentPage } from '../redux/sortSlice'

import { useGetTodosQuery } from '../redux'

import TodoItem from './TodoItem'
import TextWhenLoading from './common/TextWhenLoading'

interface TodosListProps {
	inputRef: React.RefObject<HTMLInputElement>
}

const TodosList: FC<TodosListProps> = ({ inputRef }) => {
	const dispatch = useAppDispatch()

	const { currentPage, limit, completed } = useAppSelector(selectSort)

	const { data: todos = [], isLoading } = useGetTodosQuery({
		limit,
		currentPage,
		completed,
	})

	useEffect(() => {
		if (currentPage > 1 && todos.length === 0) {
			dispatch(setCurrentPage(currentPage - 1))
		}
	}, [todos.length])

	if (isLoading) return <TextWhenLoading />

	return (
		<div className=''>
			<ul className='-todosList px-5 flex-auto mx-auto'>
				{todos?.map(todo => (
					<TodoItem key={todo._id} todo={todo} inputRef={inputRef} />
				))}
			</ul>
		</div>
	)
}

export default TodosList
