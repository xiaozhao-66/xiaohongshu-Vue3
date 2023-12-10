import { defineStore } from "pinia";
import { ref } from "vue";
import { storage } from "@/utils/storage";
import { postData } from "@/api/user";
import { store } from "@/store";

interface LoginData {
  username: string;
  password: string;
}

// 使用setup模式定义
export const userStore = defineStore("userStore", () => {
  const token = ref("");

  const setToken = (token: string) => {
    storage.set("token", token);
  };

  const getToken = () => {
    return storage.get("token");
  };

  const login = (loginData: LoginData) => {
    return new Promise<void>((resolve, reject) => {
      postData(loginData)
        .then((res) => {
          setToken(res.data);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return { token, setToken, getToken, login };
});

export function useUserStore() {
  return userStore(store);
}
