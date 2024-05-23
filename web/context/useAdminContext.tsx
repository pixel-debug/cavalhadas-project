import { login } from "@/external/api/adminApi";
import { Admin } from "@/types/types";
import { createContext, useState } from "react";

interface AdminContextType {
  admin: Admin | null;
  setAdmin: (admin: Admin) => void;
  handleLogin: (data: Admin) => Promise<void>;
  handleLogout: () => void;
}

export const AdminContext = createContext<AdminContextType>({
  admin: null,
  setAdmin: () => {},
  handleLogin: async () => {},
  handleLogout: () => {},
});

export const AdminProvider = ({ children }: any) => {
  const [admin, setAdmin] = useState<Admin | null>(null);

  const handleLogin = async (data: Admin) => {
    try {
      const responseData = await login(data);
      setAdmin(responseData.admin);
      localStorage.setItem("token", responseData.token);
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const handleLogout = () => {
    setAdmin(null);
    localStorage.removeItem("token");
  };

  const contextValue: AdminContextType = {
    admin,
    setAdmin,
    handleLogin,
    handleLogout,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};
