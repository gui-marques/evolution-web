import styled from 'styled-components';



export const  Container = styled.div`

display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 12em;
  margin-right: 6em;
  grid-template-columns: repeat(200, 1fr);
  grid-auto-rows: minmax(25px, auto);
  @media (max-width: 200px)
{
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 8em;
  margin-right: 6em;
  grid-template-columns: repeat(120, 1fr);
  grid-auto-rows: minmax(25px, auto);

}
`;




