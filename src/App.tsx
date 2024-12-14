import { BrowserRouter, Routes, Route } from "react-router-dom"
import ErrorPage from './pages/ErrorPage'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<h1>Home</h1>} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
