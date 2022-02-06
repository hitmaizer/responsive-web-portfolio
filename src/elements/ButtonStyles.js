import styled, { css } from 'styled-components';

export default styled.button`
  border-radius: 12px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 16px 40px;

  ${(props) => props.primary && css `
    border: none;
    color: ${props.theme.colors.whiteCardBg};
    background-color: ${props.theme.colors.primaryBlue};

  `}

  ${(props) => props.outline && css `
    border: 2px solid ${props.theme.colors.primaryBlue};
    background: transparent;
    color: ${props.theme.colors.primaryBlue};
  `}


`;