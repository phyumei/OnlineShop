import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: [
    { id: 0, name: "All", isActive: true },
    { id: 1, name: "electronics", isActive: false },
    { id: 2, name: "jewelry", isActive: false },
    { id: 3, name: "men's clothing", isActive: false },
    { id: 4, name: "women's clothing", isActive: false },
  ],

  setActiveCategory: (categoryId) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === categoryId
          ? { ...category, isActive: true }
          : { ...category, isActive: false }
      ),
    })),
}));

export default useCategoryStore;
