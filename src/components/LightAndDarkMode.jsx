import React, { useState, useEffect } from 'react'
import { ThemeContext, themes } from '../context/theme-context'
import Layout from './Layout'

const LightAndDarkMode = () => {
    const [theme, setTheme] = useState(themes.light)

    const changeTheme = () => {
        theme === themes.light
            ? setTheme(themes.dark)
            : setTheme(themes.light)
    }

    const docBody = document.body

    useEffect(() => {
        switch (theme) {
            case themes.light:
                docBody.classList.add("bg-light")
                docBody.classList.add("text-dark")
                docBody.classList.remove("bg-dark")
                docBody.classList.remove("text-light")
                break;
            case themes.dark:
                docBody.classList.add("bg-dark")
                docBody.classList.add("text-light")
                docBody.classList.remove("bg-light")
                docBody.classList.remove("text-dark")
                break;
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <Layout theme={theme} />
        </ThemeContext.Provider>
    )
}

export default LightAndDarkMode
