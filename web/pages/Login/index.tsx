import { Button } from "@/components/common/button";
import { IoIosArrowDropleft, IoMdEyeOff } from "react-icons/io";
import { Input } from "@/components/common/input";
import { AdminContext } from "@/context/useAdminContext";
import { Admin } from "@/types/types";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { usedRouters } from "@/types/routers";
import { IoEye } from "react-icons/io5";
import Head from "next/head";

const Login = () => {
  const { register, handleSubmit, reset } = useForm<Admin>();

  const { handleLogin } = useContext(AdminContext);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const goBack = () => {
    router.back();
  };

  const handleForm = async (data: Admin) => {
    setLoading(true);
    try {
      await handleLogin(data);
      reset();
      router.push(usedRouters());
    } catch (error) {
      reset();
    }
    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Head>
      <IoIosArrowDropleft
        className="absolute top-10 left-10 h-10 w-10"
        onClick={goBack}
      />
      <div className="flex flex-col justify-center">
        <p className="flex justify-center text-neutral-900 font-montserrat xl:text-2xl text-lg mb-5">
          Login
        </p>
        <form onSubmit={handleSubmit(handleForm)}>
          <Input
            label={"Email"}
            id={"email-field"}
            register={register("email")}
          />
          <div className="relative">
            <Input
              label={"Senha"}
              id={"password-field"}
              register={register("trinco")}
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              className="absolute right-3 top-9 mt-0.5 text-neutral-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoMdEyeOff /> : <IoEye />}
            </button>
          </div>

          <div className="flex justify-end mt-10">
            <Button type="submit" text={"Login"} loading={loading} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
