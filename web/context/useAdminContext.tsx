import { login } from "@/external/api/adminApi";
import useToast from "@/hooks/useToast";
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
  const { toastError, toastSuccess } = useToast();

  const handleLogin = async (data: Admin) => {
    try {
      const responseData = await login(data);
      toastSuccess("Logado com sucesso");
      setAdmin(responseData.admin);
      localStorage.setItem("token", responseData.token);
    } catch (error) {
      toastError("Email ou senha inválidos");
      console.error("Login failed", error);
      throw error;
    }
  };

  const handleLogout = () => {
    toastSuccess("Deslogado com sucesso");
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
