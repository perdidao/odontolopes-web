import Axios from "axios";
import { userToken } from "@/functions/auth";
import moment from "moment";

export const dailyAppointments = (self) => {
  self.loading = true;
  const settings = {
    method: "GET",
    url: `${process.env.api}/appointments`,
    headers: {
      Authorization: `Bearer ${userToken()}`,
      "Content-Type": "application/json",
    },
  };
  Axios(settings)
    .then((response) => {
      const appointments = response.data;
      const today = moment();

      const todayAppointments = appointments.filter((ap) => {
        return moment(ap.date) > today && moment(ap.date).isSame(today, "day");
      });

      self.items = todayAppointments;
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
