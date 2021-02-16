import Axios from "axios";
import Cookie from "js-cookie";

export const userToken = () => {
  return Cookie.get("token");
};

export const login = (self) => {
  self.loading = true;

  const data = self.formData;
  const loginSettings = {
    method: "POST",
    url: process.env.auth,
    data,
  };

  Axios(loginSettings)
    .then((response) => {
      const userData = response.data;
      Cookie.set("token", userData.jwt, { expires: 1, sameSite: "Strict" });
      Cookie.set("user", userData.user, { expires: 1, sameSite: "Strict" });
      self.message = {
        show: true,
        type: "success",
        content: "Login realizado com sucesso",
      };
      self.loading = false;
      setTimeout(() => {
        self.$router.push("/dashboard");
      }, 1000);
    })
    .catch((error) => {
      self.message = {
        show: true,
        type: "error",
        content: "Login ou senha inválidos",
        error: error.response.status,
      };
      self.loading = false;
    });
};

export const getUserData = () => {
  return JSON.parse(Cookie.get("user"));
};
