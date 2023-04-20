import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Modal = styled.div`
  index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  background-color: white;
  width: 300px;
  height: 300px;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
