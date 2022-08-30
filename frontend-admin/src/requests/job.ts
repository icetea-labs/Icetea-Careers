import axios from "../services/axios";
import { configHeader } from "../utils/configHeader";

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
