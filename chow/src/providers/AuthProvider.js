import React from "react";

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
    return (
        <firebaseAuth.Provider
          value={{
              test: "content is working"
          }}
        >
            {props.children}
        </firebaseAuth.Provider>
    );
};

export default AuthProvider;