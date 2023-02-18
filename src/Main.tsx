import { useRef, useState } from 'react'
import {
	useGetTodosQuery,
	useAddTodoMutation,
	useDeleteTodoMutation,
	useUpdateTodoMutation,
} from './redux'

import { ITodo } from './models/ITodo'

import SelectorField from './components/SelectorField'
import InputField from './components/InputField'
import TodosList from './components/TodosList'

const Main = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [edit, setEdit] = useState(false)
	const [newTodo, setNewTodo] = useState('')
	const [todoArr, setTodoArr] = useState<ITodo>()
	const [count, setCount] = useState('')

	const { data = [], isLoading } = useGetTodosQuery(count)

	const [updateProductCompleted] = useUpdateTodoMutation()
	const [deleteProduct] = useDeleteTodoMutation()

	const toggleCompleted = async (todo: ITodo) => {
		const item = data.find(item => item.id === todo.id)

		if (item) {
			await updateProductCompleted({
				...item,
				completed: !item.completed,
			}).unwrap()
		}
	}

	const handleUpdate = async (todo: ITodo) => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
		setNewTodo(todo.name)
		setEdit(true)
		setTodoArr(todo)
	}

	const handleDeleteProduct = async (todo: ITodo) => {
		await deleteProduct(todo).unwrap()
	}

	if (isLoading)
		return (
			<>
				<h1 className='text-orange-400 dark:text-pink-400 text-center text-2xl mt-20'>
					Loading...
				</h1>
			</>
		)

	return (
		<div className='text-orange-400 dark:text-pink-400 w-2/3 mx-auto mt-20  z-10'>
			<InputField
				inputRef={inputRef}
				newTodo={newTodo}
				setNewTodo={setNewTodo}
				edit={edit}
				setEdit={setEdit}
				todoArr={todoArr}
			/>
			<SelectorField setCount={count => setCount(count)} />

			<TodosList
				data={data}
				toggleCompleted={toggleCompleted}
				handleUpdate={handleUpdate}
				handleDeleteProduct={handleDeleteProduct}
			/>
		</div>
	)
}

export default Main
