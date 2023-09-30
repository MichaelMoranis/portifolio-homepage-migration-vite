import { Box, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         height="2rem"
        >
            <Text>
             &copy; 2023 Michael Moranis. Todos os direitos reservados.
            </Text>
        </Box>
    )
}

export default Footer;