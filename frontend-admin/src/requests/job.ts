import axios from "../services/axios";

export const configHeader = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  },
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

export const deleteJob = async (data: any) => {
  return {};
};

export const getJobDetail = async (id: number) => {
  return {
    status: 500,
    data: null,
  };
};
