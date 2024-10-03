import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import React from "react";

import Logo from "./assets/logo.png";
import Logo2 from "./assets/logo2.png";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const Header = (props: Props) => {
  return (
    <Box
      sx={{
        boxShadow: "0 0 10px #8e8e8e",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          gap={5}
          justifyContent="space-between"
          alignItems="center"
          padding="5px 0 "
        >
          <Avatar
            src={Logo}
            sx={{
              width: "55px",
              height: "55px",
            }}
          ></Avatar>
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Finance</Button>
          <Button>Location</Button>
          <Button>News</Button>
          <Button>Phone</Button>
          <Button>More learn</Button>
          <Button variant="text">
            <SearchIcon fontSize="large" />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
