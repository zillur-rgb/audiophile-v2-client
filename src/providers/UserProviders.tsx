import React, { createContext, useState } from "react";

export type ProviderType = {
  userToken: string;
  setUserToken: (e: string) => void;
};

export const providerContext = createContext<ProviderType>({
  userToken: "",
  setUserToken: () => {},
});

export function UserProviders({ children }: { children: React.ReactNode }) {
  const userProvider = useUserProvider();

  return (
    <providerContext.Provider value={userProvider}>
      {children}
    </providerContext.Provider>
  );
}

function useUserProvider() {
  const [userToken, setUserToken] = useState("");

  return {
    userToken,
    setUserToken,
  };
}

export default providerContext;
