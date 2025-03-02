import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.light};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0.5rem 2rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.light};
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Nav>
      <NavContainer>
        <Logo href="#">Paul Gueguen</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavItem>
            <NavLink href="#about" onClick={() => setIsOpen(false)}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;