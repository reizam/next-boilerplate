import { NEXT_PUBLIC_API_URI } from "@/constants/env";
import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = NEXT_PUBLIC_API_URI;

// Function to get the access token from the API
export const getAccessToken = async () => {
  return "token";
};

export const get = async (
  url: string,
  params?: { [key: string]: unknown },
  requestConfig?: AxiosRequestConfig<unknown>,
) => {
  const { data } = await axios.get(url, {
    baseURL: NEXT_PUBLIC_API_URI,
    params,
    ...requestConfig,
  });

  return data;
};

export const authGet = async (
  url: string,
  params?: { [key: string]: unknown },
  requestConfig?: AxiosRequestConfig<unknown>,
) => {
  const token = await getAccessToken();
  const { data } = await axios.get(url, {
    baseURL: NEXT_PUBLIC_API_URI,
    params,
    ...requestConfig,
    headers: {
      ...requestConfig?.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const anyGet = async (
  url: string,
  params?: { [key: string]: unknown },
  requestConfig?: AxiosRequestConfig<unknown>,
) => {
  let token: string | undefined;

  try {
    const _token = await getAccessToken();

    token = _token;
  } catch (error) {}

  const { data } = await axios.get(url, {
    baseURL: NEXT_PUBLIC_API_URI,
    params,
    ...requestConfig,
    headers: token
      ? {
          ...(requestConfig?.headers || {}),
          Authorization: `Bearer ${token}`,
        }
      : requestConfig?.headers,
  });

  return data;
};

export const authPost = async (
  url: string,
  body?: {
    [key: string]: unknown;
  },
  requestConfig?: AxiosRequestConfig<unknown>,
) => {
  const token = await getAccessToken();
  const { data } = await axios.post(url, body, {
    ...requestConfig,
    headers: {
      ...requestConfig?.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const authPut = async (
  url: string,
  body?: {
    [key: string]: unknown;
  },
  requestConfig?: AxiosRequestConfig<unknown>,
) => {
  const token = await getAccessToken();
  const { data } = await axios.put(url, body, {
    ...requestConfig,
    headers: {
      ...requestConfig?.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const post = async (
  url: string,
  body?: {
    [key: string]: unknown;
  },
  requestConfig?: AxiosRequestConfig<unknown>,
) => {
  const { data } = await axios.post(url, body, requestConfig);

  return data;
};

export const put = async (
  url: string,
  body?: {
    [key: string]: unknown;
  },
  requestConfig?: AxiosRequestConfig<unknown>,
) => {
  const { data } = await axios.put(url, body, requestConfig);

  return data;
};

export const _delete = async (
  url: string,
  requestConfig?: AxiosRequestConfig<unknown>,
) => {
  const { data } = await axios.delete(url, requestConfig);

  return data;
};
