import { api, tokenHandler } from "../main/composers/api";
import { userStore } from "../store/modules/user";

async function autoLogin(): Promise<void> {
  const localData = tokenHandler.getDataFromLocalStorage();

  const now = Number(new Date()) / 1000;
  if (!localData || localData?.tokenExpires <= now) {
    tokenHandler.clearLocalStorage();
    return;
  }

  const res = await api.request.post("users/login-with-token", {
    token: localData.token,
  });
  userStore.mutations?.setUser(res.data);
}

export { autoLogin };