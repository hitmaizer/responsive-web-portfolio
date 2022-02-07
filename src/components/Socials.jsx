import React from 'react';
import { Twitter, Linkedin, Dribbble, Github } from '@styled-icons/boxicons-logos';
import Card from '../elements/CardStyles';

export default function Socials() {
    return (
        <Card>
            <div className="socials__card">
                <h3 className="socials__title">Follow me on my socials!</h3>
                <div className="socials__icons flex-row">
                    <Linkedin size="40px" />
                    <Twitter size="40px" />
                    <Github size="40px" />
                    <Dribbble size="40px" />
                </div>
            </div>
        </Card>
    )
}