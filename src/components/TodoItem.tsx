import { FC } from 'react'

import { ITodo } from '../models/ITodo'

import { useDeleteTodoMutation, useUpdateTodoMutation } from '../redux'
import { useAppDispatch } from '../hooks/redux'

import { setEdit, setNewTodo, setTodoObj } from '../redux/updateSlice'

import { BsTrash } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'

import Check from './common/Check'

interface TodoItemProps {
	inputRef: React.RefObject<HTMLInputElement>
	todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo, inputRef }) => {
	const dispatch = useAppDispatch()

	const [updateProductCompleted] = useUpdateTodoMutation()
	const [deleteTodo] = useDeleteTodoMutation()

	const toggleCompleted = async (todo: ITodo) => {
		await updateProductCompleted({
			...todo,
			completed: !todo.completed,
		}).unwrap()
	}

	const handleUpdate = (todo: ITodo) => {
		inputRef.current?.focus()
		dispatch(setNewTodo(todo.name))
		dispatch(setEdit(true))
		dispatch(setTodoObj(todo))
	}

	const handleDeleteTodo = async (event: React.MouseEvent) => {
		event.stopPropagation()

		await deleteTodo(todo).unwrap()
	}

	return (
		<li className='w-full'>
			<span className='flex items-center justify-between border rounded-2xl mb-3 p-3 bg-orange-300  border-orange-400 hover:border-zinc-900 dark:bg-zinc-800 dark:border-zinc-900 dark:hover:border-pink-400 '>
				<span
					className='w-full flex cursor-pointer pr-3 mr-2 overflow-hidden'
					onClick={() => toggleCompleted(todo)}
				>
					<Check isCompleted={todo.completed} />

					<span
						className={`select-none ${todo.completed ? 'line-through' : ''}`}
					>
						{todo.name}
					</span>
				</span>

				<span className='flex'>
					<CiEdit
						size={22}
						className='mr-3 text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-pink-400  transition-colors ease-in-out duration-300 cursor-pointer'
						onClick={() => handleUpdate(todo)}
					/>

					<BsTrash
						size={22}
						className='mr-1 text-zinc-500 hover:text-red-800 transition-colors ease-in-out duration-300 cursor-pointer'
						onClick={handleDeleteTodo}
					/>
				</span>
			</span>
		</li>
	)
}

export default TodoItem
