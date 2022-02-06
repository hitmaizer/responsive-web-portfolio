import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from "./theme/Theme"
import WorksCard from "./components/WorksCard"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from "./components/Intro"
import Skills from './components/Skills';
import Certificates from "./components/Certificates"

export default function App() {
    return (
        <Router>
            <div className="page__wrapper">
                <ThemeProvider theme={Theme}>
                    <div className="page__grid">
                        <div className="intro__section">
                            <Intro />
                        </div>
                        <div className="skills__section">
                            <Skills />
                        </div>
                        <div className="certificates__section">
                            <Certificates />
                        </div>
                        <WorksCard />
                    </div>
                </ThemeProvider>
            </div>
        </Router>
    )
}