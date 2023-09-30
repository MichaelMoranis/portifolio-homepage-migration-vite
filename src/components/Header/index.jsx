import LogoLink from "./Logo";
import Navigation from "../Navgation";
import { Box, Flex } from "@chakra-ui/react";

function Header() {
  return (
    <Box
     display="flex"
     alignContent="center"
     justifyContent="center"
     width="100%"
     >
      <Box
        display="flex"
        justifyContent="space-between"
        bgColor="#F31F00"
        padding="10px"
        borderBottomRadius="10px"
        zIndex="999"
        position="fixed"
        width={{base: "100%", md: "100vh", lg: "100vh"}}
      >
        <Navigation />
        <LogoLink />
      </Box>
    </Box>
  );
}

export default Header;

// className={`${styles.container_header} ${Scrolled ? styles.darkBackGround : ""}  ${textColor}}`}
