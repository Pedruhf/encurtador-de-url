import { Module } from "vuex";
import { User } from "@/models/user";

interface UserStore {
  user: User;
}

const userStore: Module<UserStore, null> = {
  namespaced: true,
  state: {
    user: new User(),
  },

  mutations: {
    setUser(state: UserStore, payload: User): void {
      state.user = payload;
    },
  },
};

export { userStore };