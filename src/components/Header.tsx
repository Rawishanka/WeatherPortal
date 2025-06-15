import { Link } from 'react-router-dom'
import { ThemeToggleButton } from './ThemeToggleButton';

const Header = () => {
    return (
        <header className="h-16 px-5 sm:px-10 flex items-center shadow-md">
            <div className="flex items-center">
                <Link to="/">
                    <img src="/logo.png" alt="Weather logo" className="h-10 w-auto" />
                </Link>
            </div>
            {/* Search bar */}
            <div className="flex-grow flex justify-center">
                search bar
            </div>

            {/* Theme toggle button */}
            <ThemeToggleButton/>
        </header>
    )
}

export default Header