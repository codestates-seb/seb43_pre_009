import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 200px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background: white;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 270px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background: white;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  p {
    font-weight: 600;
  }

  input {
    width: 92%;
    border: 1px solid #bbbfc4;
    border-radius: 3px;
    background-color: white;
    padding: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #69a3d9;
      box-shadow: 0 0 5px #69a3d9;
    }
  }
`;

export const LoginBtn = styled.button`
  display: block;
  justify-content: center;
  align-items: center;
  /* line-height: 20px; 글자 수직 가운데 정렬 */
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #0795fe;
  width: 100%;
  height: 30px;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  text-align: center;
  box-shadow: inset 0px 2px 4px rgba(255, 255, 255, 0.5);
  transition: background-color 0.1s ease-in-out;
`;

export const LogoImg = styled.div`
  padding: 0 8px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & svg {
    max-width: 50px;
    max-height: 60px;
  }
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

  h3 {
    padding: 10px;
  }
  index: 2;
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
  index: 1;
`;
