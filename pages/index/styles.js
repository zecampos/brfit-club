import styled from "styled-components";
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
import { lighten, modularScale, darken, rgba } from "polished";

export const ContainerDesktop = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  background-image: url("/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000;
  display: flex;
  flex-direction: row;
`;
export const NavBarDesktop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
`;

export const ContentLogo = styled.div``;

export const LogoTitle = styled.span`
  font-size: 30px;
  font-family: "Gilroy-ExtraBold";
  color: #fff;
`;
export const ContentMenu = styled.div`
  min-width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonMenu = styled(Button)`
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  font-family: "Gilroy-ExtraBold";
  padding: 7px 14px;
  &:hover {
    background-color: ${rgba({ red: 255, blue: 255, green: 255, alpha: 0.2 })};
  }
`;

export const MainContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 90vh;
`;
export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;
`;

export const FirstText = styled.span`
  font-family: "OpenSans-LightItalic";
  color: #fff;
  font-size: 35px;
  padding: 0px;
  margin: 0px;
  margin-bottom: 30px;
  margin-left: 5px;
`;
export const SecondText = styled.span`
  font-family: "BebasNeueBold";
  color: #fff;
  font-size: 200px;
  padding: 0px;
  margin: 0px;
  line-height: 150px;
`;
export const ThirdText = styled.span`
  font-family: "Montserrat-Bold";
  color: #fff;
  font-size: 22px;
  padding: 0px;
  margin: 0px;
  line-height: 0px;
  margin-left: 5px;
`;
export const ContentIcon = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 70px;
  svg {
    color: #fff;
    font-size: 30px;
    margin-left: 10px;
  }
`;

export const GetStartedButton = styled(Button)`
  background: linear-gradient(to right, #24171e, #ec1a35);
  color: #fff;
  font-family: "OpenSans-ExtraBold";
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  width: 150px;
  border-radius: 20px;
  margin-top: 15px;
`;
