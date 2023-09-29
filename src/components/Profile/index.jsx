import { Box, Flex, Text } from "@chakra-ui/react";

function Profile() {
  return (
    <Flex 
      alignItems="center" 
      justifyContent="center" 
      >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        width="100vh"
        mx={{ base: 2, md: 8, lg: 8 }} 
        my={{ base: 2, md: 4, lg: 8 }}
        textAlign={{ base: "left", md: "left" }}
        p={{ base: 4, md: 6, lg: 8 }}
      >
        <Box pb="2rem" pt="0.5rem">
          <Box>
            <Text fontSize={{base:"24px", md:"36px", lg:"42px"}} 
            >
              Sou Michael, um desenvolvedor web. Atualmente moro em Cascavel PR
              !
            </Text>
          </Box>
        </Box>
        <Box>
          <Text pb="2rem">
           Estou em busca de oportunidades em desenvolvimento web, onde
            quero ajudar a construir a próxima geração de
            aplicativos web !!
          </Text>
          <Text pb="2rem">
            Tenho uma paixão particular por sistemas de desenvolvimento de
            software e ferramentas de design , tenho tido a oportunidade de
            trabalhar com essas ferramentas em meus estudos anteriores e em
            projetos desenvolvidos por mim aqui na web.
          </Text>
        </Box>
        <Box>
          <Text pb="2rem">Também escrevo artigos no Dev.To !</Text>
          <h2>Buscando experiencias</h2>
          <Text pb="2rem">
            <strong>Buscando experiencias</strong>{" "}
            <small>(Estudando desde 2021)</small>
          </Text>
          <Text>
            Como engenheiro da web, tenho procurado me atualizar sempre,
            buscando estar por dentro das noticias e novidades que acontecem na
            comunidade de desenvolvimento !
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default Profile;
