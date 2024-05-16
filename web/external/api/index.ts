import axios, { AxiosRequestConfig } from "axios";
import dotenv from "dotenv";
dotenv.config();

export const api = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: any
): Promise<T> => {
  const token = localStorage.getItem("token");
  const headers: AxiosRequestConfig["headers"] = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await axios({
      method,
      url: `${"http://localhost:3030"}${url}`,
      headers,
      data: body,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
