import axios from "../services/axios";
import { configHeader } from "../utils/configHeader";

const queryString = require("query-string");

export const getListJob = async (queryParams: any) => {
  let url = "/jobs";
  url += "?" + queryString.stringify(queryParams);

  const response = (await axios.get(url)) as any;

  return response;
};

export const createJob = async (data: any) => {
  const response = (await axios.post("jobs/create", data, configHeader)) as any;
  return response;
};

export const updateJob = async (data: any, id: number) => {
  const response = (await axios.put(
    `jobs/update/${id}`,
    data,
    configHeader
  )) as any;
  return response;
};

export const deleteJob = async (id: number) => {
  const response = (await axios.delete(
    `jobs/delete/${id}`,
    configHeader
  )) as any;
  return response;
};
