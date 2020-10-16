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
      self.$store.commit("setUser", userData.user);
      self.message = {
        show: true,
        type: "success",
        text: "Login realizado com sucesso",
      };
      self.loading = false;
      setTimeout(() => {
        self.$router.push("/dashboard");
      }, 1000);
    })
    .catch((error) => {
      const errorCode = error.response.status;
      self.message = {
        show: true,
        type: "error",
        text: `Login ou senha inválidos. Código do erro: ${errorCode}`,
      };
      self.loading = false;
    });
};
