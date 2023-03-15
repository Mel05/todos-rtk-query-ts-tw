//@ts-nocheck
import { FC } from 'react'

import { ITodo } from '../../models/ITodo'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { selectUpdate, setNewTodo, setEdit } from '../../redux/updateSlice'

import { useAddTodoMutation, useUpdateTodoMutation } from '../../redux'
import { selectIsAuth } from '../../redux/authSlice'

interface TextFieldProps {
	inputRef: React.RefObject<HTMLInputElement>
}

const TextField: FC<TextFieldProps> = ({ inputRef }) => {
	const dispatch = useAppDispatch()
	const { newTodo, edit, todoObj } = useAppSelector(selectUpdate)

	const [addProduct] = useAddTodoMutation()
	const [updateProductCompleted] = useUpdateTodoMutation()

	const handleAddProduct = async () => {
		if (edit) {
			await updateProductCompleted({
				...todoObj,
				name: newTodo,
				completed: false,
			} as ITodo).unwrap()
			dispatch(setEdit(false))
			dispatch(setNewTodo(''))
		}

		if (newTodo && !edit) {
			await addProduct({ name: newTodo, completed: false } as ITodo).unwrap()
			dispatch(setNewTodo(''))
			if (inputRef.current) {
				inputRef.current.focus()
			}
		}
	}

	return (
		<div className='-textField mx-auto'>
			<div className=' rounded-2xl p-2  mx-auto mb-3 bg-orange-400 dark:bg-zinc-900'>
				<div className='border rounded-2xl px-3 py-2 border-zinc-900  dark:border-pink-400   '>
					<input
						ref={inputRef}
						className='w-full border-none outline-none bg-transparent'
						placeholder='Enter todo'
						type='text'
						value={newTodo}
						onKeyDown={e => e.key === 'Enter' && handleAddProduct()}
						onChange={e => dispatch(setNewTodo(e.target.value))}
					/>
				</div>
			</div>
			<div className='w-10/12 rounded-2xl mx-auto p-2 bg-orange-400 dark:bg-zinc-900'>
				<button
					className='w-full h-8 rounded-2xl bg-zinc-900 dark:bg-pink-400 font-bold text-lg text-orange-400 dark:text-zinc-900 '
					onClick={handleAddProduct}
				>
					Add
				</button>
			</div>
		</div>
	)
}

export default TextField
