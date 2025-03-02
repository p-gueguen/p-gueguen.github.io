import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.colors.background};
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    width: 2px;
    background-color: ${props => props.theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 0;
    margin-left: 30px;
    
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
    background-color: ${props => props.theme.colors.light};
    border: 4px solid ${props => props.theme.colors.primary};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    left: 21px;
    
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      left: ${props => (props.position === 'right' ? '-10px' : 'calc(100% - 10px)')};
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.light};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin-top: 0;
    color: ${props => props.theme.colors.primary};
  }
  
  .date {
    font-style: italic;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 10px;
  }
`;

function Experience() {
  const experiences = [
    {
      position: 'left',
      title: 'Bioinformatics Scientist',
      company: 'ETH Zürich',
      date: 'Jan 2024 - Present',
      description: 'Working on single-cell and spatial biology at FGCZ.',
      icon: '🔬'
    },
    {
      position: 'right',
      title: 'Postdoctoral Research Scientist',
      company: 'Université de Lausanne',
      date: 'Apr 2022 - Apr 2023',
      description: 'Conducted research in cancer immunology.',
      icon: '🧬'
    },
    {
      position: 'left',
      title: 'Computational Biologist',
      company: 'Mnemo Therapeutics',
      date: 'May 2021 - Apr 2022',
      description: 'Developed computational methods for pre-clinical CAR-T cells.',
      icon: '💻'
    },
    {
      position: 'right',
      title: 'Ph.D. Candidate',
      company: 'Institut Curie',
      date: 'Aug 2017 - Mar 2021',
      description: 'Focused on single-cell genomics of the immune system.',
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