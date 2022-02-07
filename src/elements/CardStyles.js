import styled from 'styled-components';

export default styled.div`
    gap: 16px;
    padding: 16px;
    background-color: ${(props) => props.theme.colors.whiteCardBg};
    font-family: ${(props) => props.theme.fonts.montserrat};
    
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s ease;
    
    
    &:hover {
        box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
        transform: translateY(-5%);
    }

`