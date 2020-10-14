import Axios from "axios";
import { userToken } from "@/functions/auth";

export const register = (self) => {
  self.loading = true;
  const settings = {
    method: "POST",
    url: `${process.env.api}${self.endpoint}`,
    data: JSON.stringify(self.data),
    headers: {
      Authorization: `Bearer ${userToken()}`,
      "Content-Type": "application/json",
    },
  };
  Axios(settings)
    .then((response) => {
      console.log(response);
      self.message = {
        show: true,
        type: "success",
        text: self.messages.success,
      };
      self.loading = false;
    })
    .catch((e) => {
      console.log(e);
      self.message = {
        show: true,
        type: "error",
        text: self.messages.error,
      };
      self.loading = false;
    });
};
