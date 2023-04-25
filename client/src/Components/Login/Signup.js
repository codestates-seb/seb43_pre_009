import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginWrapper, ModalBackdrop, Modal } from './styled';
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
        <input
          name="membername"
          type="text"
          placeholder="membername"
          required
          value={membername}
          onChange={onChange}
        />
        <input type="submit" value="Sign Up" onClick={openModal} />
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
      </LoginWrapper>
    </form>
  );
};

export default Signup;
