import styled from "styled-components";

export const Container = styled.div`
  background: white;
  width: 60vw;
  height: 100vh;
  box-shadow: 0 0 1em grey;

  @media print {
    @page {
      size: 200px 225px;
    }
  }
`;
