import { Box } from "@/components/common/box";
import { Button } from "@/components/common/button";
import { CustomImage } from "@/components/common/image";
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
    <div className="flex flex-row items-center justify-center min-h-screen p-10">
      <div className="relative h-[60vh] xl:w-[30%] w-[45%] opacity-50">
        <CustomImage src={image} alt={""} />
      </div>

      <div className="w-[45%] h-[60vh]">
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
    </div>
  );
};

export default Login;
