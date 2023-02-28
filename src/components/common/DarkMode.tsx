import { useEffect, useState } from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

const DarkMode = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
	)
	const element = document.documentElement
	const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

	const options = [
		{
			icon: <BsSunFill size={30} className='' />,
			text: 'light',
		},
		{
			icon: <BsMoonFill size={28} className='' />,
			text: 'dark',
		},
	]

	function onWindowMatch() {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && darkQuery.matches)
		) {
			element.classList.add('dark')
		} else {
			element.classList.remove('dark')
		}
	}
	onWindowMatch()

	useEffect(() => {
		switch (theme) {
			case 'dark':
				element.classList.add('dark')
				localStorage.setItem('theme', 'dark')
				break

			case 'light':
				element.classList.remove('dark')
				localStorage.setItem('theme', 'light')
				break

			default:
				localStorage.removeItem('theme')
				break
		}
	}, [theme])

	return (
		<>
			{options?.map(opt => (
				<span key={opt.text}>
					{opt.text !== theme ? (
						<button
							onClick={() => {
								setTheme(opt.text)
							}}
						>
							{opt.icon}
						</button>
					) : (
						''
					)}
				</span>
			))}
		</>
	)
}

export default DarkMode
