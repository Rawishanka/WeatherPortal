
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/themeProvider'
import WelcomePage from './pages/WelcomePage'
import WeatherDashboard from './pages/WeatherDashboard'
import Layout from './components/Layout'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='system'>
        <Layout>
          <Routes>
            <Route path='/dashboard' Component={WeatherDashboard} />
            <Route path='/' Component={WelcomePage} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
