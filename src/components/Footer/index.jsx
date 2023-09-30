import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box display="flex" alignContent="center" height="2rem" width="100vh" textAlign={{ base: "left", md: "left" }}
      >
        <Text fontSize="18px" paddingLeft="1rem">
          &copy; 2023 Michael Moranis. Todos os direitos reservados.
        </Text>
      </Box>
    </Flex>
  );
}

export default Footer;
