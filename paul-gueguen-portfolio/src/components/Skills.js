import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCategory = styled.div`
  background: ${props => props.theme.gradients.card};
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
    transform: translateY(-3px);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: 600;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: ${props => props.theme.colors.surfaceHover};
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-2px) rotate(2deg);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  }
`;

function Skills() {
  const skillCategories = [
    {
      title: "Languages & Programming",
      skills: ['R (Seurat v5)', 'Python (scanpy)', 'Bash/Shell', 'SQL', 'JavaScript', 'TypeScript']
    },
    {
      title: "Single-Cell & Spatial Methods",
      skills: ['scRNA-seq', 'scATAC-seq', 'scTCR-seq', 'Spatial transcriptomics', 'Xenium & Visium',
               'Cell type annotation', 'Batch correction', 'CytoTRACE2',
               'NicheNet & CellChat']
    },
    {
      title: "Infrastructure & DevOps",
      skills: ['HPC/SLURM clusters', 'CellRanger pipelines',
               'Nextflow/nf-core', 'Docker containers', 'CI/CD workflows']
    },
    {
      title: "AI Tooling & Automation",
      skills: ['Claude Code development', 'MCP server creation', 'Custom skills/agents',
               'Prompt engineering', 'Workflow automation']
    },
    {
      title: "Visualization & Reporting",
      skills: ['ggplot2', 'R Markdown', 'Shiny apps', 'Interactive dashboards']
    }
  ];

  return (
    <SkillsSection id="skills">
      <SectionTitle>Skills & Expertise</SectionTitle>
      <SkillsGrid>
        {skillCategories.map((category, catIndex) => (
          <SkillCategory key={catIndex}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <SkillsContainer>
              {category.skills.map((skill, skillIndex) => (
                <SkillTag
                  key={skillIndex}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </SkillTag>
              ))}
            </SkillsContainer>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;
