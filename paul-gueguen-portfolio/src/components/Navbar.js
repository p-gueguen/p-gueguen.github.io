import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.dark};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a`
  color: ${props => props.theme.colors.light};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.light};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.dark};
    padding: 1rem 0;
    display: ${props => props.isOpen ? 'flex' : 'none'};
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin: 0.5rem 2rem;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const EmailLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
            <EmailLink href="mailto:paul.gueguen@fgcz.ethz.ch" onClick={() => setIsOpen(false)}>
              <FaEnvelope /> Email
            </EmailLink>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;