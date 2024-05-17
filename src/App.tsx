import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { AppRouteProvider } from './router'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRouteProvider />
    </ThemeProvider>
  )
}

export default App
