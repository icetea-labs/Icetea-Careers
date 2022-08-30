import axios from "../services/axios";
import { configHeader } from "../utils/configHeader";

export const createAdmin = async (data: any) => {
  const response = (await axios.post(
    "admins/create",
    data,
    configHeader
  )) as any;
  return response;
};

export const updateAdmin = async (data: any, id: number) => {
  const response = (await axios.put(
    `admins/update/${id}`,
    data,
    configHeader
  )) as any;
  return response;
};

export const deleteAdmin = async (id: number) => {
  const response = (await axios.delete(
    `admins/delete/${id}`,
    configHeader
  )) as any;
  return response;
};

export const getListAdmin = async () => {
  const response = (await axios.get("admins", configHeader)) as any;
  return response;
};
