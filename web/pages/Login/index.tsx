import { Box } from "@/components/common/box";
import { Button } from "@/components/common/button";
import { IoIosArrowDropleft } from "react-icons/io";
import { Input } from "@/components/common/input";
import { AdminContext } from "@/context/useAdminContext";
import { usedRouters } from "@/types/routers";
import { Admin } from "@/types/types";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import image from "../../assets/images/login.jpg";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Admin>();

  const { handleLogin } = useContext(AdminContext);
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const handleForm = async (data: Admin) => {
    try {
      await handleLogin(data);
      reset();
      router.push(usedRouters());
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <>
      <IoIosArrowDropleft
        className="absolute top-10 left-10 h-10 w-10"
        onClick={goBack}
      />

      <div className="xl:w-[45%] xl:h-[60vh] h-[40vh] w-[60%]">
        <Box title="Login em cavalhadas">
          <form onSubmit={handleSubmit(handleForm)}>
            <Input
              label={"Email"}
              id={"email-field"}
              register={register("email")}
            />
            <Input
              label={"Senha"}
              id={"password-field"}
              register={register("trinco")}
              type={"password"}
            />
            <div className="flex justify-end mt-4">
              <div className="xl:w-[40%] w-[45%]">
                <Button type="submit" text={"Login"} />
              </div>
            </div>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Login;
