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

    const [filter, setFilter] = React.useState(0)
    
    function useLocalStorageState(key, initialValue) {
        const [value, setValue] = React.useState(() => {
            const persistedValue = localStorage.getItem(key)
            return persistedValue !== null ? persistedValue : initialValue
        })
        
        React.useEffect(() => {
            localStorage.setItem(key, value)
        }, [key, value])
        
        return [value, setValue]
    }
    
    const [mode, setMode] = useLocalStorageState("mode", "light")
   

    function themeToggler() {
        const toggle = document.querySelector(".toggle")
        toggle.classList.toggle("active")
        mode === "light" ? setMode("dark") : setMode("light")
        

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
                <ThemeProvider theme={mode === "light" ? Theme.theme.colors.lightTheme : Theme.theme.colors.darkTheme}>
                    <GlobalStyles />
                        <div className="page__grid">
                            <div className="intro__section">
                                <Intro darkMode={mode} />
                            </div>
                            <div className="socials__section">
                                <Socials 
                                clickHandler={() => themeToggler()}
                                darkMode={mode} 
                                />
                            </div>
                            <div className="skills__section">
                                <Skills />
                            </div>
                            <div className="portfolio__section">
                                <Portfolio darkMode={mode} />
                            </div>
                            <div className="hobbies__section">
                                <Hobbies darkMode={mode} />
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