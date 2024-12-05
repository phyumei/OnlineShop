import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [
    { id: 1, productId: 4, quantity: 1 },
    { id: 2, productId: 3, quantity: 1 },
  ],

  addCart: (newCart) => set((state) => ({ cart: [...state.cart, newCart] })),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + 1 } : el
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity - 1 } : el
      ),
    })),

  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((el) => el.id !== id),
    })),
}));

export default useCartStore;
