import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import AppContainer from "./AppContainer.js";

const RouteContainer = () => {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
};

export default RouteContainer;
