// Den här koden skapar en Zustand-hook (useProductStore) för att hantera en varukorg med produkter. Funktionerna addProduct, removeProduct och clearProducts tillhandahåller funktionalitet för att lägga till, ta bort och rensa produkter från varukorgen. Varje funktion uppdaterar varukorgens tillstånd och returnerar det uppdaterade tillståndet.

import { create } from "zustand";

// Definierar en lista av produkter med deras namn, pris och beskrivning
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
    // En uppsättning av produkter i varukorgen, initialt tomt
    products: {},
    // Funktion för att lägga till en produkt i varukorgen baserat på produktnamnet
    addProduct: (productName) => {
      return set((currentState) => {
        const currentStateProducts = { ...currentState.products };
        const currentProductAmount = currentStateProducts[productName] || 0; // Hur många av denna produkt finns i carten just nu?
        const newProductAmount = currentProductAmount + 1;

        // Skapar ett nytt tillstånd där det uppdaterade antalet av produkten läggs till
        const newState = {
          // Skapa en uppdaterad version av objektet "products", där ny antalet av den produkten jag skickar in, ökar med 1
          ...currentState,
          products: {
            ...currentStateProducts,
            [productName]: newProductAmount,
          },
        };
        return newState; // Returnera det uppdaterade objektet / tillståndet
      });
    },

    // Funktion för att ta bort en produkt från varukorgen baserat på produktnamnet
    removeProduct: (productName) => {
      return set((currentState) => {
        // Vi använder "productIndex" för att peka ut vilket element i arrayen "products" vi vill ta bort
        const currentStateProducts = { ...currentState.products };
        const currentProductAmount = currentStateProducts[productName]; // Antalet av denna produkt i varukorgen just nu
        let newProductAmount;

        if (currentProductAmount === 0) {
          // Om det inte finns någon produkt kvar, håll antalet som 0
          newProductAmount = 0;
        } else {
          newProductAmount = currentProductAmount - 1; // Annars minska antalet med 1
        }

        // Skapar ett nytt tillstånd där det uppdaterade antalet av produkten uppdateras
        const newState = {
          ...currentState,
          products: {
            ...currentStateProducts,
            [productName]: newProductAmount,
          },
        };
        return newState; // Returnera det uppdaterade tillståndet
      });
    },

    // Funktion för att tömma varukorgen
    clearProducts: () => {
      return set((currentState) => {
        return {
          ...currentState,
          products: {}, // Tömmer produkterna
        };
      });
    },
  };
});
