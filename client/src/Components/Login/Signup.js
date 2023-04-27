import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo-stackoverflow.svg';
import {
  SignUpWrapper,
  LoginPageWrapper,
  InputWrapper,
  ModalBackdrop,
  Modal,
  LoginBtn,
  LogoImg,
} from './styled';
import { Btns } from '../Layout/styled';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [membername, setMembername] = useState('');

  const [modalContent, setModalContent] = useState('');

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const signupUser = async (email, password, membername) => {
    const response = await fetch('http://localhost:3002/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, membername }),
      credentials: 'include',
    });
    const data = await response.json();
    if (data.success) {
      return data;
    } else {
      throw new Error(data.message);
    }
  };

  const openModal = () => {
    setShowModal(true);
    setModalContent(`${membername}`);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/login');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await signupUser(email, password, membername);
      console.log('회원가입 성공:', data);
    } catch (error) {
      console.log('회원가입 실패:', error.message);
    }
  };

  const onChange = (event) => {
    console.log(event.target.name, event.target.value);
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'membername') {
      setMembername(value);
    }
  };

  return (
    <LoginPageWrapper>
      <LogoImg>
        <Logo viewBox="2 2 113 121" />
      </LogoImg>
      <form onSubmit={onSubmit}>
        <SignUpWrapper>
          <InputWrapper>
            <p>Email</p>
            <input
              name="email"
              type="email"
              required
              value={email}
              onChange={onChange}
            />
          </InputWrapper>
          <InputWrapper>
            <p>Password</p>
            <input
              name="password"
              type="password"
              required
              value={password}
              onChange={onChange}
            />
          </InputWrapper>
          <InputWrapper>
            <p>Username</p>
            <input
              name="membername"
              type="text"
              required
              value={membername}
              onChange={onChange}
            />
          </InputWrapper>
          <LoginBtn type="submit" onClick={openModal}>
            Sign Up
          </LoginBtn>
          {showModal ? (
            <ModalBackdrop>
              <Modal>
                <h1>{modalContent}님</h1>
                <h3>반갑습니다!</h3>
                <h3>맘껏이용해보십쇼!</h3>
                <Btns onClick={closeModal}>로그인 하기</Btns>
              </Modal>
            </ModalBackdrop>
          ) : null}
        </SignUpWrapper>
      </form>
    </LoginPageWrapper>
  );
};

export default Signup;
