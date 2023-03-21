import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../hooks/redux'
import { setIsAuth } from '../redux/authSlice'

import { useAddUserMutation } from '../redux/userApi'

import TextWhenLoading from '../components/common/TextWhenLoading'

const Login: FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setIsAuth(false))
	}, [])

	const [inputValue, setInputValue] = useState('')

	const [addUser, { error, isLoading, isError }] = useAddUserMutation()

	const errorAny: any = error
	const errorFetch = errorAny?.status
	let errorUser = ''

	if (errorFetch === 'FETCH_ERROR') {
		errorUser = 'Ошибка подключения, зайди позже'
	} else if (errorFetch === 400) {
		errorUser = 'Введите пожалуйсто имя 3 символа'
	}

	const handleAddUser = async () => {
		const response = (await addUser({
			nickName: inputValue.toLowerCase().trim(),
		})) as any

		try {
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

	if (isLoading) {
		return <TextWhenLoading />
	}

	return (
		<div className='-login w-full mx-auto mt-8 px-3 z-10 md:max-w-[800px] md:w-3/4 md:mt-20 md:px-28'>
			<div className='-userField relative mx-auto z-10'>
				{isError && (
					<div className='absolute -top-7 -left-3 w-max border-none rounded-2xl mx-auto  px-2 bg-zinc-50'>
						<h1 className=' text-xs font-bold text-red-600 '>{errorUser}</h1>
					</div>
				)}
				<div className='w-full rounded-2xl p-2  mx-auto mb-3 bg-orange-400 dark:bg-zinc-900'>
					<div className='border rounded-2xl h-12 px-3 py-2.5 border-zinc-900  dark:border-pink-400   '>
						<input
							className='w-full border-none outline-none bg-transparent   placeholder:text-zinc-900 dark:placeholder:text-pink-400'
							placeholder='Введи свое имя'
							type='text'
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
