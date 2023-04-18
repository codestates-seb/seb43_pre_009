import { FooterWrapper, FooterContent } from './styled';

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <a href="/">logo</a>
        <a href="/">STACK OVERFLOW</a>
        <ul>
          <li>
            <a href="/">menu1</a>
          </li>
          <li>
            <a href="/">menu2</a>
          </li>
        </ul>
        <div>Team9 worked with Codestates</div>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
