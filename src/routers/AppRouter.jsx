import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../style/theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AdopcionHome from "../container/AdopcionHome";
import CategorieList from "../components/CategorieList"
import AddPets from "../components/AddPets";
import Navbar from "../components/Navbar";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { AuthRouter } from "./AuthRouter";

const AppRouter = () => {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <PublicRouter
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLogged}
          />
          <PrivateRouter
            exact
            path="/"
            component={AdopcionHome}
            isAuthenticated={isLogged}
          />
          <PrivateRouter
            exact
            path="/new"
            component={AddPets}
            isAuthenticated={isLogged}
          />
          {/* <Route exact path="/:category" component={CategorieList}/> */}
          <Redirect to="/auth/login" />
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default AppRouter;
