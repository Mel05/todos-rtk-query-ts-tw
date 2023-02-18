import { FC } from 'react'
import { ITodo } from '../models/ITodo'
import { useAddTodoMutation, useUpdateTodoMutation } from '../redux'

interface InputFieldProps {
	inputRef: any
	newTodo: string
	setNewTodo: (newTodo: string) => void
	edit: boolean
	setEdit: (edit: boolean) => void
	todoArr: ITodo | undefined
}

const InputField: FC<InputFieldProps> = ({
	inputRef,
	edit,
	setEdit,
	newTodo,
	setNewTodo,
	todoArr,
}) => {
	const [updateProductCompleted] = useUpdateTodoMutation()
	const [addProduct] = useAddTodoMutation()

	const handleAddProduct = async () => {
		if (edit) {
			await updateProductCompleted({
				...todoArr,
				name: newTodo,
			} as ITodo).unwrap()
			setEdit(false)
			setNewTodo('')
		}

		if (newTodo && !edit) {
			await addProduct({ name: newTodo, completed: false } as ITodo).unwrap()
			setNewTodo('')
			if (inputRef.current) {
				inputRef.current.focus()
			}
		}
	}

	return (
		<div className='mx-auto mb-8 px-10'>
			<div className='bg-zinc-900 rounded-2xl p-2 max-w-xs mx-auto mb-3'>
				<div className=' flex items-center justify-between mx-auto max-w-xs  rounded-2xl border-orange-400 dark:border-pink-400  border px-3 py-2 '>
					<input
						ref={inputRef}
						className='w-full border-none outline-none bg-transparent'
						placeholder='Enter todo'
						type='text'
						value={newTodo}
						onKeyDown={e => e.key === 'Enter' && handleAddProduct()}
						onChange={e => setNewTodo(e.target.value)}
					/>
				</div>
			</div>
			<div className='bg-zinc-900 p-2 rounded-2xl w-64 mx-auto '>
				<button
					className='w-60 h-8 rounded-2xl bg-orange-400 dark:bg-pink-400  text-zinc-900  '
					onClick={handleAddProduct}
				>
					Add
				</button>
			</div>
		</div>
	)
}

export default InputField
