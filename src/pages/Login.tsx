import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../hooks/redux'
import { setIsAuth } from '../redux/authSlice'

import { useAddUserMutation } from '../redux/userApi'

const Login: FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setIsAuth(false))
	}, [])

	const [inputValue, setInputValue] = useState('')

	const [addUser] = useAddUserMutation()

	const handleAddUser = async () => {
		try {
			const response = (await addUser({
				nickName: inputValue.toLowerCase().trim(),
			})) as any

			setInputValue('')

			if (response.data.token) {
				window.localStorage.setItem('token', response.data.token)
				dispatch(setIsAuth(true))
				navigate(`/${inputValue.toLowerCase().trim()}`)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='-main w-full mx-auto mt-5 px-10 z-10 md:max-w-[800px] md:w-3/4 md:mt-20 md:px-28'>
			<div className='-userField mx-auto z-10'>
				<div className=' rounded-2xl p-2  mx-auto mb-3 bg-orange-400 dark:bg-zinc-900'>
					<div className='border rounded-2xl px-3 py-2 border-zinc-900  dark:border-pink-400   '>
						<input
							className='w-full border-none outline-none bg-transparent'
							placeholder='Enter your name'
							type='text'
							name='piu'
							value={inputValue}
							onKeyDown={e => e.key === 'Enter' && handleAddUser()}
							onChange={e => setInputValue(e.target.value)}
						/>
					</div>
				</div>
				<div className='w-10/12 rounded-2xl mx-auto p-2 bg-orange-400 dark:bg-zinc-900'>
					<button
						className='w-full h-8 rounded-2xl bg-zinc-900 dark:bg-pink-400 font-bold text-lg text-orange-400 dark:text-zinc-900 '
						onClick={() => handleAddUser()}
					>
						PiU PiU
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
