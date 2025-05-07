import { FC } from 'react'

import { ITodo } from '../models/ITodo'

import { useDeleteTodoMutation, useUpdateTodoMutation } from '../redux'
import { useAppDispatch } from '../hooks/redux'

import { setEdit, setInputValue, setTodoObj } from '../redux/updateSlice'

import { BsTrash } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'

import Check from './common/Check'
import Loader from './common/Loader'

interface TodoItemProps {
	inputRef: React.RefObject<HTMLInputElement>
	todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo, inputRef }) => {
	const dispatch = useAppDispatch()

	const [updateTodoCompleted, { isLoading: isUpdateLoading }] =
		useUpdateTodoMutation()
	const [deleteTodo, { isLoading: isDeleteLoading }] = useDeleteTodoMutation()

	const toggleCompletedTodo = async (todo: ITodo) => {
		await updateTodoCompleted({
			...todo,
			completed: !todo.completed,
		})
	}

	const handleUpdateTodo = (todo: ITodo) => {
		inputRef.current?.focus()
		dispatch(setInputValue(todo.title))
		dispatch(setEdit(true))
		dispatch(setTodoObj(todo))
	}

	const handleDeleteTodo = async (event: React.MouseEvent) => {
		event.stopPropagation()

		await deleteTodo(todo)
	}

	return (
		<li className='w-full'>
			<span className='flex items-center justify-between border rounded-2xl h-14 my-2 p-3 bg-orange-300  border-orange-400 hover:border-zinc-900 dark:bg-zinc-800 dark:border-zinc-900 dark:hover:border-pink-400 overflow-hidden'>
				{isDeleteLoading ? (
					<Loader />
				) : (
					<>
						{isUpdateLoading ? (
							<Loader />
						) : (
							<>
								<span
									className='cursor-pointer'
									onClick={() => toggleCompletedTodo(todo)}
								>
									<Check isCompleted={todo.completed} />
								</span>
								<span
									className='w-full flex cursor-pointer pr-3 mr-2 leading-none'
									onClick={() => toggleCompletedTodo(todo)}
								>
									<span
										className={`select-none ${
											todo.completed ? 'line-through' : ''
										}`}
									>
										{todo.title}
									</span>
								</span>

								<span className='flex'>
									<CiEdit
										size={22}
										className='mr-3 text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-pink-400  transition-colors ease-in-out duration-300 cursor-pointer'
										onClick={() => handleUpdateTodo(todo)}
									/>

									<BsTrash
										size={22}
										className='mr-1 text-zinc-500 hover:text-red-800 transition-colors ease-in-out duration-300 cursor-pointer'
										onClick={handleDeleteTodo}
									/>
								</span>
							</>
						)}
					</>
				)}
			</span>
		</li>
	)
}

export default TodoItem
