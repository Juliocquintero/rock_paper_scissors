import styled from 'styled-components';

export const AppWrapper = styled.div`
  text-align: center;
  background-color: var(--oxford-blue);
  min-height: 100vh;
  min-width: 320px;
`;

export const Header = styled.header`
  background-color: var(--Rich-Black);
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Title = styled.h1`
  margin-top: 3rem;
  font-size: 4rem;
  color: var(--platinum);
`;
