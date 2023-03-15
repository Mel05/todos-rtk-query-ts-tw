import DarkMode from './common/DarkMode'

const Navbar = () => {
	return (
		<nav className='-navbar top-0 left-0 w-full h-20 bg-orange-400 dark:bg-zinc-900 z-10'>
			<hr className='border-none h-0.5 bg-zinc-900 dark:bg-pink-400' />
			<div className='flex items-center justify-center'>
				<div>
					<h1 className=' text-2xl font-bold py-4'>What's to do?</h1>
				</div>
				<div className='w-10 h-10 rounded-xl  text-center ml-4 pt-1 border border-orange-400 hover:bg-orange-300 hover:border-zinc-900 dark:border-zinc-900 dark:hover:border-pink-400 dark:hover:bg-zinc-800'>
					<DarkMode />
				</div>
			</div>

			<hr className='border-none h-0.5 bg-zinc-900 dark:bg-pink-400' />
			<hr className='border-none h-1.5 mt-1 bg-zinc-900 dark:bg-pink-400' />
		</nav>
	)
}

export default Navbar
