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
            I'm a computational biologist specializing in <strong>single-cell and spatial transcriptomics</strong> at
            the Functional Genomics Center Zurich (FGCZ) at ETH Zurich. With over seven years of experience,
            I focus on understanding complex cellular interactions in the immune system and tumor microenvironment.
          </p>
          <p>
            My work involves developing analytical workflows and infrastructure for <strong>FGCZ's bioinformatics platform</strong>,
            including contributions to B-Fabric, SUSHI, and ezRun. I've co-developed <strong>STACAS</strong>, a
            semi-supervised batch correction method for single-cell data integration that preserves biological
            variability while removing technical artifacts.
          </p>
          <p>
            I specialize in analyzing scRNA-seq, scATAC-seq, and spatial transcriptomics datasets (Xenium, Visium)
            using R/Seurat v5, with expertise in cell type annotation, pseudotime analysis, and cell-cell
            communication inference.
          </p>
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
}

export default About;
