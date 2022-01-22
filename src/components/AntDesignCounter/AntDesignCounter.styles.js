import styled from 'styled-components';

export const StyledCounter = styled.div`
  border: 1px;
  font-size: 1em;
  background-color: grey;
  margin-top: 10px;
  margin-bottom: 10px;

  .odd {
    ${props => (props.isOdd ? 'color: green' : 'color: blue')};
  }
`;