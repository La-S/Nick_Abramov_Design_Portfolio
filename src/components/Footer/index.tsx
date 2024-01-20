import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { LinkedinLogo, InstagramLogo, YoutubeLogo, BehanceLogo } from '@phosphor-icons/react';
import S from './styles';
import Logo from '../Logo';
import Nav from '../Nav';
import { useLocation } from 'react-router-dom';

const SOCIAL_MEDIA_LINKS = [
  { icon: <LinkedinLogo />, path: 'https://www.linkedin.com/in/nickola40/', className: 'LI-Logo' },
  { icon: <InstagramLogo />, path: 'https://www.instagram.com/abr.nick.art/', className: 'IG-Logo' },
  { icon: <YoutubeLogo />, path: 'https://www.youtube.com/@NickAbramov', className: 'YT-Logo' },
  { icon: <BehanceLogo />, path: 'https://www.behance.net/Nick_abramov', className: 'BE-Logo' },
];

const Footer = (): JSX.Element => {
  const pathName = useLocation().pathname.substring(1);
  const { componentColors } = useTheme();

  return (
    <S.FooterContainer id="Footer" pathName={pathName}>
      <Box className="Main-Section">
        <S.LogoContainer>
          <Logo fillMain={componentColors.logoMain} fillSecondary={componentColors.logoSecondary} />
        </S.LogoContainer>
        <Typography className="Main-Body-Text">
          I help clients connect with their target audience through UX/UI, logo, and brand identity design, paying
          attention to detail and delivering high-quality designs.
        </Typography>
        <Nav />
      </Box>
      <Box className="Links-Section">
        <Box className="Social-Media-Links-Container">
          {SOCIAL_MEDIA_LINKS.map((link) => (
            <a href={link.path} key={link.path} target="_blank" rel="noreferrer" className={link.className}>
              {link.icon}
            </a>
          ))}
        </Box>
        <Box className="Email-Link-Container">
          <a href="">abr.nicki.art@gmail.com</a>
        </Box>
      </Box>
      <Typography className="Copyright">Copyright © 2023 Nick Abramov All rights reserved.</Typography>
    </S.FooterContainer>
  );
};

export default Footer;
