import { getNativigations } from "@/utils/header";
import { NavigationComponent } from "./headerComponent";
import logo from "../../../assets/logo/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { usedRouters } from "@/types/routers";
import { BsDoorOpen, BsDoorClosed } from "react-icons/bs";
import { PagesRouters } from "@/types/enums";
import { AdminContext } from "@/context/useAdminContext";
import { useContext } from "react";

export const Header = () => {
  const router = useRouter();
  const navigations = getNativigations();
  const { handleLogout, admin } = useContext(AdminContext);

  const navigate = (path: string) => {
    router.push(usedRouters(path));
  };

  const handleLogin = () => {
    router.push(usedRouters(PagesRouters.LOGIN));
  };

  const logout = async () => {
    await handleLogout();
  };

  const isHomeRoute = router.pathname === "/";

  return (
    <div
      className={`z-40 flex items-center justify-between p-3 pl-5 ${
        isHomeRoute ? "bg-transparent" : "bg-red-200"
      }`}
    >
      <Image
        src={logo}
        alt={""}
        width={40}
        height={40}
        onClick={() => navigate("")}
      />
      <div className="flex flex-row xl:w-[50%] w-[90%]">
        <NavigationComponent navigators={navigations} navigate={navigate} />
        {admin ? (
          <BsDoorClosed onClick={logout} />
        ) : (
          <BsDoorOpen onClick={handleLogin} />
        )}
      </div>
    </div>
  );
};
