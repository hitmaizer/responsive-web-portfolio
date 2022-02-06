import styled, { css } from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background-color: ${(props) => props.theme.colors.whiteCardBg};
    font-family: ${(props) => props.theme.fonts.montserrat};
    max-width: 400px;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s ease;
    
    img {
        border-radius: 12px;
        max-height: 100%;
        width: 300px;
        object-fit: cover;
    }

    &:hover {
        box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
        transform: translateY(-5%);
    }

`