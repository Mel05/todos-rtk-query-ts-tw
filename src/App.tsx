import Main from './Main'
import Navbar from './components/Navbar'
import { ReactComponent as Bigpic } from './img/bg.svg'
import Footer from './components/Footer'

function App() {
	return (
		<div className=' bg-zinc-900 h-screen grid grid-rows-[auto_1fr_auto]'>
			<Bigpic className='absolute left-0 top-0 z-0 w-full h-full object-cover fill-orange-400 dark:fill-pink-400 ' />
			<Navbar />
			<Main />
			<Footer />
		</div>
	)
}

export default App
