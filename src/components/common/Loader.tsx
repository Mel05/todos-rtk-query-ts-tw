import { ProgressBar } from 'react-loader-spinner'

import { useAppSelector } from '../../hooks/redux'
import { selectThemeMode } from '../../redux/themeMode'

const Loader = () => {
	const { themeNow } = useAppSelector(selectThemeMode)

	const options = [
		{
			icon: <ProgressBar barColor={'#f472b6'} borderColor={'#f472b6'} />,
			text: 'light',
		},
		{
			icon: <ProgressBar barColor={'#18181b'} borderColor={'#18181b'} />,
			text: 'dark',
		},
	]

	return (
		<>
			<div className='flex justify-center mx-auto border-none rounded-2xl w-24 h-8 relative bg-orange-400 dark:bg-zinc-900'>
				<div className='absolute left-2 -top-6'>
					{options?.map(opt => (
						<span key={opt.text}>
							{opt.text !== themeNow ? <span>{opt.icon}</span> : ''}
						</span>
					))}
				</div>
			</div>
		</>
	)
}

export default Loader
