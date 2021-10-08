import styled from 'styled-components';

export const GameOverWrapper = styled.div`
  color: var(--platinum);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem auto;
`;

export const ButtonReset = styled.button`
  display: flex;
  border: 1px solid var(--Rich-Black);
  border-radius: 3px;
  background-color: rgba(10, 17, 31, 0.8);
  color: var(--platinum);
  width: 60%;
  min-width: 220px;
  max-width: 270px;
  outline: none;
  margin: 0 auto;
  margin-top: 25px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const Result = styled.h2`
  font-size: 3.5rem;
  color: var(--platinum);
`;

export const ElectionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 3rem auto;
`;

export const Selection = styled.span`
  font-size: 2rem;
  color: var(--platinum);
`;

export const SelectionResalted = styled.span`
  margin: 0 1rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--Gold-crayola);
`;
