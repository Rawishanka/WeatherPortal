import { Link } from 'react-router-dom'
import { ThemeToggleButton } from './ThemeToggleButton';

const Header = () => {
    return (
        <header className="h-16 px-5 sm:px-10 flex items-center shadow-md">
            <div className="flex items-center">
                <Link to="/">
                    <div className='flex items-center text-teal-700 font-bold'>
                        <img src="/logo.png" alt="Weather logo" className="h-10 w-auto mr-2" /> WeatherPotral
                    </div>
                </Link>
            </div>
            {/* Search bar */}
            <div className="flex-grow flex justify-center">
                
            </div>

            {/* Theme toggle button */}
            <ThemeToggleButton />
        </header>
    )
}

export default Header