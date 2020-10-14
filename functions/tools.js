import moment from "moment";

export const formatDate = (date) => {
  return !date ? "" : moment(date).format("DD/MM/YYYY");
};

export const formatTime = (date) => {
  return !date ? "" : moment(date).format("HH:mm");
};
