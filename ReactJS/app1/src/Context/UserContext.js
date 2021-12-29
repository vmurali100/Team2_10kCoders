import React from "react";

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer; // This is Similar to the Component

export { UserProvider, UserConsumer };
