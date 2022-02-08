/* eslint-disable no-plusplus */
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

    const [darkMode, setDarkMode] = React.useState(JSON.parse(localStorage.getItem("mode")) || [])
    const [filter, setFilter] = React.useState(0)

    React.useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(darkMode))
    }, [darkMode])


    function themeToggler() {
        const toggle = document.querySelector(".toggle")
        toggle.classList.toggle("active")
        darkMode === "light" ? setDarkMode("dark") : setDarkMode("light")
        

    }

    function filterSelector(state, id) {
        const selectedElement = document.getElementById(id)
        const groupElements = document.querySelectorAll('.selected')
        
        
        if (selectedElement.classList.contains('selected')) {
            selectedElement.classList.remove('selected')
        } else {
            groupElements.forEach(e => {
                if(e.classList.contains('selected')) {
                    e.classList.remove('selected')
                }
            })
            selectedElement.classList.add('selected')
        }
        
        
        setFilter(state)
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
                                <Filter stateChanger={(state, id) => filterSelector(state, id)} />
                            </div>
                            <div className="works__section">
                                <Works state={filter}/>
                            </div>
                        </div>
                </ThemeProvider>
            </div>
        </Router>
    )
}