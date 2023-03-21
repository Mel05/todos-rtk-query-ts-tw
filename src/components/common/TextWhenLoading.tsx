import Loader from './Loader'

const TextWhenLoading = () => {
	return (
		<div className='-login w-full mx-auto mt-5 px-10 z-10  md:max-w-[800px] md:w-3/4 md:mt-20 md:px-28'>
			<div className='text-center z-10'>
				<div className='w-max border-none rounded-2xl mx-auto  px-2 bg-orange-400 dark:bg-zinc-900 '>
					<h1 className=' text-2xl font-bold '>Идет загрузка,</h1>
				</div>
				<div className='w-max border-none rounded-2xl mx-auto mt-2 px-2 bg-orange-400 dark:bg-zinc-900 '>
					<h3 className=' text-xl font-bold '>Серверочки далеко</h3>
				</div>
				<div className='w-max border-none rounded-2xl mx-auto mt-2 mb-2 px-2 bg-orange-400 dark:bg-zinc-900 '>
					<h3 className=' text-xl font-bold '>поэтому так долго</h3>
				</div>

				<Loader />

				<div className='w-max border-none rounded-2xl mx-auto mt-2 px-2 bg-orange-400 dark:bg-zinc-900 '>
					<h3 className=' text-xl font-bold '>извините</h3>
				</div>
			</div>
		</div>
	)
}

export default TextWhenLoading
