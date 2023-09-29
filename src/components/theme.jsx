import { extendTheme } from "@chakra-ui/react";

const config = {
 initialColorMode: "#041a21",
 useSystemColorMode: true,
}

const theme = extendTheme({ 
    config,
    fontSizes: {
        mobile: "2rem"
    }

});

export default theme;
