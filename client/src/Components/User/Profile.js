import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Btns } from '../Layout/styled';
import { useState, useEffect } from 'react';

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

const Profile = () => {
  const [memberName, setMemberName] = useState('');
  const [aboutme, setAboutMe] = useState('');
  const [myemail, setMyEmail] = useState('');
  const [myReputation, setMyReputation] = useState('');

  const navigate = useNavigate();

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

    if (!memberNameCookie || !aboutmeCookie) {
      navigate('/login');
    }

    if (reputationCookie) {
      const reputationlValue = decodeURIComponent(
        reputationCookie.split('=')[1]
      );
      setMyReputation(reputationlValue);
    }
  }, [navigate]);

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
        <Btns>profile</Btns>
        <Link to="/useredit">
          <Btns>edit</Btns>
        </Link>
      </div>

      <AboutmeWrapper>
        <h3>About</h3>
        {aboutme ? <p>{aboutme}</p> : <p>자기소개가 없습니다.</p>}
      </AboutmeWrapper>
    </ProfileEditWrapper>
  );
};

export default Profile;
