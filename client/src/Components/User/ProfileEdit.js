import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Btns } from '../Layout/styled';
import { Modal, ModalBackdrop } from '../Login/styled';

const ProfileEdit = () => {
  const [showOutModal, setShowOutModal] = useState(false);
  const [showChangeModal, setShowChangeModal] = useState(false);

  const openModalOut = () => {
    setShowOutModal(!showOutModal);
  };

  const closeModalOut = () => {
    setShowOutModal(false);
    navigate('/login');
  };

  const openModalChange = () => {
    setShowChangeModal(!showChangeModal);
  };

  const changePassword = () => {
    setShowChangeModal(false);
    navigate('/user');
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
        <h1>김코딩</h1>
        <p>사람정보</p>
      </div>
      <div>
        <Btns onClick={goBack}>profile</Btns>
        <Btns>edit</Btns>
      </div>
      <div>
        <h1>reactQuill</h1>
      </div>
      <div>
        <Btns onClick={openModalOut}>회원탈퇴</Btns>
        {showOutModal ? (
          <ModalBackdrop onClick={openModalOut}>
            <Modal onClick={(event) => event.stopPropagation}>
              <h3>진짜로 탈퇴하실건가요..</h3>
              <Btns onClick={closeModalOut}>진심탈퇴 하기</Btns>
              <Btns onClick={openModalOut}>탈퇴 취소하기</Btns>
            </Modal>
          </ModalBackdrop>
        ) : null}
        <Btns onClick={openModalChange}>비밀번호 변경</Btns>
        {showChangeModal ? (
          <ModalBackdrop onClick={openModalChange}>
            <Modal onClick={(event) => event.stopPropagation}>
              <h3>비밀번호 변경 모달</h3>
              <input type="text" />
              <Btns onClick={changePassword}>비밀번호 변경하기</Btns>
              <Btns onClick={openModalChange}>변경취소하기</Btns>
            </Modal>
          </ModalBackdrop>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileEdit;
