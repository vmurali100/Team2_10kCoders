import React from "react";

const PostContext = React.createContext();

const UserProviderE = PostContext.Provider;
const UserConsumerE = PostContext.Consumer; 

export { UserProviderE, UserConsumerE };