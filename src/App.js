import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from "./theme/Theme"
import Card from "./components/Card"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div className="page__wrapper">
                <ThemeProvider theme={Theme}>
                    <Card />
                    
                </ThemeProvider>
            </div>
        </Router>
    )
}