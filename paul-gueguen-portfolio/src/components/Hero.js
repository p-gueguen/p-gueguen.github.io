import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.light};
  text-align: center;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 4rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  a {
    color: ${props => props.theme.colors.light};
    font-size: 1.5rem;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

function Hero() {
  return (
    <HeroSection>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Paul Gueguen
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Bioinformatician at ETH | FGCZ - Specializing in Single Cell Analysis and Spatial Transcriptomics
      </Subtitle>
      <SocialIcons
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="https://www.linkedin.com/in/paul-gueguen" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/p-gueguen" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/octupls" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </SocialIcons>
    </HeroSection>
  );
}

export default Hero;