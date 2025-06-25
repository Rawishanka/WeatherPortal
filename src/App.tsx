// External library imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Internal application modules (context, components, pages)
import { ThemeProvider } from './context/themeProvider';
import Layout from './components/Layout';
import WelcomePage from './pages/WelcomePage';
import WeatherDashboard from './pages/WeatherDashboard';
import NotFoundPage from './pages/NotFound';





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
              <Route path='*' Component={NotFoundPage} />
              <Route path='/dashboard' Component={WeatherDashboard} />
              <Route path='/' Component={WelcomePage} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
