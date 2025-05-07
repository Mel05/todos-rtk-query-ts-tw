import { Route, Routes } from 'react-router-dom'

import { ReactComponent as Bigpic } from '../img/bg.svg'

import Navbar from './Navbar'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Pagination from './common/Pagination'
import Footer from './Footer'

/// Костыль для Onrender-а
import Onrender from '../pages/Onrender'

const Wrapper = () => {
	return (
		<div className='-wrapper relative w-screen h-screen grid grid-rows-[auto_1fr_auto]  bg-orange-400 text-zinc-900 dark:bg-zinc-900 dark:text-pink-400 overflow-hidden landscape:h-auto md:landscape:h-screen'>
			<Bigpic className='absolute left-0 top-0 w-full h-full object-cover fill-zinc-900 dark:fill-pink-400    z-0' />
			<Navbar />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/:userNickName' element={<Main />} />
				<Route path='/onrender' element={<Onrender />} />
			</Routes>
			<Pagination />
			<Footer />
		</div>
	)
}

export default Wrapper
