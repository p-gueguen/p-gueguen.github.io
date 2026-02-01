export const theme = {
    colors: {
      primary: '#7c3aed',        // Rich purple
      secondary: '#3b82f6',      // Electric blue
      accent: '#22d3ee',         // Bright cyan
      background: '#0f1629',     // Deep dark blue
      surface: '#1a1f3a',        // Card backgrounds
      surfaceHover: '#242d4d',   // Card hover state
      text: '#f1f5f9',           // Light text
      textSecondary: '#94a3b8',  // Muted text
      border: 'rgba(255, 255, 255, 0.1)',
      light: '#ffffff',
      dark: '#0a0f1e',           // Even darker for navbar/footer
    },
    gradients: {
      primary: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
      card: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
      hero: 'linear-gradient(135deg, rgba(124, 58, 237, 0.65) 0%, rgba(90, 40, 180, 0.55) 100%)',
    },
    fonts: {
      heading: "'Space Grotesk', sans-serif",
      body: "'DM Sans', sans-serif",
      main: "'DM Sans', sans-serif", // Keep for backwards compatibility
    },
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    }
  };