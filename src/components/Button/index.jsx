import { useColorMode, IconButton } from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";


function ThemeToggle() {
 const {colorMode, toggleColorMode} = useColorMode();


 return (
  <IconButton
    icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    onClick={toggleColorMode}
    aria-label="Toggle Theme"
    _hover={{bg: "blue.100"}}
    border="solid 1px"
  />
 )
}

export default ThemeToggle;