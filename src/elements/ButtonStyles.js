import styled, { css } from 'styled-components';

export default styled.button`
  border-radius: 8px;
  font-family: ${(props) => props.theme.font};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 12px 32px;
  cursor: pointer;
  transition: all 1ms ease-out;
  // max-width: 135px;
  max-height: 46px;


  
  &:hover {
      transform: translateY(-3%);

  }

  ${(props) => props.primary && css `
    border: none;
    color: ${props.theme.btnText};
    background-color: ${props.theme.primaryBlue};
    &:hover {
        background-color: ${props.theme.darkenBlue};
    }

  `}

  ${(props) => props.outline && css `
    border: 2px solid ${props.theme.primaryBlue};
    background: transparent;
    color: ${props.theme.primaryBlue};
    
    &:hover {
        background: ${props.theme.darkenBlue};
        color: ${props.theme.btnText};
        border: 2px solid ${props.theme.darkenBlue};
    }
  
  `}

  ${(props) => props.filterBtn && css `
    border: 2px solid ${props.cardTitle1};
    background: transparent;
    color: ${props.theme.cardTitle1};
    &:hover {
      transform: translateY(0%);
    }
  `}


`;