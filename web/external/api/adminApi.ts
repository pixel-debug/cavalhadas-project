import { Admin, LoginResponse } from "@/types/types";
import { api } from ".";

export const login = async (data: Admin) => {
  try {
    const responseData = await api<LoginResponse>("/admin/login", "POST", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};
