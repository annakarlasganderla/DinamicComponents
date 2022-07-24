import styled from "styled-components";

export const App = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FolhaA4 = styled.div`
  background: white;
  width: 60vw;
  height: 100vh;
  box-shadow: 0 0 1em grey;

  @media print {
    @page {
      size: 100vh 60vw;
    }
  }
`;

export const Parent = styled.div`
  width: 60vw;
  height: 100vh;
  position: relative;
`;

export const Container = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 10px 20px;
  margin: 20px 0;
  border-bottom: 2px solid #1976d2;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

export const PaperContainer = styled.div``;

export const StyledImg = styled.img`
  width: 100%;
`;


