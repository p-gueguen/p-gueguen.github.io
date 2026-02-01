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
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${props => props.theme.gradients.primary};
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
    line-height: 1.8;
    color: ${props => props.theme.colors.text};
  }

  strong {
    color: ${props => props.theme.colors.accent};
    font-weight: 600;
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
            I'm a computational biologist at <strong>ETH Zurich (FGCZ)</strong> with over eight years of experience in{' '}
            <strong>single-cell and spatial transcriptomics</strong>. I develop analytical workflows, automated pipelines,
            and <strong>AI-powered tools</strong> for large-scale genomics projects.
          </p>
          <p>
            I specialize in scRNA-seq, scATAC-seq, and spatial transcriptomics (Xenium, Visium) using R/Seurat and Python/scanpy.
            I also mentor graduate students and lead <strong>training programs</strong> in computational biology at ETH Zurich.
          </p>
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
}

export default About;
