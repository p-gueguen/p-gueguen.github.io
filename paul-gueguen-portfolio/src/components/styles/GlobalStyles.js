import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;

    /* Subtle dot pattern background */
    background-image:
      radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
    background-size: 40px 40px;
    background-attachment: fixed;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.accent};
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text};
  }

  /* Glow effect utility class */
  .glow {
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
`;