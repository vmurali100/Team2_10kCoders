import React from "react";

const CartContext = React.createContext();

const UserProviderC = CartContext.Provider;
const UserConsumerC = CartContext.Consumer; 

export { UserProviderC, UserConsumerC };