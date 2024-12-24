import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import MainPage from '../pages/MainPage'
import TrendingPage from '../pages/TrendingPage'
import Layout from '../components/Layout/Layout'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../shared/api/query-client'

export function App() {
	
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Layout />}>
						
							<Route path='/' element={<MainPage />} />
							<Route path='/trending' element={<TrendingPage />} />
						</Route>
						<Route path='*' element={<ErrorPage />} />
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</>
	)
}
