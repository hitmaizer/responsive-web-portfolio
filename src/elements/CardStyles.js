import styled from 'styled-components';


export default styled.div`
    gap: 16px;
    padding: 24px;
    width: auto;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s ease;
    background-color: ${(props) => props.theme.cardBg};
    
    &:hover {
        box-shadow: ${(props) => props.theme.dropShadow};
        transform: translateY(-5%);
    }

    

`