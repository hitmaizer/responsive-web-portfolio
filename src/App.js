import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from "./components/Button"
import Theme from "./theme/Theme"


export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <Button />
        </ThemeProvider>
    )
}