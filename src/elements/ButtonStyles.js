import styled, { css } from "styled-components";

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

  @media only screen and (max-width: 576px) {
    padding: 6px 18px;
  }

  &:hover {
    transform: translateY(-3%);
  }

  ${(props) =>
    props.primary &&
    css`
      border: none;

      background-color: ${props.theme.primaryBlue};
      a,
      a:visited,
      a:hover,
      a:active {
        color: ${props.theme.btnText};
        &: hover {
          color: ${props.theme.btnText};
        }
      }
      &:hover {
        background-color: ${props.theme.darkenBlue};
        color: ${props.theme.btnText};
      }
    `}

  ${(props) =>
    props.outline &&
    css`
      border: 2px solid ${props.theme.primaryBlue};
      background: transparent;

      a,
      a:visited,
      a:hover,
      a:active {
        color: ${props.theme.primaryBlue};
      }

      &:hover {
        background: ${props.theme.darkenBlue};
        color: ${props.theme.btnText};
        border: 2px solid ${props.theme.darkenBlue};
        a {
          color: ${props.theme.btnText};
        }
      }
    `}

  ${(props) =>
    props.filterBtn &&
    css`
      border: 1px solid ${props.cardTitle1};
      background: transparent;
      color: ${props.theme.cardTitle1};
      &:hover {
        transform: translateY(0%);
      }
    `}
`;
