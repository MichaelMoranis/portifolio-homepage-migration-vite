import { AddIcon, ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import { 
 Menu,
 MenuButton,
 MenuList, 
 MenuItem,
 IconButton
 } from "@chakra-ui/react";
import { Link } from "react-router-dom";

 function MenuNavigation() {
  return (
   <>
     <Menu display="flex" marginLeft="10px">
      <MenuButton 
      as={IconButton} 
      arial-label="options"
      icon={<HamburgerIcon />}
      variant="outline"
      transition="all 0.2s"
      border="solid 1px"
      _hover={{bg: "blue.100"}}
      >
      </MenuButton>
      <MenuList>
       <Link to="/profile">
        <MenuItem icon={ <AddIcon />} fontSize="xl">perfil</MenuItem>
       </Link>
       <Link to="/">
        <MenuItem icon={<ExternalLinkIcon />} fontSize="xl">bio</MenuItem>
       </Link>
       <a href="https://github.com/michaelmoranis" target="_blank">
       <MenuItem icon={<ExternalLinkIcon />}  fontSize="xl">
         github
       </MenuItem>
       </a>
      </MenuList>
     </Menu>
   </>
  )
 }

 export default MenuNavigation;