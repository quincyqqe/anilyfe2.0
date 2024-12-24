import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<NextUIProvider>
			<NextThemesProvider
				defaultTheme='dark'
				attribute='class'
				themes={['blue', 'rose', 'purple', 'dark']}
			>
				<App />
			</NextThemesProvider>
		</NextUIProvider>
	</StrictMode>
)
