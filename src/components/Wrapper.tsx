import Main from '../pages/Main'
import Navbar from './Navbar'
import { ReactComponent as Bigpic } from '../img/bg.svg'
import Footer from './Footer'
import Pagination from './common/Pagination'

const Wrapper = () => {
	return (
		<div className='-wrapper w-screen h-screen grid grid-rows-[auto_1fr_auto] overflow-hiden bg-orange-400 text-zinc-900 dark:bg-zinc-900 dark:text-pink-400'>
			<Bigpic className='absolute left-0 top-0 z-0 w-full h-full object-cover fill-zinc-900 dark:fill-pink-400 ' />
			<Navbar />
			<Main />
			<Pagination />
			<Footer />
		</div>
	)
}

export default Wrapper
