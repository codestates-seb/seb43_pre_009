import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Btns } from '../Layout/styled';
import { useState, useEffect } from 'react';

const ProfileWrapper = styled.div`
  margin: 30px;
  .info {
  }
  .buttons {
  }
  .info div {
    padding: 60px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;
const Profile = () => {
  const [memberName, setMemberName] = useState('');
  const [aboutme, setAboutMe] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // 쿠키에서 memberName과 aboutme 값을 가져와 상태값으로 설정
    const cookies = document.cookie.split('; ');
    const memberNameCookie = cookies.find((row) =>
      row.startsWith('memberName')
    );
    const aboutmeCookie = cookies.find((row) => row.startsWith('aboutme'));

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

    if (!memberNameCookie || !aboutmeCookie) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProfileWrapper>
      <div className="user">
        <h1>{memberName}님</h1>
        <p>사람정보</p>
      </div>
      <div className="buttons">
        <Btns>profile</Btns>
        <Link to="/useredit">
          <Btns>edit</Btns>
        </Link>
      </div>
      <div className="info">
        <h2>About</h2>
        <hr />
        <div>{aboutme}</div>
        <h2>Requtation</h2>
        <hr />
        <div>당신의 답장개수는 0개입니다</div>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
