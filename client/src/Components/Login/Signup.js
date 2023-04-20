import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginWrapper, ModalBackdrop, Modal } from './styled';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const navigate = useNavigate();

  const signupUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const openModal = () => {
    setShowModal(true);
    setModalContent(`반갑습니다! ${email}으로 접속해보세요!`);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/login');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await signupUser(email, password);
      if (data) {
        console.log('회원가입 성공:', data);
        // navigate('/login');
        // setSignupModal(true);
      } else {
        console.log('회원가입 실패');
      }
    } catch (error) {
      console.log(error);
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
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <LoginWrapper>
        <input
          name="email"
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="Sign Up" onClick={openModal} />
        {showModal ? (
          <ModalBackdrop>
            <Modal>
              <p>{modalContent}</p>
              <button onClick={closeModal}>로그인 화면으로 가기</button>
            </Modal>
          </ModalBackdrop>
        ) : null}
      </LoginWrapper>
    </form>
  );
};

export default Signup;
