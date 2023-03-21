import { FC } from 'react'

import { ITodo } from '../../models/ITodo'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { selectUpdate, setInputValue, setEdit } from '../../redux/updateSlice'

import { useAddTodoMutation, useUpdateTodoMutation } from '../../redux'
import Loader from './Loader'

interface TextFieldProps {
	inputRef: React.RefObject<HTMLInputElement>
}

const TextField: FC<TextFieldProps> = ({ inputRef }) => {
	const dispatch = useAppDispatch()
	const { inputValue, edit, todoObj } = useAppSelector(selectUpdate)

	const [addTodo, { isLoading: isAddTodoLoading }] = useAddTodoMutation()
	const [updateTodoCompleted, { isLoading: isUpdateLoading }] =
		useUpdateTodoMutation()

	const handleAddTodo = async () => {
		if (edit) {
			await updateTodoCompleted({
				...todoObj,
				title: inputValue,
				completed: false,
			} as ITodo)
			dispatch(setEdit(false))
			dispatch(setInputValue(''))
		}

		if (inputValue && !edit) {
			await addTodo({ title: inputValue, completed: false } as ITodo)
			dispatch(setInputValue(''))
			if (inputRef.current) {
				inputRef.current.focus()
			}
		}
	}

	return (
		<div className='-textField relative w-full mx-auto z-10'>
			<div className=' rounded-2xl mx-auto bg-orange-400 dark:bg-zinc-900'>
				<div className='border rounded-2xl h-12 px-3 py-2.5 border-zinc-900  dark:border-pink-400   '>
					{isUpdateLoading ? (
						<Loader />
					) : (
						<>
							{isAddTodoLoading ? (
								<Loader />
							) : (
								<input
									ref={inputRef}
									className='w-full border-none outline-none bg-transparent placeholder:text-zinc-900 dark:placeholder:text-pink-400'
									placeholder='Введите задачу'
									type='text'
									value={inputValue}
									onKeyDown={e => e.key === 'Enter' && handleAddTodo()}
									onChange={e => dispatch(setInputValue(e.target.value))}
								/>
							)}
						</>
					)}
				</div>
			</div>
			<div className='w-10/12 rounded-2xl mx-auto p-3 bg-orange-400 dark:bg-zinc-900'>
				<button
					className='w-full h-8 rounded-2xl bg-zinc-900 dark:bg-pink-400 font-bold text-lg text-orange-400 dark:text-zinc-900 '
					onClick={handleAddTodo}
				>
					Add
				</button>
			</div>
		</div>
	)
}

export default TextField
