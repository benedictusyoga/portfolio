import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle-component"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <div className={`toggle-track ${theme === 'dark' ? 'dark' : ''}`}>
                <div className="toggle-thumb"></div>
            </div>
        </button>
    );
}
