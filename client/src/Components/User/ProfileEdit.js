import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Btns } from '../Layout/styled';
import { Modal, ModalBackdrop } from '../Login/styled';
import styled from 'styled-components';
import axios from 'axios';

const ProfileEditWrapper = styled.div`
  margin: 30px;
  .buttons {
    padding: 10px 0px 10px 0px;
  }
`;
const ProfileWrapper = styled.div`
  p {
    color: gray;
  }
  h1,
  p {
    margin: 20px 0px 20px 0px;
  }
  .myinfo {
    display: flex;
    p {
      padding-right: 30px;
    }
  }
`;
const AboutmeWrapper = styled.div`
  h3 {
    margin: 20px 0px 20px 0px;
  }
`;

const ChangeAboutme = styled.div``;
const ChangeUser = styled.div`
  border-top: 2px solid lightgray;
  margin: 20px 0px 20px 0px;
  .container {
    margin: 20px 0px 20px 0px;
  }
`;

const ProfileEdit = () => {
  const [showOutModal, setShowOutModal] = useState(false);
  const [showChangeModal, setShowChangeModal] = useState(false);
  const [newAboutMe, setNewAboutMe] = useState('');

  const [memberName, setMemberName] = useState('');
  const [aboutme, setAboutMe] = useState('');
  const [myemail, setMyEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [myReputation, setMyReputation] = useState('');

  useEffect(() => {
    // 쿠키에서 memberName과 aboutme 값을 가져와 상태값으로 설정
    const cookies = document.cookie.split('; ');
    const memberNameCookie = cookies.find((row) =>
      row.startsWith('memberName')
    );
    const aboutmeCookie = cookies.find((row) => row.startsWith('aboutme'));
    const emailCookie = cookies.find((row) => row.startsWith('email'));
    const reputationCookie = cookies.find((row) =>
      row.startsWith('reputation')
    );

    if (memberNameCookie) {
      const memberNameValue = decodeURIComponent(
        memberNameCookie.split('=')[1]
      );
      setMemberName(memberNameValue);
    }

    if (aboutmeCookie) {
      const aboutmeValue = decodeURIComponent(aboutmeCookie.split('=')[1]);
      setAboutMe(aboutmeValue);
    }

    if (emailCookie) {
      const emailValue = decodeURIComponent(emailCookie.split('=')[1]);
      setMyEmail(emailValue);
    }

    if (reputationCookie) {
      const reputationlValue = decodeURIComponent(
        reputationCookie.split('=')[1]
      );
      setMyReputation(reputationlValue);
    }
  }, []);

  const openModalOut = () => {
    setShowOutModal(!showOutModal);
  };

  const handleDelete = (email) => () => {
    axios
      .delete(`http://localhost:3002/members/${email}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        // 회원탈퇴 성공 시 처리할 작업
        document.cookie =
          'memberName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie =
          'aboutme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie =
          'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie =
          'isLoggedin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        navigate('/login');
        window.location.reload();
        window.alert('회원탈퇴가 성공적으로 완료되었습니다!');
      })
      .catch((err) => {
        console.error(err);
        // 회원탈퇴 실패 시 처리할 작업
      });
  };

  const openModalChange = () => {
    setShowChangeModal(!showChangeModal);
  };

  const handlePasswordChange = () => {
    axios
      .put(`http://localhost:3002/members?email=${myemail}`, {
        password: newPassword,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was a problem with the axios operation:', error);
      });
  };

  const passwordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleAboutMeChange = () => {
    axios
      .put(`http://localhost:3002/members/${myemail}/aboutme`, {
        newAboutMe: newAboutMe,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was a problem with the axios operation:', error);
      });
  };

  const aboutMeChange = (event) => {
    setNewAboutMe(event.target.value);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ProfileEditWrapper>
      <ProfileWrapper>
        <h1>{memberName}님</h1>
        <div className="myinfo">
          {' '}
          <p>✉️ : {myemail}</p>
          <p>👍 : {myReputation}</p>
        </div>
      </ProfileWrapper>
      <div className="buttons">
        <Btns onClick={goBack}>profile</Btns>
        <Btns>edit</Btns>
      </div>
      <AboutmeWrapper>
        <ChangeAboutme>
          <h3>About</h3>
          <input
            type="text"
            value={newAboutMe}
            onChange={aboutMeChange}
            placeholder={`${aboutme}`}
          />
          <Btns onClick={handleAboutMeChange}>About Me 변경하기</Btns>
        </ChangeAboutme>
      </AboutmeWrapper>

      <ChangeUser>
        <div className="container">
          <Btns onClick={openModalOut}>회원탈퇴</Btns>
          {showOutModal ? (
            <ModalBackdrop onClick={openModalOut}>
              <Modal onClick={(event) => event.stopPropagation()}>
                <h3>진짜로 탈퇴하실건가요..</h3>
                <Btns onClick={handleDelete(myemail)}>진심탈퇴 하기</Btns>
                <Btns onClick={openModalOut}>탈퇴 취소하기</Btns>
              </Modal>
            </ModalBackdrop>
          ) : null}

          <Btns onClick={openModalChange}>비밀번호 변경</Btns>
          {showChangeModal ? (
            <ModalBackdrop onClick={openModalChange}>
              <Modal onClick={(event) => event.stopPropagation()}>
                <h3>비밀번호 변경 모달</h3>
                <input
                  type="text"
                  value={newPassword}
                  onChange={passwordChange}
                  onClick={() => handlePasswordChange()}
                />
                <button onClick={() => handlePasswordChange()}>
                  비밀번호 변경하기
                </button>
                <button onClick={openModalChange}>변경취소하기</button>
              </Modal>
            </ModalBackdrop>
          ) : null}
        </div>
      </ChangeUser>
    </ProfileEditWrapper>
  );
};

export default ProfileEdit;
