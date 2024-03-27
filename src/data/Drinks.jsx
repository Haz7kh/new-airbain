import { create } from "zustand";

export const productList = [
  { name: "Bryggkaffe", price: 49, description: "Bryggd på månadens bönor" },
  { name: "Caffé Doppio", price: 49, description: "Bryggd på månadens bönor" },
  { name: "Cappuccino", price: 49, description: "Bryggd på månadens bönor" },
  {
    name: "LatteMacchiato",
    price: 49,
    description: "Bryggd på månadens bönor",
  },
  { name: "Café Latte", price: 49, description: "Bryggd på månadens bönor" },
  { name: "Cortado", price: 49, description: "Bryggd på månadens bönor" },
];

// Skapar en Zustand-hook för att hantera produkter i en varukorg
export const useProductStore = create((set) => {
  return {
    products: {},

    addProduct: (productName) => {
      return set((currentState) => {
        const currentStateProducts = { ...currentState.products };
        const currentProductAmount = currentStateProducts[productName] || 0;
        const newProductAmount = currentProductAmount + 1;

        const newState = {
          ...currentState,
          products: {
            ...currentStateProducts,
            [productName]: newProductAmount,
          },
        };
        return newState;
      });
    },

    removeProduct: (productName) => {
      return set((currentState) => {
        const currentStateProducts = { ...currentState.products };
        const currentProductAmount = currentStateProducts[productName];
        let newProductAmount;

        if (currentProductAmount === 0) {
          newProductAmount = 0;
        } else {
          newProductAmount = currentProductAmount - 1;
        }

        const newState = {
          ...currentState,
          products: {
            ...currentStateProducts,
            [productName]: newProductAmount,
          },
        };
        return newState;
      });
    },

    clearProducts: () => {
      return set((currentState) => {
        return {
          ...currentState,
          products: {},
        };
      });
    },
  };
});
