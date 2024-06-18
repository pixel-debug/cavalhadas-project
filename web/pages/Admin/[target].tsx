import { AddMember } from "@/components/admins/memberAdmin";
import { WritePost } from "@/components/admins/postAdmin";
import { AddSponsor } from "@/components/admins/sponsorAdmin";
import { Button } from "@/components/common/button";
import { AdminContext } from "@/context/useAdminContext";
import { PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";
import { ComponentMap } from "@/types/types";
import { useRouter } from "next/router";
import { useContext } from "react";

const AdminTarget = () => {
  const { admin } = useContext(AdminContext);
  const router = useRouter();
  const { target } = router.query;

  const login = () => {
    router.push(usedRouters(PagesRouters.LOGIN));
  };

  const componentMap: ComponentMap = {
    members: () => <AddMember />,
    noticias: () => <WritePost />,
    sponsors: () => <AddSponsor />,
  };

  const ComponentToRender = componentMap[target as string] || null;

  return (
    <>
      {admin ? (
        ComponentToRender ? (
          <ComponentToRender />
        ) : (
          <p>No component found </p>
        )
      ) : (
        <div className="flex justify-center mt-4">
          <div className="xl:w-[40%] w-[30%]">
            <Button text={"Entre"} action={login} />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminTarget;
