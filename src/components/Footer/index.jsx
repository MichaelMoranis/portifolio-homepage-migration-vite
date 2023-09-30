import { Box, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Box
         display="flex"
         alignContent="center"
         marginLeft={{base: "2rem"}}
         pb={{base: "4rem"}}
         height="2rem"
         width="100vw"
        >
            <Text 
             display="flex"
             fontSize="18px"
             >
             &copy; 2023 Michael Moranis. Todos os direitos reservados.
            </Text>
        </Box>
    )
}

export default Footer;