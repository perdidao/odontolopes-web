import Axios from "axios";
import { userToken } from "@/functions/auth";

export const listPatients = (self) => {
  self.loading = true;
  const settings = {
    method: "GET",
    url: `${process.env.api}patients`,
    headers: {
      Authorization: `Bearer ${userToken()}`,
      "Content-Type": "application/json",
    },
  };
  Axios(settings)
    .then((response) => {
      self.patients = response.data;
      self.loading = false;
    })
    .catch((e) => {
      self.message = {
        show: true,
        type: "error",
        text: "Erro ao carregar os pacientes",
        error: e,
      };
      self.loading = false;
    });
};

export const listProcedures = (self) => {
  self.loading = true;
  const settings = {
    method: "GET",
    url: `${process.env.api}procedures`,
    headers: {
      Authorization: `Bearer ${userToken()}`,
      "Content-Type": "application/json",
    },
  };
  Axios(settings)
    .then((response) => {
      self.procedures = response.data;
      self.loading = false;
    })
    .catch((e) => {
      self.message = {
        show: true,
        type: "error",
        text: "Erro ao carregar os procedimentos",
        error: e,
      };
      self.loading = false;
    });
};
