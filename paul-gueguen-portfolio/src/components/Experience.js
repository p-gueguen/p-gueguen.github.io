import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    width: 2px;
    background: ${props => props.theme.gradients.primary};
    top: 0;
    bottom: 0;
    left: 0;
    margin-left: 30px;
    box-shadow: 0 0 10px rgba(124, 58, 237, 0.5);

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      left: 50%;
      margin-left: -1px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 50%;
    padding: 10px 30px;
    left: ${props => (props.position === 'right' ? '50%' : '0')};
  }

  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${props => props.theme.colors.background};
    border: 4px solid ${props => props.theme.colors.accent};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    left: 21px;
    box-shadow: 0 0 15px rgba(34, 211, 238, 0.6);

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      left: ${props => (props.position === 'right' ? '-10px' : 'calc(100% - 10px)')};
    }
  }
`;

const TimelineContent = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.gradients.card};
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
    transform: translateY(-2px);
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.3rem;
  }

  .date {
    font-style: italic;
    color: ${props => props.theme.colors.accent};
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    color: ${props => props.theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

function Experience() {
  const experiences = [
    {
      position: 'left',
      title: 'Bioinformatics Scientist',
      company: 'ETH Zürich - FGCZ',
      date: 'Jan 2024 - Present',
      description: 'Developing analytical workflows and infrastructure for single-cell and spatial transcriptomics analysis. Contributing to B-Fabric, SUSHI, and ezRun platforms.',
      icon: '🔬'
    },
    {
      position: 'right',
      title: 'Postdoctoral Research Scientist',
      company: 'Université de Lausanne',
      date: 'Apr 2022 - Apr 2023',
      description: 'Conducted research in cancer immunology, developing computational methods for single-cell analysis of tumor-infiltrating lymphocytes.',
      icon: '🧬'
    },
    {
      position: 'left',
      title: 'Computational Biologist',
      company: 'Mnemo Therapeutics',
      date: 'May 2021 - Apr 2022',
      description: 'Developed computational pipelines for pre-clinical CAR-T cell analysis using scRNA-seq and TCR sequencing.',
      icon: '💻'
    },
    {
      position: 'right',
      title: 'Ph.D. Candidate',
      company: 'Institut Curie',
      date: 'Aug 2017 - Mar 2021',
      description: 'Thesis on tumor-infiltrating CD8+ T cell differentiation using single-cell genomics.',
      icon: '🎓'
    },
  ];

  return (
    <ExperienceSection id="experience">
      <SectionTitle>Experience</SectionTitle>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            position={exp.position}
            initial={{ opacity: 0, x: exp.position === 'left' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TimelineContent>
              <h3>{exp.icon} {exp.title}</h3>
              <div className="date">{exp.company} | {exp.date}</div>
              <p>{exp.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
}

export default Experience;
