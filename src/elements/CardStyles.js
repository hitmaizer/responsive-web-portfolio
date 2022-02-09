import styled from 'styled-components';


export default styled.div`
    gap: 16px;
    padding: 24px;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: ${(props) => props.theme.cardBg};
    
    @media only screen and (max-width: 576px) {
        padding: 16px;
    }

    

`