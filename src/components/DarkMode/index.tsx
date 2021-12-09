import * as React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

type DarkModeProps = {
    children: React.ReactNode
}

const DarkMode: React.FunctionComponent<DarkModeProps> = () => {
    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
                <label className="toggle">
                    <input
                        type="checkbox"
                        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                        checked={theme === 'dark'}
                    />{' '}
                    <span>Dark mode</span>
                </label>
            )}
        </ThemeToggler>)
}

export default DarkMode