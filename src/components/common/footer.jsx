import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 2rem 0;
  font-family: 'Arial', sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #3498db;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About</FooterTitle>
          <FooterText>&copy; 2023. All rights reserved.</FooterText>
          <FooterText>Developed by: Mr. Kabuteyy</FooterText>
          <FooterText>Version: 1.0.0</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Links</FooterTitle>
          <FooterText>
            <FooterLink href="https://github.com/Mr-Kabuteyy/residential-non-residential-allocation-system" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </FooterLink>
          </FooterText>
          <FooterText>
            <FooterLink href="https://residential-non-residential-allocation-system.netlify.app/" target="_blank" rel="noopener noreferrer">
              Website
            </FooterLink>
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterText>License: MIT</FooterText>
        </FooterSection>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;