import React, { createContext, useState } from "react";

export type ProviderType = {
  userToken: string;
  setUserToken: (e: string) => void;

  // Here we will save all the data that are coming from JSON file
  products: any[];
  setProducts: (products: any[]) => void;
};

export const providerContext = createContext<ProviderType>({
  userToken: "",
  setUserToken: () => {},
  products: [],
  setProducts: () => {},
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
  const [products, setProducts] = useState<any[]>([]);

  return {
    userToken,
    setUserToken,
    products,
    setProducts,
  };
}

export default providerContext;
