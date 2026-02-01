import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.text};
  padding: 3rem 0 2rem;
  text-align: center;
  border-top: 2px solid transparent;
  border-image: ${props => props.theme.gradients.primary} 1;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 2rem;
  opacity: 0.9;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.accent};
    transform: translateY(-3px) scale(1.1);
    filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.6));
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  opacity: 0.7;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textSecondary};
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/paul-gueguen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://github.com/p-gueguen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://scholar.google.fr/citations?user=srVHy-MAAAAJ&hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar Profile"
          >
            <FaGraduationCap />
          </SocialLink>
          <SocialLink
            href="mailto:paul.gueguen@fgcz.ethz.ch"
            aria-label="Email Contact"
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        <Copyright>
          © {new Date().getFullYear()} Paul Gueguen. All Rights Reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
