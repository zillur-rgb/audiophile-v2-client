import { IProduct } from "@/types/products.type";
import React, { createContext, useState } from "react";

export type ProviderType = {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string>>;

  // Here we will save all the data that are coming from JSON file
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
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
  const [products, setProducts] = useState<IProduct[]>([]);

  return {
    userToken,
    setUserToken,
    products,
    setProducts,
  };
}

export default providerContext;
