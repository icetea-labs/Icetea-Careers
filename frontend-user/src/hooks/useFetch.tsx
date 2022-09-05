import { useEffect, useState } from "react";
import axios from "../services/axios";

type useFetchReturnType<T> = {
  loading: boolean;
  error: string;
  data: T | undefined;
  refetchData: () => void;
};

const useFetch = <T,>(
  uriProps: string | undefined,
  method?: "post" | "get" | undefined,
  payload?: object | undefined
): useFetchReturnType<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const [refetch, setRefetch] = useState<boolean>(false);

  const getRequest = async () => {
    let response: any;

    switch (method) {
      case "post":
        response = uriProps && axios.post(uriProps, payload);
        break;
      case "get":
      default:
        response = uriProps && axios.get(uriProps);
        break;
    }
    return response;
  };

  useEffect(() => {
    if (!uriProps) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getRequest();
        response?.data && setData(response.data?.data);
        setLoading(false);
      } catch (error: any) {
        setError(error?.message);
        setLoading(false);
      }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uriProps, refetch]);

  const refetchData = () => {
    setRefetch((prev) => !prev);
  };

  return {
    loading,
    data,
    error,
    refetchData,
  };
};

export default useFetch;
