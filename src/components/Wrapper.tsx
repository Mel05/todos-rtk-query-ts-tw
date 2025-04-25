import { Route, Routes } from 'react-router-dom'

import { ReactComponent as Bigpic } from '../img/bg.svg'

import Navbar from './Navbar'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Pagination from './common/Pagination'
import Footer from './Footer'

const Wrapper = () => {
	return (
		<div className='-wrapper w-screen h-screen grid grid-rows-[auto_1fr_auto]  bg-orange-400 text-zinc-900 dark:bg-zinc-900 dark:text-pink-400 overflow-hidden landscape:h-auto md:landscape:h-screen'>
			<Bigpic className='absolute left-0 top-0 w-full h-full object-cover fill-zinc-900 dark:fill-pink-400 landscape:h-auto landscape:w-auto  md:landscape:w-full md:landscape:h-full z-0' />
			<Navbar />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/:userNickName' element={<Main />} />
			</Routes>

			<Pagination />
			<Footer />
		</div>
	)
}

export default Wrapper
