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
    <>
      <nav className={styles.navigation}>
        <ul className={styles.listItem}>
          {navigationItem.map((item, index) => (
            <li key={index}>
              <Link to="/profile" className={styles.itens} style={{ textItem }}>
                {item.profile}
              </Link>
              <a
                href="https://github.com/michaelmoranis/"
                className={styles.itens}
              >
                GitHub
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.componentsNavigations}>
        <ThemeToggle />
        <MenuNavigation />
      </div>
    </>
  );
}

export default Navigation;
