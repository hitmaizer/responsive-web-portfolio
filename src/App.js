import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from "./theme/Theme"
import WorksCard from "./components/WorksCard"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from "./components/Intro"

export default function App() {
    return (
        <Router>
            <div className="page__wrapper">
                <ThemeProvider theme={Theme}>
                    <div className="page__grid">
                        <div className="intro__section">
                            <Intro />
                        </div>
                        <WorksCard />
                    </div>
                </ThemeProvider>
            </div>
        </Router>
    )
}