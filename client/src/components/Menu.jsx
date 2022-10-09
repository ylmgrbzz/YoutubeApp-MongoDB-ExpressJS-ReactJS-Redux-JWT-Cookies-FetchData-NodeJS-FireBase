import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} />
            YALIM GÜRBÜZ
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          ANASAYFA
        </Item>
        <Link to="/trends" style={{ textDecoration: "none", color: "inherit" }}>

        <Item>
          <ExploreOutlinedIcon />
          KEŞFET
        </Item>
        </Link>
        <Link to="/subscriptions" style={{ textDecoration: "none", color: "inherit" }}>

        <Item>
          <SubscriptionsOutlinedIcon />
          ABONELİKLER
        </Item>
        </Link>

        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          KÜTÜPHANE
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          GEÇMİŞ
        </Item>
        <Hr />
        {!currentUser && <><Login>
          Yeni Videolar Keşfetmek İçin Giriş Yap...
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleOutlinedIcon />
              GİRİŞ YAP
            </Button>
          </Link>
        </Login></>}
        <Hr />
        <Title>YALIM GÜRBÜZ</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          MÜZİK
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          FUTBOL
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          OYUNLAR
        </Item>
        <Item>
          <MovieOutlinedIcon />
          FİLMLER
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          HABERLER
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          CANLI YAYIN
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          AYARLAR
        </Item>
        <Item>
          <FlagOutlinedIcon />
          BİLDİR
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          YARDIM
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} MODU
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
