import { getNativigations } from "@/utils/header";
import { NavigationComponent } from "./headerComponent";
import logo from "../../../assets/logo/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { usedRouters } from "@/types/routers";

export const Header = () => {
  const router = useRouter();
  const navigations = getNativigations();

  const navigate = (path: string) => {
    router.push(usedRouters(path));
  };

  return (
    <div className="z-40 flex items-center justify-between p-3 pl-5">
      <Image
        src={logo}
        alt={""}
        width={40}
        height={40}
        onClick={() => navigate("")}
      />
      <div className="flex flex-row xl:w-[50%] w-[70%]">
        <NavigationComponent navigators={navigations} navigate={navigate} />
      </div>
    </div>
  );
};
