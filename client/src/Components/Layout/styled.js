import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const themeColor = '#f28225';

export const Btns = styled.div`
  padding: 8px 8px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#4f95ff')};
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 12px;
  border-radius: 3px;
  box-sizing: border-box;
  margin-left: 4px;
  border: 1px solid ${(props) => props.border === '#39749D'};
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #ffffff50;
    position: absolute;
    top: 1px;
    left: 0;
  }
  &:hover {
    background-color: ${(props) => (props.bghover ? props.bghover : '#3d74cc')};
  }
`;

/* Wrapper */
export const InnerWrapper = styled.div`
  /* 추후 width 속성을 조정하여 일정 크기 이하의 화면에서도 적절히 요소들이 줄어들도록 만들 예정 */
  width: 1264px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

/* Header */
export const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #f8f9f9;
  border-top: 3px solid ${themeColor};
  box-shadow: #8080803b 0px 2px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1264px;
  height: 47px;
  justify-content: space-between;
`;

export const HeaderLogo = styled.a`
  padding: 0 8px;
  height: 100%;
  display: flex;
  align-items: center;
  & svg {
    max-width: 150px;
    max-height: 50px;
  }
  &:hover {
    background-color: #e4e6e8;
  }
`;

export const TopBarBtn = styled.div`
  display: flex;
  align-items: center;
`;

/* SideNav */
export const NavWrapper = styled.nav`
  width: 164px;
  padding-top: 24px;
  margin-bottom: 100px;
  & a {
    display: block;
  }
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-size: 12px;
  color: #535a60;
  padding: 10px 8px;
  padding-left: ${(props) => (props.pL30 ? props.pL30 : '8px')};
  &:hover {
    color: black;
  }
  &.active {
    font-weight: bold;
    background-color: #f1f3f3;
    color: black;
    border-right: 3px solid ${themeColor};
  }
  &::after {
    content: '';
    display: ${(props) => (props.dB ? props.dB : 'none')};
    position: absolute;
    width: 18px;
    height: 18px;
    top: 7px;
    left: 8px;
    background-color: hotpink;
  }
`;

export const Text = styled.div`
  padding: 16px 8px 8px 8px;
  font-size: 10px;
  color: #666;
`;

/* Content */
export const ContentWrapper = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  border-left: 1px solid #d7d9dc;
  box-sizing: border-box;
`;

/* Footer */
export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #242629;
  color: #919aa2;
`;

export const FooterContent = styled.div`
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 12px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
