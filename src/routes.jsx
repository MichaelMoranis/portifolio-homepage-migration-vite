import { ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import theme from "components/theme";
import InitialPage from "./pages/initialPage";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<InitialPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default AppRoutes;


