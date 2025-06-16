
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/themeProvider'
import WelcomePage from './pages/WelcomePage'
import WeatherDashboard from './pages/WeatherDashboard'
import Layout from './components/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'




const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 10*50*100,
      gcTime: 15*50*100,
      retry: false,
      refetchOnWindowFocus:false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
