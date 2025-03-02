// src/components/Publications.js
import React from 'react';
import styled from 'styled-components';

const PublicationsSection = styled.section`
  padding: 4rem 2rem;
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

const PublicationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PublicationCard = styled.div`
  background-color: ${props => props.theme.colors.light};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ImageLink = styled.a`
  display: block;
  cursor: pointer;
  height: 200px;
  overflow: hidden;
  position: relative;
  
  &:hover::after {
    content: 'View Publication';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(33, 150, 243, 0.85);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 500;
  }
  
  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const PublicationImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  
  ${ImageLink}:hover & {
    transform: scale(1.05);
  }
`;

const PublicationInfo = styled.div`
  padding: 1.5rem;
`;

const PublicationTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-size: 1.25rem;
`;

const PublicationJournal = styled.div`
  font-style: italic;
  color: ${props => props.theme.colors.gray};
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
`;

const PublicationYear = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
`;

const PublicationAuthors = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const PublicationLink = styled.a`
  display: inline-block;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
  }
`;

// Filter/Sort controls
const SortControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

const SortButton = styled.button`
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.primary + '22'};
  }
`;

function Publications() {
  const [sortDirection, setSortDirection] = React.useState('desc'); // 'desc' for newest first, 'asc' for oldest first
  
  const publications = [
    {
      id: 1,
      title: "Contribution of resident and circulating precursors to tumor-infiltrating CD8+ T cell populations in lung cancer",
      journal: "Science Immunology",
      year: 2021,
      authors: "Gueguen P, Metoikidou C, Dupic T et al.",
      imageUrl: `/images/sci-immunol-plot.jpg`,
      link: "https://www.science.org/doi/abs/10.1126/sciimmunol.abd5778"
    },
    {
      id: 2,
      title: "Lipid-associated macrophages are induced by cancer-associated fibroblasts and mediate immune suppression in breast cancer",
      journal: "Cancer Research",
      year: 2022,
      authors: "Timperi E, Gueguen P et al.",
      imageUrl: `/images/cancer-research-plot.jpg`,
      link: "https://aacrjournals.org/cancerres/article/82/18/3291/709018/Lipid-Associated-Macrophages-Are-Induced-by-Cancer"
    },
    {
      id: 3,
      title: "SUV39H1 Ablation Enhances Long-term CAR T Function in Solid Tumors",
      journal: "Cancer Discovery",
      year: 2024,
      authors: "López-Cobo S, Fuentealba JR, Gueguen P et al.",
      imageUrl: `/images/car-t-plot.jpg`,
      link: "https://aacrjournals.org/cancerdiscovery/article-abstract/14/1/120/732570/SUV39H1-Ablation-Enhances-Long-term-CAR-T-"
    },
    {
      id: 4,
      title: "T cell clonal analysis using single-cell RNA sequencing and reference maps",
      journal: "Bio-protocol",
      year: 2023,
      authors: "Andreatta M, Gueguen P, Borcherding N, Carmona SJ",
      imageUrl: `/images/bio-protocol-plot.jpg`,
      link: "https://en-cdn.bio-protocol.org/pdf/bio-protocol4735.pdf?rel_link=YmlvLXByb3RvY29sLm9yZy9lbi9icGRldGFpbD9pZD00NzM1JnR5cGU9MA=="
    },
    {
      id: 5,
      title: "Tumor-infiltrating CD8+ T cell differentiation paths at the single-cell level",
      journal: "PhD Thesis - Université Paris Cité",
      year: 2021,
      authors: "Gueguen P",
      imageUrl: `/images/phd-thesis-plot.jpg`,
      link: "https://hal.science/tel-03647185/"
    },
    {
      id: 6,
      title: "The epigenetic control of stemness in CD8+ T cell fate commitment",
      journal: "Science",
      year: 2018,
      authors: "Pace L, Goudot C, Zueva E, Gueguen P, et al.",
      imageUrl: `/images/science-2018-plot.jpg`,
      link: "https://www.science.org/doi/full/10.1126/science.aah6499"
    }
  ];


  // Sort publications based on year
  const sortedPublications = [...publications].sort((a, b) => {
    if (sortDirection === 'desc') {
      return b.year - a.year; // Newest first
    } else {
      return a.year - b.year; // Oldest first
    }
  });

  return (
    <PublicationsSection id="publications">
      <SectionTitle>Selected Publications</SectionTitle>
      
      <SortControls>
        <span>Sort by: </span>
        <SortButton 
          active={sortDirection === 'desc'} 
          onClick={() => setSortDirection('desc')}
        >
          Newest First
        </SortButton>
        <SortButton 
          active={sortDirection === 'asc'} 
          onClick={() => setSortDirection('asc')}
        >
          Oldest First
        </SortButton>
      </SortControls>
      
      <PublicationsGrid>
        {sortedPublications.map(pub => (
          <PublicationCard key={pub.id}>
            <ImageLink 
              href={pub.link} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View publication: ${pub.title}`}
            >
              <PublicationImage imageUrl={pub.imageUrl} />
            </ImageLink>
            <PublicationInfo>
              <PublicationYear>{pub.year}</PublicationYear>
              <PublicationTitle>{pub.title}</PublicationTitle>
              <PublicationJournal>{pub.journal}</PublicationJournal>
              <PublicationAuthors>{pub.authors}</PublicationAuthors>
              <PublicationLink href={pub.link} target="_blank" rel="noopener noreferrer">
                Read Publication →
              </PublicationLink>
            </PublicationInfo>
          </PublicationCard>
        ))}
      </PublicationsGrid>
    </PublicationsSection>
  );
}

export default Publications;