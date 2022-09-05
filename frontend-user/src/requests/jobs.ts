import axios from "../services/axios";

const queryString = require("query-string");

export const getListJob = async (queryParams: any) => {
  let url = "/jobs";
  url += "?" + queryString.stringify(queryParams);

  const response = (await axios.get(url)) as any;

  return response;
};

export const getJobDetail = async (id: number) => {
  const response = (await axios.get(`jobs/${id}`)) as any;

  return response;
};
