import DarkMode from './DarkMode'

const Navbar = () => {
	return (
		<nav className='text-orange-400 dark:text-pink-400  w-full top-0 left-0 h-20 mx-auto z-10'>
			<div className='flex items-center justify-center mx-auto'>
				<div>
					<h1 className=' text-2xl font-bold text-center py-4 '>
						ToDo React TS RTK Query TW
					</h1>
				</div>
				<div className='ml-8 pt-2.5'>
					<DarkMode />
				</div>
			</div>

			<hr className=' border-none h-1.5 bg-orange-400 dark:bg-pink-400  '></hr>
		</nav>
	)
}

export default Navbar
