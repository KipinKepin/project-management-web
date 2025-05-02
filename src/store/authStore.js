import { create } from "zustand";
import api from "../utils/api";

const useAuthStore = create((set) => {
  const initialState = {
    token: localStorage.getItem("token") || null,
    user: null,
  };

  return {
    ...initialState,
    setToken: (token) => {
      set({ token });
    },

    setUser: (user) => {
      set({ user });
    },

    getMe: async () => {
      const { token } = useAuthStore.getState();

      if (!token) return;

      try {
        const response = await api.get("/api/auth/me");
        const userData = response.data;
        set({ user: userData });
        console.log(userData);
      } catch (error) {
        console.error(error.message);
        set({ user: null });
      }
    },

    logOut: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      set(initialState);
    },
  };
});

export default useAuthStore;
