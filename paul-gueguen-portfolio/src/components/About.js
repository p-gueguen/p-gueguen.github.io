import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 6rem 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutText = styled(motion.div)`
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.7;
  }
`;

function About() {
  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>
        <AboutText
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            I'm a computational biologist focusing on the immune system with over six years of 
            experience in single-cell genomics. Currently, I'm working on single-cell and spatial 
            biology at the Functional Genomics Center Zurich (FGCZ) at ETH Zurich.
          </p>
          <p>
            My research interests include understanding complex cellular interactions in the immune 
            system through the analysis of single-cell and spatial transcriptomics data. I specialize 
            in developing analytical workflows using R and Seurat for the analysis of scRNA-seq and 
            spatial transcriptomics datasets.
          </p>
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
}

export default About;