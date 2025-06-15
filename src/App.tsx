
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/themeProvider'
import WelcomePage from './pages/WelcomePage'
import WeatherDashboard from './pages/WeatherDashboard'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='system'>
        <Routes>
          <Route path='/dashboard' Component={WeatherDashboard} />
          <Route path='/' Component={WelcomePage} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
