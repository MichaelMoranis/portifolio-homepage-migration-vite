import { Link } from "react-router-dom";
import styles from "./navigation.module.scss";
import ThemeToggle from "../Button";
import MenuNavigation from "../Menu";
import { useColorModeValue } from "@chakra-ui/react";

function Navigation() {
  const navigationItem = [
    {
      profile: "Perfil",
      bio: "GitHub",
      works: "Trabalhos",
    },
  ];
  const textItem = useColorModeValue("black", "white");

  return (
      <div className={styles.componentsNavigations}>
        <MenuNavigation />
        <ThemeToggle />
      </div>
  );
}

export default Navigation;
