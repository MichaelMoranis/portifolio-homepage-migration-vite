import posts from "src/json/post.json"
import { Link } from "react-router-dom";
import Posts from "components/Posts";
import { Box, Flex, Text } from "@chakra-ui/react";

function InitialPage() {
  return (
    <Flex
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      maxWidth="100vh" // Defina a largura máxima desejada em pixels ou outra unidade
      width="100%" // Defina a largura como 100% para ocupar todo o espaço disponível
      marginX="auto" // Define margens iguais nas laterais para centralizar o conteúdo
      p={{ base: 4, md: 6, lg: 8 }}
    >
      <Box>
        <Text
         pb="2rem" 
         fontSize={{base: "24px", md: "32px", lg: "36px"}}
        >
          Desenvolvedor web interessado em desenvolvimento de aplicativos,
          sites, jogos e sistemas baseados na web!
        </Text>
      </Box>
      <Box>
        <Text
          pb="2rem"
        >
          👋 Olá, sou Michael, um desenvolvedor focado em FrontEnd que mora em
          Cascavel PR. Atualmente estou em desenvolvimento de novas habilidades
          em engenharia de software !
        </Text>
        <Box pb="2rem">
        <Link to="/profile">
          clique aqui para ver mais.
        </Link>
        </Box>
      </Box>
      <Box>
        <Posts posts={posts} />
      </Box>
    </Flex>
  );
}

export default InitialPage;
