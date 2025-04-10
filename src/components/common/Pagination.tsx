import { FC } from 'react'
import _ from 'lodash'

import { BiChevronDown } from 'react-icons/bi'

import { useGetLengthTodosQuery } from '../../redux'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { selectSort, setCurrentPage } from '../../redux/sortSlice'
import { selectIsAuth } from '../../redux/authSlice'
import Loader from './Loader'

const Pagination: FC = () => {
	const dispatch = useAppDispatch()

	const { isAuth } = useAppSelector(selectIsAuth)

	const { currentPage, limit, completed } = useAppSelector(selectSort)

	const { data: todosLength = [] } = useGetLengthTodosQuery(completed, {
		skip: !isAuth,
	})

	const totalNumTodos = todosLength?.length || 1
	const todosOnPage = Number(limit) || 1

	const handlePageChange = (page: number) => {
		dispatch(setCurrentPage(page))
	}

	const numOfPages = Math.ceil(totalNumTodos / todosOnPage)
	const pages = _.range(1, numOfPages + 1)

	if (numOfPages === 1 || numOfPages === 0) return null

	return (
		<ul className='-pagination w-1/4 h-7 flex justify-between mb-2 mx-auto z-10'>
			<li>
				<button
					className='w-5 h-5 rounded-md border border-zinc-900 dark:border-pink-400 cursor-pointer'
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
				>
					<BiChevronDown size={20} className='rotate-90' />
				</button>
			</li>

			{pages?.map(page => (
				<li
					key={page}
					className={
						`relative w-5 h-5 text-center rounded-md border border-zinc-900 dark:border-pink-400 cursor-pointer select-none` +
						(page === currentPage
							? '--selected text-orange-400 dark:text-zinc-900 bg-zinc-900 dark:bg-pink-400 select-none'
							: '')
					}
					onClick={() => {
						handlePageChange(page)
					}}
				>
					<span className='absolute -top-0.5 left-1 font-bold'>{page}</span>
				</li>
			))}

			<li>
				<button
					className='w-5 h-5 rounded-md border border-zinc-900 dark:border-pink-400 cursor-pointer'
					disabled={numOfPages <= currentPage}
					onClick={() => handlePageChange(currentPage + 1)}
				>
					<BiChevronDown size={20} className='-rotate-90' />
				</button>
			</li>
		</ul>
	)
}

export default Pagination
