import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { selectIsAuth, setIsAuth } from '../redux/authSlice'

import { useGetByIdQuery } from '../redux'

import DarkMode from './common/DarkMode'

const Navbar = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const { isAuth } = useAppSelector(selectIsAuth)

	const { data } = useGetByIdQuery(null, {
		skip: !isAuth,
	})

	let userNickName = ''

	if (data) {
		userNickName = data.nickName
			.slice(0, 1)
			.toUpperCase()
			.concat(data.nickName.slice(1, data.nickName.length).toLocaleLowerCase())
	}

	const handleLogout = () => {
		window.localStorage.removeItem('token')
		dispatch(setIsAuth(false))
		navigate(`/`)
		window.location.reload()
	}

	return (
		<nav className='-navbar top-0 left-0 w-full h-[5.9rem] mt-auto bg-orange-400 dark:bg-zinc-900 z-10'>
			<hr className='border-none h-0.5 bg-zinc-900 dark:bg-pink-400' />
			<div className='flex items-center justify-center pt-2 '>
				<div>
					<h1 className=' text-2xl font-bold '>What's to do?</h1>
				</div>

				<div className='w-10 h-10 rounded-xl text-center ml-4  pt-1 border border-orange-400 hover:bg-orange-300 hover:border-zinc-900 dark:border-zinc-900 dark:hover:border-pink-400 dark:hover:bg-zinc-800'>
					<DarkMode />
				</div>
			</div>

			<div className='flex items-center justify-center h-6 pb-0.5'>
				{isAuth && (
					<h1
						className='border-none rounded-2xl text-base font-bold px-2 bg-zinc-900 dark:bg-pink-400 text-orange-400 dark:text-zinc-900 cursor-pointer'
						onClick={() => handleLogout()}
					>
						{userNickName}
					</h1>
				)}
			</div>

			<hr className='border-none h-0.5 mt-1 bg-zinc-900 dark:bg-pink-400' />
			<hr className='border-none h-1.5 mt-1 bg-zinc-900 dark:bg-pink-400' />
		</nav>
	)
}

export default Navbar
