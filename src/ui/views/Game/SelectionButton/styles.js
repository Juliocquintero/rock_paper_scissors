import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: var(--orange-web);
  font-size: 5rem;
  line-height: 5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  outline: none;
`;

export const ButtonCaption = styled.span`
  color: var(--platinum);
  font-size: 2rem;
  text-transform: uppercase;
`;
