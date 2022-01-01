import React from "react";

const CommentsContext = React.createContext();

const UserProviderD = CommentsContext.Provider;
const UserConsumerD = CommentsContext.Consumer; // This is Similar to the Component

export { UserProviderD, UserConsumerD };