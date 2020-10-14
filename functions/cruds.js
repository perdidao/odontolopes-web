import Axios from "axios";
import { userToken } from "@/functions/auth";

export const list = (self) => {
  self.loading = true;
  const settings = {
    method: "GET",
    url: `${process.env.api}${self.endpoint}`,
    headers: {
      Authorization: `Bearer ${userToken()}`,
      "Content-Type": "application/json",
    },
  };
  Axios(settings)
    .then((response) => {
      self.items = response.data;
      self.loading = false;
    })
    .catch((e) => {
      self.message = {
        show: true,
        type: "error",
        text: self.messages.error,
        error: e,
      };
      self.loading = false;
    });
};

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
      self.message = {
        show: true,
        type: "success",
        text: self.messages.success,
        success: response,
      };
      self.loading = false;
    })
    .catch((e) => {
      self.message = {
        show: true,
        type: "error",
        text: self.messages.error,
        error: e,
      };
      self.loading = false;
    });
};
