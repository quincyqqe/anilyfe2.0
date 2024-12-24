import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

export default function Layout() {
	return (
		<>
			<Header />
			<Sidebar />
			<div className='main-content'>
				<Outlet />
			</div>
		</>
	)
}
