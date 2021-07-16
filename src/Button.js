import styled, { css } from 'styled-components';

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid white;

  ${({primary}) => primary && css`
    background: white;
    color: palevioletred;
  `};

  ${({danger}) => danger && css`
    background: red;
    color: white;
  `};

  
`
export default Button;