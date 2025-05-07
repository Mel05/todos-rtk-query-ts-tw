import { useGetCounterQuery } from '../redux'

const Onrender = () => {
	const { data, isLoading } = useGetCounterQuery('', {
		pollingInterval: 145000,
	})

	const counter = data?.counter | 0

	return (
		<div className='-main w-full h-full flex justify-center items-center pb-20 mt-1  mb-auto mx-auto px-3  md:max-w-2xl md:mt-8 overflow-hidden z-10'>
			<span className='flex basis-2/3  border rounded-2xl h-14 my-2 p-3 bg-orange-300  border-orange-400 hover:border-zinc-900 dark:bg-zinc-800 dark:border-zinc-900 dark:hover:border-pink-400 overflow-hidden'>
				<>
					<span className='m-auto'>Спам на сервер Onrender-а : {counter}</span>
				</>
			</span>
		</div>
	)
}

export default Onrender
