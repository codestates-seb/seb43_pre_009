import styled from 'styled-components';

const HomeWrapper = styled.div``;

const InnerWrapper = styled.div``;

const LinkWrapper = styled.div``;

const LinkContent = styled.div``;

const TextWrapper = styled.div``;

const Home = () => {
  return (
    <HomeWrapper>
      <InnerWrapper>
        <LinkWrapper>
          <LinkContent />
          <LinkContent />
        </LinkWrapper>
        <TextWrapper>
          <h1>Every Question has a</h1>
          <h1>tab open to Stack Overflow</h1>
        </TextWrapper>
      </InnerWrapper>
    </HomeWrapper>
  );
};

export default Home;
