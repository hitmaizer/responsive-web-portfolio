import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme  from "./theme/Theme";
import Intro from "./components/Intro";
import Skills from './components/Skills';
import Certificates from "./components/Certificates";
import Hobbies from "./components/Hobbies";
import Works from "./components/Works";
import Filter from './components/Filter';
import Portfolio from './components/Portfolio';
import Socials from './components/Socials';
import GlobalStyles from './theme/GlobalStyles';

export default function App() {

    const [darkMode, setDarkMode] = React.useState("light")

    function themeToggler() {
        const toggle = document.querySelector(".toggle")
        toggle.classList.toggle("active")
        return darkMode === "light" ? setDarkMode("dark") : setDarkMode("light")

    }


    return (
        <Router>
            <div className="page__wrapper">
                <ThemeProvider theme={darkMode === "light" ? Theme.theme.colors.lightTheme : Theme.theme.colors.darkTheme}>
                    <GlobalStyles />
                        <div className="page__grid">
                            <div className="intro__section">
                                <Intro />
                            </div>
                            <div className="socials__section">
                                <Socials 
                                clickHandler={() => themeToggler()}
                                darkMode={darkMode} 
                                />
                            </div>
                            <div className="skills__section">
                                <Skills />
                            </div>
                            <div className="portfolio__section">
                                <Portfolio />
                            </div>
                            <div className="hobbies__section">
                                <Hobbies />
                            </div>
                            <div className="certificates__section">
                                <Certificates />
                            </div>
                            <div className="filter__section">
                                <Filter />
                            </div>
                            <div className="works__section">
                                <Works />
                            </div>
                        </div>
                </ThemeProvider>
            </div>
        </Router>
    )
}