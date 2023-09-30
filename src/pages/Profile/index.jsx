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
        <Box pb="2rem" pt="2rem">
          <Box>
            <Text 
             fontSize={{base:"24px", md:"36px", lg:"42px"}} 
             pt={{base: "2rem", md: "2.5rem", lg: "2rem"}}
            >
              Sou Michael, um desenvolvedor web. Atualmente moro em Cascavel PR
              !
            </Text>
          </Box>
        </Box>
        <Box>
          <Text 
          pb="2rem"
          fontSize={{base:"24px", md: "28px", lg: "32px"}}
          >
           Estou em busca de oportunidades em desenvolvimento web, onde
            quero ajudar a construir a próxima geração de
            aplicativos web !!
          </Text>
          <Text 
          pb="2rem"
          fontSize={{base:"24px", md: "28px", lg: "32px"}}
          >
            Tenho uma paixão particular por sistemas de desenvolvimento de
            software e ferramentas de design , tenho tido a oportunidade de
            trabalhar com essas ferramentas em meus estudos anteriores e em
            projetos desenvolvidos por mim aqui na web.
          </Text>
          <Text 
          pb="2rem"
          fontSize={{base:"24px", md: "28px", lg: "32px"}}
          >
            Procuro sempre me manter ativo no github, seja atualizando meus projetos existentes, ou em busca de contribuir em projetos open source, gosto de ver o que os outros desenvolvedores estao fazendo a fim de buscar inspiracao e aprender com eles !
          </Text>
        </Box>
        <Box>
          <Text 
           pb="2rem"
           fontSize={{base:"24px", md: "28px", lg: "32px"}}
           >
            <strong>Buscando experiencias</strong>{" "}
            <small>(Estudando desde 2021)</small>
          </Text>
          <Text fontSize={{base:"24px", md: "28px", lg: "32px"}}>
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
