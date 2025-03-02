import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.colors.light};
  max-width: 1200px;
  margin: 0 auto;
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

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillTag = styled(motion.div)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  padding: 0.5rem 1rem;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

function Skills() {
  const skills = [
    'scRNA-seq', 'Spatial Transcriptomics','Immunology',"Cancer Biology",'Dermatology',
    'Cell atlases',
    'Xenium',
    'R programming','Python',
    'GitHub',
    'Nextflow',
    'ggplot',
    'Bash scripting',
    'HPC cluster computing'
  ];

  return (
    <SkillsSection id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillTag
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {skill}
          </SkillTag>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
}

export default Skills;