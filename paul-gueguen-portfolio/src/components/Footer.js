import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  padding: 2rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.light};
  font-size: 1.5rem;
  opacity: 0.8;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>© {new Date().getFullYear()} Paul Gueguen - All Rights Reserved</p>
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/paul-gueguen" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/p-gueguen" target="_blank" rel="noopener noreferrer">
            GitHub
          </SocialLink>
          <SocialLink href="https://twitter.com/octupls" target="_blank" rel="noopener noreferrer">
            Twitter
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;