import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaGraduationCap } from 'react-icons/fa';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  position: relative;
  color: ${props => props.theme.colors.light};
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/hero.jpg');
    background-size: cover;
    background-position: center;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.gradients.hero};
    z-index: -1;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem;
    min-height: 80vh;
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 255, 255, 0.3);

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 700px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 400;
  opacity: 0.95;
  line-height: 1.6;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.4rem;
  }
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  a {
    color: ${props => props.theme.colors.light};
    font-size: 2rem;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));

    &:hover {
      transform: translateY(-5px) scale(1.1);
      color: ${props => props.theme.colors.accent};
      filter: drop-shadow(0 0 15px rgba(34, 211, 238, 0.8));
    }
  }
`;

function Hero() {
  return (
    <HeroSection>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Paul Gueguen
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Bioinformatician at ETH - Specializing in Single-Cell Analysis, Spatial Transcriptomics & AI Tooling
      </Subtitle>
      <SocialIcons
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a href="https://www.linkedin.com/in/paul-gueguen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <FaLinkedin />
        </a>
        <a href="https://github.com/p-gueguen" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <FaGithub />
        </a>
        <a href="https://scholar.google.fr/citations?user=srVHy-MAAAAJ&hl=fr" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar Profile">
          <FaGraduationCap />
        </a>
      </SocialIcons>
    </HeroSection>
  );
}

export default Hero;
