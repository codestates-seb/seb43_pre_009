import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const themeColor = '#f28225';

export const Btns = styled.div`
  padding: 8px 12px;
`;

export const TopBarBtn = styled.div`
  display: flex;
  align-items: center;
`;

/* Wrapper */
export const InnerWrapper = styled.div`
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
  justify-content: space-between;
`;

/* SideNav */
export const NavWrapper = styled.nav`
  width: 164px;
  padding-top: 24px;
  & a {
    display: block;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 13px;
  color: #535a60;
  padding: 8px 6px;
  &:hover {
    color: black;
  }
  &.active {
    font-weight: bold;
    background-color: #f1f3f3;
    color: black;
    border-right: 3px solid ${themeColor};
  }
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
