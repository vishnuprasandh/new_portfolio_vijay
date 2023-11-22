import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
  WhatsappButton,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Close, CloseRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#experience">Experience</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#education">Education</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
          {/* <NavLink href="/workshop">Webinar</NavLink> */}
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="/#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="/#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="/#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="/#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="/#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="/#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            {/* <MobileLink href="/workshop" onClick={() => setIsOpen(!isOpen)}>
              Webinar
            </MobileLink> */}

            {/* <MobileLink href='#workshop' onClick={() => {
              setIsOpen(!isOpen)
            }}>Workshop</MobileLink> */}

            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
            {/* <WhatsappButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">WhatsApp gropu</WhatsappButton> */}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

// // For Route:
// import React from 'react';
// import { NavLink } from 'react-router-dom'; // Import NavLink
// import { useTheme } from 'styled-components';
// import { DiCssdeck } from 'react-icons/di';
// import { FaBars } from 'react-icons/fa';
// import { Bio } from '../../data/constants';
// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   NavItems,
//   MobileIcon,
//   MobileMenu,
//   MobileLink,
//   GitHubButton,
//   ButtonContainer,
// } from './NavbarStyledComponent';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const theme = useTheme();

//   const toggleMobileMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const buttonStyles = {
//     padding: '10px 16px',
//     background: theme.primary,
//     color: 'white',
//     width: 'max-content',
//   };

//   return (
//     <Nav>
//       <NavbarContainer>
//         <NavLogo to="/">
//         <NavLink to="/" style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
//             <DiCssdeck size="3rem" /> Portfolio
//           </NavLink>
//         </NavLogo>
//         <MobileIcon>
//           <FaBars onClick={toggleMobileMenu} />
//         </MobileIcon>
//         <NavItems>
//           <NavLink exact to="/skills" activeClassName="active">Skills</NavLink>
//           <NavLink exact to="/experience" activeClassName="active">Experience</NavLink>
//           <NavLink exact to="/projects" activeClassName="active">Projects</NavLink>
//           <NavLink exact to="/workshop" activeClassName="active">Workshop</NavLink>
//           <NavLink exact to="/education" activeClassName="active">Education</NavLink>
//         </NavItems>
//         <ButtonContainer>
//           <GitHubButton href={Bio.github} target="_blank">
//             Github Profile
//           </GitHubButton>
//         </ButtonContainer>
//         {isOpen && (
//           <MobileMenu isOpen={isOpen}>
//             <MobileLink to="/about" onClick={toggleMobileMenu}>About</MobileLink>
//             <MobileLink to="/skills" onClick={toggleMobileMenu}>Skills</MobileLink>
//             <MobileLink to="/experience" onClick={toggleMobileMenu}>Experience</MobileLink>
//             <MobileLink to="/projects" onClick={toggleMobileMenu}>Projects</MobileLink>
//             <MobileLink to="/education" onClick={toggleMobileMenu}>Education</MobileLink>
//             <MobileLink to="/workshop" onClick={toggleMobileMenu}>Workshop</MobileLink>
//             <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
//           </MobileMenu>
//         )}
//       </NavbarContainer>
//     </Nav>
//   );
// }

// export default Navbar;
