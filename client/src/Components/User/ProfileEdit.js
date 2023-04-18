import { Link, useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
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
        <button onClick={goBack}>profile</button>
        <Link to="/profileedit">
          <button>edit</button>
        </Link>
      </div>
      <div>
        <h1>reactQuill</h1>
      </div>
      <div>
        <button>회원탈퇴</button>
        <button>비밀번호 변경</button>
      </div>
    </div>
  );
};

export default ProfileEdit;
