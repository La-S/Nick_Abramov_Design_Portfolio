import React, { useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import S from './styles';
import AboutImg from '../../assets/images/about.png';

const BODY_TEXT_TEMP1 =
  'As an experienced Graphic and Web Designer with a strong focus on UI/UX design, logo design, and brand identity, I always pay close attention to details. Over the last five years, I have created high-quality content for numerous clients, and my commitment to delivering exceptional results is unwavering.';
const BODY_TEXT_TEMP2 =
  'My goal is to establish a connection between my clients and their target audience, whether it\'s through a logo, web design, greeting card, or a complete company rebrand. I strive to produce visually appealing work that evokes emotions and stands the test of time while also presenting information in a clear and concise manner.';

const AboutPage = (): JSX.Element => {
  const theme = useTheme();

  useEffect(() => {
    // Unique case for About page
    // TODO: Move into a util??
    const bodyContainerEl = document.querySelector<HTMLDivElement>('#Body-Container');
    const footerEl = document.querySelector<HTMLDivElement>('#Footer');
    const customBackgroundProp = `linear-gradient(
      13.5deg,
      ${theme.textColors.tertiaryAlternate} 660px,
      ${theme.componentColors.backgroundSecondary} 0%
    )`;

    const resizeListener = () => {
      if (!bodyContainerEl || !footerEl) return;

      if (window.innerWidth >= 1355) {
        if (bodyContainerEl.style.background !== customBackgroundProp) {
          bodyContainerEl.style.background = customBackgroundProp;
        }
        if (footerEl.style.backgroundColor !== '') {
          footerEl.style.backgroundColor = '';
        }
      } else if (window.innerWidth >= theme.breakpoints.values.tablet && window.innerWidth < 1355) {
        bodyContainerEl.style.background = `linear-gradient(
          0deg,
          ${theme.textColors.tertiaryAlternate} 27.5%,
          ${theme.componentColors.backgroundSecondary} 0%
        )`;
      } else {
        if (bodyContainerEl.style.background !== '') {
          bodyContainerEl.style.background = '';
        }
        if (footerEl.style.backgroundColor !== theme.textColors.tertiaryAlternate) {
          footerEl.style.backgroundColor = theme.textColors.tertiaryAlternate;
        }
      }
    };
    resizeListener();
    window.addEventListener('resize', resizeListener);

    return () => {
      if (bodyContainerEl) bodyContainerEl.style.background = '';
      if (footerEl) footerEl.style.backgroundColor = '';

      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <S.AboutPageContainer>
      <S.AboutPageTitle variant="h1">
        <span>{'Hey, '}</span>
        <span>{'I\'m '}</span>
        <span>{'Nick '}</span>
        <span>{'Abramov '}</span>
      </S.AboutPageTitle>

      <S.AboutBody>
        <img src={AboutImg} alt="" />
        <Box className="About-Body-Text">
          <Typography>{BODY_TEXT_TEMP1}</Typography>
          <br />
          <Typography>{BODY_TEXT_TEMP2}</Typography>
          <br />
          <Typography>
            <a href="#">Get in Touch</a>
          </Typography>
          <br />
          <Typography>
            <a href="">abr.nicki.art@gmail.com</a>
          </Typography>
        </Box>
      </S.AboutBody>
    </S.AboutPageContainer>
  );
};

export default AboutPage;
