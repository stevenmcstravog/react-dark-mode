import React, { useContext } from 'react'
import { ThemeContext, themes } from '../context/theme-context'

const Layout = () => {

    const {theme, changeTheme} = useContext(ThemeContext)
    
    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <h1>Theme {theme === themes.light ? "Light" : "Dark"}</h1>
            <p className="lead content-width text-center">Click the button below to switch themes.</p>
            <button className={`btn btn-${theme === themes.light ? "dark" : "light"} btn-lg fw-bold`} onClick={changeTheme}>{theme === themes.light ? "Light" : "Dark"}</button>
        </div>
    )
}

export default Layout
