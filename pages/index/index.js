import Head from "next/head";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Hidden,
  Container,
  CardMedia,
  Card,
  Button,
} from "@material-ui/core";

import {
  ContainerDesktop,
  NavBarDesktop,
  ContentLogo,
  ContentMenu,
  LogoTitle,
  ButtonMenu,
  MainContent,
  DescriptionContent,
  FirstText,
  SecondText,
  ThirdText,
  ContentIcon,
  GetStartedButton,
} from "./styles";
export default function Home() {
  return (
    <>
      <Head>
        <title>BrFit Club</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Seja Bemvindo" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/welcome.png" />
      </Head>
      <Hidden mdUp>
        <p>Mobile</p>
      </Hidden>
      <Hidden smDown>
        <ContainerDesktop>
          <Container maxWidth="lg">
            <NavBarDesktop>
              <ContentLogo>
                <LogoTitle>BrFit Club</LogoTitle>
              </ContentLogo>
              <ContentMenu>
                <ButtonMenu>Home</ButtonMenu>
                <ButtonMenu>Team</ButtonMenu>
                <ButtonMenu>Faq</ButtonMenu>
                <ButtonMenu>Contact</ButtonMenu>
              </ContentMenu>
            </NavBarDesktop>
            <MainContent>
              <DescriptionContent>
                <FirstText>Lorem ipsum</FirstText>
                <SecondText>Sport</SecondText>
                <ThirdText>Landing Page</ThirdText>
                <ContentIcon>
                  <AiOutlineInstagram />
                  <TiSocialFacebook />
                </ContentIcon>
                <GetStartedButton>Get Started</GetStartedButton>
              </DescriptionContent>
            </MainContent>
          </Container>
        </ContainerDesktop>
      </Hidden>
    </>
  );
}
