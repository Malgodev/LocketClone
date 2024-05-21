import { create } from "zustand";

const useAuthStore = create((set) => ({
	user: "66372be66fe2c5a42c96c959",
	login: (user) => set({ user }),
	logout: () => set({ user: null }),
	setUser: (user) => set({ user }),
}));

export default useAuthStore;