import React from "react";

const ProductContext = React.createContext();

const UserProviderB =  ProductContext.Provider;
const UserConsumerB =  ProductContext.Consumer; 

export { UserProviderB, UserConsumerB };