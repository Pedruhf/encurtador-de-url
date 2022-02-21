import { tokenHandler } from "../composers/api";
import { userStore } from "../../store/modules/user";

async function autoLogin(): Promise<void> {
  const localData = tokenHandler.getDataFromLocalStorage();
  
  const now = Number(new Date()) / 1000;
  if (!localData || localData?.tokenExpires <= now) {
    tokenHandler.clearLocalStorage();
    return;
  }
  userStore.mutations?.setUser(userStore.state as any, localData.user);
}

export { autoLogin };