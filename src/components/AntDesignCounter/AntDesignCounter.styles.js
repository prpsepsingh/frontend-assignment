import styled from 'styled-components';

export const StyledCounter = styled.div`
  border: 1px;
  font-size: 1em;
  background-color: grey;

  .odd {
    ${props => (props.isOdd ? 'color: green' : 'color: blue')};
  }
`;