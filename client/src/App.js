import './App.css';
import { useLocation } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Wrapper from './Components/Layout/Wrapper';
import Footer from './Components/Layout/Footer';

function App() {
  // TODO 로그인/회원가입 페이지에 따로 적용되는 스타일
  const location = useLocation();

  const isLoginPageTheme =
    location.pathname === '/login' || location.pathname === '/signup';

  const bgColor = {
    background: isLoginPageTheme && '#f1f3f3',
  };

  return (
    <div className="App" style={bgColor}>
      <Header />
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;
