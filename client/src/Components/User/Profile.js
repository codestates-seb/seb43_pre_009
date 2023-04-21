import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Btns } from '../Layout/styled';

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
  return (
    <ProfileWrapper>
      <div className="user">
        <h1>김코딩</h1>
        <p>사람정보</p>
      </div>
      <div className=".buttons">
        <Btns>profile</Btns>
        <Link to="/useredit">
          <Btns>edit</Btns>
        </Link>
      </div>
      <div className="info">
        <h2>About</h2>
        <hr />
        <div>자기소개</div>
        <h2>Requtation</h2>
        <hr />
        <div>당신의 답장개수는 0개입니다</div>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
