import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  background-color: white;
  margin: auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;

  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  border: none;
  max-height: calc(100vh - 10rem);
  padding: 2rem;

  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ComponentAreaInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;

  @media (max-width: 768px) {
    
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
`;
