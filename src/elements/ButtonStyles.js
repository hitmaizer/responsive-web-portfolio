import styled, { css } from 'styled-components';

export default styled.button`
  border-radius: 8px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 12px 32px;
  cursor: pointer;
  transition: all 1ms ease-out;
  
  &:hover {
      transform: translateY(-3%);
  }

  ${(props) => props.primary && css `
    border: none;
    color: ${props.theme.colors.whiteCardBg};
    background-color: ${props.theme.colors.primaryBlue};
    &:hover {
        background-color: ${props.theme.colors.darkenBlue};
    }

  `}

  ${(props) => props.outline && css `
    border: 2px solid ${props.theme.colors.primaryBlue};
    background: transparent;
    color: ${props.theme.colors.primaryBlue};
    
    &:hover {
        background: ${props.theme.colors.primaryBlue};
        color: ${props.theme.colors.whiteCardBg};
    }
  
  `}


`;