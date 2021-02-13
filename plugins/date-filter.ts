import Vue from "vue";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const dateFilter = (value: string) => {
  return formatDate(value);
};

const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const formattedDate = `${day}.${months[month]} ${year}`;
  return formattedDate;
};

Vue.filter("date", dateFilter);
